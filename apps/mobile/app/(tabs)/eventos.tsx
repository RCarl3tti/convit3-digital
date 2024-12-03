import EventoCard from "@/components/evento/eventoCard";
import SemEventos from "@/components/evento/SemEventos";
import useEventos from "@/data/hooks/useEventos";
import { bgBlack, flex1, gapY4, p4, py8 } from "@/style";
import { useRouter } from "expo-router";
import { Pressable, SafeAreaView, ScrollView } from "react-native";
import 'react-native-get-random-values'; // Adiciona o suporte ao getRandomValues


export default function TelaEventos() {
  const { eventos } = useEventos();
  const router = useRouter();
  return (
    <SafeAreaView style={[flex1, bgBlack, p4]}>
      {eventos.length === 0 && <SemEventos />}
      <ScrollView contentContainerStyle={[gapY4, py8]}>
        {eventos.map((evento) => (
          <Pressable
            key={evento.id}
            onPress={() => router.push(`/eventos/${evento.id}`)}
          >
            <EventoCard evento={evento} />
          </Pressable>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
