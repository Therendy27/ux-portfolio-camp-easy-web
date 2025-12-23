import { useState } from "react";
import {
  Search,
  User,
  Heart,
  ShoppingBag,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function NavBar() {
  const links = [
    "Shelter",
    "Sleeping Gear",
    "Cooking & Food",
    "Clothing & Footwear",
    "Backpacks & Bags",
    "Lighting & Power",
  ];
  const [q, setQ] = useState("");

  return (
    <header className="fixed top-0 left-0 right-0 z-50  bg-navy  text-white shadow-md">
        <div className="h-16 px-4 flex items-center justify-between">
            {/* Logo (Left) */}
            <img
                src="images/logo.png"
                alt="Camp Easy Logo"
                className="h-12 w-auto object-contain"
            />

            {/* Search (Center) */}
            <div className="flex-1 flex justify-center">
                <div className="w-150 rounded-full bg-[#f8f5f0] border border-white/15 px-4 py-1 flex items-center gap-2 shadow-sm">
                <input
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                    placeholder="Search gear..."
                    className="bg-transparent outline-none flex-1 placeholder-gray-500 text-sm text-gray-800"
                />
                <span className="text-gray-600 text-sm">🔍</span>
                </div>
            </div>

            {/* Icons (Right) */}
            <div className="ml-auto flex items-center gap-4 text-white/80">
                <User size={20} />
                <ShoppingBag size={20} />
                 <Heart size={20} />
                <HelpCircle size={20} />
            </div>
</div>

       {/* Category navigation */}
      <nav className="bg-[#27323F] border-t border-white/10">
        <div className="flex items-center justify-center gap-3 py-2">
          {/* Left arrow */}
          
          {/* Centered links */}
          <div className="flex items-center gap-6 text-sm font-semibold">
            <a href="#" className="hover:text-orange">
              Categories
            </a>
            <ChevronLeft size={18} className="text-white/80 cursor-pointer hover:text-orange" />

            {links.map((l) => (
              <a key={l} href="#" className="hover:text-orange">
                {l}
              </a>
            ))}
          </div>

          {/* Right arrow */}
          <ChevronRight size={18} className="text-white/80 cursor-pointer hover:text-orange" />
        </div>
      </nav>
    </header>
  );
}