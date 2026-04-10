import { useEffect } from 'react';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import HeroSection from './components/HeroSection';
import ThreePathSection from './components/ThreePathSection';
import StrengthsSection from './components/StrengthsSection';
import RecruitBannerSection from './components/RecruitBannerSection';
import CtaSection from './components/CtaSection';

export default function HomePage() {
  useEffect(() => {
    document.title = 'FLOW株式会社｜名古屋の電気工事・空調設備工事｜工場・店舗対応';
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', '名古屋市の電気工事会社FLOW株式会社。工場・店舗の電気工事、空調設備工事に対応。迅速・丁寧な施工で継続案件も可能。');

    let kwMeta = document.querySelector('meta[name="keywords"]') as HTMLMetaElement | null;
    if (!kwMeta) {
      kwMeta = document.createElement('meta');
      kwMeta.setAttribute('name', 'keywords');
      document.head.appendChild(kwMeta);
    }
    kwMeta.setAttribute('content', '名古屋 電気工事, 名古屋 電気工事会社, 工場 電気工事 名古屋, 店舗 電気工事 名古屋, 空調設備工事 名古屋');

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', `${import.meta.env.VITE_SITE_URL ?? ''}/`);

    const scriptId = 'ld-json-home';
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
      name: 'FLOW株式会社｜名古屋の電気工事・空調設備工事｜工場・店舗対応',
      url: `${import.meta.env.VITE_SITE_URL ?? ''}/`,
      description: '名古屋市の電気工事会社FLOW株式会社。工場・店舗の電気工事、空調設備工事に対応。迅速・丁寧な施工で継続案件も可能。',
      isPartOf: {
        '@type': 'WebSite',
        name: 'FLOW株式会社',
        url: import.meta.env.VITE_SITE_URL ?? '',
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
      {/* SEO用テキスト（視覚的に非表示、検索エンジン向け） */}
      <p className="sr-only">
        FLOW株式会社は名古屋市を拠点に、電気工事・空調設備工事を行っている会社です。
        工場・店舗の電気工事に対応し、東海3県（愛知・岐阜・三重）で迅速に対応しています。
      </p>
      <main>
        <HeroSection />
        <ThreePathSection />
        <StrengthsSection />
        <RecruitBannerSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
