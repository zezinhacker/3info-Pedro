import { QuerySnapshot, collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Text, TextInput } from "react-native-paper";
import { db } from "../config/firebase";
import { View } from "react-native";
import { FlatList } from "react-native-web";


export default function FrutaScreen() {
    const [busca, setBusca] = useState('');
    const [resultado, setResultado] = useState([]);



    async function buscarFruta() {
        const FrutaRef = collection(db, 'fruta');
        const buscarFruta = query(FrutaRef, where('nome', '==', busca));
        const resultadoSnapshot = await getDocs(buscarFruta);
        const frutaTemp = [];
        resultadoSnapshot.forEach(
            (doc) => {
                frutaTemp.push(doc.data())
            },
            setResultado(frutaTemp)
        );

    }

    useEffect(
        () => {
            buscarFruta(busca);
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
            <FlatList
                data={resultado}
                renderItem={({item}) => <Text>Fruta: {item.nome}, quantidade: {item.quantidade}</Text>}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}