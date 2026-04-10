import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#0d1a2e] text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Left: Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <img
                src="https://static.readdy.ai/image/da7e08cc1cb0c329c54c3ccbfd3bc827/2ba1a161c54e89fecb9ede1616aa3ff5.png"
                alt="FLOW株式会社"
                className="h-14 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              FLOW株式会社<br />
              〒462-0012 名古屋市北区楠3丁目319番地<br />
              電気工事・空調設備工事
            </p>
            <div className="flex items-center gap-3">
              <a href="tel:07016233214" className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 hover:border-[#f8b500] hover:text-[#f8b500] transition-colors duration-200 cursor-pointer">
                <i className="ri-phone-line text-sm" />
              </a>
              <a href="mailto:info@flow-elec.com" className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 hover:border-[#f8b500] hover:text-[#f8b500] transition-colors duration-200 cursor-pointer">
                <i className="ri-mail-line text-sm" />
              </a>
            </div>
          </div>

          {/* Center: Links */}
          <div>
            <h4 className="text-xs font-bold tracking-widest text-[#f8b500] uppercase mb-5">MENU</h4>
            <ul className="space-y-3">
              {[
                { label: 'トップページ', path: '/' },
                { label: '事業内容', path: '/services' },
                { label: '会社概要', path: '/about' },
                { label: '採用情報', path: '/recruit' },
                { label: 'お問い合わせ', path: '/contact' },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-gray-400 text-sm hover:text-[#f8b500] transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Contact */}
          <div>
            <h4 className="text-xs font-bold tracking-widest text-[#f8b500] uppercase mb-5">CONTACT</h4>
            <div className="space-y-4">
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">ADDRESS</p>
                <p className="text-sm text-gray-300 leading-relaxed">
                  〒462-0012<br />
                  名古屋市北区楠3丁目319番地
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">PHONE</p>
                <a href="tel:07016233214" className="text-sm text-gray-300 hover:text-[#f8b500] transition-colors duration-200">
                  070-1623-3214
                </a>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">EMAIL</p>
                <a href="mailto:info@flow-elec.com" className="text-sm text-gray-300 hover:text-[#f8b500] transition-colors duration-200">
                  info@flow-elec.com
                </a>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">AREA</p>
                <p className="text-sm text-gray-300">東海3県（愛知・岐阜・三重）</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">© 2025 FLOW株式会社 All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/contact" className="text-gray-500 text-xs hover:text-[#f8b500] transition-colors duration-200">プライバシーポリシー</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
