import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ITranslationStore {
    lang: string[]
    setLang: (langs: string[]) => void
}

const useTranslationStore = create<ITranslationStore>()(
    persist(

        (set) => ({
        lang: [],
        setLang: (langs) => set((state) => ({...state, lang: langs})),
    }),
    {
        name: 'Langs',
    }
    )
)

export default useTranslationStore