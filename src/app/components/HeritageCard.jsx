import Link from "next/link";
import Image from "next/image";
import { MapPin } from "lucide-react";

export default function HeritageCard({ id, title, description, image, location }) {
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
        {location && (
          <p className="flex items-center gap-1 text-xs text-gray-500 uppercase tracking-wide">
            <MapPin size={13} aria-hidden="true" />
            <span>{location}</span>
          </p>
        )}

        <h2 className="text-lg font-semibold text-blue-900 mt-1">
          <Link href={`/${id}`} className="hover:underline focus:underline">
            {title}
          </Link>
        </h2>

        <p className="text-sm text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
}