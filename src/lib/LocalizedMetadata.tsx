import { useEffect } from "react";
import { useLanguage } from "./LanguageContext";

const metadata = {
  ka: {
    title: "ნანა ლობჯანიძე | PMP® პროექტების მართვის კონსულტანტი",
    description: "ნანა ლობჯანიძე, PMP® სერტიფიცირებული პროექტების მართვის კონსულტანტი, ტრენერი და მენტორი. პროექტების მართვა, ტრენინგები და კონსულტაცია.",
  },
  en: {
    title: "Nana Lobjanidze | PMP® Project Management Consultant & Trainer",
    description: "Nana Lobjanidze is a PMP® certified project management consultant, trainer and mentor. Project delivery, professional training, mentoring and consulting.",
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
