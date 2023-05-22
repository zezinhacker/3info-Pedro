import { collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Text, TextInput } from "react-native-paper";
import { db } from "../config/firebase";
import { View } from "react-native";


export default function CorScreen() {
    const [busca, setBusca] = useState('');
    const [resultado, setResultado] = useState([]);



    async function buscarCor() {
        const CorRef = collection(db, 'cor');
        const buscarCor = query(corRef, where('nome', '==', 'busca'));
        const resultadoSnapshot = await getDocs(buscarCor);

        const listaCor = resultadoSnapshot.docs.map(doc => doc.data());
        console.log(listaCor);
        setResultado(listaCor);

    }

    useEffect(
        () => {
            console.log('busca', busca);
        }, [busca]
    )
    return (
        <View>
            <Text>Cor Screen</Text>
            <TextInput
            label="Faça sua Busca"
            value={busca}
            onChangeText={setBusca}
            />
        </View>
    )
}