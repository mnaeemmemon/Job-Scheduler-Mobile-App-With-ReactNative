import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';

export default class Home1 extends React.Component {

  static navigationOptions = {
    title: 'Pre-Emptive',
    headerStyle: {  backgroundColor: '#461d72', height: 80, borderBottomColor: 'white', borderWidth: 3 },
    headerTintColor: '#fff',
    headerTitleStyle: {  paddingBottom: 8, fontSize: 30, fontStyle: 'italic',  color: 'white'   }
  };

    render()
    {
      const { navigate } = this.props.navigation;
        return (
            <ScrollView style={styles.main_body}>
            <View >
                <View><Image 
                style={styles.i_area}
                fadeDuration={1000}
                source={require('./assets/logo.png')}
                /></View>
                <View>
                <TouchableOpacity style={styles.but_area} onPress={()=>this.props.navigation.navigate('RR')} color="#461d72"><Text style={styles.inner_text}>Round Robin</Text></TouchableOpacity>
                </View>
                <View>
                <TouchableOpacity style={styles.but_area} onPress={()=>this.props.navigation.navigate('Priority')} color="#461d72"><Text style={styles.inner_text}>Priority</Text></TouchableOpacity>
                <TouchableOpacity style={styles.but_area} onPress={()=>this.props.navigation.navigate('STR')} color="#461d72"><Text style={styles.inner_text}>Shortest Remaining Time</Text></TouchableOpacity>
                </View>
                <View style={styles.footer}><Text>Copyrights @2020 By MNY</Text></View>
            </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({

  main_body:{
    backgroundColor: 'black',
    height: '100%'
  },

  h_area:{
    borderTopColor: 'white',
    borderBottomColor: 'white',
    borderWidth: 2,
    backgroundColor: "#461d72",
    marginTop: 50,
    padding: 14,
    alignItems: 'center',
  },
  fo:{
    fontSize: 30,
    fontStyle: 'italic',
    color: 'white',
  },
  i_area:{
    marginTop: '14%',
    marginBottom: '10%',
    width: "100%",
    marginRight: '30%',
    marginLeft: -3
  },
  but_area:{
    marginLeft: '13%',
    marginRight: '13%',
    marginTop: '5%',
    height: 50,
    paddingBottom: 10,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: '#461d72',
    borderRadius: 10,
    borderColor: 'white',
    borderWidth: 2
  },
  inner_text:{
    fontSize: 18,
    fontStyle: 'italic',
    color: 'white'
  },
  footer:{
    marginTop: 50,
    alignItems: 'center',
    padding: 10,
    backgroundColor:'white',
  }
});
