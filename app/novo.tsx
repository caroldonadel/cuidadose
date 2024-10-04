import {Button, Text, TextInput, View} from "react-native";
import {useState} from "react";
import {Picker} from "@react-native-picker/picker";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StorageService} from "@/services/StorageService";


export default function Novo() {
    const [nome, setNome] = useState("");
    const [horario, setHorario] = useState("");
    const [tipo, setTipo] = useState("");
    const [dose, setDose] = useState("");
    const [vezes, setVezes] = useState("");

    const formReset = () => {
        setNome("");
        setHorario("");
        setTipo("");
        setDose("");
        setVezes("");
    }
    const handleSubmit = async () => {
        const medicamento = {
            id:  crypto.randomUUID(),
            nome: nome,
            horario: horario,
            tipo: tipo,
            dose: dose,
            vezes: vezes,
        }

        const response = await StorageService.addItem('medicamentos', medicamento);
        if (!response) {
            alert("Ops ocorreu um erro");
            return;
        }

        alert('Medicamento adicionado com sucesso');
        formReset();
        return;
    }

    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Text>Cadastro</Text>
            <TextInput
                placeholder="Nome do remédio"
                onChangeText={(text) => setNome(text)}
                value={nome}
            />
            <Picker
                selectedValue={tipo}
                onValueChange={(itemValue, itemIndex) =>
                    setTipo(itemValue)
                }>
                <Picker.Item label="Comprimido" value="comprimido" />
                <Picker.Item label="Xarope" value="xarope" />
                <Picker.Item label="Aerosol (Bombinha)" value="aerosol" />
                <Picker.Item label="Pomada" value="pomada" />
            </Picker>
            <TextInput
                placeholder="Informe a dose"
                onChangeText={(text) => setDose(text)}
                value={dose}
            /> <Text>ml/comprimidos/pufs</Text>
            <Picker
                selectedValue={vezes}
                onValueChange={(itemValue, itemIndex) =>
                    setVezes(itemValue)
                }>
                <Picker.Item label="1 vez ao dia" value="1" />
                <Picker.Item label="2 vezes ao dia (de 12 em 12 horas)" value="2" />
                <Picker.Item label="3 vezes ao dia (de 8 em 8 horas)" value="3" />
                <Picker.Item label="4 vezes ao dia (de 6 em 6 horas)" value="4" />
            </Picker>
            <TextInput
                placeholder="Informe o horário"
                onChangeText={(text) => setHorario(text)}
                value={horario}
            />
            <Button title="Cadastrar" onPress={handleSubmit} />
        </View>
    );
}
