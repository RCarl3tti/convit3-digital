import { button, gapY4, itemsCenter, py1, roundedFull, textWhite } from "@/style";
import { Image, Pressable, Text, View } from "react-native";
import { useCameraPermissions } from "expo-camera";



export default function NovoEvento() {

    const [permissao, solicitarPermissao] = useCameraPermissions();

    if (!permissao || !permissao.granted) {
        return (
            <View>
                <Text>Permissão de câmera negada!</Text>
                <Pressable onPress={solicitarPermissao}>
                    <Text style={[textWhite]}>Solicitar Permissão</Text>
                </Pressable>
            </View>
        )
    }

    return (
        <View style={[itemsCenter, gapY4]}>
            <View>
                <Pressable>
                    <Image source={require("@/assets/images/qrcode.png")} 
                    style={{ width: 80, height: 80 }}
                    />
                </Pressable>
            </View>
            <View style={[button, py1, roundedFull]}>
                <Text style={textWhite}>Novo Evento</Text>
            </View>
                
        </View>
    )
}