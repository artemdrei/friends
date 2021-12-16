import { Language } from "../../typings";

export interface Props {
  language: Language;
  setLanguage: React.Dispatch<React.SetStateAction<Language>>;
}
