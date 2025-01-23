import React from "react";
import axios from "axios";


const API_URL = 'https://dictionary.yandex.net/api/v1/dicservice.json/'

const DictionaryAPIInstance = axios.create({baseURL: API_URL})

const API_HEADERS = {
    'Apikey': 'dict.1.1.20250123T072148Z.dd7b721c5d58a801.0dcc96ebfb15ab2a7203eee682caf71a2b0b79f6'
}

const DictionaryAPI = () => {


    const getLangs = async () => {
        try {
            const langs = await DictionaryAPIInstance.get(`getLangs`, {
                params: {
                    key: API_HEADERS.Apikey
                }
            })
        } catch (error)
    }
}

export default DictionaryAPI