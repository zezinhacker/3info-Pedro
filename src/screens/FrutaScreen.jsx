import { collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Text, TextInput } from "react-native-paper";
import { db } from "../config/firebase";
import { View } from "react-native";


export default function FrutaScreen() {
    const [busca, setBusca] = useState('');
    const [resultado, setResultado] = useState([]);



    async function buscarFruta() {
        const FrutaRef = collection(db, 'fruta');
        const buscarFruta = query(frutaRef, where('nome', '==', 'busca'));
        const resultadoSnapshot = await getDocs(buscarFruta);

        const listaFruta = resultadoSnapshot.docs.map(doc => doc.data());
        console.log(listaFruta);
        setResultado(listaFruta);

    }

    useEffect(
        () => {
            console.log('busca', busca);
        }, [busca]
    )
    return (
        <View>
            <Text>Fruta Screen</Text>
            <TextInput
            label="Faça sua Busca"
            value={busca}
            onChangeText={setBusca}
            />
        </View>
    )
}