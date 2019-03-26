/**
 * DealthlyDating React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Component} from 'react';
import { View, StatusBar } from 'react-native';
import { Container, Header, Content, Text, Left, Icon, Button} from 'native-base';
import styles from '../styles/DeathlyStyles';
export default class SwipeScreen extends Component {
	static navigationOptions = {
		header: null
	}
	
    render() {
	    return (
			<Container>
				<View>
					<StatusBar barStyle="light-content" />
				</View>
				<Header transparent style={styles.header}>
					<Left>
					<Button transparent light onPress={() => this.props.navigation.navigate('Welcome')}>
              			<Icon name='arrow-back'/>
						<Text>Profile</Text>
            		</Button>
					</Left>
				</Header>
				<Content contentContainerStyle={styles.container}>
					<Text style={{color: 'white', alignSelf: 'center'}}>SwipeScreen</Text>
				</Content>
			</Container>
		);
    }
}
