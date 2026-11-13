import { useEffect } from "react";
import { useLanguage } from "./LanguageContext";

const metadata = {
  ka: {
    title: "პროექტების მართვის ტრენინგები და კონსულტაცია | ნანა ლობჯანიძე",
    description: "PMP® სერტიფიცირებული პროექტების მართვის კონსულტანტი და ტრენერი საქართველოში. კორპორაციული ტრენინგები, პროექტების მართვის კონსულტაცია და მენტორინგი.",
  },
  en: {
    title: "Project Management Training & Consulting in Georgia | Nana Lobjanidze",
    description: "PMP®-certified project management consultant and corporate trainer in Georgia. Project management workshops, consulting and professional mentoring.",
  },
} as const;

/** Updates browser-visible metadata when the visitor switches language.
 * Social crawlers generally do not run JavaScript; server-rendered metadata
 * remains Georgian until a locale-aware URL/server head is implemented.
 */
export function LocalizedMetadata() {
  const { language } = useLanguage();
  useEffect(() => {
    const copy = metadata[language];
    document.title = copy.title;
    const update = (selector: string, content: string) => {
      const el = document.querySelector<HTMLMetaElement>(selector);
      if (el) el.content = content;
    };
    update('meta[name="description"]', copy.description);
    update('meta[property="og:title"]', copy.title);
    update('meta[property="og:description"]', copy.description);
    update('meta[name="twitter:title"]', copy.title);
    update('meta[name="twitter:description"]', copy.description);
  }, [language]);
  return null;
}
