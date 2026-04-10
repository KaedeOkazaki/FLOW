const strengths = [
  {
    icon: 'ri-tools-line',
    title: '電気＋空調\nワンストップ対応',
    desc: '電気工事と空調設備工事を一括で対応。複数業者への発注が不要で、コスト削減と工期短縮を実現します。',
    img: 'https://readdy.ai/api/search-image?query=commercial%20air%20conditioning%20unit%20and%20electrical%20panel%20side%20by%20side%20in%20bright%20modern%20building%2C%20professional%20HVAC%20and%20electrical%20installation%2C%20clean%20white%20industrial%20equipment%2C%20bright%20daylight%2C%20no%20people%2C%20technical%20precision%2C%20light%20airy%20atmosphere%2C%20warm%20neutral%20tones&width=400&height=300&seq=str-nop013&orientation=landscape',
  },
  {
    icon: 'ri-map-pin-2-line',
    title: '地域密着\n迅速対応',
    desc: '名古屋を拠点に愛知・岐阜・三重の東海3県をカバー。緊急時も素早く駆けつけ、迅速に対応します。',
    img: 'https://readdy.ai/api/search-image?query=detailed%20view%20of%20electrical%20distribution%20panel%20and%20circuit%20breakers%20mounted%20on%20wall%20in%20bright%20modern%20facility%2C%20professional%20electrical%20infrastructure%2C%20clean%20light%20grey%20and%20silver%20tones%2C%20bright%20well-lit%20environment%2C%20no%20people%2C%20no%20vehicles%2C%20technical%20precision%20photography%2C%20bright%20neutral%20industrial%20palette&width=400&height=300&seq=str-nop014&orientation=landscape',
  },
  {
    icon: 'ri-graduation-cap-line',
    title: '未経験から育てる\n教育体制',
    desc: '資格不問・学歴不問。入社後は先輩スタッフが丁寧に指導。ゼロからプロの電気工事士を目指せます。',
    img: 'https://readdy.ai/api/search-image?query=professional%20electrician%20tools%20neatly%20arranged%20on%20clean%20light%20wooden%20surface%2C%20wire%20strippers%20pliers%20multimeter%20in%20warm%20silver%20tones%2C%20bright%20well-lit%20workshop%2C%20soft%20natural%20light%20atmosphere%2C%20no%20people%2C%20not%20too%20colorful%2C%20understated%20warm%20neutral%20palette%2C%20minimal%20bright&width=400&height=300&seq=str-nop011&orientation=landscape',
  },
  {
    icon: 'ri-time-line',
    title: '無理な残業なし\n働きやすい環境',
    desc: '残業削減・日曜・隔週土曜休み、GW・夏季・年末年始休暇あり。長く続けられる職場づくりを大切にしています。',
    img: 'https://readdy.ai/api/search-image?query=modern%20clean%20minimalist%20Japanese%20office%20interior%2C%20tidy%20organized%20desk%20with%20warm%20afternoon%20sunlight%20streaming%20through%20large%20window%2C%20bright%20airy%20comfortable%20workplace%20environment%2C%20no%20people%2C%20soft%20warm%20neutral%20tones%2C%20light%20and%20inviting%20atmosphere&width=400&height=300&seq=str-nop012&orientation=landscape',
  },
];

export default function StrengthsSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-4">
          <div>
            <p className="text-[#f8b500] text-xs font-bold tracking-widest uppercase mb-3">OUR STRENGTHS</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#1a2b4a] leading-tight">
              FLOWが選ばれる理由
            </h2>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {strengths.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl overflow-hidden border border-gray-100 hover:-translate-y-1 transition-transform duration-300"
            >
              {/* Image */}
              <div className="w-full h-44 overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#f8b500]/10 mb-3">
                  <i className={`${s.icon} text-lg text-[#f8b500]`} />
                </div>
                <h3 className="text-base font-black text-[#1a2b4a] leading-snug mb-2 whitespace-pre-line">{s.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
