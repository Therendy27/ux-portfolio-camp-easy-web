import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  "/images/Hero-image.jpg",
  "/images/Hero-image.jpg",
  "/images/Hero-image.jpg",
  "/images/Hero-image.jpg",
  "/images/Hero-image.jpg",
];

export default function Hero() {
  const [i, setI] = useState(0);

  const prev = () => setI((p) => (p - 1 + slides.length) % slides.length);
  const next = () => setI((p) => (p + 1) % slides.length);
  const goTo = (idx: number) => setI(idx);

  // Auto-advance every 5s (pause on hover via `isPaused`)
  const [isPaused, setPaused] = useState(false);
  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [i, isPaused]);

  return (
    <section
      className="relative bg-black"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* image */}
      <img
        key={slides[i]}
        src={slides[i]}
        alt={`Camp scene ${i + 1}`}
        className="w-full h-[260px] sm:h-[360px] lg:h-[460px] object-cover"
      />


      {/* ---------- */}

 {/* Background Image */}
   
      {/* Overlay for text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        {/* Optional dark overlay to increase contrast */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Text container */}
        <div className="relative z-10 max-w-5xl">
          <h1 className="text-5xl md:text-6xl font-bold text-[#F97316] mb-3 drop-shadow-lg">
            Gear Up For Your Next Adventure
          </h1>
          <p className="text-white text-sm md:text-base font-medium leading-relaxed">
            Shop trusted outdoor essentials designed to make camping easier, safer,
            and more enjoyable.
          </p>
        </div>
      </div>

















{/* --------------------- */}
      {/* dim overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* chevrons */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 grid place-items-center
                   w-10 h-10 rounded-full bg-black/30 hover:bg-black/45 transition"
      >
        <ChevronLeft className="text-orange" size={26} />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 grid place-items-center
                   w-10 h-10 rounded-full bg-black/30 hover:bg-black/45 transition"
      >
        <ChevronRight className="text-orange" size={26} />
      </button>

      {/* dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4">
        {slides.map((_, idx) => (
          <button
            key={idx}
            aria-label={`Go to slide ${idx + 1}`}
            onClick={() => goTo(idx)}
            className="w-7 h-7 grid place-items-center"
          >
            {/* white ring + filled orange when active */}
            <span
              className={[
                "w-5 h-5 rounded-full border-2",
                idx === i ? "bg-orange border-white" : "border-white",
              ].join(" ")}
            />
          </button>
        ))}
      </div>

      {/* thin bottom divider like your mock */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-black/30" />
    </section>
  );
}