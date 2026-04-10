import { Link } from 'react-router-dom';

export default function CtaSection() {
  return (
    <section className="py-20 md:py-28 bg-[#1a2b4a]">
      <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
        <p className="text-[#f8b500] text-xs font-bold tracking-widest uppercase mb-4">CONTACT</p>
        <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-6">
          まずは気軽に<br />
          <span className="text-[#f8b500]">ご連絡ください。</span>
        </h2>
        <p className="text-white/70 text-sm md:text-base leading-relaxed mb-10 max-w-xl mx-auto">
          お仕事のご依頼・採用についてのご相談、協力会社としてのご相談など、お気軽にお問い合わせください。「ちょっと気になる」くらいでも大歓迎です。
        </p>

        {/* Contact Options */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <a
            href="tel:07016233214"
            className="flex flex-col items-center gap-2 bg-white/10 hover:bg-white/20 rounded-2xl p-6 transition-colors duration-200 cursor-pointer"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#f8b500]/20">
              <i className="ri-phone-line text-xl text-[#f8b500]" />
            </div>
            <p className="text-white font-bold text-sm">電話で相談</p>
            <p className="text-white/60 text-xs">070-1623-3214</p>
          </a>
          <a
            href="mailto:info@flow-elec.com"
            className="flex flex-col items-center gap-2 bg-white/10 hover:bg-white/20 rounded-2xl p-6 transition-colors duration-200 cursor-pointer"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#f8b500]/20">
              <i className="ri-mail-line text-xl text-[#f8b500]" />
            </div>
            <p className="text-white font-bold text-sm">メールで相談</p>
            <p className="text-white/60 text-xs">info@flow-elec.com</p>
          </a>
          <Link
            to="/contact"
            className="flex flex-col items-center gap-2 bg-white/10 hover:bg-white/20 rounded-2xl p-6 transition-colors duration-200 cursor-pointer"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#f8b500]/20">
              <i className="ri-file-text-line text-xl text-[#f8b500]" />
            </div>
            <p className="text-white font-bold text-sm">フォームで相談</p>
            <p className="text-white/60 text-xs">24時間受付</p>
          </Link>
        </div>

        <Link
          to="/contact"
          className="inline-flex items-center gap-3 bg-[#f8b500] text-[#1a2b4a] font-black text-base px-10 py-4 rounded-full hover:bg-[#e6a800] transition-colors duration-200 whitespace-nowrap cursor-pointer"
        >
          <i className="ri-send-plane-line" />
          お問い合わせ・無料相談はこちら
        </Link>
      </div>
    </section>
  );
}
