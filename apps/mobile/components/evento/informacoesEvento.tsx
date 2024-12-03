import { gapY2 } from "@/style";
import { Evento } from "core";
import { View } from "react-native";
import Informacao from "../shared/informacao";

export interface InformacoesEventoProps {
    evento: Evento;
}



export default function InformacoesEvento(props: InformacoesEventoProps) {
    return (
        <View style={[gapY2]}>
            <Informacao label="Nome">{props.evento.nome}</Informacao>
        </View>
    );
}