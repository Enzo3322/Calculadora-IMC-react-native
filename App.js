import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  function handlerSubmit(){
    const alt = altura /100;
    const imc = peso / (alt*alt);
    alert(imc);
  }

  return (
    <View style={styles.container}>
     <Text style={styles.title}>Calcule seu IMC</Text>

    <TextInput
    style={styles.input}
    value={peso}
    onChangeText={(peso) => setPeso (peso)}
    placeholder="Peso (kg)"
    keyboardType="numeric"
    />
  
    <TextInput
    style={styles.input}   
    value={altura}
    onChangeText={(altura) => setAltura (altura)}
    placeholder="Altura (cm)"
    keyboardType="numeric"
    />

    <TouchableOpacity 
    style={styles.button}
    onPress={handlerSubmit}
    >
      <Text style={styles.buttonText}>Calcular</Text>
    </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title:{
    fontSize:30,
    marginTop:25,
    textAlign:'center'
  },
  input:{
    backgroundColor: '#121212',
    borderRadius: 10,
    margin:15,
    padding:10,
    color: '#FFF',
    fontSize:23,
  },
  button:{
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    backgroundColor:'#41Aef4',
    padding: 10,
  },
  buttonText:{
    color:'#FFF',
    fontSize:25,
  }
});
