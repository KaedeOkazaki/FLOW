import { useEffect } from 'react';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import { Link } from 'react-router-dom';

const companyInfo = [
  { label: '会社名', value: 'FLOW株式会社' },
  { label: '設立', value: '2014年4月2日' },
  { label: '代表者', value: '岡崎 聡' },
  { label: '所在地', value: '〒462-0012 名古屋市北区楠3丁目319番地' },
  { label: '電話番号', value: '070-1623-3214' },
  { label: 'メール', value: 'info@flow-elec.com' },
  { label: '事業内容', value: '電気工事業 / 空調設備工事業 / 照明器具の販売 / その他附帯業務' },
  { label: '対応エリア', value: '東海3県（愛知・岐阜・三重）' },
];

export default function AboutPage() {
  useEffect(() => {
    document.title = '会社概要｜FLOW株式会社（名古屋市の電気工事会社）';
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', 'FLOW株式会社の会社概要ページ。名古屋市を拠点に電気工事・空調設備工事を行っています。東海3県対応。');
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', `${import.meta.env.VITE_SITE_URL ?? ''}/about`);

    const scriptId = 'ld-json-about';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      name: '会社概要 | FLOW株式会社',
      url: `${import.meta.env.VITE_SITE_URL ?? ''}/about`,
      description: 'FLOW株式会社の会社概要。2014年設立、名古屋市北区を拠点に東海3県で電気工事・空調設備工事を展開。',
      mainEntity: {
        '@type': 'Organization',
        name: 'FLOW株式会社',
        foundingDate: '2014-04-02',
        founder: { '@type': 'Person', name: '岡崎 聡' },
        address: {
          '@type': 'PostalAddress',
          streetAddress: '楠3丁目319番地',
          addressLocality: '名古屋市北区',
          addressRegion: '愛知県',
          postalCode: '462-0012',
          addressCountry: 'JP',
        },
        telephone: '070-1623-3214',
        email: 'info@flow-elec.com',
        areaServed: ['愛知県', '岐阜県', '三重県'],
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
        <div className="relative max-w-7xl mx-auto px-4 md:px-8 text-center">
          <p className="text-[#f8b500] text-xs font-bold tracking-widest uppercase mb-4">ABOUT US</p>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">会社概要</h1>
          <p className="text-white/60 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            2014年の設立以来、名古屋を拠点に東海3県で電気工事・空調設備工事を手がけてきました。
          </p>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-20 md:py-28 bg-[#f7f8fa]">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="bg-white rounded-2xl overflow-hidden border border-gray-100">
            {companyInfo.map((item, i) => (
              <div
                key={item.label}
                className={`flex flex-col sm:flex-row ${i !== companyInfo.length - 1 ? 'border-b border-gray-100' : ''}`}
              >
                <div className="sm:w-40 px-6 py-4 bg-[#f7f8fa] flex-shrink-0">
                  <p className="text-xs font-bold text-[#1a2b4a] tracking-wide">{item.label}</p>
                </div>
                <div className="px-6 py-4 flex-1">
                  <p className="text-sm text-gray-700 leading-relaxed">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1a2b4a] text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-black text-white mb-4">お気軽にご相談ください</h2>
          <p className="text-white/60 text-sm mb-8">工事のご依頼・協力会社のご相談・採用についてなど、何でもお問い合わせください。</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#f8b500] text-[#1a2b4a] font-black text-base px-8 py-4 rounded-full hover:bg-[#e6a800] transition-colors duration-200 whitespace-nowrap cursor-pointer"
            >
              <i className="ri-send-plane-line" />
              お問い合わせ
            </Link>
            <a
              href="tel:07016233214"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold text-base px-8 py-4 rounded-full hover:bg-white hover:text-[#1a2b4a] transition-colors duration-200 whitespace-nowrap cursor-pointer"
            >
              <i className="ri-phone-line" />
              070-1623-3214
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
