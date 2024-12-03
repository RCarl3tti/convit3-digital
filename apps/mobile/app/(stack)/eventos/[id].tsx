import EventoNaoEncontrado from "@/components/evento/EventoNaoEncontrado";
import InformacoesEvento from "@/components/evento/informacoesEvento";
import Estatistica from "@/components/shared/Estatistica";
import useEventos from "@/data/hooks/useEventos";
import { bgBlack, flex1, flexRow, gapX2, gapY4, p4, py4, roundedLg, wFull } from "@/style";
import { Convidado } from "core";
import { useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { Image, SafeAreaView, ScrollView, View } from "react-native";
import 'react-native-get-random-values'; // Adiciona o suporte ao getRandomValues


export default function TelaDetalheEvento() {
    const params = useLocalSearchParams();
    const { evento, selecionarEvento } = useEventos();

    useEffect(() => {
        selecionarEvento(params.id as string) ;
    }, [params.id]);


    const presentes = evento?.convidados.filter((c: Convidado) => c.confirmado) ?? [];
    const ausentes = evento?.convidados.filter((c: Convidado) => !c.confirmado) ?? [];

    const totalConvidados = presentes.reduce((total, convidado) => {
        return total + convidado.qtdeAcompanhantes + 1;
    }, 0);

    return evento ? (
        <SafeAreaView style={[flex1, bgBlack, p4]}>
            <ScrollView contentContainerStyle={[gapY4, py4]}>
                <Image source={{ uri: evento.imagem }} style={[wFull, roundedLg, { height: 200 }]} /> 
                <InformacoesEvento evento={evento} />
                <View style={[flexRow, gapX2, {marginTop: 40}]}>
                    <Estatistica texto="Espectativa" valor={evento.publicoEsperado} imagem={require("@/assets/images/convidados.png")} />
                    <Estatistica texto="Confirmações" valor={presentes.length} imagem={require("@/assets/images/confirmados.png")} />
                    <Estatistica texto="Total" valor={totalConvidados} imagem={require("@/assets/images/acompanhantes.png")} />               
                </View>
            </ScrollView>
        </SafeAreaView>
    ) : (
        <EventoNaoEncontrado />
    );
}