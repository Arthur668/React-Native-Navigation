import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Screen, Navigator } = createNativeStackNavigator();

import { ScreenA } from '../screens/ScreenA';
import { ScreenB } from '../screens/ScreenB';

export function StackRoutes(){
    return(
        <Navigator>
            <Screen
                name='screenA'
                component={ScreenA}
                options={{
                    title:'Home',
                    headerTitleAlign:'center'
                }}
                />
                <Screen
                name='screenB'
                component={ScreenB}
                options={{
                    title:'Home2',
                    headerTitleAlign:'center',
                    headerStyle:{
                        backgroundColor:'navy',
                    },
                    headerTintColor:'white',
                }}
                />
        </Navigator>
    )
}