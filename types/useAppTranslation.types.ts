import type { UseTranslationResponse } from "react-i18next";

export type UseAppTranslationReturn = UseTranslationResponse<'translation', undefined> & {
  currentLanguage: string;
  isRTL: boolean;
  changeLanguage: (newLang: string) => Promise<void>;
  isArLang: boolean;
  isEnLang: boolean;
};
