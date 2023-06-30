import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View,StyleSheet,Button,TextInput,TouchableOpacity,Text } from 'react-native';


export function ScreenB() {
  const navigation = useNavigation();

  function openlogin(){
    navigation.navigate('screenA');
  }



    return (
    <View style={styles.container}>
                   <Text style={styles.titulo}>MyShopping</Text>
     <Text style={styles.texto2}>Monte sua lista de compras para te ajudar nas compras</Text>
     <TextInput 
        style={styles.nome}
         placeholder='Nome'
         />
         <TextInput 
        style={styles.email}
         placeholder='E-mail'
         />
         <TextInput 
        style={styles.senha}
         placeholder='Senha'
         />
        
     <TouchableOpacity style={styles.btn}>
      <Text style={styles.btntxt}>Cadastrar</Text>
     </TouchableOpacity>
    
     <TouchableOpacity style={styles.btn2}onPress={openlogin}>
      <Text style={styles.btntxt2}>Voltar ao Login</Text>
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
nome:{
  backgroundColor:'#F2F2F2',
  width:"85%",
  border:2,
  borderRadius:5,
  padding:15,
  marginBottom:10
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