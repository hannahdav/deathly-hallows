/**
 * DealthlyDating React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from 'react';
import { View, Image, StatusBar } from 'react-native';
import {
    Container,
    Header,
    DeckSwiper,
    Card,
    CardItem,
    Text,
    Left,
    Icon,
    Button,
    Content
} from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';

import personService from '../services/person.service';
// import { Person } from '../models/person';
import styles from '../styles/DeathlyStyles';

export default class SwipeScreen extends Component {
    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);

        this.state = {
            data: []
        }
    }

    render() {
        return (
            <Container>
                <Header transparent style={styles.header}>
                    <View>
                        <StatusBar barStyle="light-content" />
                    </View>
                    <Left>
                        <Button transparent light onPress={() => this.props.navigation.navigate('Welcome')}>
                            <Icon name='arrow-back' />
                            <Text>Profile</Text>
                        </Button>
                    </Left>
                </Header>
                <Content contentContainerStyle={styles.container}>
                    <View>
                        <DeckSwiper
                            dataSource={this.state.data}
                            renderItem={this._renderItem}
                        />
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button warning style={styles.depulso}>
                            <AntDesign name='frowno' style={styles.buttonIcon}/>   
                            <Text note style={styles.buttonText}>
                                Depulso
                            </Text>
                        </Button>
                        <Button info style={styles.accio}>
                        <AntDesign name='smileo' style={styles.buttonIcon}/>   
                            <Text note style={styles.buttonText}>
                                Accio
                            </Text>
                        </Button>
                    </View>
                </Content>
            </Container>
        );
    }

    componentDidMount() {
        this._getPeople();
    }

    _getPeople() {
        switch (this.props.navigation.getParam('gender')) {
            case 'M':
                personService.getPeopleByGender('male')
                    .then(results => {
                        this.setState({ data: [...results] });
                    })
                    .catch(error => {
                        console.log('Something went wrong!');
                    })
            case 'W':
                personService.getPeopleByGender('female')
                    .then(results => {
                        this.setState({ data: [...results] });
                    })
                    .catch(error => {
                        console.log('Something went wrong!');
                    })
            default:
                personService.getRandomPeople()
                    .then(results => {
                        this.setState({ data: [...results] });
                    })
                    .catch(error => {
                        console.log('Something went wrong!');
                    })

        }
    }

    _renderItem = ({ item }) => {
        return (
            <Card style={{ elevation: 3 }}>
                <CardItem cardBody>
                    <Image style={{ height: 300, flex: 1 }} source={item.img} />
                </CardItem>
                <CardItem>
                    <Icon name="heart" style={{ color: '#ED4A6A' }} />
                    <Text>{item.firstName}</Text>
                </CardItem>
            </Card>
        );
    };
}
