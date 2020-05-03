import React, {Component} from 'react';
import MainScreen from "./components/MainScreen";
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeIconWithBadge from "./components/IconWithBadge";

export default class App extends Component{
    render() {
        const Stack = createStackNavigator();
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Instagram"
                        component={MainScreen}
                        options={{
                            headerLeft:({ focused, color, size })=> {
                                return (
                                    <HomeIconWithBadge
                                        name={'ios-camera'}
                                        size={30}
                                        color={color}
                                    />
                                );
                            },
                            title: "Instagram",
                            headerRight:({ focused, color, size })=> {
                                return (
                                    <HomeIconWithBadge
                                        name={'ios-send'}
                                        size={30}
                                        color={color}
                                    />
                                );
                            },
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}
