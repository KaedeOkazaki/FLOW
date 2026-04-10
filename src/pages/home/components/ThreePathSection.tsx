import { Link } from 'react-router-dom';

const paths = [
  {
    icon: 'ri-building-2-line',
    tag: '法人・元請企業様',
    title: '工場・店舗の電気工事\nお任せください',
    desc: '工場の設備電気工事から店舗の内線工事まで、電気と空調を一括対応。継続的な取引で安心の施工品質をお届けします。安全・丁寧な施工で、元請会社様からの信頼を積み重ねてきました。',
    cta: '工事のご依頼はこちら',
    link: '/contact',
    accent: true,
  },
  {
    icon: 'ri-shake-hands-line',
    tag: '協力会社・外注パートナー',
    title: '継続案件あり\nパートナー募集中',
    desc: '安定した継続案件をご用意しています。電気工事・空調設備の協力会社・外注パートナーを積極的に募集中。長期的な信頼関係を築けるパートナーをお待ちしています。',
    cta: '協力会社として相談する',
    link: '/contact',
    accent: false,
  },
  {
    icon: 'ri-user-star-line',
    tag: '求職者の方へ',
    title: '未経験から\nプロになれる仕事',
    desc: '資格不問・学歴不問。ゼロから丁寧に育てる教育体制が整っています。無理な残業なし、働きやすい環境で、手に職をつけたい方を全力でサポートします。',
    cta: '採用情報を見る',
    link: '/recruit',
    accent: false,
  },
];

export default function ThreePathSection() {
  return (
    <section className="py-20 md:py-28 bg-[#f7f8fa]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#f8b500] text-xs font-bold tracking-widest uppercase mb-3">OUR SERVICES</p>
          <h2 className="text-3xl md:text-4xl font-black text-[#1a2b4a] leading-tight">
            3つの窓口
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {paths.map((p) => (
            <div
              key={p.tag}
              className={`rounded-2xl p-8 flex flex-col transition-transform duration-300 hover:-translate-y-1 ${
                p.accent
                  ? 'bg-[#1a2b4a] text-white'
                  : 'bg-white text-[#1a2b4a] border border-gray-100'
              }`}
            >
              {/* Icon */}
              <div className={`w-14 h-14 flex items-center justify-center rounded-xl mb-5 ${
                p.accent ? 'bg-[#f8b500]/20' : 'bg-[#f8b500]/10'
              }`}>
                <i className={`${p.icon} text-2xl text-[#f8b500]`} />
              </div>

              {/* Tag */}
              <span className={`text-xs font-bold tracking-wider uppercase mb-3 ${
                p.accent ? 'text-[#f8b500]' : 'text-[#f8b500]'
              }`}>
                {p.tag}
              </span>

              {/* Title */}
              <h3 className={`text-xl font-black leading-snug mb-4 whitespace-pre-line ${
                p.accent ? 'text-white' : 'text-[#1a2b4a]'
              }`}>
                {p.title}
              </h3>

              {/* Desc */}
              <p className={`text-sm leading-relaxed flex-1 mb-6 ${
                p.accent ? 'text-white/70' : 'text-gray-500'
              }`}>
                {p.desc}
              </p>

              {/* CTA */}
              <Link
                to={p.link}
                className={`inline-flex items-center gap-2 text-sm font-bold transition-colors duration-200 whitespace-nowrap cursor-pointer ${
                  p.accent
                    ? 'text-[#f8b500] hover:text-[#e6a800]'
                    : 'text-[#1a2b4a] hover:text-[#f8b500]'
                }`}
              >
                {p.cta}
                <i className="ri-arrow-right-line" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
