import { Cafe } from "@/types/cafe";

interface CafeCardProps {
  cafe: Cafe;
}

const moodColors: Record<string, string> = {
  "조용한": "bg-[#E8DDC9] text-[#5C4A3A]",
  "활기찬": "bg-[#F5C68A] text-[#8B5E3C]",
  "감성적": "bg-[#D4A574] text-white",
  "아늑한": "bg-[#C8B89E] text-[#5C4A3A]",
  "트렌디": "bg-[#8B5E3C] text-white",
};

export default function CafeCard({ cafe }: CafeCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-[#E8DDC9] p-6 hover:shadow-md transition-shadow">
      <div className="mb-3">
        <h3 className="text-xl font-bold text-[#8B5E3C] mb-1">
          ☕ {cafe.name}
        </h3>
        <div className="flex items-center gap-2 text-sm text-[#9C8B7A]">
          <span>📍 {cafe.neighborhood}</span>
          <span>·</span>
          <span className={"px-2 py-0.5 rounded-full text-xs " + moodColors[cafe.mood]}>
            {cafe.mood}
          </span>
        </div>
      </div>

      <p className="text-sm text-[#5C4A3A] mb-4 leading-relaxed">
        {cafe.description}
      </p>

      <div className="text-sm mb-4">
        <span className="text-[#9C8B7A]">시그니처: </span>
        <span className="font-medium text-[#5C4A3A]">{cafe.signature_menu}</span>
      </div>

      <div className="flex flex-wrap gap-2 mb-3">
        {cafe.has_wifi && (
          <span className="text-xs px-2 py-1 rounded-full bg-[#FAF6F0] text-[#5C4A3A]">
            📶 와이파이
          </span>
        )}
        {cafe.has_outlets && (
          <span className="text-xs px-2 py-1 rounded-full bg-[#FAF6F0] text-[#5C4A3A]">
            🔌 콘센트
          </span>
        )}
        {cafe.pet_friendly && (
          <span className="text-xs px-2 py-1 rounded-full bg-[#FAF6F0] text-[#5C4A3A]">
            🐾 반려동물
          </span>
        )}
      </div>

      {cafe.instagram_handle && (
        <p className="text-xs text-[#8B5E3C]">
          {cafe.instagram_handle}
        </p>
      )}
    </div>
  );
}