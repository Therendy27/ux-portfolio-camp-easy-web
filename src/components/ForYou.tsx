// components/ForYouSection.tsx
import React from "react";
import ProductCard from "./ProductCard";

type Prod = {
  id: string;
  name: string;
  price: number;
  discount: number;
  imgSrc: string;
};

const PICKS: Prod[] = [
  {
    id: "tent",
    name: "Ice Fish Tent",
    price: 132.4,
    discount: 30,
    imgSrc: "/images/tent.jpg",
  },
  {
    id: "pack",
    name: "Hiking Backpack",
    price: 132.4,
    discount: 30,
    imgSrc: "/images/backpack.jpg",
  },
  {
    id: "lantern",
    name: "LED Camping Lantern",
    price: 132.4,
    discount: 30,
    imgSrc: "/images/lantern.jpg",
  },
];

export default function ForYou() {
  return (
    <section aria-labelledby="for-you" className="py-20">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h2
          id="for-you"
          className="text-3xl sm:text-4xl font-extrabold text-green text-center mb-6"
        >
          For you
        </h2>

        <div className="grid gap-20 sm:grid-cols-2 lg:grid-cols-3">
                {PICKS.map((p) => (
                  <ProductCard key={p.name} {...p} />
                ))}
              </div>
      </div>
    </section>
  );
}