import { border, borderZinc800, fontBold, gapY4, px4, py2, roundedLg, textLg, textWhite, textXl, textZinc400 } from "@/style";
import { View, Text } from "react-native";
import 'react-native-get-random-values'; // Adiciona o suporte ao getRandomValues


export interface InformacaoProps {
    label: string;
    children: any;
}


export default function Informacao(props: InformacaoProps) {
    return (
        <View style={[px4, py2, gapY4, roundedLg, border, borderZinc800]}>
            <Text style={[textXl, fontBold, textWhite]}>{props.label}</Text> 
            <Text style={[textLg, textZinc400]}>{props.children}</Text>           
        </View>
    );
}