import { USASPENDING_BASE_URL } from './endpoints';

interface RequestOptions {
  timeoutMs?: number;
  retries?: number;
  headers?: Record<string, string>;
}

export class USAspendingClient {
  private baseUrl: string;

  constructor(baseUrl: string = USASPENDING_BASE_URL) {
    this.baseUrl = baseUrl;
  }

  async get<T>(endpoint: string, options: RequestOptions = {}): Promise<T> {
    return this.request<T>(endpoint, { method: 'GET', ...options });
  }

  async post<T>(endpoint: string, body: any, options: RequestOptions = {}): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json', ...options.headers },
      ...options,
    });
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit & RequestOptions
  ): Promise<T> {
    const { timeoutMs = 5000, retries = 2, ...fetchOptions } = options;
    const url = endpoint.startsWith('http') ? endpoint : `${this.baseUrl}${endpoint}`;

    let lastError: Error | null = null;

    for (let attempt = 0; attempt <= retries; attempt++) {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

      try {
        const response = await fetch(url, {
          ...fetchOptions,
          signal: controller.signal,
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
          throw new Error(`USAspending API HTTP ${response.status}: ${response.statusText}`);
        }

        const data = (await response.json()) as T;
        return data;
      } catch (err: any) {
        clearTimeout(timeoutId);
        lastError = err;

        if (attempt < retries) {
          const delay = Math.pow(2, attempt) * 500; // Exponential backoff (500ms, 1000ms)
          await new Promise((res) => setTimeout(res, delay));
        }
      }
    }

    console.error(`USAspendingClient Request Failed [${url}]:`, lastError?.message);
    throw lastError || new Error('USAspending API Request Failed');
  }
}

export const usaSpendingClient = new USAspendingClient();
