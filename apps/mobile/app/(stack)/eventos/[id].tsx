import EventoNaoEncontrado from "@/components/evento/EventoNaoEncontrado";
import InformacoesEvento from "@/components/evento/informacoesEvento";
import useEventos from "@/data/hooks/useEventos";
import { bgBlack, flex1, gapY4, p4, py4, roundedLg, wFull } from "@/style";
import { useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { Image, SafeAreaView, ScrollView } from "react-native";
import 'react-native-get-random-values'; // Adiciona o suporte ao getRandomValues


export default function TelaDetalheEvento() {
    const params = useLocalSearchParams();
    const { evento, selecionarEvento } = useEventos();

    useEffect(() => {
        selecionarEvento(params.id as string) ;
    }, [params.id]);


    return evento ? (
        <SafeAreaView style={[flex1, bgBlack, p4]}>
            <ScrollView contentContainerStyle={[gapY4, py4]}>
                <Image source={{ uri: evento.imagem }} style={[wFull, roundedLg, { height: 200 }]} /> 
                <InformacoesEvento evento={evento} />
            </ScrollView>
        </SafeAreaView>
    ) : (
        <EventoNaoEncontrado />
    );
}