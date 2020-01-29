import React, {Component} from 'react';
import { View, StyleSheet,Platform, ActivityIndicator,FlatList} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import data from '../receptai.json';
import { Content, Card, CardItem, Body, Text, Header, Icon, Button, Left, Right, Title, Container, Form, Item, Input } from 'native-base';

class KarstiPatiekalai extends Component {
  constructor(props){
    super(props);
    this.state ={
      dataSource: [],   // json datos objektas

    };
  }
  componentDidMount(){
    this.setState({
      dataSource: data.receptai.karstipatiekalai
      
    });
    console.log(this.state.dataSource);
  }
  renderItem2 = ({ item }) => {
    return (
        <Text>  {item}</Text>
    )
}
renderItem = ({ item }) => {
  return (
      <Card>
          <CardItem header bordered>
              <Text>{item.pavadinimas}</Text>
          </CardItem>
          <CardItem bordered>
              <Body>
                  <FlatList
                      data={item.ingredientai}
                      renderItem={this.renderItem2}
                      keyExtractor={(item, index) => index.toString()}
                  />
              </Body>
          </CardItem>
          </Card>
  )
}
  
    render() {
     
      
      return(
        <Container>
          <Content>
            <Content padder>
              <FlatList
               data={this.state.dataSource}
               renderItem={this.renderItem}
               keyExtractor={(item, index) => index.toString()}

              />
            </Content>
          </Content>
        </Container>
        
          
          
      );
      
    }
  }
   const styles = StyleSheet.create({
    textStyle: {
    fontSize:25,
    color: '#008000'
    
    }
  });
  
export default KarstiPatiekalai;