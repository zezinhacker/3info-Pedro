import { collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Text, TextInput } from "react-native-paper";
import { db } from "../config/firebase";
import { View } from "react-native";


export default function HomeScreen() {
    const[busca, setBusca] = useState('');
    const [resultado, setResultado] = useState([]);



    async function buscarProdutos() {
        const produtoRef = collection(db, 'produtos');
        const buscarProduto = query(produtoRef, where('nome', '==', 'busca'));
        const resultadoSnapshot = await getDocs(buscarProduto);

        const listaProdutos = resultadoSnapshot.docs.map(doc => doc.data());
        console.log(listaProdutos);
        setResultado(listaProdutos);

    }

    const {busca, setBusca} = useState('');

    useEffect(
        () => {
            console.log('busca', busca);
        }, [busca]
    )
    return (
        <View>
            <Text>Home Screen</Text>
            <TextInput
            label="Faça sua Busca"
            value={busca}
            onChangeText={setBusca}
            />
        </View>
    )
}