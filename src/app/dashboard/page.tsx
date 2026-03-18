"use client";

import Link from "next/link";
import { ShoppingBag, User, FileText } from "lucide-react";

export default function DashboardPage() {
  return (
    <main className="bg-[#f5f5f5] min-h-screen">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">
          My Dashboard
        </h1>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Link
            href="/dashboard/orders"
            className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:border-[#2F4294] hover:shadow-md"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#2F4294]/10">
              <ShoppingBag className="h-6 w-6 text-[#2F4294]" />
            </div>
            <div>
              <h2 className="font-semibold text-gray-900">My Orders</h2>
              <p className="text-sm text-gray-500">
                View and track your orders
              </p>
            </div>
          </Link>
          <Link
            href="/dashboard/profile"
            className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:border-[#2F4294] hover:shadow-md"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#2F4294]/10">
              <User className="h-6 w-6 text-[#2F4294]" />
            </div>
            <div>
              <h2 className="font-semibold text-gray-900">Profile</h2>
              <p className="text-sm text-gray-500">
                Manage your profile details
              </p>
            </div>
          </Link>
          <Link
            href="/account"
            className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:border-[#2F4294] hover:shadow-md"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#2F4294]/10">
              <FileText className="h-6 w-6 text-[#2F4294]" />
            </div>
            <div>
              <h2 className="font-semibold text-gray-900">Account</h2>
              <p className="text-sm text-gray-500">
                Account settings and preferences
              </p>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
