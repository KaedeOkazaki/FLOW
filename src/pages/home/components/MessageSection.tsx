import { Link } from 'react-router-dom';

export default function MessageSection() {
  return (
    <section className="py-20 md:py-28 bg-[#f7f8fa]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden w-full h-80 md:h-[480px]">
              <img
                src="https://readdy.ai/api/search-image?query=confident%20Japanese%20business%20owner%20in%20construction%20company%20office%2C%20professional%20portrait%2C%20wearing%20work%20uniform%2C%20warm%20smile%2C%20modern%20office%20background%20with%20electrical%20blueprints%2C%20trustworthy%20appearance%2C%20natural%20lighting&width=600&height=700&seq=msg001&orientation=portrait"
                alt="代表 岡崎 聡"
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* Name Card */}
            <div className="absolute bottom-6 left-6 bg-white rounded-xl px-5 py-3">
              <p className="text-xs text-gray-400 mb-0.5">代表取締役</p>
              <p className="text-[#1a2b4a] font-black text-lg">岡崎 聡</p>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="text-[#f8b500] text-xs font-bold tracking-widest uppercase mb-4">MESSAGE</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#1a2b4a] leading-tight mb-8">
              心と魂。<br />
              それが私たちの<br />
              <span className="text-[#f8b500]">武器です。</span>
            </h2>

            <div className="space-y-4 text-gray-600 text-sm leading-relaxed mb-8">
              <p>
                私たちが最も大切にしているのは、「心」と「魂」の二つです。どれだけ技術が進化し、AIが発達したとしても、人の「心」と「魂」を乗せることはできません。
              </p>
              <p>
                人の手から生まれる価値は、単なる技術や効率ではなく、そこに宿る想いによって決まる。だからこそ私たちは、強い心を持ち、魂を込めて、仕事に向き合い続けます。
              </p>
              <p>
                これからの10年、20年。時代がどれだけ変わろうとも、心と魂を武器に、挑み続けます。
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 bg-[#1a2b4a] text-white font-bold text-sm px-6 py-3 rounded-full hover:bg-[#243d6b] transition-colors duration-200 whitespace-nowrap cursor-pointer"
              >
                会社概要を見る
                <i className="ri-arrow-right-line" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-[#1a2b4a] text-[#1a2b4a] font-bold text-sm px-6 py-3 rounded-full hover:bg-[#1a2b4a] hover:text-white transition-colors duration-200 whitespace-nowrap cursor-pointer"
              >
                お問い合わせ
                <i className="ri-arrow-right-line" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
