import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Animated} from 'react-native';

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
  // handleDelete(index){
  //   let updated = this.state.data.slice();
  //   for(let i = 0; i < updated.length; i++){
  //     if(i === index){
  //       updated.splice(i, 1);
  //       break;
  //     }
  //   }
  //   this.setState({
  //     data: updated
  //   });
  // }

  // renderTopThree(){
  //   let data = this.state.data.slice();
  //   function compare(obj1, obj2){
  //     let a = parseInt(obj1.sentToYou);
  //     let b = parseInt(obj2.sentToYou);
  //     return b - a;
  //   }
  //   data.sort(compare);
  //   return this.renderData(data.slice(0, 3), true);
    
  // }

  // renderNeglected(){
  //   let data = this.state.data.slice();
  //   function compare(obj1, obj2){
  //     let a = parseInt(obj1.thoughts);
  //     let b = parseInt(obj2.thoughts);
  //     return a - b;
  //   }
  //   data.sort(compare);
  //   return this.renderData(data.slice(0, 2), false);
  // }

  // renderData(data, isToYou){
    
  //   if(data.length === 0){
  //     return <Text style={homeStyles.emptySet}>No pending thoughts :( </Text>
  //   }
  //   let rows = data.map((element, index) => {
  //     const rightButtons = [
  //       <TouchableHighlight style={homeStyles.swipeLeft}><Icon size={28} color="red" name="delete" onPress={() => this.handleDelete(index)}/></TouchableHighlight>,
  //     ];
  //     const leftButtons = [
  //       <TouchableHighlight style={homeStyles.swipeRight}><Icon size={28} color="skyblue" name="reply" onPress={(index) => alert("Thought sent to " + element.name + "!")}/></TouchableHighlight>,
  //     ];
  //     let subtitle;
  //     if(!isToYou){
  //       subtitle = <Text style={homeStyles.rowThoughts}>{element.sentToYou} thoughts sent.</Text>
  //     }else{
  //       subtitle = <Text style={homeStyles.rowThoughts}>{element.thoughts} thoughts sent to you!</Text>
  //     }
  //     return (
  //       <Swipeable key={index} style={homeStyles.rowSpacer} leftButtons = {leftButtons} rightButtons={rightButtons}>
  //         <View style={homeStyles.row}>
  //           <Text style={homeStyles.rowName}>{element.name}</Text>
  //           {subtitle}
  //         </View>
  //       </Swipeable>
  //     );
  //   });
  //   return rows;
  // }

  render(){
    // let data = this.renderTopThree();
    // let neglected = this.renderNeglected();
    return (
      <View>
        <Return data={this.state.data} />
        <Neglected data={this.state.data} />
      </View>
    );
  }
}


// const homeStyles = StyleSheet.create({
//   rowSpacer: {
//     marginBottom: 20,
//   },
//   emptySet: {
//     fontFamily: "lato-light",
//     fontSize: 16,
//     justifyContent: "center",
//     textAlign: "center",
//   },
//   row: {
//     height: 60,
//     alignItems: 'center',
//     justifyContent: 'center',
//     shadowColor: '#ACACAC',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.8,
//     shadowRadius: 10,
//     alignItems: "flex-start",
//     paddingLeft: 20,
//   },
//   rowName: {
//     fontFamily: "lato-light",
//     fontSize: 18,
//   },
//   rowThoughts: {
//     fontFamily: 'lato-light',
//     fontSize: 14,
//   },
//   swipeLeft: {
//     height: 60,
//     paddingLeft: 30,
//     justifyContent: 'center'
//   },
//   swipeRight: {
//     height: 60,
//     marginLeft: 320,
//     justifyContent: 'center',
//   },
//   received: {
//     textAlign: 'center',
//     paddingBottom: 20,
//     fontFamily: "lato-light",
//     fontSize: 20,
//     color: "skyblue",
//   },
// });