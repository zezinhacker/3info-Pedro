import { collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Text, TextInput } from "react-native-paper";
import { db } from "../config/firebase";
import { View } from "react-native";


export default function ProdutoScreen() {
    const [nome, setNome] = useState('');
    const [resultado, setResultado] = useState([]);


    async function buscarProdutos(nome = null) {
        try {
            if(!nome) return
            const produtoRef = collection(db, 'produtos');
        const buscarProduto = query(produtoRef, where('nome', '==', busca));
        const resultadoSnapshot = await getDocs(buscarProduto);

        const listaProdutos = resultadoSnapshot.docs.map(doc => doc.data());
        console.log(listaProdutos);
        setResultado(listaProdutos);   
        } catch (error) {
            console.log(error);
        }

    }

    useEffect(
        () => {
            setBusca('');
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