import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens/LoginScreen';

import { RegisterScreen } from '../screens/RegisterScreen';
import { useState } from 'react';
import { HomeScreen } from '../screens/HomeScreen/HomeScreen';

//interface - arreglo usuarios
export interface User {
    id: number;
    email: string;
    password: string;
}

const Stack = createStackNavigator();

export const StackNavigator = () => {
    
    const users: User[] = [
        
        { id: 1, email: 'gabriel@gmail.com', password: '1234' },
        { id: 2, email: 'cristian@gmail.com', password: '4567' },
        { id: 3, email: 'jose@gmail.com', password: '7890' },
    ];

    
    const [listUsers, setListUsers] = useState(users);

    
    const handleAddUser = (user: User) => {
        
        setListUsers([...listUsers, user]);
    }

    return (
        <Stack.Navigator
            screenOptions={{
                cardStyle: {
                    backgroundColor: "red"
                }
            }}>
            <Stack.Screen
                options={{ headerShown: false }}
                name="Login"
                children={() => <LoginScreen users={listUsers} />} />
            <Stack.Screen
                options={{ headerShown: false }}
                name="Register"
                children={() => <RegisterScreen users={listUsers} handleAddUser={handleAddUser} />} />
            <Stack.Screen
                options={{ headerShown: false }}
                name='Home'
                component={HomeScreen}
            />
        </Stack.Navigator>
    );
}