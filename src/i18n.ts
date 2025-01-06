import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// 언어별 번역 파일 임포트
import translationEN from "./locales/en/translation.json";
import translationKO from "./locales/ko/translation.json";
import translationJA from "./locales/ja/translation.json";

const resources = {
  en: {
    translation: translationEN,
  },
  ko: {
    translation: translationKO,
  },
  ja: {
    translation: translationJA,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ko", // 기본 언어 설정
  fallbackLng: "ko", // 기본적으로 사용할 언어 설정
  interpolation: {
    escapeValue: false,
  },
});

// 언어 변경 시 폰트 설정
i18n.on("languageChanged", (lng) => {
  // i18n.on('languageChanged')를 사용하여 언어가 변경될 때 실행할 작업을 정의
  document.documentElement.lang = lng; // <html> 태그의 lang 속성 업데이트

  // 일본어인 경우 Meiryo UI 폰트를 적용
  if (lng === "ja") {
    // 일본어(ja)가 선택되었을 때, document.documentElement.style.fontFamily로 일본어 폰트를 적용
    document.documentElement.style.fontFamily = "'Meiryo UI', sans-serif";
    // 한국어랑 영어 폰트는 Noto Sans KR
  } else {
    document.documentElement.style.fontFamily = "'Noto Sans KR', sans-serif";
  }
});

export default i18n;
