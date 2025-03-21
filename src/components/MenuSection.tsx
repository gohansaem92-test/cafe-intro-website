import { useIntroStore } from "@/store/useIntroStore";
import Image from "next/image";

export default function MenuSection() {
  const { menu } = useIntroStore();

  return (
    <div className="my-12">
      <h2 className="text-3xl font-bold mb-6 text-center">Our Menu</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {menu.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src={item.image}
              alt={item.name}
              width={300}
              height={200}
              className="w-full h-40 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-bold">{item.name}</h3>
              <p className="text-gray-500">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
