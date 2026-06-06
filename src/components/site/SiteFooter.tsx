import logo from "@/assets/logo.asset.json";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="container-x py-14 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <img src={logo.url} alt="LN" className="h-10 w-10 object-contain" />
            <div>
              <p className="font-extrabold text-ink">ნანა ლობჯანიძე</p>
              <p className="text-xs text-ink-soft">PMP® · Project Management Consultant</p>
            </div>
          </div>
          <p className="mt-5 text-sm text-ink-soft max-w-sm leading-relaxed">
            კონსულტაცია, ტრენინგი და მენტორინგი ორგანიზაციებისთვის, რომლებიც
            პროექტებს რეალურ შედეგებად აქცევენ.
          </p>
        </div>
        <div className="md:col-span-3">
          <p className="text-[11px] uppercase tracking-widest font-black text-navy-soft mb-4">ნავიგაცია</p>
          <ul className="space-y-2.5 text-sm">
            {[
              ["შესახებ", "#about"],
              ["სერვისები", "#services"],
              ["ტრენინგები", "#trainings"],
              ["პროექტები", "#projects"],
              ["FAQ", "#faq"],
            ].map(([l, h]) => (
              <li key={h}><a href={h} className="text-ink-soft hover:text-navy font-medium">{l}</a></li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-4">
          <p className="text-[11px] uppercase tracking-widest font-black text-navy-soft mb-4">კონტაქტი</p>
          <ul className="space-y-2.5 text-sm text-ink-soft">
            <li><a href="mailto:nana@lobjanidze.ge" className="hover:text-navy font-medium">nana@lobjanidze.ge</a></li>
            <li><a href="tel:+995555000000" className="hover:text-navy font-medium">+995 555 00 00 00</a></li>
            <li>თბილისი, საქართველო</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="container-x py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ink-soft">
          <p>© {new Date().getFullYear()} ნანა ლობჯანიძე. ყველა უფლება დაცულია.</p>
          <p>PMP® is a registered mark of the Project Management Institute, Inc.</p>
        </div>
      </div>
    </footer>
  );
}
