
import Logo from "@/components/template/logo";
import { bgBlack, centerGrow } from "@/style";
import { ImageBackground } from "react-native";
import 'react-native-get-random-values'; // Adiciona o suporte ao getRandomValues


export default function TelaInicio() {
  return (
    <ImageBackground 
      source={require("@/assets/images/background.png")}
      resizeMode="cover"
      style={[centerGrow ,bgBlack]}
    >

      <Logo />

    </ImageBackground>
    
  );
}
