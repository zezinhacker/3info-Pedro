import { collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Text, TextInput } from "react-native-paper";
import { db } from "../config/firebase";
import { View } from "react-native";


export default function AnimalScreen() {
    const [busca, setBusca] = useState('');
    const [resultado, setResultado] = useState([]);



    async function buscarAnimal() {
        const animalRef = collection(db, 'fruta');
        const buscarAnimal = query(AnimalRef, where('nome', '==', 'busca'));
        const resultadoSnapshot = await getDocs(buscarAnimal);

        const listaAnimal = resultadoSnapshot.docs.map(doc => doc.data());
        console.log(listaAnimal);
        setResultado(listaAnimal);

    }

    useEffect(
        () => {
            console.log('busca', busca);
        }, [busca]
    )
    return (
        <View>
            <Text>Animal Screen</Text>
            <TextInput
            label="Faça sua Busca"
            value={busca}
            onChangeText={setBusca}
            />
        </View>
    )
}