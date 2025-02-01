import { useState } from "react";
import useTranslationStore from "../entities/langs/langs.store";
import DictionaryAPI, { IApiResponse } from "../shared/api/DictionaryAPI";
import { ITranslate } from "../entities/translate/translate.model";
import "./Search.css"

const Search = () => {
  const [word, setWord] = useState<string>("");
  const [firstLang, setFirstLang] = useState<string>("");
  const [secondLang, setSecondLang] = useState<string>("");
  const { lang } = useTranslationStore((state) => state);
  const [a, setA] = useState<IApiResponse<ITranslate> | undefined>(undefined);

  const handleTranslate = async () => {
    const res = await DictionaryAPI.translateWord({
      word,
      firstLang,
      secondLang,
    });
    res.data && res.data;
    setA(res);
  };
  return (
    <div className="mainDiv">
      <div className="searchDiv">
        <h1>DictionaryAPI</h1>
        <input
        className="search"
          type="text"
          value={word}
          placeholder="Введите слово"
          onChange={(e) => {
            setWord(e.currentTarget.value);
          }}
        />
        <select
          className="lang1"
          name="Language1"
          value={firstLang}
          onChange={(e) => {
            setFirstLang(e.currentTarget.value);
          }}
        >
          {lang.map((l) => (
            <option key={l} value={l}>
              {l}
            </option>
          ))}
        </select>
        <select
          className="lang2"
          name="Language2"
          value={secondLang}
          onChange={(e) => {
            setSecondLang(e.currentTarget.value);
          }}
        >
          {lang.map((l) => (
            <option key={l} value={l}>
              {l}
            </option>
          ))}
        </select>
        <button className="btn" onClick={handleTranslate}>Перевести</button>
      </div>
      {a ? a?.error ? (
        a.error
      ) : a?.data?.def && a.data.def.length > 0 ? (
        <div>
          <p>
            Перевод: {a.data.def.map((x) => x.tr.map((x) => x.text)[0]) + " "}
          </p>
          {a.data.def[0].tr[0].syn && (
            <p>Синонимы: {a.data.def[0].tr[0].syn?.map((x) => x.text) + " "}</p>
          )}
          {a.data.def[0].tr[0].mean && (
            <p>
              Значение слова:
              {a.data.def[0].tr[0].mean?.map((x) => x.text) + " "}
            </p>
          )}
        </div>
      ) : (
        "Нет перевода"
      ) : ""}
    </div>
  );
};

export default Search;
