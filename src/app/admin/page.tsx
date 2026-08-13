import React from 'react';
import AdminDashboard from '@/components/admin/AdminDashboard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin & Data Sync Dashboard — USA Spending',
  description: 'Manage USAspending.gov API connection health, database record sync logs, and site system settings.',
};

export default function AdminPage() {
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
      <AdminDashboard />
    </div>
  );
}
