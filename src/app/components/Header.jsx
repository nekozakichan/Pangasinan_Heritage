export default function Header() {
  return (
    <header className="bg-[var(--tide)] text-[var(--sand)] sticky top-0 z-20">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2 font-bold focus:underline">
          <span className="w-8 h-8 rounded-full bg-[var(--sand)] text-[var(--tide)] flex items-center justify-center text-sm">
            P
          </span>
          Pangasinan Heritage
        </a>

        <nav aria-label="Main navigation" className="hidden md:flex gap-6 text-sm">
          <a href="#home" className="hover:underline focus:underline">Home</a>
          <a href="#discover" className="hover:underline focus:underline">Discover</a>
          <a href="#culture" className="hover:underline focus:underline">Culture</a>
        </nav>

        
        
      </div>
    </header>
  );
}