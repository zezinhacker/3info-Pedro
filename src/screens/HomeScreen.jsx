import {View} from 'react-native';
import {Text, Button } from 'react-native';

export default function HomeScreen({navigation}) {
    return (
        <View>
            <Text>Home Screen</Text>
            <Button mode ="contained" title="Buscar animal" onPress={() => {navigation.navigate("AnimalScreen")}}/>
            <Button mode ="contained" title="Buscar carro" onPress={() => {navigation.navigate("CarroScreen")}}/>
            <Button mode ="contained" title="Buscar cor" onPress={() => {navigation.navigate("CorScreen")}}/>
            <Button mode ="contained" title="Buscar fruta" onPress={() => {navigation.navigate("FrutaScreen")}}/>
            <Button mode ="contained" title="Buscar pessoa" onPress={() => {navigation.navigate("PessoaScreen")}}/>
            <Button mode ="contained" title="Buscar produto" onPress={() => {navigation.navigate("ProdutoScreen")}}/>
        </View>
    )
}