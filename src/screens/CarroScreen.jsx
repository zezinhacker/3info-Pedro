import { collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Text, TextInput } from "react-native-paper";
import { db } from "../config/firebase";
import { View } from "react-native";


export default function CarroScreen() {
    const [busca, setBusca] = useState('');
    const [resultado, setResultado] = useState([]);



    async function buscarCarro() {
        const CarroRef = collection(db, 'carro');
        const buscarCarro = query(carroRef, where('nome', '==', 'busca'));
        const resultadoSnapshot = await getDocs(buscarCarro);

        const listaCarro = resultadoSnapshot.docs.map(doc => doc.data());
        console.log(listaCarro);
        setResultado(listaCarro);

    }

    useEffect(
        () => {
            console.log('busca', busca);
        }, [busca]
    )
    return (
        <View>
            <Text>Carro Screen</Text>
            <TextInput
            label="Faça sua Busca"
            value={busca}
            onChangeText={setBusca}
            />
        </View>
    )
}