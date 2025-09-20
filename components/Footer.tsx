export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="container-max mx-auto grid gap-10 px-6 py-12 md:grid-cols-5 md:px-8">
        {/* Shop */}
        <div>
          <h3 className="text-sm font-semibold text-slate-900">Shop</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            <li><a href="/products" className="hover:underline underline-offset-4 decoration-2 hover:text-brand transition-colors">Products</a></li>
            <li><a href="/subscribe" className="hover:underline underline-offset-4 decoration-2 hover:text-brand transition-colors">Culture Box (Subscribe)</a></li>
            <li><a href="/gift-cards" className="hover:underline underline-offset-4 decoration-2 hover:text-brand transition-colors">Gift Cards</a></li>
            <li><a href="/special-offers" className="hover:underline underline-offset-4 decoration-2 hover:text-brand transition-colors">Special Offers</a></li>
          </ul>
        </div>
        {/* Learn */}
        <div>
          <h3 className="text-sm font-semibold text-slate-900">Learn</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            <li><a href="/science" className="hover:underline underline-offset-4 decoration-2 hover:text-brand transition-colors">Our Science</a></li>
            <li><a href="/gut-health" className="hover:underline underline-offset-4 decoration-2 hover:text-brand transition-colors">Gut Health 101</a></li>
            <li><a href="/ingredients" className="hover:underline underline-offset-4 decoration-2 hover:text-brand transition-colors">Ingredients We Choose</a></li>
            <li><a href="/recipes" className="hover:underline underline-offset-4 decoration-2 hover:text-brand transition-colors">Recipes & Pairings</a></li>
          </ul>
        </div>
        {/* Help */}
        <div>
          <h3 className="text-sm font-semibold text-slate-900">Help</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            <li><a href="/faq" className="hover:underline underline-offset-4 decoration-2 hover:text-brand transition-colors">FAQs</a></li>
            <li><a href="/shipping-returns" className="hover:underline underline-offset-4 decoration-2 hover:text-brand transition-colors">Shipping & Returns</a></li>
            <li><a href="/accessibility" className="hover:underline underline-offset-4 decoration-2 hover:text-brand transition-colors">Accessibility</a></li>
            <li><a href="/contact" className="hover:underline underline-offset-4 decoration-2 hover:text-brand transition-colors">Contact</a></li>
          </ul>
        </div>
        {/* Company */}
        <div>
          <h3 className="text-sm font-semibold text-slate-900">Company</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            <li><a href="/about" className="hover:underline underline-offset-4 decoration-2 hover:text-brand transition-colors">About</a></li>
            <li><a href="/press-kit" className="hover:underline underline-offset-4 decoration-2 hover:text-brand transition-colors">Press Kit</a></li>
            <li><a href="/privacy" className="hover:underline underline-offset-4 decoration-2 hover:text-brand transition-colors">Privacy</a></li>
            <li><a href="/terms" className="hover:underline underline-offset-4 decoration-2 hover:text-brand transition-colors">Terms</a></li>
          </ul>
        </div>
        {/* Partners */}
        <div>
          <h3 className="text-sm font-semibold text-slate-900">Partners</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            <li><a href="/wholesale" className="hover:underline underline-offset-4 decoration-2 hover:text-brand transition-colors">Wholesale & Foodservice</a></li>
            <li><a href="/private-label" className="hover:underline underline-offset-4 decoration-2 hover:text-brand transition-colors">Private Label</a></li>
            <li><a href="/co-development" className="hover:underline underline-offset-4 decoration-2 hover:text-brand transition-colors">Co-Development</a></li>
            <li><a href="/book" className="hover:underline underline-offset-4 decoration-2 hover:text-brand transition-colors">Book a Call</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Tru Flavors. All rights reserved.
      </div>
    </footer>
  );
}
