import { useState } from "react";
import useTranslationStore from "../entities/langs/langs.store";
import DictionaryAPI, { IApiResponse } from "../shared/api/DictionaryAPI";
import { ITranslate } from "../entities/translate/translate.model";
import "./Search.css";

const Search = () => {
  const { lang, lastLangs, setLastLangs, history, addHistory, clearHistory} =
    useTranslationStore((state) => state);
  const [word, setWord] = useState<string>("");
  const [firstLang, setFirstLang] = useState<string>(lastLangs[0]);
  const [secondLang, setSecondLang] = useState<string>(lastLangs[1]);
  const [a, setA] = useState<IApiResponse<ITranslate> | undefined>(undefined);
  const handleTranslate = async () => {
    addHistory(word);
    const res = await DictionaryAPI.translateWord({
      word,
      firstLang,
      secondLang,
    });
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
        <div className="historyDiv">
          {history.slice(0, -1).reverse().map((el) => (
            <span>{el}</span>
          ))}
          <span className="clearCross" onClick={clearHistory}>✕</span>
        </div>
        <select
          className="lang1"
          name="Language1"
          value={firstLang}
          onChange={(e) => {
            setFirstLang(e.currentTarget.value);
            setLastLangs([e.currentTarget.value, lastLangs[1]]);
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
            setLastLangs([lastLangs[0], e.currentTarget.value]);
          }}
        >
          {lang.map((l) => (
            <option key={l} value={l}>
              {l}
            </option>
          ))}
        </select>
        <button className="btn" onClick={handleTranslate}>
          Перевести
        </button>
      </div>
      {a ? (
        a?.error ? (
          a.error
        ) : a?.data?.def && a.data.def.length > 0 ? (
          <div>
            <p>
              Перевод: {a.data.def.map((x) => x.tr.map((x) => x.text)[0]) + " "}
            </p>
            {a.data.def[0].tr[0].syn && (
              <p>
                Синонимы: {a.data.def[0].tr[0].syn?.map((x) => x.text) + " "}
              </p>
            )}
            {a.data.def[0].tr[0].mean && (
              <p>
                Значение слова:{" "}
                {a.data.def[0].tr[0].mean?.map((x) => x.text).join(", ")}
              </p>
            )}
          </div>
        ) : (
          "Нет перевода"
        )
      ) : (
        ""
      )}
    </div>
  );
};

export default Search;
