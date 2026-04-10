import { useState, useEffect } from 'react';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';

type InquiryType = 'corporate' | 'partner' | 'recruit' | '';

const inquiryTypes = [
  { value: 'corporate', label: '法人・工事のご依頼', icon: 'ri-building-2-line', desc: '工場・店舗の電気工事・空調設備工事のご依頼' },
  { value: 'partner', label: '協力会社・パートナー', icon: 'ri-shake-hands-line', desc: '外注・協力会社としてのご相談' },
  { value: 'recruit', label: '採用・求職', icon: 'ri-user-star-line', desc: '採用についてのご相談・応募' },
];

export default function ContactPage() {
  const [selectedType, setSelectedType] = useState<InquiryType>('');
  const [submitted, setSubmitted] = useState(false);
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    document.title = 'お問い合わせ｜電気工事のご依頼・採用応募｜FLOW株式会社';
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', '電気工事・空調設備工事のご依頼、協力会社のご相談、採用応募はこちら。名古屋・東海3県対応。');
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', `${import.meta.env.VITE_SITE_URL ?? ''}/contact`);

    const scriptId = 'ld-json-contact';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: 'お問い合わせ | FLOW株式会社',
      url: `${import.meta.env.VITE_SITE_URL ?? ''}/contact`,
      description: 'FLOW株式会社へのお問い合わせ。電気工事・空調設備工事のご依頼、協力会社のご相談、採用についてのお問い合わせはこちら。',
      mainEntity: {
        '@type': 'Organization',
        name: 'FLOW株式会社',
        telephone: '070-1623-3214',
        email: 'info@flow-elec.com',
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '070-1623-3214',
          contactType: 'customer service',
          availableLanguage: 'Japanese',
        },
      },
    });

    return () => {
      const el = document.getElementById(scriptId);
      if (el) el.remove();
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const params = new URLSearchParams();
    formData.forEach((value, key) => {
      params.append(key, value.toString());
    });
    try {
      const res = await fetch('https://readdy.ai/api/form/d7a90ltfdd9edovmgvqg', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString(),
      });
      if (res.ok) {
        setSubmitted(true);
        form.reset();
        setSelectedType('');
        setCharCount(0);
      }
    } catch {
      // error handling
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />

      {/* Hero */}
      <section className="bg-[#1a2b4a] pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <p className="text-[#f8b500] text-xs font-bold tracking-widest uppercase mb-4">CONTACT</p>
          <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
            まずは気軽に<br />ご連絡ください。
          </h1>
          <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
            お仕事のご依頼・採用についてのご相談、協力会社としてのご相談など、<br className="hidden md:block" />
            「ちょっと気になる」くらいでも大歓迎です。
          </p>
        </div>
      </section>

      {/* 直接連絡先 */}
      <section className="py-12 bg-[#f7f8fa] border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href="tel:07016233214"
              className="flex items-center gap-4 bg-white rounded-2xl px-6 py-5 border border-gray-100 hover:border-[#f8b500] transition-colors cursor-pointer group"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#f8b500]/10 shrink-0 group-hover:bg-[#f8b500]/20 transition-colors">
                <i className="ri-phone-line text-xl text-[#f8b500]" />
              </div>
              <div>
                <p className="text-[#1a2b4a]/50 text-xs font-bold mb-1">お電話でのお問い合わせ</p>
                <p className="text-[#1a2b4a] font-black text-lg">070-1623-3214</p>
                <p className="text-gray-400 text-xs">担当：岡崎</p>
              </div>
            </a>
            <a
              href="mailto:info@flow-elec.com"
              className="flex items-center gap-4 bg-white rounded-2xl px-6 py-5 border border-gray-100 hover:border-[#f8b500] transition-colors cursor-pointer group"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#f8b500]/10 shrink-0 group-hover:bg-[#f8b500]/20 transition-colors">
                <i className="ri-mail-line text-xl text-[#f8b500]" />
              </div>
              <div>
                <p className="text-[#1a2b4a]/50 text-xs font-bold mb-1">メールでのお問い合わせ</p>
                <p className="text-[#1a2b4a] font-black text-base">info@flow-elec.com</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* フォーム */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-2xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <p className="text-[#f8b500] text-xs font-bold tracking-widest uppercase mb-3">INQUIRY FORM</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#1a2b4a]">お問い合わせフォーム</h2>
          </div>

          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-100 mx-auto mb-4">
                <i className="ri-check-line text-3xl text-green-600" />
              </div>
              <h3 className="text-[#1a2b4a] font-black text-xl mb-2">送信完了しました</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                お問い合わせありがとうございます。<br />
                担当者より2営業日以内にご連絡いたします。
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 inline-flex items-center gap-2 text-[#1a2b4a] font-bold text-sm border border-[#1a2b4a] px-6 py-3 rounded-xl hover:bg-[#f7f8fa] transition-colors whitespace-nowrap cursor-pointer"
              >
                <i className="ri-arrow-left-line" />
                フォームに戻る
              </button>
            </div>
          ) : (
            <form
              data-readdy-form
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* お問い合わせ種別 */}
              <div>
                <label className="block text-[#1a2b4a] text-sm font-bold mb-3">
                  お問い合わせ種別 <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-1 gap-3">
                  {inquiryTypes.map((type) => (
                    <label
                      key={type.value}
                      className={`flex items-center gap-4 rounded-xl border-2 px-5 py-4 cursor-pointer transition-all ${
                        selectedType === type.value
                          ? 'border-[#f8b500] bg-[#f8b500]/5'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="inquiry_type"
                        value={type.value}
                        required
                        className="hidden"
                        onChange={() => setSelectedType(type.value as InquiryType)}
                      />
                      <div className={`w-10 h-10 flex items-center justify-center rounded-lg shrink-0 ${
                        selectedType === type.value ? 'bg-[#f8b500]/20' : 'bg-gray-100'
                      }`}>
                        <i className={`${type.icon} text-lg ${selectedType === type.value ? 'text-[#f8b500]' : 'text-gray-400'}`} />
                      </div>
                      <div className="flex-1">
                        <p className={`font-bold text-sm ${selectedType === type.value ? 'text-[#1a2b4a]' : 'text-gray-600'}`}>
                          {type.label}
                        </p>
                        <p className="text-gray-400 text-xs mt-0.5">{type.desc}</p>
                      </div>
                      {selectedType === type.value && (
                        <div className="w-5 h-5 flex items-center justify-center rounded-full bg-[#f8b500] shrink-0">
                          <i className="ri-check-line text-xs text-white" />
                        </div>
                      )}
                    </label>
                  ))}
                </div>
              </div>

              {/* 会社名・お名前 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#1a2b4a] text-sm font-bold mb-2">
                    会社名・屋号
                  </label>
                  <input
                    type="text"
                    name="company"
                    placeholder="株式会社〇〇"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1a2b4a] focus:outline-none focus:border-[#f8b500] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[#1a2b4a] text-sm font-bold mb-2">
                    お名前 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="山田 太郎"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1a2b4a] focus:outline-none focus:border-[#f8b500] transition-colors"
                  />
                </div>
              </div>

              {/* メール・電話 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#1a2b4a] text-sm font-bold mb-2">
                    メールアドレス <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="example@email.com"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1a2b4a] focus:outline-none focus:border-[#f8b500] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[#1a2b4a] text-sm font-bold mb-2">電話番号</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="090-0000-0000"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1a2b4a] focus:outline-none focus:border-[#f8b500] transition-colors"
                  />
                </div>
              </div>

              {/* 対応エリア（法人・協力会社の場合） */}
              {(selectedType === 'corporate' || selectedType === 'partner') && (
                <div>
                  <label className="block text-[#1a2b4a] text-sm font-bold mb-2">対応エリア・現場所在地</label>
                  <input
                    type="text"
                    name="area"
                    placeholder="例：名古屋市〇〇区、愛知県〇〇市"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1a2b4a] focus:outline-none focus:border-[#f8b500] transition-colors"
                  />
                </div>
              )}

              {/* メッセージ */}
              <div>
                <label className="block text-[#1a2b4a] text-sm font-bold mb-2">
                  お問い合わせ内容 <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  maxLength={500}
                  placeholder={
                    selectedType === 'corporate'
                      ? '工事の内容・規模・希望時期などをお聞かせください。'
                      : selectedType === 'partner'
                      ? '得意な工事の種類・対応エリアなどをお聞かせください。'
                      : selectedType === 'recruit'
                      ? '「話だけ聞きたい」でもOKです。お気軽にどうぞ。'
                      : 'お問い合わせ内容をご記入ください。'
                  }
                  onChange={(e) => setCharCount(e.target.value.length)}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1a2b4a] focus:outline-none focus:border-[#f8b500] transition-colors resize-none"
                />
                <p className={`text-right text-xs mt-1 ${charCount >= 500 ? 'text-red-500' : 'text-gray-400'}`}>
                  {charCount}/500
                </p>
              </div>

              <button
                type="submit"
                className="w-full bg-[#f8b500] hover:bg-[#e6a800] text-[#1a2b4a] font-black text-base py-4 rounded-xl transition-colors duration-200 whitespace-nowrap cursor-pointer"
              >
                送信する
              </button>
              <p className="text-center text-gray-400 text-xs">
                送信後、2営業日以内にご連絡いたします。
              </p>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
