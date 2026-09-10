import heritageSites from "../data/heritageSites";
import Link from "next/link";

export async function generateStaticParams() {
  return heritageSites.map((site) => ({
    id: site.id.toString(),
  }));
}

export default async function SitePage({ params }) {
  const { id } = await params;
  const site = heritageSites.find((s) => s.id === id);

  if (!site) {
    return (
      <main className="max-w-2xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold">Site not found</h1>
        <Link href="/" className="text-blue-700 underline focus:underline">
          Back to homepage
        </Link>
      </main>
    );
  }

  return (
    <main className="max-w-2xl mx-auto px-4 py-8">
      <Link href="/" className="text-blue-700 underline focus:underline text-sm">
        ← Back to all heritage sites
      </Link>
      <h1 className="text-2xl md:text-3xl font-bold text-blue-900 mt-4">
        {site.title}
      </h1>
      <p className="text-gray-700 mt-2">{site.description}</p>
    </main>
  );
}