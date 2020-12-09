import React, {Component} from 'react';
import { FlatList, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import { withOrientation } from 'react-navigation';

export default class Details extends React.Component {

    static navigationOptions = {
        title: 'Details',
        headerStyle: {  backgroundColor: '#461d72', height: 80, borderBottomColor: 'white', borderWidth: 3 },
        headerTintColor: '#fff',
        headerTitleStyle: {paddingBottom: 3, fontSize: 25, fontStyle: 'italic',  color: 'white'   }
      };

    renderItem = ({item, index}) => {
      return(
        <View style={styles.items}> 
        <Text>Pid: {item.id}</Text>
        <Text>Arrival Time: {item.arrival_time}</Text>
        <Text>Burst Time: {item.burst_time}</Text>  
        <Text>Completion Time: {item.completiontime}</Text>
        <Text>Waiting Time: {item.waitingtime}</Text>
        <Text>Turnd Around Time: {item.tattime}</Text> 
        </View>
      )
    }
    render()
    {
        const { navigation } = this.props;  
        const { navigate } = this.props.navigation;

        return (
          <View style={styles.b2}>
            <FlatList
              data = {global.table_data}
              style={styles.flist}
              renderItem={this.renderItem}></FlatList>
          </View>
        );
    }
}

const styles = StyleSheet.create({
  b2:{
    padding: 7,
    height: '100%',
    backgroundColor: 'black',
  },
  flist:{
    height: '100%',
  },
  head: { 
    height: 60, 
    backgroundColor: '#461d72' 
  },
  text: { 
    marginBottom: 6, 
    marginTop: 6 , 
    color: 'white', 
    textAlign:'center' 
  },
  heading:{
    color: "white",
    borderColor: 'white',
    borderWidth: 0,
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    borderTopColor: 'white',
    borderTopWidth: 2,
    backgroundColor: 'black',
    paddingLeft: '40%',
    paddingTop: 12,
    paddingBottom: 4,
    fontSize: 22,
    marginTop: 10,
    marginBottom: 10,
  },
  items:{
    marginTop: '2%',
    height: 140,
    paddingBottom: 5,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: '#461d72',
    borderRadius: 10,
    borderColor: 'white',
    borderWidth: 2,
  },

});
