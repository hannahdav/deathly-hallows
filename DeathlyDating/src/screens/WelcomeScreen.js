/**
 * DealthlyDating React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from 'react';
import { View, StatusBar, ImageBackground } from 'react-native';
import { Container, Content, H1, Form, Item, Input, Label, Picker, Button, Text, Textarea, Icon } from 'native-base';

import styles from '../styles/DeathlyStyles';
export default class WelcomeScreen extends Component {
	static navigationOptions = {
		header: null
	}

	constructor(props) {
		super(props);

		this.state = {
			firstName: '',
			lastName: '',
			email: '',
			phone: '',
			interestedIn: null,
			hogwartsHouse: null,
			bio: ''
		}
	}

	render() {
		return (
			<Container>
				<View>
					<StatusBar barStyle="light-content" />
				</View>
				<Content contentContainerStyle={styles.containerWelcome}>
					<ImageBackground source={require('../resources/tree.png')} style={styles.tree}>
						<View style={{ padding: 30 }}>
							<H1 style={styles.logo}>Deathly Dating </H1>
							<Form>
								<Item rounded style={styles.formItem}>
									<Input
										autoFocus={true}
										placeholder={'First Name'}
										value={this.state.firstName}
										onChangeText={(val) => this.setState({ firstName: val })}
									/>
								</Item>
								<Item rounded style={styles.formItem}>
									<Input
										placeholder={'Last Name'}
										value={this.state.lastName}
										onChangeText={(val) => this.setState({ lastName: val })}
									/>
								</Item>
								<Item rounded style={styles.formItem}>
									<Input
										placeholder={'Email Address'}
										value={this.state.email}
										onChangeText={(val) => this.setState({ email: val.toLowerCase() })}
									/>
								</Item>
								<Item rounded style={styles.formItem}>
									<Input
										placeholder={'Phone Number'}
										value={this.state.phone}
										onChangeText={(val) => this.setState({ phone: val })}
									/>
								</Item>
								<Item rounded picker style={styles.formInputPicker}>
									<Picker
										mode="dropdown"
										iosIcon={<Icon name="arrow-down" />}
										placeholder="Interested in"
										placeholderStyle={{ color: "#4d4d4d" }}
										placeholderIconColor="#007aff"
										selectedValue={this.state.interestedIn}
										onValueChange={(val) => this.setState({ interestedIn: val })}
									>
										<Picker.Item label="Men" value="M" />
										<Picker.Item label="Women" value="W" />
										<Picker.Item label="Both" value="B" />
									</Picker>
								</Item>
								<Item rounded picker style={styles.formInputPicker}>
									<Picker
										mode="dropdown"
										iosIcon={<Icon name="arrow-down" />}
										placeholder="Hogwarts house"
										placeholderStyle={{ color: "#4d4d4d" }}
										placeholderIconColor="#007aff"
										selectedValue={this.state.hogwartsHouse}
										onValueChange={(val) => this.setState({ hogwartsHouse: val })}
									>
										<Picker.Item label="Gryffindor" value="gryf" />
										<Picker.Item label="Hufflepuff" value="huff" />
										<Picker.Item label="Ravenclaw" value="rave" />
										<Picker.Item label="Slytherin" value="slyt" />
									</Picker>
								</Item>
								<Textarea bordered rounded
									rowSpan={5}
									placeholder="Bio (optional)"
									onChangeText={(val) => this.setState({ bio: val })}
									style={styles.formInputTextArea}
									value={this.state.bio}
								/>
							</Form>
							<Button primary
								style={styles.saveButton}
								onPress={() => this.props.navigation.navigate('Swipe', { gender: this.state.interestedIn })}
							>
								<Text>Save</Text>
							</Button>
						</View>
					</ImageBackground>
				</Content>
			</Container>
		);
	}
}
