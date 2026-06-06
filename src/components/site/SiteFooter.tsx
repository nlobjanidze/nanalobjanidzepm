import logo from "@/assets/logo.asset.json";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/5 bg-navy-deep">
      <div className="container-x py-14 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <img src={logo.url} alt="LN" className="h-10 w-10 object-contain" />
            <div>
              <p className="font-extrabold">ნანა ლობჯანიძე</p>
              <p className="text-xs text-foreground/60">PMP® · Project Management Consultant</p>
            </div>
          </div>
          <p className="mt-5 text-sm text-foreground/70 max-w-sm leading-relaxed">
            კონსულტაცია, ტრენინგი და მენტორინგი ორგანიზაციებისთვის, რომლებიც
            პროექტებს რეალურ შედეგებად აქცევენ.
          </p>
        </div>
        <div className="md:col-span-3">
          <p className="text-xs uppercase tracking-widest font-bold text-mint mb-4">ნავიგაცია</p>
          <ul className="space-y-2.5 text-sm">
            {[
              ["შესახებ", "#about"],
              ["სერვისები", "#services"],
              ["ტრენინგები", "#trainings"],
              ["პროექტები", "#projects"],
              ["FAQ", "#faq"],
            ].map(([l, h]) => (
              <li key={h}><a href={h} className="text-foreground/75 hover:text-mint">{l}</a></li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-4">
          <p className="text-xs uppercase tracking-widest font-bold text-mint mb-4">კონტაქტი</p>
          <ul className="space-y-2.5 text-sm text-foreground/75">
            <li><a href="mailto:nana@lobjanidze.ge" className="hover:text-mint">nana@lobjanidze.ge</a></li>
            <li><a href="tel:+995555000000" className="hover:text-mint">+995 555 00 00 00</a></li>
            <li>თბილისი, საქართველო</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="container-x py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-foreground/55">
          <p>© {new Date().getFullYear()} ნანა ლობჯანიძე. ყველა უფლება დაცულია.</p>
          <p>PMP® is a registered mark of the Project Management Institute, Inc.</p>
        </div>
      </div>
    </footer>
  );
}
