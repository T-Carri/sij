'use client'
import React, { useState } from 'react';

type Datos = {
  Folio: string;
  Edificio: string;
  GerenteSolicitante: string;
  GerenteContratante: string;
  ContratistaAsignado: string;
  Region: string;
  FechaSolicitud: string;
  Estatus: string;
  Area: string;
  Referencia: string;
  Equipo: string;
  ProblemaComun: string;
  DescripcionProblema: string;
};

export const AddSt = () => {
  const [FormVisible, setFormVisible] = useState(false);
  const [Data, setData] = useState({});

  const toggleForm = () => {
    setFormVisible(!FormVisible);
  };

  const handleInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = event.target.value;

    const regexPattern = /(Folio ST:|Edificio:|Gerente Solicitante:|Gerente Contratante:|Contratista Asignado:|Region:|Fecha Solicitud:|ESTATUS:|Área:|Referencia:|Equipo:|Problema Común:|Descripción del Problema:)((?:(?!(Folio ST:|Edificio:|Gerente Solicitante:|Gerente Contratante:|Contratista Asignado:|Region:|Fecha Solicitud:|ESTATUS:|Área:|Referencia:|Equipo:|Problema Común:|Descripción del Problema:)).)*)/g;

    let matches: RegExpExecArray | null;
    while ((matches = regexPattern.exec(inputValue)) !== null) {
      const field = matches[1].trim();
      const value = matches[2].trim();
      setData((prevData) => ({ ...prevData, [field]: value }));
    }
  };

  return (
    <>
      {FormVisible ? (
        <div className={`fixed bottom-0 right-3 rounded-xl bg-white p-4 ring ring-indigo-50 w-1/2`}>
          <div className='flex row items-end justify-start gap-10 mt-2'>
            <h2 className="mt-2 text-lg font-medium sm:text-xl">
              <a className="hover:underline"> Agrega ST </a>
            </h2>
          </div>
          <div className="m-5">
            <textarea
              id="message"
              rows={20}
              className="p-2.5 w-full text-lg text-black bg-black rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder-black"
              placeholder="Copia el ST aquí"
              onChange={handleInput}
            ></textarea>
          </div>
          <div className='flex justify-between'>
            <button
              className="group flex items-center justify-between gap-4 rounded-lg border border-current px-5 py-3 text-black transition-colors hover:bg-green-600 focus:outline-none focus:ring active-bg-black"
            >
              <span className="font-medium transition-colors group-hover:text-white">
                Agregar
              </span>
              <span
                className="shrink-0 rounded-full border border-black bg-white p-2 group-active:border-black"
              >
                <svg
                  className="h-5 w-5 rtl-rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </button>
            <div>
              <button
                className="z-50 w-13 h-13 p-3 rounded-full bg-blue shadow-lg"
                onClick={toggleForm}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 transform rotate-90"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <button onClick={() => console.log(Data)}>tester</button>
            </div>
          </div>
        </div>
      ) : null}

      {FormVisible ? null : (
        <button
          className="fixed bottom-8 right-10 z-100 w-16 h-16 p-3 rounded-full bg-green shadow-lg"
          onClick={toggleForm}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </button>
      )}
    </>
  );
};
