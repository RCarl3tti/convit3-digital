"use client";
import InformacoesEvento from "@/components/evento/InformacoesEvento";
import Janela from "@/components/shared/Janela";
import useEvento from "@/data/hooks/useEvento";
import { Evento } from "core";

export default function EventoSucesso() {
  const { evento } = useEvento();
  return evento ? (
    <Janela
      label="Seu evento foi criado:"
      titulo={evento.nome}
      imagem={evento.imagem}
      background={evento.imagemBackground}
    >
      <InformacoesEvento esconderNome evento={evento as Evento} />
    </Janela>
  ) : null;
}
