import { ProvedorEventos } from "@/data/contexts/ContextoEventos";
import { colors } from "@/style";
import { Stack } from "expo-router";
import 'react-native-get-random-values'; // Adiciona o suporte ao getRandomValues


export default function RootLayout() {
  return (
    <ProvedorEventos>
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="(stack)/eventos/[id]"
          options={{
            title: "Detalhes do Evento",
            headerBackTitle: "Voltar",
            headerTintColor: "white",
            headerStyle: {
              backgroundColor: colors.zinc[900],
            },
          }}
        />

      </ Stack>
      </ProvedorEventos>
  );
}
