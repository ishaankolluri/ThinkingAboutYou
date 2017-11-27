import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableHighlight, 
  Animated
} from 'react-native';

import Swipeable from 'react-native-swipeable';
import Icon from 'react-native-vector-icons/MaterialIcons'

import Return from './return';
import Neglected from "./neglected";


export default class Header extends React.Component {

  constructor(props){
    super(props);
    this.animatedValue = new Animated.Value(0)
    this.state = {
      data: this.props.data.slice()
    }
  }

  render(){
    return (
      <View>
        <Return data={this.state.data} />
        <Neglected data={this.state.data} />
      </View>
    );
  }
}
