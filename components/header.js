import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class Header extends React.Component {
  
  render(){
    let title = "Thinkin";
    let subtitle = "swipe";
    if(this.props.status === 0){
      alert(this.props.status === 0);      
      title = "Thinking about you";
      subtitle = "Swipe right to send good thoughts :)";
    }else if(this.props.status === 1){
      title = "Friend List";
      subtitle = "What do you think?";
    }
    return (
      <View style={navStyles.header}>
        <Text style={navStyles.aHead}>{title}</Text>
        <Text style={navStyles.bHead}>{subtitle}</Text>
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