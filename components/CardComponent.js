import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import { Card, ListItem, Avatar} from 'react-native-elements';
import img from '../assets/img-1.2.png';
import HomeIconWithBadge from "./IconWithBadge";

const users = [
    {
        name: 'Marianne',
        age: 28,
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    },
];
export default class CardComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            scroll: true,
        }
    }
    disableScroll() {
        this.setState({scroll: !this.state.scroll});
    }
    render() {
        return (
            <ScrollView style={styles.container}>
                <Card containerStyle={{padding: 0}} >
                    {
                        users.map((u, i) => {
                            return (
                                <View key={i} style={styles.avatar}>
                                    <Avatar
                                        rounded
                                        source={img}
                                        size="medium"
                                    />
                                    <Text
                                    style={{marginTop:10,marginBottom:10}}>{u.name}</Text>
                                    <Text
                                    style={{marginLeft:15}}>{u.age}</Text>
                                </View>
                            );
                        })
                    }
                </Card>
                <Card>
                    <Image source={require('../assets/img-5.1.png')} style={{height: 200, width: null, flex: 1}}/>
                    <View style={{flexDirection: 'row'}}>
                        <HomeIconWithBadge
                            name={'ios-heart'}
                            size={25}
                            color={'black'}
                        />
                        <HomeIconWithBadge
                            name={'ios-chatbubbles'}
                            size={25}
                            color={'black'}
                        />
                        <HomeIconWithBadge
                            name={'ios-send'}
                            size={25}
                            color={'black'}
                        />
                    </View>
                    <Text>1099 likes</Text>
                    <Text>Not everything is fleeting. Some feelings are deep. The fact it isn’t close to me, that I can understand. But I find it sad it isn’t close to you.When you don’t know what to say, you touch your forehead. When you lose control, you raise your eyebrows. And when you’re troubled, you breathe through your mouth.</Text>
                </Card>
                <Card>
                    <Image source={require('../assets/img-1.1.png')} style={{height: 200, width: null, flex: 1}}/>
                    <View style={{flexDirection: 'row'}}>
                        <HomeIconWithBadge
                            name={'ios-heart'}
                            size={25}
                            color={'black'}
                        />
                        <HomeIconWithBadge
                            name={'ios-chatbubbles'}
                            size={25}
                            color={'black'}
                        />
                        <HomeIconWithBadge
                            name={'ios-send'}
                            size={25}
                            color={'black'}
                        />
                    </View>
                    <Text>2088 likes</Text>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam viverra sapien aliquet tortor mattis, in placerat eros laoreet. Quisque finibus a mauris vel eleifend. Maecenas a elit at leo ullamcorper efficitur. Nam porta aliquet interdum. Ut suscipit accumsan augue vel convallis. Nulla scelerisque, elit eu ullamcorper facilisis, augue lacus porttitor massa, sit amet tempus urna elit vitae elit. Etiam et dui et ante rutrum rutrum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam quis nisi odio. Quisque eu erat orci.</Text>
                </Card>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    avatar: {
         justifyContent: "center",
        paddingLeft:10,
        marginTop:5

    }
});
