import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableHighlight, 
  Animated,
  Modal,
  Button
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import modalStyles from "./styles/modalStyles";

export default class Contacts extends React.Component {
  constructor(props){
    super(props);
    let contact_list = require('../data/contacts.json');
    this.state = {
      data: contact_list.list
    };
  }

  threeContacts(){
    let data = this.state.data.splice(0,3);
    let rows = data.map((element, index) => {

      return (
        <View>
          <Text style={modalStyles.info}>{element.name}</Text>
          <Button
            title="Add"
            style={modalStyles.add} 
            onPress={() => this.props.onAdd(element.name)}
          ></Button>
        </View>
      )
    });

  }
  render(){
    let rows = this.threeContacts();
    return (
      <Modal style={modalStyles.modal}>
        {rows}
        <Button
          title="Cancel"
          style={modalStyles.cancel}
          onPress={() => this.props.onCancel()}
        >
          Cancel
        </Button>
      </Modal>
    );
  }
}

