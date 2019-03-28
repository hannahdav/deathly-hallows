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
    Button
} from 'native-base';

import personService  from '../services/person.service';
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
            <View>
                {this._renderPeople()}
            </View>
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
                        this.setState({ data: results });
                    })
                    .catch(error => {
                        console.log('Something went wrong!');
                    })
            case 'W':
                personService.getPeopleByGender('female')
                    .then(results => {
                        this.setState({ data: results });
                    })
                    .catch(error => {
                        console.log('Something went wrong!');
                    })
            default:
                personService.getRandomPeople()
                    .then(results => {
                        this.setState({ data: results });
                    })
                    .catch(error => {
                        console.log('Something went wrong!');
                    })
        }
    }

    _renderPeople() {
        return (
            <DeckSwiper
                dataSource={this.state.data}
                renderItem={this._renderItem}
            />
        );
    }

    _renderItem = ({ item }) => {
        return (
            <Container>
                <View>
                    <StatusBar barStyle="dark-content" />
                </View>
                <Header transparent style={styles.header}>
                    <Left>
                        <Button transparent dark onPress={() => this.props.navigation.navigate('Welcome')}>
                            <Icon name='arrow-back' />
                            <Text>Profile</Text>
                        </Button>
                    </Left>
                </Header>
                <Content contentContainerStyle={styles.container}>
                    <Card style={{ elevation: 3 }}>
                        <CardItem cardBody>
                            <Image style={{ height: 300, flex: 1 }} source={item.img} />
                        </CardItem>
                        <CardItem>
                            <Icon name="heart" style={{ color: '#ED4A6A' }} />
                            <Text>{item.firstName}</Text>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    };
}
