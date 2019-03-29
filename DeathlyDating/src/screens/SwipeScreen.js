/**
 * DealthlyDating React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from 'react';
import { View, Image, StatusBar, ImageBackground } from 'react-native';
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
    Content,
    H1,
    Body,
    Right
} from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';

import personService from '../services/person.service';
import styles from '../styles/DeathlyStyles';
import bios from '../models/bios';

export default class SwipeScreen extends Component {
    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);

        this.state = {
            data: [],
        };

        this.houses = ['gryffindor', 'hufflepuff', 'ravenclaw', 'slytherin'];
        this.houseImages = [require('../resources/gryffindor.png'), require('../resources/hufflepuff.png'), require('../resources/ravenclaw.png'), require('../resources/slytherin.png')]
        this.house = null;
        this.houseImg = null;
        this.bio = null;
    }

    updatePersonInfo() {
        let hogHouse = Math.floor(Math.random() * this.houses.length)
        this.house = this.houses[hogHouse];
        this.houseImg = this.houseImages[hogHouse];
        this.bio = bios[Math.floor(Math.random() * bios.length)]
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
                <Content contentContainerStyle={styles.containerSwipe}>
                    {(this.state.data.length > 0) ?
                        <DeckSwiper
                            ref={(ref) => this._deckSwiper = ref}
                            dataSource={this.state.data}
                            renderItem={item =>
                                <Card style={styles.matchCard}>
                                    <CardItem header bordered style={{ backgroundColor: '#ede7d9' }}>
                                        <Left>
                                            <Image source={this.houseImg} style={styles.houseLogo} />
                                            <Body>
                                                <Text style={styles.matchName}>
                                                    {item.firstName + ' ' + item.lastName}
                                                </Text>
                                                <Text note>Age {item.age}</Text>
                                            </Body>
                                        </Left>

                                        <Right>
                                            <Text note style={styles.houseDesc}>
                                                {this.house}
                                            </Text>
                                        </Right>
                                    </CardItem>
                                    <CardItem cardBody bordered style={{ backgroundColor: '#ede7d9', }}>
                                        <Content padder contentContainerStyle={styles.matchImgContainer}>
                                            <Image style={styles.cardImg} source={{ uri: item.img }} />
                                        </Content>
                                    </CardItem>
                                    <CardItem bordered style={{ backgroundColor: '#ede7d9' }}>
                                        <Body style={{ padding: 5 }}>
                                            <Text note style={{ fontWeight: '600' }}>
                                                Biography
                                            </Text>
                                            <Text>
                                                {this.bio}
                                            </Text>
                                        </Body>
                                    </CardItem>
                                </Card>}
                            style={styles.deck}
                            onSwipeLeft={() => { this.updatePersonInfo() }}
                            onSwipeRight={() => { this.updatePersonInfo() }}
                        />
                        :
                        <H1 style={[styles.logo, styles.loadingText]}>Hedwig is fetching you some matches...</H1>
                    }
                    <View>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button warning style={styles.depulso}
                            onPress={() => {
                                this._deckSwiper._root.swipeLeft();
                                this.updatePersonInfo();
                            }}
                        >
                            <AntDesign name='frowno' style={styles.buttonIcon} />
                            <Text note style={styles.depulsoText}>
                                Depulso
                            </Text>
                        </Button>
                        <Button info style={styles.accio}
                            onPress={() => {
                                this._deckSwiper._root.swipeRight();
                                this.updatePersonInfo();
                            }}
                        >
                            <Text note style={styles.accioText}>
                                Accio
                            </Text>
                            <AntDesign name='smileo' style={styles.buttonIcon} />
                        </Button>
                    </View>
                </Content>
            </Container>
        );
    }

    componentDidMount() {
        this._getPeople();
        this.updatePersonInfo();
    }

    _getPeople() {
        switch (this.props.navigation.getParam('gender')) {
            case 'M':
                personService.getPeopleByGender('male')
                    .then(results => {
                        this.setState({ data: results });
                    })
                    .catch(error => {
                        console.log('Something went wrong!');
                    });
                break;
            case 'W':
                personService.getPeopleByGender('female')
                    .then(results => {
                        this.setState({ data: results });
                    })
                    .catch(error => {
                        console.log('Something went wrong!');
                    });
                break;
            default:
                personService.getRandomPeople()
                    .then(results => {
                        this.setState({ data: results });
                    })
                    .catch(error => {
                        console.log('Something went wrong!');
                    });
                break;
        }
    }
}
