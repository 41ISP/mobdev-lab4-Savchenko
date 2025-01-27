import { PropsWithChildren, useEffect } from "react"
import DictionaryAPI from "./DictionaryAPI"
import useTranslationStore from "../../entities/langs/langs.store"


export const APIWrapper = ({children}: PropsWithChildren) => {
    const {setLang} = useTranslationStore((state) => state)

    useEffect(() =>{
        const fetchLanguages = async () => {
            const res = await DictionaryAPI.getLangs()
            if (!res) return
            const langsSet = new Set(res.map((lang)=> lang.split('-')).flat())
            const parsedLangs = Array.from(langsSet) 
            
            setLang(parsedLangs)
        }
        fetchLanguages()
    },[])
    return (
        <>
            {children}
        </>
    )
}