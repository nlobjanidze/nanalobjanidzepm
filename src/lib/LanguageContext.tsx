import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Language = "ka" | "en";
type LanguageContextType = { language: Language; setLanguage: (language: Language) => void };
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("ka");
  useEffect(() => {
    const saved = window.localStorage.getItem("nana-site-language");
    if (saved === "ka" || saved === "en") setLanguageState(saved);
  }, []);
  const setLanguage = (next: Language) => {
    setLanguageState(next);
    window.localStorage.setItem("nana-site-language", next);
    document.documentElement.lang = next;
  };
  useEffect(() => { document.documentElement.lang = language; }, [language]);
  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>;
}
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}
