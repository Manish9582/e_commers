"use client";

import React from "react";
import { MdAccountBalance, MdShoppingBasket } from "react-icons/md";

interface Payout {
  id: string;
  date: string;
  bankInfo: string;
  amount: string;
  status: string;
}

interface Transaction {
  id: string;
  item: string;
  amount: string;
  timeAgo: string;
}

const PAYOUT_HISTORY: Payout[] = [
  {
    id: "#PO-88219",
    date: "Oct 15, 2023",
    bankInfo: "HDFC Bank •••• 4021",
    amount: "₹41,200.00",
    status: "Completed",
  },
  {
    id: "#PO-87902",
    date: "Oct 08, 2023",
    bankInfo: "HDFC Bank •••• 4021",
    amount: "₹38,905.00",
    status: "Completed",
  },
  {
    id: "#PO-87114",
    date: "Oct 01, 2023",
    bankInfo: "HDFC Bank •••• 4021",
    amount: "₹52,400.00",
    status: "Completed",
  },
  {
    id: "#PO-86520",
    date: "Sep 24, 2023",
    bankInfo: "HDFC Bank •••• 4021",
    amount: "₹36,500.00",
    status: "Completed",
  },
];

const RECENT_TRANSACTIONS: Transaction[] = [
  {
    id: "Order #ORD-9942",
    item: "Organic Alphonso Mangoes",
    amount: "+₹1,450.00",
    timeAgo: "2m ago",
  },
  {
    id: "Order #ORD-9941",
    item: "Cold-Pressed Coconut Oil",
    amount: "+₹850.00",
    timeAgo: "14m ago",
  },
  {
    id: "Order #ORD-9940",
    item: "Hydroponic Greens Bundle",
    amount: "+₹950.00",
    timeAgo: "32m ago",
  },
  {
    id: "Order #ORD-9939",
    item: "Organic Brown Rice (5kg)",
    amount: "+₹620.00",
    timeAgo: "1h ago",
  },
];

const EarningsPayouts = () => {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div
          className="lg:col-span-2 rounded-2xl p-6 shadow-xs border flex flex-col justify-between"
          style={{
            backgroundColor: "var(--color-surface-low)",
            borderColor: "var(--color-border)",
          }}
        >
          <div>
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3
                  className="text-lg font-bold"
                  style={{ color: "var(--color-text-main)" }}
                >
                  Payout History
                </h3>
                <p
                  className="text-xs"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  Transferred directly to your registered bank account
                </p>
              </div>
              <button
                className="text-xs font-bold hover:underline cursor-pointer"
                style={{ color: "var(--color-primary)" }}
              >
                View All Payouts
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr
                    className="border-b uppercase font-bold text-[11px]"
                    style={{
                      borderColor: "var(--color-border)",
                      color: "var(--color-text-muted)",
                    }}
                  >
                    <th className="py-3 px-2">Payout ID</th>
                    <th className="py-3 px-2">Date</th>
                    <th className="py-3 px-2">Method</th>
                    <th className="py-3 px-2">Amount</th>
                    <th className="py-3 px-2 text-right">Status</th>
                  </tr>
                </thead>
                <tbody
                  className="divide-y"
                  style={{ borderColor: "var(--color-border)" }}
                >
                  {PAYOUT_HISTORY.map((payout) => (
                    <tr
                      key={payout.id}
                      className="hover:bg-[var(--color-surface-container)] transition-colors"
                    >
                      <td
                        className="py-3.5 px-2 font-bold"
                        style={{ color: "var(--color-text-main)" }}
                      >
                        {payout.id}
                      </td>
                      <td
                        className="py-3.5 px-2"
                        style={{ color: "var(--color-text-muted)" }}
                      >
                        {payout.date}
                      </td>
                      <td
                        className="py-3.5 px-2 flex items-center gap-2 font-medium"
                        style={{ color: "var(--color-text-main)" }}
                      >
                        <MdAccountBalance className="text-base text-emerald-600 shrink-0" />
                        <span>{payout.bankInfo}</span>
                      </td>
                      <td
                        className="py-3.5 px-2 font-black"
                        style={{ color: "var(--color-text-main)" }}
                      >
                        {payout.amount}
                      </td>
                      <td className="py-3.5 px-2 text-right">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                          {payout.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* 2. RECENT TRANSACTIONS / ORDERS LIST (1 Column) */}
        <div
          className="rounded-2xl p-6 shadow-xs border flex flex-col justify-between"
          style={{
            backgroundColor: "var(--color-surface-low)",
            borderColor: "var(--color-border)",
          }}
        >
          <div>
            <div className="flex justify-between items-center mb-6">
              <h3
                className="text-lg font-bold"
                style={{ color: "var(--color-text-main)" }}
              >
                Recent Orders
              </h3>
              <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                Live feed
              </span>
            </div>

            <div className="space-y-4">
              {RECENT_TRANSACTIONS.map((tx, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between pb-3 border-b"
                  style={{ borderColor: "var(--color-border)" }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0"
                      style={{
                        backgroundColor: "var(--color-primary-container)",
                        color: "var(--color-on-primary-container)",
                      }}
                    >
                      <MdShoppingBasket />
                    </div>
                    <div>
                      <div
                        className="text-xs sm:text-sm font-bold"
                        style={{ color: "var(--color-text-main)" }}
                      >
                        {tx.id}
                      </div>
                      <div
                        className="text-[11px]"
                        style={{ color: "var(--color-text-muted)" }}
                      >
                        {tx.item}
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div
                      className="text-xs sm:text-sm font-black"
                      style={{ color: "var(--color-primary)" }}
                    >
                      {tx.amount}
                    </div>
                    <div
                      className="text-[10px]"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      {tx.timeAgo}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className="w-full mt-6 py-2.5 rounded-xl font-bold text-xs border transition-all cursor-pointer hover:bg-[var(--color-surface-container)]"
            style={{
              backgroundColor: "var(--color-surface-low)",
              borderColor: "var(--color-border)",
              color: "var(--color-text-main)",
            }}
          >
            View All Transactions
          </button>
        </div>
      </div>
    </div>
  );
};

export default EarningsPayouts;
