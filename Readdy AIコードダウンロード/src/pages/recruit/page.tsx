import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';

const schedule = [
  { time: '9:00', label: '現場集合・朝礼開始' },
  { time: '9:30', label: '作業開始' },
  { time: '12:00', label: '昼休み' },
  { time: '13:00', label: '作業再開' },
  { time: '17:15', label: '作業終了・解散' },
];

const benefits = [
  { icon: 'ri-calendar-line', text: '日曜・隔週土曜休み' },
  { icon: 'ri-sun-line', text: 'GW・夏季・年末年始休暇' },
  { icon: 'ri-time-line', text: '有給休暇あり' },
  { icon: 'ri-arrow-up-line', text: '昇給あり' },
  { icon: 'ri-gift-line', text: '賞与あり' },
  { icon: 'ri-shield-check-line', text: '社会保険完備' },
  { icon: 'ri-bus-line', text: '交通費支給（規定）' },
  { icon: 'ri-t-shirt-line', text: '制服支給' },
  { icon: 'ri-car-line', text: '車通勤OK' },
];

const requirements = [
  { icon: 'ri-user-heart-line', text: '未経験OK・資格不問' },
  { icon: 'ri-book-open-line', text: '学歴不問' },
  { icon: 'ri-tools-line', text: '手に職をつけたい方' },
  { icon: 'ri-award-line', text: '第一種・第二種電気工事士優遇' },
];

export default function RecruitPage() {
  useEffect(() => {
    document.title = '名古屋で電気工事の求人ならFLOW株式会社｜未経験歓迎';
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', '名古屋市で電気工事スタッフ募集。未経験OK・学歴不問。手に職をつけて安定して働ける環境です。電気工事・空調設備の仕事に挑戦しませんか。');
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', `${import.meta.env.VITE_SITE_URL ?? ''}/recruit`);

    const scriptId = 'ld-json-recruit';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'JobPosting',
      title: '電気工事士（未経験歓迎）',
      description: '名古屋・東海3県で電気工事・空調設備工事を手がけるFLOW株式会社では、未経験者歓迎で電気工事士を募集しています。先輩スタッフのサポートからスタートし、着実にスキルアップできる環境です。',
      hiringOrganization: {
        '@type': 'Organization',
        name: 'FLOW株式会社',
        sameAs: import.meta.env.VITE_SITE_URL ?? '',
        logo: `${import.meta.env.VITE_SITE_URL ?? ''}/vite.svg`,
      },
      jobLocation: {
        '@type': 'Place',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '楠3丁目319番地',
          addressLocality: '名古屋市北区',
          addressRegion: '愛知県',
          postalCode: '462-0012',
          addressCountry: 'JP',
        },
      },
      baseSalary: {
        '@type': 'MonetaryAmount',
        currency: 'JPY',
        value: {
          '@type': 'QuantitativeValue',
          minValue: 250000,
          maxValue: 750000,
          unitText: 'MONTH',
        },
      },
      employmentType: 'FULL_TIME',
      experienceRequirements: '未経験可',
      datePosted: '2026-04-07',
      validThrough: '2026-12-31',
    });

    return () => {
      const el = document.getElementById(scriptId);
      if (el) el.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />

      {/* Hero */}
      <section className="relative bg-[#1a2b4a] pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=electrical%20wiring%20conduit%20pipes%20and%20cable%20trays%20installed%20on%20ceiling%20of%20large%20industrial%20factory%20building%2C%20professional%20electrical%20infrastructure%2C%20dark%20navy%20blue%20industrial%20atmosphere%2C%20dramatic%20lighting%2C%20no%20people%2C%20high%20quality%20architectural%20photography&width=1400&height=700&seq=recruit-hero02&orientation=landscape"
            alt="採用情報"
            className="w-full h-full object-cover object-top opacity-20"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a2b4a]/60 via-[#1a2b4a]/40 to-[#1a2b4a]/80" />
        <div className="relative max-w-4xl mx-auto px-4 md:px-8 text-center">
          <p className="text-[#f8b500] text-xs font-bold tracking-widest uppercase mb-4">RECRUIT</p>
          <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
            未経験でも安心の環境。<br />
            ゼロからプロになれる仕事です。
          </h1>
          <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            名古屋・東海3県で電気工事・空調設備工事を手がけるFLOW株式会社では、<br className="hidden md:block" />
            一緒に成長できる仲間を募集しています。
          </p>
        </div>
      </section>

      {/* 代表メッセージ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-14">
            <p className="text-[#f8b500] text-xs font-bold tracking-widest uppercase mb-3">MESSAGE</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#1a2b4a]">代表メッセージ</h2>
          </div>
          <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">
            {/* Left: Photo, Title & Signature */}
            <div className="md:w-72 shrink-0 flex flex-col items-start md:items-center text-left md:text-center">
              {/* 代表写真 */}
              <div className="w-full rounded-2xl overflow-hidden mb-6 border border-gray-100">
                <img
                  src="https://static.readdy.ai/image/da7e08cc1cb0c329c54c3ccbfd3bc827/d25562aa19dd5045982fe377821f143f.jpeg"
                  alt="代表取締役 岡崎聡"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="text-[80px] leading-none text-[#f8b500]/15 font-black select-none pointer-events-none mb-2">&ldquo;</div>
              <p className="text-2xl md:text-3xl font-black text-[#1a2b4a] leading-tight tracking-tight mb-6">
                心と魂を込めた電気工事で、<br />未来を照らす
              </p>
              <div className="pt-6 border-t border-gray-100 w-full">
                <p className="text-[#1a2b4a] font-black text-sm">FLOW株式会社</p>
                <p className="text-[#1a2b4a] font-bold text-sm mt-1">代表取締役　<span className="font-black text-[#1a2b4a]">岡崎聡</span></p>
              </div>
            </div>
            {/* Right: Message Body */}
            <div className="flex-1 space-y-5">
              <p className="text-base md:text-lg leading-relaxed text-gray-600">
                私たちが最も大切にしているのは、この二つです。<br />
                どれだけ技術が進化し、AIが発達したとしても、<br />
                人の「心」と「魂」を乗せることはできません。
              </p>
              <p className="text-base md:text-lg leading-relaxed text-gray-600">
                私は、ある一軒のラーメン屋に通い続ける中で、<br />
                ふと気づいたことがあります。<br />
                「なぜ、こんなにも美味しいのか」と。<br />
                その答えはシンプルでした。<br />
                そこには、作り手の"魂"が込められていたからです。
              </p>
              <p className="text-base md:text-lg leading-relaxed text-gray-600">
                人の手から生まれる価値は、<br />
                単なる技術や効率ではなく、<br />
                そこに宿る想いによって決まる。
              </p>
              <p className="text-base md:text-lg leading-relaxed text-gray-600">
                だからこそ私たちは、<br />
                強い心を持ち、魂を込めて、仕事に向き合い続けます。
              </p>
              <p className="text-base md:text-lg leading-relaxed text-gray-600">
                これからの10年、20年。<br />
                時代がどれだけ変わろうとも、<br />
                心と魂を武器に、挑み続けます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 仕事内容 */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <div className="text-center mb-14">
            <p className="text-[#f8b500] text-xs font-bold tracking-widest uppercase mb-3">JOB DESCRIPTION</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#1a2b4a]">仕事内容</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="rounded-2xl overflow-hidden border border-gray-100">
              <div className="w-full h-52 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=electrical%20conduit%20pipes%20and%20cable%20tray%20system%20installed%20on%20clean%20bright%20wall%20in%20modern%20commercial%20building%2C%20soft%20natural%20light%2C%20light%20silver%20and%20warm%20white%20tones%2C%20professional%20clean%20industrial%20atmosphere%2C%20no%20people%2C%20architectural%20detail%20photography%2C%20bright%20airy%20minimal%20palette%2C%20slightly%20warm%20lighting&width=600&height=400&seq=job-elec-work09&orientation=landscape"
                  alt="店舗・工場の電気内線工事"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#f8b500]/10 mb-3">
                  <i className="ri-flashlight-line text-lg text-[#f8b500]" />
                </div>
                <h3 className="text-lg font-black text-[#1a2b4a] mb-2">店舗・工場の電気内線工事</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  名古屋を中心とした東海3県の店舗・工場での電気内線工事を担当。配線・コンセント設置・照明器具取付など、幅広い電気工事に携わります。
                </p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="rounded-2xl overflow-hidden border border-gray-100">
              <div className="w-full h-52 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=bright%20clean%20electrical%20wiring%20tools%20laid%20out%20neatly%20on%20white%20work%20surface%2C%20cable%20ties%2C%20wire%20stripper%2C%20conduit%20pipes%2C%20electrical%20tape%2C%20junction%20box%2C%20warm%20natural%20daylight%20from%20window%2C%20organized%20professional%20workspace%2C%20no%20people%2C%20fresh%20and%20inviting%20atmosphere%2C%20light%20beige%20and%20white%20tones%2C%20airy%20and%20bright%20interior%20setting&width=600&height=400&seq=job-support-nopeople01&orientation=landscape"
                  alt="現場でのサポート作業"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#f8b500]/10 mb-3">
                  <i className="ri-user-star-line text-lg text-[#f8b500]" />
                </div>
                <h3 className="text-lg font-black text-[#1a2b4a] mb-2">現場でのサポート作業（未経験者）</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  未経験の方はまず先輩スタッフのサポートからスタート。資材の運搬・整理・補助作業を通じて、現場の流れを覚えながら着実にスキルアップできます。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1日の流れ */}
      <section className="py-20 md:py-28 bg-[#1a2b4a]">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <div className="text-center mb-14">
            <p className="text-[#f8b500] text-xs font-bold tracking-widest uppercase mb-3">DAILY SCHEDULE</p>
            <h2 className="text-3xl md:text-4xl font-black text-white">1日の流れ</h2>
            <p className="text-white/50 text-sm mt-3">※現場により前後あり</p>
          </div>
          <div className="relative">
            <div className="absolute left-[72px] md:left-[88px] top-0 bottom-0 w-px bg-[#f8b500]/30" />
            <div className="space-y-8">
              {schedule.map((item, i) => (
                <div key={i} className="flex items-center gap-6 md:gap-8">
                  <div className="w-16 md:w-20 text-right shrink-0">
                    <span className="text-[#f8b500] font-black text-lg md:text-xl">{item.time}</span>
                  </div>
                  <div className="relative z-10 w-5 h-5 flex items-center justify-center shrink-0">
                    <div className="w-4 h-4 rounded-full bg-[#f8b500] border-2 border-[#1a2b4a]" />
                  </div>
                  <div className="flex-1 bg-white/5 rounded-xl px-5 py-4">
                    <p className="text-white font-bold text-sm md:text-base">{item.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 給与・待遇 */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <div className="text-center mb-14">
            <p className="text-[#f8b500] text-xs font-bold tracking-widest uppercase mb-3">SALARY & BENEFITS</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#1a2b4a]">給与・待遇</h2>
          </div>

          {/* 給与 */}
          <div className="bg-[#1a2b4a] rounded-2xl p-8 md:p-10 mb-8 text-center">
            <p className="text-white/60 text-sm mb-2">月給</p>
            <p className="text-[#f8b500] text-5xl md:text-6xl font-black mb-2">
              25<span className="text-2xl">万円</span>〜75<span className="text-2xl">万円</span>
            </p>
            <p className="text-white/50 text-xs mt-3">※試用期間1〜3ヶ月あり　※経験・スキルにより考慮</p>
          </div>

          {/* 待遇一覧 */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {benefits.map((b) => (
              <div key={b.text} className="flex items-center gap-3 bg-[#f7f8fa] rounded-xl px-4 py-4">
                <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#f8b500]/10 shrink-0">
                  <i className={`${b.icon} text-base text-[#f8b500]`} />
                </div>
                <span className="text-[#1a2b4a] text-xs font-bold leading-snug">{b.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 求める人 */}
      <section className="py-20 md:py-28 bg-[#f7f8fa]">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <div className="text-center mb-14">
            <p className="text-[#f8b500] text-xs font-bold tracking-widest uppercase mb-3">REQUIREMENTS</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#1a2b4a]">求める人物像</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
            {requirements.map((r) => (
              <div key={r.text} className="flex items-center gap-4 bg-white rounded-2xl px-6 py-5 border border-gray-100">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#f8b500]/10 shrink-0">
                  <i className={`${r.icon} text-xl text-[#f8b500]`} />
                </div>
                <span className="text-[#1a2b4a] font-bold text-sm">{r.text}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-sm mt-8">「話だけ聞きたい」でもOKです。まずはお気軽にご連絡ください。</p>
        </div>
      </section>

      {/* 応募フォーム */}
      <section id="apply" className="py-20 md:py-28 bg-white">
        <div className="max-w-2xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <p className="text-[#f8b500] text-xs font-bold tracking-widest uppercase mb-3">APPLY</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#1a2b4a] mb-4">採用に応募する</h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              未経験・資格不問。まずはお気軽にご応募ください。<br />
              「ちょっと気になる」くらいでも大歓迎です。
            </p>
          </div>

          <form
            data-readdy-form
            action="https://readdy.ai/api/form/d7a90ltfdd9edovmgvq0"
            method="POST"
            onSubmit={async (e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const formData = new FormData(form);
              const params = new URLSearchParams();
              formData.forEach((value, key) => {
                params.append(key, value.toString());
              });
              try {
                const res = await fetch('https://readdy.ai/api/form/d7a90ltfdd9edovmgvq0', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                  body: params.toString(),
                });
                if (res.ok) {
                  const msg = document.getElementById('recruit-success');
                  if (msg) msg.classList.remove('hidden');
                  form.reset();
                }
              } catch {
                // error handling
              }
            }}
            className="space-y-5"
          >
            <div>
              <label className="block text-[#1a2b4a] text-sm font-bold mb-2">お名前 <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="name"
                required
                placeholder="山田 太郎"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1a2b4a] focus:outline-none focus:border-[#f8b500] transition-colors"
              />
            </div>
            <div>
              <label className="block text-[#1a2b4a] text-sm font-bold mb-2">メールアドレス <span className="text-red-500">*</span></label>
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
            <div>
              <label className="block text-[#1a2b4a] text-sm font-bold mb-2">経験・資格</label>
              <select
                name="experience"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1a2b4a] focus:outline-none focus:border-[#f8b500] transition-colors bg-white cursor-pointer"
              >
                <option value="">選択してください</option>
                <option value="未経験">未経験</option>
                <option value="経験あり（資格なし）">経験あり（資格なし）</option>
                <option value="第二種電気工事士">第二種電気工事士</option>
                <option value="第一種電気工事士">第一種電気工事士</option>
                <option value="その他資格あり">その他資格あり</option>
              </select>
            </div>
            <div>
              <label className="block text-[#1a2b4a] text-sm font-bold mb-2">メッセージ・ご質問</label>
              <textarea
                name="message"
                rows={4}
                maxLength={500}
                placeholder="「話だけ聞きたい」でもOKです。お気軽にどうぞ。"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1a2b4a] focus:outline-none focus:border-[#f8b500] transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#f8b500] hover:bg-[#e6a800] text-[#1a2b4a] font-black text-base py-4 rounded-xl transition-colors duration-200 whitespace-nowrap cursor-pointer"
            >
              応募する
            </button>
            <div id="recruit-success" className="hidden bg-green-50 border border-green-200 rounded-xl p-4 text-center">
              <p className="text-green-700 font-bold text-sm">ご応募ありがとうございます！担当者よりご連絡いたします。</p>
            </div>
          </form>

          {/* 直接連絡 */}
          <div className="mt-10 pt-8 border-t border-gray-100 text-center">
            <p className="text-gray-500 text-sm mb-4">お電話・メールでも受け付けています</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:07016233214"
                className="inline-flex items-center justify-center gap-2 bg-[#1a2b4a] text-white font-bold text-sm px-6 py-3 rounded-xl hover:bg-[#243d6b] transition-colors whitespace-nowrap cursor-pointer"
              >
                <i className="ri-phone-line" />
                070-1623-3214
              </a>
              <a
                href="mailto:info@flow-elec.com"
                className="inline-flex items-center justify-center gap-2 border border-[#1a2b4a] text-[#1a2b4a] font-bold text-sm px-6 py-3 rounded-xl hover:bg-[#f7f8fa] transition-colors whitespace-nowrap cursor-pointer"
              >
                <i className="ri-mail-line" />
                info@flow-elec.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#f8b500]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-black text-[#1a2b4a] mb-4">まずは話だけでもOKです</h2>
          <p className="text-[#1a2b4a]/70 text-sm mb-8">「ちょっと気になる」くらいでも大歓迎。お気軽にご連絡ください。</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#1a2b4a] text-white font-black text-sm px-8 py-4 rounded-xl hover:bg-[#243d6b] transition-colors whitespace-nowrap cursor-pointer"
            >
              <i className="ri-mail-send-line" />
              お問い合わせはこちら
            </Link>
            <a
              href="#apply"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#1a2b4a] font-black text-sm px-8 py-4 rounded-xl hover:bg-gray-50 transition-colors whitespace-nowrap cursor-pointer"
            >
              <i className="ri-file-list-line" />
              応募フォームへ
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
