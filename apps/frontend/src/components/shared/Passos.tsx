"use client";

import React from "react";

export interface PassosProps {
  labels: string[];
  children: any;
  labelAcao: string;
  acao: () => void;
}

export default function Passos(props: PassosProps) {
  const [passoAtual, setPassoAtual] = React.useState(0);

  function semPassoAnterior() {
    return passoAtual === 0;
  }

  function semProximoPasso() {
    return passoAtual === props.labels.length - 1;
  }

  function passoAnterior() {
    if (semPassoAnterior()) return;
    setPassoAtual(passoAtual - 1);
  }

  function proximoPasso() {
    if (semProximoPasso()) return;
    setPassoAtual(passoAtual + 1);
  }

  function renderizarLabels() {
    return (
      <div className="flex gap-4 select-none">
        {props.labels.map((label, i) => {
          const selecionado = passoAtual === i;
          return (
            <div key={i} className="flex items-center gap-2">
              <span
                className={`
                    flex items-center justify-center
                    w-9 h-9 rounded-full
                    ${selecionado ? "bg-white text-black" : "bg-zinc-700 text-zinc-400"}     
                `}
              >{i + 1}</span>
              <span className={selecionado ? "text-white" : "text-zinc-600"}>{label}</span>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col gap-10 w-full">
      <div className="self-center">{renderizarLabels()}</div>
      <div>{props.children[passoAtual]}</div>
      <div className="flex justify-between">
        <button
          onClick={passoAnterior}
          disabled={semPassoAnterior()}
          className={`
            botao
            ${
              semPassoAnterior()
                ? "bg-zinc-400 cursor-not-allowed opacity-50"
                : "bg-zinc-700 hover:bg-zinc-600 text-white"
            }
            `}
        >
          <span>Anterior</span>
        </button>

        {semProximoPasso() ? (
          <button
            onClick={props.acao}
            className={`
                botao
                bg-green-700 hover:bg-green-600 text-white
                
                `}
          >
            <span>{props.labelAcao}</span>
          </button>
        ) : (
          <button
            onClick={proximoPasso}
            disabled={semProximoPasso()}
            className={`
                botao
                ${
                  semProximoPasso()
                    ? "bg-zinc-400 cursor-not-allowed opacity-50"
                    : "bg-green-700 hover:bg-green-600 text-white"
                }
                `}
          >
            <span>Próximo</span>
          </button>
        )}
      </div>
    </div>
  );
}
