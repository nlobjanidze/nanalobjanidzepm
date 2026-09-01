import logo from "@/assets/logo-v2.png";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="container-x py-14 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <img src={logo} alt="LN" className="h-9 w-auto object-contain" />
            <div>
              <p className="font-extrabold text-ink">ნანა ლობჯანიძე</p>
              <p className="text-xs text-ink-soft">PMP® · Project Management Consultant · Trainer &amp; Mentor</p>
            </div>
          </div>
          <p className="mt-5 text-sm text-ink-soft max-w-sm leading-relaxed">
            კონსულტაცია, ტრენინგი და მენტორინგი ორგანიზაციებისთვის, რომლებიც
            პროექტებს რეალურ შედეგებად აქცევენ.
          </p>
        </div>
        <div className="md:col-span-3">
          <p className="text-[11px] uppercase tracking-widest font-black mb-4" style={{ color: "var(--navy-soft)" }}>ნავიგაცია</p>
          <ul className="space-y-2.5 text-sm">
            {[
              ["შესახებ", "#about"],
              ["სერვისები", "#services"],
              ["ტრენინგები", "#trainings"],
              ["პროექტები", "#projects"],
              ["სერტიფიკატები", "#certifications"],
              ["აღიარება", "#recognition"],
            ].map(([l, h]) => (
              <li key={h}><a href={h} className="text-ink-soft hover:text-navy font-medium">{l}</a></li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-4">
          <p className="text-[11px] uppercase tracking-widest font-black mb-4" style={{ color: "var(--navy-soft)" }}>კონტაქტი</p>
          <ul className="space-y-2.5 text-sm text-ink-soft">
            <li><a href="mailto:nanalobjanidze.pm@gmail.com" className="hover:text-navy font-medium break-all">nanalobjanidze.pm@gmail.com</a></li>
            <li><a href="tel:+995599183635" className="hover:text-navy font-medium">+995 599 18 36 35</a></li>
            <li className="flex flex-wrap gap-3 pt-2">
              <a href="https://www.linkedin.com/in/nana-lobjanidze/" target="_blank" rel="noopener noreferrer" className="hover:text-navy font-medium">LinkedIn</a>
              <a href="https://www.facebook.com/nanuka.lobjanidze.7/" target="_blank" rel="noopener noreferrer" className="hover:text-navy font-medium">Facebook</a>
              <a href="https://www.instagram.com/lobjanidzenanukaa" target="_blank" rel="noopener noreferrer" className="hover:text-navy font-medium">Instagram</a>
            </li>
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
