import Image from "next/image";

interface MenuItem {
  name: string;
  price: string;
  image: string;
}

interface MenuModalProps {
  menu: MenuItem[];
  openingHours: string[];
  address: string;
  phone: string;
  onClose: () => void;
}

export default function MenuModal({ menu, openingHours, address, phone, onClose }: MenuModalProps) {
  return (
    <div className="fixed inset-0  flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg relative">
        {/* 닫기 버튼 */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          ✕
        </button>

        {/* 메뉴 제목 */}
        <h2 className="text-2xl font-bold mb-4">Menu</h2>

        {/* 메뉴 리스트 */}
        <ul className="space-y-4">
          {menu.map((item) => (
            <li key={item.name} className="flex items-center gap-4">
              <Image
                src={item.image}
                alt={item.name}
                width={50}
                height={50}
                className="rounded-md"
              />
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-gray-500">{item.price}</p>
              </div>
            </li>
          ))}
        </ul>

        {/* 운영 시간 */}
        <div className="mt-6">
          <h3 className="font-semibold">Opening Hours:</h3>
          <ul className="text-gray-500">
            {openingHours.map((hour, index) => (
              <li key={index}>{hour}</li>
            ))}
          </ul>
        </div>

        {/* 연락처 및 주소 */}
        <div className="mt-4">
          <p className="text-gray-500">
            <strong>Address:</strong> {address}
          </p>
          <p className="text-gray-500">
            <strong>Phone:</strong> {phone}
          </p>
        </div>
      </div>
    </div>
  );
}
