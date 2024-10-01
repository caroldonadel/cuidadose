import {Button, Text, View} from "react-native";
import {Link} from "expo-router";

export default function Index() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Text>Boas vindas, use umas opções abaixo para continuar</Text>
            <Link href={"/remedios"}>
                <Button title={"Remédios"}/>
            </Link>
            <Link href={"/novo"}>
                <Button title={"Novo Remédio"}/>
            </Link>
        </View>
    );
}
