import HeritageCard from "./components/HeritageCard";
import heritageSites from "./data/heritageSites";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <header>
        <h1 className="text-2xl md:text-4xl font-bold text-center text-blue-900">
          Pangasinan Heritage
        </h1>
        <p className="text-center text-gray-600 mt-2 mb-8">
          Discover the Hundred Islands, Bolinao Lighthouse, and Balungao Hot Spring.
        </p>
      </header>

      <section aria-label="Heritage sites" className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {heritageSites.map((site) => (
          <HeritageCard
            key={site.id}
            id={site.id}
            title={site.title}
            description={site.description}
            image={site.image}
          />
        ))}
      </section>
    </main>
  );
}