import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    FlatList, 
    Switch
} from 'react-native';
// import BluetoothSerial from 'react-native-bluetooth-serial-next';
import {MaterialIcons} from '@expo/vector-icons'

export default function Bluetooth(props) {
    const lista = [
    //   {
    //     name: 'Thiago',
    //     key: '1'
    //   },
    ];

    const Empty = () => <Text style={styles.text}>Não existe dispositivos disponíveis!</Text>;
    // const BluetoothList = () =>

    return (
        <View style={styles.container}>
          <View style={styles.containerActive}>
                <Text style={styles.textActive}>Ativado</Text>
                <Switch style={styles.switch} value={props.value}
                    onValueChange={props.onValueChange}
                />
          </View>
          <View style={styles.containerTitle}>
                <Text style={styles.title}>Dispositivos disponíveis</Text>
          </View>
          <View style={styles.containerList}>
                <FlatList
                    data={lista}
                    ListEmptyComponent={<Empty />}
                    renderItem={({item}) => <Text style={styles.list}>{item.name}</Text>}
                />
          </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFD700',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerList: {
        position: 'absolute',
        backgroundColor: '#FFF',
        borderRadius: 25,
        width: 342,
        height: 300,
        top: 150,
        opacity: 0.76
    },
    list: {
        padding: 10,
    },
    text: {
        fontSize: 15,
        padding: 10
    },
    containerActive:{
        position: 'absolute',
        backgroundColor: '#FFF',
        flexDirection: 'row',
        borderRadius: 25,
        width: 360,
        height: 65,
        top: 30,
        opacity: 0.76
    },
    textActive:{
        flex: 1,
        top: 21,
        paddingLeft: 30,
        fontWeight: 'bold'
    },
    switch:{
        width: 50,
    },
    containerTitle:{
        position: 'absolute',
        flexDirection: 'row',
        borderRadius: 25,
        width: 360,
        height: 65,
        top: 120,
        left: 30,
        opacity: 0.76
    },
    title:{
        textDecorationColor: "#525252"
    }
});
