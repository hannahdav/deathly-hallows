/**
 * DealthlyDating React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import {
    Container,
    Header,
    DeckSwiper,
    Card,
    CardItem,
    Thumbnail,
    Text,
    Left,
    Body,
    Icon,
    ListItem, Right
} from 'native-base';

export default class SwipeScreen extends Component {

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
        movieService.getGenres()
            .then(results => {
                this.setState({ data: results });
            })
            .catch(error => {
                console.log('Something went wrong!');
            })
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
            <Card style={{ elevation: 3 }}>
                <CardItem cardBody>
                    <Image style={{ height: 300, flex: 1 }} source={item.image} />
                </CardItem>
                <CardItem>
                    <Icon name="heart" style={{ color: '#ED4A6A' }} />
                    <Text>{item.name}</Text>
                </CardItem>
            </Card>
        );
    };
}
