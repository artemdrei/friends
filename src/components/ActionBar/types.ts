import { DeckVariant, DeckLevel, Language } from "../../typings";

export interface Props {
  language: Language;
  deckLevel: DeckLevel;
  deckVariant: DeckVariant;
  setDeckLevel: React.Dispatch<React.SetStateAction<DeckLevel>>;
  setDeckVariant: React.Dispatch<React.SetStateAction<DeckVariant>>;
}
