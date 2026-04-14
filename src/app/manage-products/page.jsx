import React from "react";
import ProductCardComponent from "@/components/ProductCardComponent";
export default function Page() {
  return (
    <div className="bg-red-400 font-medium text-amber-300">
      this is the manage-product page
      {/* Card product */}
      <ProductCardComponent />
    </div>
  );
}
