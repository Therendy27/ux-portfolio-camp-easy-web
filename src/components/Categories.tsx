// components/Categories.tsx
type Category = {
  id: string;
  name: string;
  img: string;
  alt: string;
  href?: string;
};

const categories: Category[] = [
  { id: "shelter", name: "Shelter", img: "/images/tent.jpg", alt: "Tent" },
  { id: "sleeping", name: "Sleeping\nGear", img: "/images/sleeping-bag.jpg", alt: "Sleeping bag" },
  { id: "cooking", name: "Cooking &\nFood", img: "/images/cookset.jpg", alt: "Cook set" },
  { id: "clothing", name: "Clothing &\nFootwear", img: "/images/jacket.jpg", alt: "Jacket" },
  { id: "packs", name: "Backpacks &\nBags", img: "/images/backpack.jpg", alt: "Backpack" },
  { id: "lighting", name: "Lighting &\nPower", img: "/images/lantern.jpg", alt: "Lanterns" },
];

export default function Categories() {
  return (
    <section
      aria-labelledby="categories-heading"
      className="w-full bg-[#F8F5F0] py-10"
    >
      <div className="mx-auto max-w-5xl px-4">
        <h2
          id="categories-heading"
          className="text-3xl sm:text-3xl font-extrabold text-green text-center mb-6"
        >
          Categories
        </h2>

        <ul
          className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-x-10 gap-y-8 justify-items-center"
          role="list"
        >
          {categories.map((c) => (
            <li key={c.id} className="text-center">
              <a
                href={c.href ?? "#"}
                className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#228B22] focus-visible:ring-offset-[#F8F5F0] rounded-full inline-block"
                aria-label={c.name.replace("\n", " ")}
              >
                <div className="relative w-40 h-40 md:w-75 md:h-75 rounded-full overflow-hidden border-2 border-[#1E293B] bg-white transition-transform group-hover:scale-[1.03]">
                  {/* Use loading='lazy' for perf; object-cover to keep the crop */}
                  <img
                    src={c.img}
                    alt={c.alt}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </a>

              <span className=" mt-4 text-[25px] font-semibold leading-none text-[#1E293B] whitespace-pre-line">
                {c.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}