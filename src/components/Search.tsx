import React from "react";

const Search = () => {



    return(
        <div>
            <input type="text" placeholder="Введите слово"/>
            <select name="Language1">
                <option>Test1</option>
                <option>Test2</option>
            </select>
            <select name="Language2">
                <option>Test3</option>
                <option>Test4</option>
            </select>
            <button>Перевести</button>
        </div>
    )
}


export default Search