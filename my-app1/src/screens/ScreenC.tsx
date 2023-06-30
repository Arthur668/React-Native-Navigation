import React from 'react';
import { View,StyleSheet,Button } from 'react-native';

import { useNavigation } from '@react-navigation/native';

export function ScreenC() {

    const navigation  = useNavigation();

    function openscreen(){
      navigation.navigate('screenA')
    }

    return (
    <View style={styles.container}>
        <Button title='Voltar para A'
                color= "blue"

                onPress={openscreen}
                />

    </View>
  );
}

const styles = StyleSheet.create({
        container:{
            flex:1,
            backgroundColor:"blue",
            justifyContent:"center"
        }

})