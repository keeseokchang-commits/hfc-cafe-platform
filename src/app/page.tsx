import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-[#FAF6F0]">
      <main className="max-w-2xl text-center">
        <h1 className="text-5xl font-bold text-[#8B5E3C] mb-4">
          ☕ HFC커피플랫폼
        </h1>
        <p className="text-xl text-[#5C4A3A] mb-8">
          개인 카페와 손님을 연결하는 새로운 방법
        </p>

        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#E8DDC9]">
            <div className="text-3xl mb-2">🎯</div>
            <h3 className="font-bold text-[#8B5E3C] mb-2">AI 카페 추천</h3>
            <p className="text-sm text-[#5C4A3A]">
              날씨와 기분에 맞는 카페를 찾아드려요
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#E8DDC9]">
            <div className="text-3xl mb-2">☕</div>
            <h3 className="font-bold text-[#8B5E3C] mb-2">스탬프 적립</h3>
            <p className="text-sm text-[#5C4A3A]">
              방문할수록 쌓이는 보상 시스템
            </p>
          </div>
        </div>

        <Link
          href="/cafes"
          className="inline-block bg-[#8B5E3C] hover:bg-[#5C4A3A] text-white font-medium px-8 py-3 rounded-full transition-colors"
        >
          카페 둘러보기 →
        </Link>

        <p className="mt-12 text-sm text-[#9C8B7A]">
          🚧 개발 중 · Day 2: 카페 목록 페이지 추가 ✨
        </p>
      </main>
    </div>
  );
}