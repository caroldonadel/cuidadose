import {Text, View} from "react-native";
import {useEffect, useState} from "react";
import {StorageService} from "@/services/StorageService";
import {FlatList} from "react-native-gesture-handler";

export default function Remedios() {
    const [medicamentos, setMedicamentos] = useState([]);

    const loadMedicamentos = async () => {
        const listMedicamentos = await StorageService.getAll('medicamentos');
        setMedicamentos(listMedicamentos);
    }

    const renderMedicamento = (medicamento) => {
        console.log(medicamento);
        return (
            <View>
                <Text>Nome: {medicamento.item.nome}</Text>
                <Text>Tipo: {medicamento.item.tipo}</Text>
                <Text>Dose: {medicamento.item.dose}</Text>
                <Text>Vezes: {medicamento.item.vezes}</Text>
                <Text>Horário: {medicamento.item.horario}</Text>
            </View>
        );
    }

    useEffect(() => {
        loadMedicamentos();
    }, []);

    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <FlatList
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={() => (
                    <View style={{ height: 1, backgroundColor: 'gray', marginBottom: '12px' }} />
                )}
                data={medicamentos} renderItem={renderMedicamento} />
        </View>
    );
}
