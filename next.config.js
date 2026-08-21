/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/calculator',
        destination: '/calculators',
        permanent: true,
      },
      {
        source: '/science-medical-research',
        destination: '/categories/science-medical-research',
        permanent: true,
      },
      {
        source: '/nasa-space-exploration',
        destination: '/categories/nasa-space-exploration',
        permanent: true,
      },
      {
        source: '/agriculture-food-assistance',
        destination: '/categories/agriculture-food-assistance',
        permanent: true,
      },
      {
        source: '/education-training',
        destination: '/categories/education-training',
        permanent: true,
      },
      {
        source: '/defense-military',
        destination: '/categories/defense-military',
        permanent: true,
      },
      {
        source: '/infrastructure-transport',
        destination: '/categories/infrastructure-transport',
        permanent: true,
      },
      {
        source: '/medicaid-spending',
        destination: '/categories/medicaid-spending',
        permanent: true,
      },
      {
        source: '/social-security-spending',
        destination: '/categories/social-security-spending',
        permanent: true,
      },
      {
        source: '/medicare-spending',
        destination: '/categories/medicare-spending',
        permanent: true,
      },
      {
        source: '/veterans-affairs-spending',
        destination: '/categories/veterans-affairs-spending',
        permanent: true,
      },
      {
        source: '/categories/nasa-spending',
        destination: '/categories/nasa-space-exploration',
        permanent: true,
      },
      {
        source: '/categories/nasa',
        destination: '/categories/nasa-space-exploration',
        permanent: true,
      },
      {
        source: '/categories/agriculture-spending',
        destination: '/categories/agriculture-food-assistance',
        permanent: true,
      },
      {
        source: '/categories/agriculture',
        destination: '/categories/agriculture-food-assistance',
        permanent: true,
      },
      {
        source: '/categories/science-research-spending',
        destination: '/categories/science-medical-research',
        permanent: true,
      },
      {
        source: '/categories/science',
        destination: '/categories/science-medical-research',
        permanent: true,
      },
      {
        source: '/categories/education-spending',
        destination: '/categories/education-training',
        permanent: true,
      },
      {
        source: '/categories/education',
        destination: '/categories/education-training',
        permanent: true,
      },
      {
        source: '/categories/defense-spending',
        destination: '/categories/defense-military',
        permanent: true,
      },
      {
        source: '/categories/defense',
        destination: '/categories/defense-military',
        permanent: true,
      },
      {
        source: '/categories/transportation-spending',
        destination: '/categories/infrastructure-transport',
        permanent: true,
      },
      {
        source: '/categories/infrastructure',
        destination: '/categories/infrastructure-transport',
        permanent: true,
      },
      {
        source: '/categories/medicaid',
        destination: '/categories/medicaid-spending',
        permanent: true,
      },
      {
        source: '/agencies/dot',
        destination: '/agencies/department-of-transportation',
        permanent: true,
      },
      {
        source: '/recipients/boeing-company',
        destination: '/recipients/boeing',
        permanent: true,
      },
      {
        source: '/recipients/the-boeing-company',
        destination: '/recipients/boeing',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
