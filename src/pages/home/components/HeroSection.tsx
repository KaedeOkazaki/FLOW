import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=wide%20open%20bright%20blue%20sky%20with%20white%20clouds%20and%20electrical%20power%20transmission%20towers%20and%20high%20voltage%20power%20lines%20stretching%20across%20the%20horizon%2C%20sunny%20clear%20day%2C%20professional%20electrical%20infrastructure%2C%20dramatic%20perspective%20looking%20up%20at%20power%20lines%20against%20vivid%20sky%2C%20clean%20crisp%20atmosphere%2C%20no%20people%2C%20electric%20utility%20poles%20silhouette%20against%20bright%20sky%2C%20warm%20golden%20sunlight%2C%20inspiring%20and%20uplifting%20mood&width=1920&height=1080&seq=hero-sky-elec01&orientation=landscape"
          alt="名古屋の電気工事・空調設備工事 FLOW株式会社"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a2b4a]/80 via-[#1a2b4a]/60 to-[#1a2b4a]/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 md:px-8 text-center pt-24 pb-16">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#f8b500]/20 border border-[#f8b500]/40 rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 rounded-full bg-[#f8b500] animate-pulse" />
          <span className="text-[#f8b500] text-xs font-medium tracking-wider">東海3県対応 | 名古屋の電気工事会社</span>
        </div>

        {/* Main Copy */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
          心と魂を込めた<br />
          <span className="text-[#f8b500]">電気工事</span>で、<br />
          未来を照らす
        </h1>

        <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
          工場・店舗の電気工事から空調設備まで一括対応。<br className="hidden md:block" />
          名古屋を拠点に、愛知・岐阜・三重の東海3県で迅速対応します。
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link
            to="/contact"
            className="w-full sm:w-auto bg-[#f8b500] text-[#1a2b4a] font-bold text-base px-8 py-4 rounded-full hover:bg-[#e6a800] transition-all duration-200 whitespace-nowrap cursor-pointer"
          >
            <i className="ri-mail-send-line mr-2" />
            お仕事のご依頼・ご相談
          </Link>
          <Link
            to="/recruit"
            className="w-full sm:w-auto border-2 border-white text-white font-bold text-base px-8 py-4 rounded-full hover:bg-white hover:text-[#1a2b4a] transition-all duration-200 whitespace-nowrap cursor-pointer"
          >
            <i className="ri-user-add-line mr-2" />
            採用情報を見る
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto">
          {[
            { num: '2014', label: '設立年' },
            { num: '3県', label: '対応エリア' },
            { num: '24h', label: '緊急対応' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl md:text-3xl font-black text-[#f8b500]">{stat.num}</p>
              <p className="text-white/60 text-xs md:text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/50 text-xs tracking-widest">SCROLL</span>
        <i className="ri-arrow-down-line text-[#f8b500] text-xl" />
      </div>
    </section>
  );
}
