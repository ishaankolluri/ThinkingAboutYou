import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  ScrollView,
  TouchableHighlight,
  TouchableOpacity, 
  Animated
} from 'react-native';

import Swipeable from 'react-native-swipeable';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Modal from 'react-native-modal'

import homeStyles from './styles/homeStyles';
import friendStyles from "./styles/friendStyles";
import modalStyles from "./styles/modalStyles";

export default class Friends extends React.Component {
  constructor(props){
    super(props);
    let sorted = this.props.data.slice();
    sorted.sort(compare);
    this.state = {
      data: sorted,
      modal: false,
      contacts: this.props.contactList.splice(0, 3)
    }
  }

  _showModal = () => {
    this.setState({ modal: true });
  }
  
  _hideModal = () => {
    this.setState({ modal: false });
  }


  renderData(){
    let data = this.state.data;
    if(data.length === 0){
      return (
        <Text style={homeStyles.emptySet}>
          You have no friends! Add some!
        </Text>
      );
    }
    let rows = data.map((element, index) => {
      const rightButtons = [
        <TouchableHighlight style={homeStyles.swipeLeft}>
          <Icon
            size={28}
            color="red"
            name="delete"
            onPress={() => this.props.handleFriendDelete(element.name)}
          />
        </TouchableHighlight>,
      ];
      const leftButtons = [
        <TouchableHighlight style={homeStyles.swipeRight}>
          <Icon
            size={28}
            color="skyblue"
            name="reply"
            onPress={(index) => alert("Thought sent to " + element.name + "!")}
          />
        </TouchableHighlight>,
      ];
      return (
        <Swipeable
          key={index}
          style={homeStyles.rowSpacer} 
          leftButtons = {leftButtons} 
          rightButtons={rightButtons}>
          <View style={homeStyles.row}>
            <Text style={homeStyles.rowName}>{element.name}</Text>
            <Text style={homeStyles.rowThoughts}>
              {element.thoughts} thoughts sent!
            </Text>
          </View>
        </Swipeable>
      );
    });
    return rows;
  }

  threeContacts(){
    let data = this.state.contacts;
    let rows = data.map((element, index) => {
      return (
        <TouchableOpacity 
          key={index} 
          onPress={() => this.props.onAdd(element.name)}
        >
          <View style={modalStyles.addButton}>
            <Text>{"Add " + element.name}</Text>
          </View>
        </TouchableOpacity>
      )
    });
    return rows;
  }

  renderButton(text, onPress){
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={modalStyles.button}>
          <Text>{text}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  renderModalContent(){
    let contacts = this.threeContacts();
    return (
      <View style={modalStyles.modalContent}>
        <Text>Add a new friend!</Text>
        {contacts}
        {this.renderButton(
          'Close', () => this.setState({ modal: false }))}
      </View>
    );    
  }



  render(){
    let data = this.renderData();
    let modal = this.state.modal;
    return (
      <View>
        <View style={{top: 100}}>
          <Text style={homeStyles.received}>
            Your friends, ordered by activity.
          </Text>
          <ScrollView contentContainerStyle={{ paddingVertical: 15}}>
            {data}
          </ScrollView>
        </View>
        <View style={friendStyles.addContainer}>
          <Text style={friendStyles.deleteInfo}>
            Swipe left to delete friends.
          </Text>
          <TouchableOpacity onPress={this._showModal}>
            <Icon
              size={90}
              color="skyblue"
              name="add-circle"
              style={friendStyles.add}
            />
          </TouchableOpacity>
        </View>
        <Modal
          style={modalStyles.bottomModal}
          animationIn={'zoomInDown'}
          animationOut={'zoomOutUp'}
          isVisible={this.state.modal}
          animationInTiming={500}
          animationOutTiming={1000}
          backdropTransitionInTiming={1000}
          backdropTransitionOutTiming={1000}
        >
          {this.renderModalContent()}
        </Modal>
      </View>
    );
  }
}

function compare(obj1, obj2){
  let a = parseInt(obj1.thoughts);
  let b = parseInt(obj2.thoughts);
  return b - a;
}