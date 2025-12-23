export default function Footer() {
  return (
    <footer className="bg-slate-800 text-slate-200">
      {/* Top */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Column 1 */}
          <div>
            <h3 className="text-sm font-semibold tracking-wide text-slate-300">
              Company Info
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">About CampEasy</a></li>
              <li><a href="#" className="hover:text-white">Sustainability</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-sm font-semibold tracking-wide text-slate-300">
              Help &amp; Support
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Shipping Info</a></li>
              <li><a href="#" className="hover:text-white">Returns</a></li>
              <li><a href="#" className="hover:text-white">How To Order</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-sm font-semibold tracking-wide text-slate-300">
              Customer Care
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Contacting Us</a></li>
              <li><a href="#" className="hover:text-white">Payment &amp; Tax</a></li>
              <li><a href="#" className="hover:text-white">Bonus Point</a></li>
            </ul>
          </div>

          {/* Column 4: Promo + Social */}
          <div className="flex flex-col justify-between">
            <div>
              <a
                href="#"
                className="text-sm underline underline-offset-4 decoration-slate-400 hover:text-white"
              >
                Download CampEasy App to save more
              </a>
            </div>

            <div className="mt-6">
              <p className="text-sm text-slate-300 mb-3">Find us on</p>
              <div className="flex items-center gap-4">
                {/* Facebook */}
                <a aria-label="Facebook" href="#" className="hover:scale-110 transition">
                  <svg viewBox="0 0 24 24" className="h-6 w-6"fill="#F26A21">
                    <path d="M22 12.06C22 6.48 17.52 2 11.94 2S2 6.48 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.9h-2.34v7.03C18.34 21.24 22 17.08 22 12.06z" />
                  </svg>
                </a>
                {/* Instagram */}
                <a aria-label="Instagram" href="#" className="hover:scale-110 transition">
                  <svg viewBox="0 0 24 24" className="h-6 w-6"fill="#F26A21">
                    <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5zm5.25-2.75a1.25 1.25 0 1 1-1.25 1.25 1.25 1.25 0 0 1 1.25-1.25z" />
                  </svg>
                </a>
                {/* Twitter / X */}
                <a aria-label="Twitter" href="#" className="hover:scale-110 transition">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="#F26A21">
                    <path d="M20.98 3.5H17.8l-4.2 5.93L8.38 3.5H3.02l7.03 9.98L3.3 20.5h3.18l4.75-6.71 5.4 6.71h5.36l-7.39-10.2L20.98 3.5z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-slate-700">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-300">
          <p>© {new Date().getFullYear()} CampEasy. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}