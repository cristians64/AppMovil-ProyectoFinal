import React, { useState } from 'react';
import { Alert, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { TitleComponent } from '../components/TitleComponent';

import { BodyComponent } from '../components/BodyComponent';
import { styles } from '../theme/appTheme';
import { InputComponent } from '../components/InputComponent';
import { ButtonComponent } from '../components/ButtonComponent';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { User } from '../navigator/StackNavigator';



interface Props {
    users: User[];  
}


interface FormLogin {
    email: string;
    password: string;
}

export const LoginScreen = ({ users }: Props) => {
    
    const [formLogin, setFormLogin] = useState<FormLogin>({
        email: '',
        password: ''
    });

    
    const [hiddenPassword, setHiddenPassword] = useState<boolean>(true);

    
    const navigation = useNavigation();

    
    const handleSetValues = (name: string, value: string) => {
        
        setFormLogin({ ...formLogin, [name]: value })
    }

    
    const handleSingIn = () => {
        
        if (!formLogin.email || !formLogin.password) {
            
            Alert.alert(
                'Atencion',
                'Por favor, ingrese valores en todos los campos!'
            );
            return;
        }

        
        if (!verifyUser()) {
            Alert.alert(
                'Error',
                'Correo y/o contraseña incorrecta!'
            );
            return;
        }

        
        navigation.dispatch(CommonActions.navigate({ name: 'Home' }));
        
    }

    
    const verifyUser = () => {
        const existUser = users.filter(user => user.email === formLogin.email && user.password === formLogin.password)[0];
        return existUser; 
    }

    return (
        <View>
            <StatusBar backgroundColor={"red"} />
            <TitleComponent title='Iniciar Sesión' />
            <BodyComponent>
                <View>
                    <Text style={styles.titleBody}>Hola como estas este dia</Text>
                    
                </View>
                <View style={styles.contentInputs}>
                    <InputComponent
                        placeholder='Correo'
                        handleSetValues={handleSetValues}
                        name={'email'} />
                    <InputComponent
                        placeholder='Contraseña'
                        handleSetValues={handleSetValues}
                        name={'password'}
                        isPassword={hiddenPassword}
                        hasIcon={true}
                        accionIcon={() => setHiddenPassword(!hiddenPassword)} />
                </View>
                <ButtonComponent textButton='Iniciar Sesion' onPress={handleSingIn} />
                <TouchableOpacity
                    onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Register' }))}>
                    <Text
                        style={styles.textRedirection}>
                        No tienes una cuenta? Regístrate
                    </Text>
                </TouchableOpacity>
            </BodyComponent>
        </View>
    )
}
