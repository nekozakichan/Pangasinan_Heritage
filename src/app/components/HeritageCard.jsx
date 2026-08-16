import Link from "next/link";
import Image from "next/image";

export default function HeritageCard({ id, title, description, image }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <Image
        src={image}
        alt={`Photo of ${title}`}
        width={400}
        height={250}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-blue-900">
          <Link href={`/${id}`} className="hover:underline focus:underline">
            {title}
          </Link>
        </h2>
        <p className="text-sm text-gray-600 mt-1">{description}</p>
      </div>
    </div>
  );
}