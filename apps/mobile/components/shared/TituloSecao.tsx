import { Text } from "react-native";
import { fontBold, py4, selfCenter, textXl, textZinc400 } from "@/style";



export interface TituloSecaoProps {
    texto: string;
}

export default function TituloSecao(props: TituloSecaoProps) {
    return (
        <Text style={[textXl, fontBold, py4, textZinc400, selfCenter]}>
            {props.texto}
        </Text>
    );
}