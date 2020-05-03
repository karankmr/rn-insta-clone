import React, {Component} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeTab from "./AppTabNavigator/HomeTab";
import SearchTab from "./AppTabNavigator/SearchTab";
import AddMediaTab from "./AppTabNavigator/AddMediaTab";
import LikesTab from "./AppTabNavigator/LikesTab";
import ProfileTab from "./AppTabNavigator/ProfileTab";
import HomeIconWithBadge from "./IconWithBadge";

const Tab = createBottomTabNavigator();

export default class MainScreen extends Component{
    render() {
        return (
                <Tab.Navigator
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                            if (route.name === 'Home') {
                                return (
                                    <HomeIconWithBadge
                                        name={'ios-home'}
                                        size={25}
                                        color={color}
                                    />
                                );
                            }
                            if (route.name === 'Search') {
                                return (
                                    <HomeIconWithBadge
                                        name={'ios-search'}
                                        size={25}
                                        color={color}
                                    />
                                );
                            }
                            if (route.name === 'AddMedia') {
                                return (
                                    <HomeIconWithBadge
                                        name={'ios-add-circle-outline'}
                                        size={25}
                                        color={color}
                                    />
                                );
                            }
                            if (route.name === 'Likes') {
                                return (
                                    <HomeIconWithBadge
                                        name={'ios-heart'}
                                        size={25}
                                        color={color}
                                        badgeCount={9}
                                    />
                                );
                            }
                            else if (route.name === 'Profile') {
                                return (
                                    <HomeIconWithBadge
                                        name={'ios-person'}
                                        size={25}
                                        color={color}
                                    />
                                );
                            }
                        },
                    })}
                    tabBarOptions={{
                        activeTintColor: 'tomato',
                        inactiveTintColor: 'gray',
                    }}
                >
                    <Tab.Screen name="Home" component={HomeTab} />
                    <Tab.Screen name="Search" component={SearchTab} />
                    <Tab.Screen name="AddMedia" component={AddMediaTab} />
                    <Tab.Screen name="Likes" component={LikesTab} />
                    <Tab.Screen name="Profile" component={ProfileTab} />
                </Tab.Navigator>
        );
    }
}
