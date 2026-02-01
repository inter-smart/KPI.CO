
export default function Home() {
  return (
    <section className="relative pt-20 pb-32 overflow-hidden">
      <div className="container">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold text-[#0067B1] mb-6 tracking-tight">
            Insights for <br />
            <span className="text-[#FFC31E]">enduring growth</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            We provide specialized consultancy and resources to help your business achieve long-term success and sustainability.
          </p>
          <div className="flex gap-4">
            <button className="bg-[#0067B1] text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-800 transition-all">
              Our Services
            </button>
            <button className="border-2 border-[#0067B1] text-[#0067B1] px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
