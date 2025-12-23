// components/ProductCard.tsx
import React from "react";
import { Heart, ShoppingCart } from "lucide-react";

type ProductCardProps = {
  name: string;
  price: number;
  discount: number;
  imgSrc: string;
};

export default function ProductCard({
  name,
  price,
  discount,
  imgSrc,
}: ProductCardProps) {
  return (
    <div className="overflow-hidden border border-navy bg-navy shadow-sm rounded-sm">
      {/* Image with thin inner border and small inset margin */}
      <div className="m-2 border border-navy bg-g100">
        <div className="aspect-[4/3] bg-g100">
          <img
            src={imgSrc}
            alt={name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>

      {/* Title strip */}
      <div className="bg-navy text-white px-4 py-3 text-center">
        <div className="text-[18px] font-semibold leading-none">{name}</div>
      </div>

      {/* Footer strip (same navy) */}
      <div className="bg-navy text-white px-4 py-3 flex items-center gap-3">
        {/* Price (left) */}
        <div className="font-semibold text-[14px]">${price.toFixed(2)}</div>

        {/* Orange circular discount badge */}
        <div className="ml-2 h-9 w-9 rounded-full border border-orange text-orange grid place-items-center text-[13px]">
          {discount}%
        </div>

        {/* Spacer pushes icons to the far right */}
        <div className="flex-1" />

        {/* Action icons (right) */}
        <button
          title="Add to favorites"
          aria-label="Add to favorites"
          className="p-1 rounded hover:opacity-80 transition"
        >
          <Heart size={18} className="text-white" />
        </button>
        <button
          title="Add to cart"
          aria-label="Add to cart"
          className="p-1 rounded hover:opacity-80 transition"
        >
          <ShoppingCart size={18} className="text-white" />
        </button>
      </div>
    </div>
  );
}