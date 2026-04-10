import { useEffect } from 'react';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: 'ri-flashlight-line',
    title: '電気工事業',
    desc: '工場・店舗・オフィスの電気内線工事を中心に、新設・増設・改修まで幅広く対応。名古屋を拠点に東海3県で迅速に施工します。安全管理を徹底し、丁寧な仕上がりで元請会社様からの信頼を積み重ねています。',
    items: ['工場・製造ラインの電気設備工事', '店舗・オフィスの内線工事', '電気設備の新設・増設・改修', '電気トラブルの緊急対応', '電気設備の定期点検・メンテナンス'],
    img: 'https://readdy.ai/api/search-image?query=professional%20electrical%20distribution%20panel%20with%20circuit%20breakers%20and%20organized%20wiring%20inside%20modern%20industrial%20factory%2C%20detailed%20technical%20installation%2C%20no%20people%2C%20clean%20precise%20electrical%20work%2C%20dark%20navy%20blue%20metal%20cabinet%2C%20high%20quality%20industrial%20photography&width=600&height=400&seq=svc-nop001&orientation=landscape',
    imgAlt: '工場の電気工事',
  },
  {
    icon: 'ri-temp-cold-line',
    title: '空調設備工事業',
    desc: '業務用エアコン・空調システムの設置・交換・メンテナンスに対応。電気工事と空調工事をワンストップで請け負うことで、コスト削減と工期短縮を実現します。',
    items: ['業務用エアコンの新設・交換', '空調ダクト工事', '換気設備の設置・改修', '空調システムの定期メンテナンス', '省エネ設備への切り替え提案'],
    img: 'https://readdy.ai/api/search-image?query=commercial%20HVAC%20air%20conditioning%20units%20installed%20on%20rooftop%20of%20modern%20building%2C%20professional%20air%20conditioning%20system%2C%20ductwork%20and%20ventilation%20pipes%2C%20no%20people%2C%20clear%20blue%20sky%20background%2C%20technical%20precision%2C%20clean%20industrial%20equipment&width=600&height=400&seq=svc-nop002&orientation=landscape',
    imgAlt: '業務用エアコン設置工事',
  },
  {
    icon: 'ri-lightbulb-line',
    title: '照明器具の販売・施工',
    desc: 'LED照明をはじめとした各種照明器具の販売から施工まで一括対応。省エネ・長寿命のLED化で電気代削減をサポートします。店舗・工場・オフィスの照明環境を最適化します。',
    items: ['LED照明への切り替え工事', '店舗・工場の照明設計・施工', '照明器具の販売・取り付け', '非常用照明・誘導灯の設置', '照明リニューアル提案'],
    img: 'https://readdy.ai/api/search-image?query=modern%20LED%20lighting%20installation%20in%20commercial%20store%20interior%2C%20bright%20illumination%2C%20professional%20lighting%20design%2C%20retail%20space%2C%20energy%20efficient%20lighting%2C%20clean%20modern%20aesthetic&width=600&height=400&seq=svc003&orientation=landscape',
    imgAlt: '店舗の照明工事',
  },
];

const flow = [
  { step: '01', title: 'お問い合わせ', desc: 'お電話・メール・フォームからお気軽にご連絡ください。' },
  { step: '02', title: '現地調査・お見積り', desc: '現場を確認し、最適なプランと費用をご提案します。' },
  { step: '03', title: 'ご契約', desc: '内容・費用にご納得いただいてからご契約。安心です。' },
  { step: '04', title: '施工', desc: '安全・丁寧に施工。工程はこまめにご報告します。' },
  { step: '05', title: '完工・アフターフォロー', desc: '施工後も継続的なサポートで長期的なお付き合いを。' },
];

export default function ServicesPage() {
  useEffect(() => {
    document.title = '電気工事・空調設備工事｜名古屋・東海3県対応｜FLOW株式会社';
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', '名古屋・東海3県で電気工事・空調設備工事に対応。工場・店舗の設備工事、照明設置、業務用エアコン設置など幅広く対応可能です。');
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', `${import.meta.env.VITE_SITE_URL ?? ''}/services`);

    const scriptId = 'ld-json-services';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: '事業内容 | FLOW株式会社',
      url: `${import.meta.env.VITE_SITE_URL ?? ''}/services`,
      description: '名古屋・東海3県の電気工事・空調設備工事・照明器具販売ならFLOW株式会社。工場・店舗の電気工事から空調設備、LED照明まで一括対応。',
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: '電気工事業' },
          { '@type': 'ListItem', position: 2, name: '空調設備工事業' },
          { '@type': 'ListItem', position: 3, name: '照明器具の販売・施工' },
        ],
      },
    });

    return () => {
      const el = document.getElementById(scriptId);
      if (el) el.remove();
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#1a2b4a] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://readdy.ai/api/search-image?query=electrical%20circuit%20board%20pattern%20abstract%20background%2C%20dark%20navy%20blue%2C%20technical%20grid%20lines%2C%20professional%20industrial%20texture&width=1920&height=600&seq=svchero&orientation=landscape"
            alt=""
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 md:px-8 text-center">
          <p className="text-[#f8b500] text-xs font-bold tracking-widest uppercase mb-4">SERVICES</p>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">事業内容</h1>
          <p className="text-white/60 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            電気工事・空調設備・照明器具の販売まで、東海3県の工場・店舗を幅広くサポートします。
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-20">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className={i % 2 === 1 ? 'md:order-2' : ''}>
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#f8b500]/10 mb-4">
                  <i className={`${s.icon} text-2xl text-[#f8b500]`} />
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-[#1a2b4a] mb-4">{s.title}</h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{s.desc}</p>
                <ul className="space-y-2 mb-8">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-5 h-5 flex items-center justify-center rounded-full bg-[#f8b500]/20 flex-shrink-0">
                        <i className="ri-check-line text-xs text-[#f8b500]" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-[#1a2b4a] text-white font-bold text-sm px-6 py-3 rounded-full hover:bg-[#243d6b] transition-colors duration-200 whitespace-nowrap cursor-pointer"
                >
                  この工事について相談する
                  <i className="ri-arrow-right-line" />
                </Link>
              </div>
              <div className={`rounded-2xl overflow-hidden h-64 md:h-80 ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                <img src={s.img} alt={s.imgAlt} className="w-full h-full object-cover object-top" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Flow */}
      <section className="py-20 md:py-28 bg-[#f7f8fa]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-14">
            <p className="text-[#f8b500] text-xs font-bold tracking-widest uppercase mb-3">FLOW</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#1a2b4a]">ご依頼の流れ</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {flow.map((f) => (
              <div key={f.step} className="bg-white rounded-2xl p-6 text-center border border-gray-100">
                <p className="text-4xl font-black text-[#f8b500]/30 mb-2">{f.step}</p>
                <h3 className="text-base font-black text-[#1a2b4a] mb-2">{f.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1a2b4a] text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-black text-white mb-4">まずはお気軽にご相談ください</h2>
          <p className="text-white/60 text-sm mb-8">工場・店舗の電気工事・空調工事のご依頼、お見積りは無料です。</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#f8b500] text-[#1a2b4a] font-black text-base px-8 py-4 rounded-full hover:bg-[#e6a800] transition-colors duration-200 whitespace-nowrap cursor-pointer"
          >
            <i className="ri-send-plane-line" />
            無料相談・お問い合わせ
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
