import React, { useState } from "react";
import data from "./data.json";

function Counter() {
  const [input, setInput] = useState("");
  const [country, setCountry] = useState(null);

  const filter = (code) => {
    const filter = data.countries.find((item) => item.code === code);
    setCountry(filter ? filter : null);
  };

  const change = (e) => {
    const code = e.target.value;
    setInput(code);
    if (code) {
      filter(code);
    } else {
      setCountry(null);
    }
  };

  return (
    <div className="flex flex-col items-center p-6 mt-28 bg-gray-50 rounded-xl shadow-md max-w-sm mx-auto">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">
        Telefon kodi bo'yicha davlatni topish
      </h1>
      <input
        type="text"
        value={input}
        onChange={change}
        placeholder="Telefon kodini kiriting..."
        className="p-3 text-lg w-4/5 border border-gray-300 rounded-lg transition-all mb-6"
      />
      {country ? (
        <div className="bg-white p-4 rounded-lg w-full shadow-md">
          <h3 className="text-xl font-medium text-gray-700 mb-2 flex items-center">
            <img
              src={country.flag}
              alt={country.name}
              className="w-6 h-4 mr-2"
            />
            {country.name}
          </h3>
          <p className="text-gray-600">Kod: {country.code}</p>
        </div>
      ) : (
        <p className="text-red-500 text-lg mt-6">
          Telefon kodi bo'yicha ma'lumot topilmadi.
        </p>
      )}
    </div>
  );
}

export default Counter;
