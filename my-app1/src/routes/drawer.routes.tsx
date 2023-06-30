import { createDrawerNavigator } from '@react-navigation/drawer';

const { Screen, Navigator } = createDrawerNavigator();

import { ScreenA } from '../screens/ScreenA';
import { ScreenB } from '../screens/ScreenB';
import { ScreenC } from '../screens/ScreenC';

export function DrawerRoutes(){
    return(
        <Navigator screenOptions={{
            headerShown:false
        }}> 
           
            <Screen
                name='screenA'
                component={ScreenA}
                options={{
                    drawerLabel:'Login'
                }}
                />
                <Screen
                name='screenB'
                component={ScreenB}
                options={{drawerLabel:'Cadastrar'}}
                />
                 <Screen
                name='screenC'
                component={ScreenC}
               options={{
                drawerLabel:'Recuperar Senha'
               }}
                />

        </Navigator>
    )
}