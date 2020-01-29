import React, {Component} from 'react';
import { Text, View, Button , TouchableOpacity, StyleSheet } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

class Categories extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity style={styles.buttonStyle}
        onPress={() => this.props.navigation.navigate('Sriubos')}>        
          <Text style={styles.textStyle}> Sriubos </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle}
        onPress={() => this.props.navigation.navigate('Salotos')}>        
          <Text style={styles.textStyle}> Salotos </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle}
        onPress={() => this.props.navigation.navigate('Užkandziai')}>        
          <Text style={styles.textStyle}> Užkandžiai</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle}
        onPress={() => this.props.navigation.navigate('Karšti')}>        
          <Text style={styles.textStyle}> Karšti patiekalai </Text>
        </TouchableOpacity>
       
            
          
            
      </View>
    );
  }
  
}
const styles = StyleSheet.create({
  textStyle: {
    fontSize:25,
	color: '#ffffff',
	textAlign: 'center'
  },
  
  buttonStyle: {
	padding:50,
	backgroundColor: "#008000",
  borderRadius:5,
  marginTop:30
  }
});

export default Categories;