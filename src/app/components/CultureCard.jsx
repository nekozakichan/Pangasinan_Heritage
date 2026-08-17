import Image from "next/image";

export default function CultureCard({ title, description, image }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm">
      <Image
        src={image}
        alt={`Illustration representing ${title}`}
        width={400}
        height={220}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold text-blue-900">{title}</h3>
        <p className="text-sm text-gray-700 mt-2">{description}</p>
      </div>
    </div>
  );
}