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
    Content,
    H1
} from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';

import personService from '../services/person.service';
// import { Person } from '../models/person';
import styles from '../styles/DeathlyStyles';

const samples = [
    'Did you ever hear the tragedy of Darth Plagueis The Wise? I thought not. It’s not a story the Jedi would tell you. It’s a Sith legend.',
    'Darth Plagueis was a Dark Lord of the Sith, so powerful and so wise he could use the Force to influence the midichlorians to create life… He had such a knowledge of the dark side that he could even keep the ones he cared about from dying.',
    'The dark side of the Force is a pathway to many abilities some consider to be unnatural. He became so powerful… the only thing he was afraid of was losing his power, which eventually, of course, he did.',
    'Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his sleep. Ironic. He could save others from death, but not himself.'
];

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
                <Content style={{backgroundColor: '#1F0318', paddingBottom: 370, paddingTop: 10}}>
                    {(this.state.data.length > 0) ?
                        <DeckSwiper
                            ref={(ref) => this._deckSwiper = ref}
                            dataSource={this.state.data}
                            renderItem={item =>
                                <Card style={{flex:1, backgroundColor:'#4b033d', borderRadius: 20}}>
                                    <CardItem bordered style={{flex:1, backgroundColor:'#4b033d', borderTopLeftRadius: 20, borderTopRightRadius: 20}}>
                                        <Image style={{height: 300, flex: 1}} source={{uri: item.img}}/>
                                    </CardItem>
                                    <CardItem style={{flex:1, backgroundColor:'#4b033d'}}>
                                        <Icon name="heart" style={{color: '#ED4A6A'}}/>
                                        <Text>
                                            {item.firstName}
                                            {" "}{item.lastName}
                                            {" - "}{item.age}
                                        </Text>
                                    </CardItem>
                                    <CardItem style={{flex:2, backgroundColor:'#4b033d', borderBottomLeftRadius: 20, borderBottomRightRadius: 20}}>
                                        <Text>
                                            {item.bio}
                                        </Text>
                                    </CardItem>
                                </Card>}
                            //onSwipeRight={() => }
                            //onSwipeLeft={() => }
                            //^^ Functions to call on swipe
                        />
                        :
                        <H1 style={[styles.logo, {fontSize: 25}]}>...Just a few more seconds</H1>
                    }
                </Content>
                <Content contentContainerStyle={styles.container}>
                    <View>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button warning style={styles.depulso} onPress={() => this._deckSwiper._root.swipeLeft()}>
                            <AntDesign name='frowno' style={styles.buttonIcon}/>
                            <Text note style={styles.buttonText}>
                                Depulso
                            </Text>
                        </Button>
                        <Button info style={styles.accio} onPress={() => this._deckSwiper._root.swipeRight()}>
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

    _renderPeople() {
        if (this.state.data.length > 0) {
            return (
                <DeckSwiper
                    ref={(ref) => this._deckSwiper = ref}
                    dataSource={this.state.data}
                    renderItem={item =>
                        <Card>
                            <CardItem cardBody>
                                <Image style={{height: 300, flex: 1}} source={{uri: item.img}}/>
                            </CardItem>
                            <CardItem>
                                <Icon name="heart" style={{color: '#ED4A6A'}}/>
                                <Text>{item.firstName}{" "}{item.lastName}{" "}{item.age}{" "}{item.gender}</Text>
                            </CardItem>
                        </Card>}
                    //onSwipeRight={() => }
                    //onSwipeLeft={() => }
                    //^^ Functions to call on swipe
                />
            );
        }
        else{
            return (
                <Text style={styles.depulso}>...Just a few more seconds</Text>
            );
        }
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
