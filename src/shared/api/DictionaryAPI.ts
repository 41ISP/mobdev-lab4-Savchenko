import React from "react";
import axios from "axios";
import { IParameters } from "../../entities/langs/langs.model";


const API_URL = 'https://dictionary.yandex.net/api/v1/dicservice.json/'

const DictionaryAPIInstance = axios.create({baseURL: API_URL})

const API_HEADERS = {
    'Apikey': 'dict.1.1.20250123T072148Z.dd7b721c5d58a801.0dcc96ebfb15ab2a7203eee682caf71a2b0b79f6'
}

const DictionaryAPI = {
    getLangs: async () => {
        try {
            const res = await DictionaryAPIInstance.get<string[]>(`getLangs`, {
                params: {
                    key: API_HEADERS.Apikey
                }
            })
            return res.data
        } catch (error) {

        }
    },
    translateWord: async ({word, firstLang, secondLang}: IParameters) => {
        try {
            const res = await DictionaryAPIInstance.post(`https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=${key}&lang=${lang}&text=${text}`, {
                params: {
                    key: API_HEADERS.Apikey,
                    text: word,
                    lang: `${firstLang}-${secondLang}`
                }
            })
            return res.data
        } catch (error) {

        }
    }
}

export default DictionaryAPI