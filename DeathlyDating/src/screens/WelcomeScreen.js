/**
 * DealthlyDating React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Component} from 'react';
import { Container, Content, H1, Form, Item, Input, Label, Picker, Button, Text, Textarea} from 'native-base';
export default class WelcomeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastname: '',
      email: '',
      phone: '', 
      interestedIn: null,
      bio: ''
    }
  }

  render() {
    return (
        <Container>
            <Content>
              <H1>Deathly Dating</H1>
              <Form>
                <Item floatingLabel>
                  <Label>First name</Label> 
                  <Input/>
                </Item>
                <Item floatingLabel>
                  <Label>Last name</Label> 
                  <Input/>
                </Item>
                <Item floatingLabel>
                  <Label>Email</Label> 
                  <Input/>
                </Item>
                <Item floatingLabel>
                  <Label>Phone Number</Label> 
                  <Input/>
                </Item>
                <Item picker inlineLabel>
                  <Label>Interested in</Label>
                  <Picker 
                    mode="dropdown"
                    style={{ width: undefined }}
                    placeholder="Select"
                    placeholderStyle={{ color: "#bfc6ea" }}
                    placeholderIconColor="#007aff"
                    selectedValue={this.state.interestedIn}
                    onValueChange={(val) => this.setState({ interestedIn: val })}
                  >
                    <Picker.Item label="Men" value="key0" />
                    <Picker.Item label="Women" value="key1" />
                    <Picker.Item label="Both" value="key2" />
                  </Picker>
                </Item>
                <Textarea bordered
                  rowSpan={5}  
                  placeholder="Textarea" 
                  onValueChange={(val) => this.setState({ bio: val })}
                  />
              </Form>
              <Button primary
                onPress={() => this.props.navigation.navigate('Swipe')}
              >
                <Text>
                  Submit
                </Text>
              </Button>
            </Content>
        </Container>
    );
  }
}
