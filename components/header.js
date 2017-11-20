import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
    let status = this.props.status;
    if(status === "home"){
      this.state.title = "Thinking about you";
      this.state.subtitle = "Swipe right to send good thoughts :)"
    }else if(status === "friends"){
      this.state.title = "Thinking about you";
      this.state.subtitle = "Swipe right to send good thoughts :)"
    };
  }
  render(){
    return (
      <View style={navStyles.header}>
        <Text style={navStyles.aHead}>{this.state.title}</Text>
        <Text style={navStyles.bHead}>{this.state.subtitle}</Text>
      </View>
    );
  }
}

const navStyles = StyleSheet.create({
  header: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: 'skyblue',
  },
  aHead: {
    color: 'white',
    textAlign: 'center',    
    fontSize: 30,
    fontFamily: 'lato-light',
    paddingBottom: 10,
  },
  bHead: {
    textAlign: 'center',    
    color: 'white',
    fontSize: 20, 
    fontFamily: 'lato-light',
    paddingBottom: 10,
  }
});