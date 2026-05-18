import CafeCard from "@/components/CafeCard";
import { SAMPLE_CAFES } from "@/data/cafes";

export default function CafesPage() {
  return (
    <div className="min-h-screen bg-[#FAF6F0] p-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-[#8B5E3C] mb-2">
            ☕ 카페 둘러보기
          </h1>
          <p className="text-[#5C4A3A]">
            마포구의 멋진 카페들을 만나보세요
          </p>
          <p className="text-sm text-[#9C8B7A] mt-2">
            총 {SAMPLE_CAFES.length}개 카페
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SAMPLE_CAFES.map((cafe) => (
            <CafeCard key={cafe.id} cafe={cafe} />
          ))}
        </div>
      </div>
    </div>
  );
}