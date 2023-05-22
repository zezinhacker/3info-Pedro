import { collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Text, TextInput } from "react-native-paper";
import { db } from "../config/firebase";
import { View } from "react-native";


export default function PessoaScreen() {
    const [busca, setBusca] = useState('');
    const [resultado, setResultado] = useState([]);



    async function buscarPessoa() {
        const pessoaRef = collection(db, 'pessoa');
        const buscarPessoa = query(oessoaRef, where('nome', '==', 'busca'));
        const resultadoSnapshot = await getDocs(buscarPessoa);

        const listaPessoa = resultadoSnapshot.docs.map(doc => doc.data());
        console.log(listaPessoa);
        setResultado(listaPessoa);

    }

    useEffect(
        () => {
            console.log('busca', busca);
        }, [busca]
    )
    return (
        <View>
            <Text>Pessoa Screen</Text>
            <TextInput
            label="Faça sua Busca"
            value={busca}
            onChangeText={setBusca}
            />
        </View>
    )
}