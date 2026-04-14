import React from "react";
import Link from "next/link";

import NavbarComponent from "@/components/NavbarComponent";
import FooterComponent from "@/components/FooterComponent";

export default function Page() {
  return (
    <>
      <NavbarComponent />
      <div className="min-h-screen bg-white p-6 md:p-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10">
            <h1 className="text-3xl font-bold text-slate-900">Your cart</h1>
            <p className="text-slate-500 mt-2 text-sm">
              Cart is stored in memory for this visit — refreshing the page
              clears it.
            </p>
          </div>

          <div className="w-full border-2 border-dashed border-slate-200 rounded-3xl py-20 px-4 flex flex-col items-center justify-center bg-white">
            <h2 className="text-xl font-semibold text-slate-900 mb-2">
              Your cart is empty
            </h2>

            <p className="text-slate-500 text-center mb-8 max-w-xs">
              Open a product, set quantity, then tap
            </p>

            <Link href="/products">
              <button className="bg-[#0f172a] text-white px-8 py-3 rounded-full font-medium text-sm transition-transform hover:bg-slate-800 active:scale-95">
                Shop Products
              </button>
            </Link>
          </div>
        </div>
      </div>

      <FooterComponent />
    </>
  );
}
