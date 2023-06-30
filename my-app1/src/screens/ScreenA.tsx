import React from 'react';
import { View,StyleSheet,Button, TouchableOpacity,Text,TextInput } from 'react-native';

import { useNavigation } from '@react-navigation/native';

export function ScreenA() {
  const navigation = useNavigation();

  function opencadastro(){
    navigation.navigate('screenB');
  }
function openCriarConta(){
  navigation.navigate('screenC')
}


    return (
    <View style={styles.container}>
            <Text style={styles.titulo}>MyShopping</Text>
     <Text style={styles.texto2}>Monte sua lista de compras para te ajudar nas compras</Text>
     <TextInput 
        style={styles.email}
         placeholder='E-mail'
         />
         <TextInput 
        style={styles.senha}
         placeholder='Senha'
         />
     <TouchableOpacity style={styles.btn}>
      <Text style={styles.btntxt}> Entrar</Text>
     </TouchableOpacity>
    
     <TouchableOpacity style={styles.btn2}onPress={opencadastro}
>
      <Text style={styles.btntxt2}>Criar minha conta</Text>
     </TouchableOpacity>
     
     <TouchableOpacity style={styles.btn3} onPress={openCriarConta}>
      <Text style={styles.btntxt3}>Recuperar senha</Text>
     </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems:'center',
    justifyContent:'center',
  },
titulo:{
color:'#6364A4',
fontSize: 32,
fontWeight:'bold'
},
texto2:{
marginBottom:40
},
senha:{
backgroundColor:'#F2F2F2',
width:"85%",
border:2,
borderRadius:5,
padding:15,
},
email:{
  backgroundColor:'#F2F2F2',
width:"85%",
border:2,
borderRadius:5,
padding:15,
marginBottom:10
},
btn:{
  backgroundColor:'#33B675',
  width:"85%",
  border:2,
  borderRadius:5,
  padding:15,
  marginTop:10,
  justifyContent:'center',
  alignItems:'center',
  marginBottom:15,
},
btntxt:{
  color:'white'
},

btn2:{
  backgroundColor:'#F2F2F2',
  Width:"50%",
  border:2,
  borderRadius:5,
  position:'relative',
  right:90,
},
btntxt2:{
padding:5,
},
btn3:{
  backgroundColor:'#F2F2F2',
  Width:"50%",
  border:2,
  borderRadius:5,
  position:'relative',
  right:-90,
  bottom:29,
},
btntxt3:{
padding:5,
},

})