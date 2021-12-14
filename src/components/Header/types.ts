import { DeckVariant, DeckLevel, Language } from "../../typings";

export interface Props {
  language: Language;
  deckLevel: DeckLevel;
  deckVariant: DeckVariant;
  setLanguage: React.Dispatch<React.SetStateAction<Language>>;
  setDeckLevel: React.Dispatch<React.SetStateAction<DeckLevel>>;
  setDeckVariant: React.Dispatch<React.SetStateAction<DeckVariant>>;
}
