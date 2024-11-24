import { Convidado, Evento } from "core"
import InformacoesEvento from "./InformacoesEvento"
import AcessarViaQRCode from "./AcessarViaQRCode"
import Estatistica from "../share/Estatistica"
import ListaConvidados from "./ListaConvidados";

export interface DashboardEventoProps {
    evento: Evento;
    presentes: Convidado[];
    ausentes: Convidado[];
    totalGeral: number;
}



export default function DashboardEvento(props: DashboardEventoProps) {
    return (
        <div className="flex flex-col gap-2">
            <div className="flex gap-2 self-stretch">
                <InformacoesEvento evento={props.evento} className="flex-1"/>
                <AcessarViaQRCode evento={props.evento}/>
            </div>
            <div className="grid grid-cols-3 gap-6 mt-4">
                <Estatistica
                    texto="Expectativa de Convidados:"
                    valor={props.evento.publicoEsperado}
                    imagem="/icones/convidados.svg"
                />
                <Estatistica
                    texto="Confirmações:"
                    valor={props.presentes.length}
                    imagem="/icones/confirmados.svg"
                />
                <Estatistica
                    texto="Total de Confirmado:"
                    valor={props.totalGeral}
                    imagem="/icones/acompanhantes.svg"
                />
            </div>

            <button className="botao azul self-end mt-12">
                <span>Atualizar Lista de Convidados</span>
            </button>

            <span className="flex py-2 text-xl font-bold text-white/80">Convidados que CONFIRMARAM PRESENÇA</span>
            <ListaConvidados convidados={props.presentes}/>
            <span className="flex py-2 text-xl font-bold text-white/80">Convidados que CONFIRMARAM AUSENCIA</span>
            <ListaConvidados convidados={props.ausentes}/>
        </div>
    )
}