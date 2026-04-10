import { useNavigate } from 'react-router-dom';

export default function RecruitBannerSection() {
  const navigate = useNavigate();

  const handleRecruitClick = () => {
    navigate('/recruit');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background */}
          <img
            src="https://readdy.ai/api/search-image?query=electrical%20wiring%20installation%20inside%20modern%20factory%20building%2C%20organized%20cable%20management%20system%2C%20professional%20electrical%20infrastructure%2C%20warm%20golden%20industrial%20lighting%2C%20no%20people%2C%20high%20quality%20architectural%20photography%2C%20Nagoya%20Japan&width=1200&height=500&seq=recruit-nop001&orientation=landscape"
            alt="採用情報"
            className="w-full h-64 md:h-80 object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a2b4a]/90 via-[#1a2b4a]/70 to-transparent" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16">
            <p className="text-[#f8b500] text-xs font-bold tracking-widest uppercase mb-3">RECRUIT</p>
            <h2 className="text-2xl md:text-4xl font-black text-white leading-tight mb-4">
              未経験でも安心の環境。<br />
              ゼロからプロになれる仕事です。
            </h2>
            <p className="text-white/70 text-sm mb-6 max-w-md leading-relaxed">
              月給25万円〜、資格不問、学歴不問。<br />
              手に職をつけたい方、大歓迎です。
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={handleRecruitClick}
                className="inline-flex items-center justify-center gap-2 bg-[#f8b500] text-[#1a2b4a] font-bold text-sm px-6 py-3 rounded-full hover:bg-[#e6a800] transition-colors duration-200 whitespace-nowrap cursor-pointer w-fit"
              >
                採用情報を見る
                <i className="ri-arrow-right-line" />
              </button>
              <a
                href="https://forms.gle/KEnVn6GXctQfHqN6A"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold text-sm px-6 py-3 rounded-full hover:bg-white hover:text-[#1a2b4a] transition-colors duration-200 whitespace-nowrap cursor-pointer w-fit"
              >
                今すぐ応募する
                <i className="ri-external-link-line" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
