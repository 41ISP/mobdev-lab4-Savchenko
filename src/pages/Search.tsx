import React, { useEffect, useState } from "react";
import useTranslationStore from "../entities/langs/langs.store";
import DictionaryAPI from "../shared/api/DictionaryAPI";
import { ITranslate } from "../entities/translate/translate.model";

const Search = () => {
    const [word, setWord] = useState<string>("")
    const [firstLang, setFirstLang] = useState<string>("")
    const [secondLang, setSecondLang] = useState<string>("")
    const {lang} = useTranslationStore((state) => state)
    const [a, setA] = useState<ITranslate>()

    const handleTranslate = async () => {
        setA(await DictionaryAPI.translateWord({word, firstLang, secondLang})) 
        
        
    }
    
    return(
        <>
        <div>
            <input type="text" value={word} placeholder="Введите слово" onChange={(e) => {setWord(e.currentTarget.value)}}/>
            <select name="Language1" value={firstLang} onChange={(e) => {setFirstLang(e.currentTarget.value)}}>{lang.map((l)=> (<option key={l} value={l}>{l}</option>))}</select>
            <select name="Language2" value={secondLang} onChange={(e) =>{setSecondLang(e.currentTarget.value)}}>{lang.map((l)=> (<option key={l} value={l}>{l}</option>))}</select>
            <button onClick={handleTranslate}>Перевести</button>
        </div>

        <div>
        &&    <p>Перевод: {a?.def.map(x => x.tr.map(x => x.text)[0]) + " "}</p>
            <p>Синонимы: {a?.def[0].tr[0].syn?.map(x => x.text) + " "}</p>
            <p>Значение слова: {a?.def[0].tr[0].mean?.map(x => x.text) + " "}</p>
        </div>
        </>
        
    )
}


export default Search