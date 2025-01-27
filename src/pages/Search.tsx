import React, { useEffect, useState } from "react";
import useTranslationStore from "../entities/langs/langs.store";

const Search = () => {
    const [word, setWord] = useState<string>("")
    const [firstLang, setFirstLang] = useState<string>("")
    const [secondLang, setSecondLang] = useState<string>("")
    const {lang} = useTranslationStore((state) => state)
    
    return(
        <div>
            <input type="text" value={word} placeholder="Введите слово" onChange={(e) => {setWord(e.currentTarget.value)}}/>
            <select name="Language1" value={firstLang} onChange={(e) => {setFirstLang(e.currentTarget.value)}}>{lang.map((l)=> (<option key={l} value={l}>{l}</option>))}</select>
            <select name="Language2" value={secondLang} onChange={(e) =>{setSecondLang(e.currentTarget.value)}}>{lang.map((l)=> (<option key={l} value={l}>{l}</option>))}</select>
            <button>Перевести</button>
        </div>
    )
}


export default Search