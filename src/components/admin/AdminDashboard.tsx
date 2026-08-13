'use client';

import React, { useState } from 'react';
import { MOCK_SYNC_LOGS } from '@/lib/data/spendingData';
import { RefreshCw, Database, CheckCircle2, ShieldAlert, Activity, Server, FileText, Settings, Play } from 'lucide-react';

export default function AdminDashboard() {
  const [isSyncing, setIsSyncing] = useState(false);
  const [lastSyncTime, setLastSyncTime] = useState('Aug 13, 2026 08:30 UTC');
  const [logs, setLogs] = useState(MOCK_SYNC_LOGS);
  const [syncStatusMessage, setSyncStatusMessage] = useState<string | null>(null);

  const handleSyncNow = () => {
    setIsSyncing(true);
    setSyncStatusMessage('Connecting to api.usaspending.gov and api.fiscaldata.treasury.gov...');

    setTimeout(() => {
      setIsSyncing(false);
      const newTime = new Date().toUTCString();
      setLastSyncTime(newTime);
      setSyncStatusMessage('Sync completed successfully! 12,450 new outlay records updated.');

      const newLog = {
        id: `sync-${Date.now()}`,
        date: new Date().toISOString().split('T')[0],
        source: 'USAspending API',
        endpoint: '/api/v2/spending/by_category/',
        timestamp: newTime,
        recordsSynced: 12450,
        status: 'SUCCESS',
        durationMs: 1230,
        message: 'Manual sync triggered by administrator. Refreshed category totals.',
      };

      setLogs([newLog, ...logs]);
    }, 2000);
  };

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      {/* Top Banner */}
      <div className="glass-card p-6 rounded-3xl border border-slate-800 bg-slate-950/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="text-xs font-semibold text-emerald-400 uppercase tracking-widest flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            Data Sync System — Healthy
          </div>
          <h1 className="text-2xl font-bold text-white mt-1">Data Pipeline & Cache Control</h1>
          <p className="text-xs text-slate-400 mt-1">
            Last successful sync: <span className="text-slate-200 font-mono font-medium">{lastSyncTime}</span>
          </p>
        </div>

        <button
          onClick={handleSyncNow}
          disabled={isSyncing}
          className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 active:bg-blue-700 disabled:opacity-50 text-white font-semibold text-xs flex items-center gap-2 transition-all shadow-lg shadow-blue-900/30"
        >
          <RefreshCw className={`w-4 h-4 ${isSyncing ? 'animate-spin' : ''}`} />
          <span>{isSyncing ? 'Syncing USAspending.gov...' : 'Trigger Sync Now'}</span>
        </button>
      </div>

      {syncStatusMessage && (
        <div className="p-4 rounded-2xl border border-blue-800/80 bg-blue-950/50 text-blue-200 text-xs flex items-center gap-2">
          <Activity className="w-4 h-4 text-blue-400 flex-shrink-0 animate-spin" />
          <span>{syncStatusMessage}</span>
        </div>
      )}

      {/* Sync Logs Table */}
      <div className="glass-card p-6 rounded-3xl border border-slate-800 bg-slate-950/80 space-y-4">
        <h3 className="text-sm font-bold text-white flex items-center gap-2">
          <FileText className="w-4 h-4 text-blue-400" />
          Recent Data Ingestion Audit Logs
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 font-mono uppercase">
                <th className="pb-3 font-semibold">Sync ID</th>
                <th className="pb-3 font-semibold">Source</th>
                <th className="pb-3 font-semibold">Endpoint</th>
                <th className="pb-3 font-semibold">Timestamp</th>
                <th className="pb-3 font-semibold">Records</th>
                <th className="pb-3 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300 font-mono">
              {logs.map((log) => (
                <tr key={log.id} className="hover:bg-slate-900/60">
                  <td className="py-3 text-slate-500">{log.id}</td>
                  <td className="py-3 font-medium text-white">{log.source}</td>
                  <td className="py-3 text-blue-400">{log.endpoint}</td>
                  <td className="py-3 text-slate-400">{log.timestamp}</td>
                  <td className="py-3">{log.recordsSynced.toLocaleString()}</td>
                  <td className="py-3 font-sans">
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-950 text-emerald-400 border border-emerald-800/60">
                      {log.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
