import React from 'react';
import { View,StyleSheet,Button } from 'react-native';

import { useNavigation } from '@react-navigation/native';

export function ScreenA() {
  const navigation = useNavigation();

  function openscreen(){
    navigation.navigate('screenB');
  }

    return (
    <View style={styles.container}>
        <Button title='Ir para a Screen A'
                color= "red"
                onPress={openscreen}
                />

    </View>
  );
}

const styles = StyleSheet.create({
        container:{
            flex:1,
            backgroundColor:"red",
            justifyContent:"center"
        }

})