import React, {Component} from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native';
import { View } from 'react-native';
import { Image} from 'react-native';
import { ScrollView } from 'react-native';
import { TouchableOpacity} from 'react-native';

export default class DrawerPage extends React.Component {

  static navigationOptions = {
    title: '',
    headerStyle: {  backgroundColor: '#461d72', height: 22 },
  };
    render()
    {
      const { navigate } = this.props.navigation;
        return (
            <ScrollView style={styles.main_body}>

              <TouchableOpacity style={styles.but_area} onPress={()=>this.props.navigation.navigate('Choicepor')} color='white'><Text style={styles.inner_text}>Close</Text></TouchableOpacity>
              <TouchableOpacity style={styles.heading} onPress={()=>this.props.navigation.navigate('FCFS')} color="#461d72"><Text style={styles.inner_text2}>>  First Come First Serve</Text></TouchableOpacity>
              <TouchableOpacity style={styles.heading} onPress={()=>this.props.navigation.navigate('Priority2')} color="#461d72"><Text style={styles.inner_text2}>>  Priority(Non Prempetive)</Text></TouchableOpacity>
              <TouchableOpacity style={styles.heading} onPress={()=>this.props.navigation.navigate('STR')} color="#461d72"><Text style={styles.inner_text2}>>  Shortest Time Remaining</Text></TouchableOpacity>
              <TouchableOpacity style={styles.heading} onPress={()=>this.props.navigation.navigate('RR')} color="#461d72"><Text style={styles.inner_text2}>>  Round Robin</Text></TouchableOpacity>
              <TouchableOpacity style={styles.heading} onPress={()=>this.props.navigation.navigate('Priority')} color="#461d72"><Text style={styles.inner_text2}>>  Priority(PreEmpetive)</Text></TouchableOpacity>
              <TouchableOpacity style={styles.heading} onPress={()=>this.props.navigation.navigate('SJF')} color="#461d72"><Text style={styles.inner_text2}>>  Shortest Job First</Text></TouchableOpacity>

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({

  main_body:{
    backgroundColor: 'black',
    height: '100%'
  },
  nav_part:{
    height: 60,
    backgroundColor: "#461d72",
    borderBottomColor: 'white',
    borderBottomWidth: 3,
  },
  i_area:{
    marginTop: '14%',
    marginBottom: '10%',
    width: "100%",
    marginRight: '30%',
    marginLeft: -3
  },
  but_area:{
    marginLeft: '20%',
    marginRight: '20%',
    marginTop: '5%',
    marginBottom: '3%',
    height: 40,
    paddingBottom: 10,
    paddingTop: 12,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: '#461d72',
    borderRadius: 5,
    borderColor: 'white',
    borderWidth: 1
  },
  inner_text:{
    fontSize: 22,
    fontStyle: 'italic',
    color: 'white'
  },
  inner_text2:{
    fontSize: 18,
    fontStyle: 'italic',
    color: 'black'
  },
  heading:{
    color: 'black',
    borderBottomColor: '#461d72',
    borderTopColor: '#461d72',
    borderWidth: 2,
    backgroundColor: 'white',
    paddingLeft: '5%',
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 22,
    marginTop: 10,

  },
  footer:{
    marginTop: 50,
    alignItems: 'center',
    padding: 10,
    backgroundColor:'gray',
  }
});
