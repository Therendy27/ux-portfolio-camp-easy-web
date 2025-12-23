import ProductCard from "./ProductCard";

const items = [
  { name: "Ice Fish Tent",        price: 132.4, discount: 30, imgSrc: "/images/tent.jpg" },
  { name: "Sleeping Bag",         price: 132.4, discount: 30, imgSrc: "/images/sleeping-bag.jpg" },
  { name: "Camping Cooking Set",  price: 132.4, discount: 30, imgSrc: "/images/cookset.jpg" },
  { name: "Softshell Jacket",     price: 132.4, discount: 30, imgSrc: "/images/jacket.jpg" },
  { name: "Hiking Backpack",      price: 132.4, discount: 30, imgSrc: "/images/backpack.jpg" },
  { name: "LED Camping Lantern",  price: 132.4, discount: 30, imgSrc: "/images/lantern.jpg" },
];

export default function SaleGrid() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-8">
      {/* Section heading */}
      <h2 className="text-3xl sm:text-6xl font-extrabold text-green text-center mb-10">
        Camping Gear on Sale
      </h2>

      {/* Card grid */}
      <div className="grid gap-20 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p) => (
          <ProductCard key={p.name} {...p} />
        ))}
      </div>
    </section>
  );
}