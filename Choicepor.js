import React, {Component} from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native';
import { View } from 'react-native';
import { Image} from 'react-native';
import { ScrollView } from 'react-native';
import { TouchableOpacity} from 'react-native';

export default class Choicepor extends React.Component {

  static navigationOptions = {
    title: '',
    headerStyle: {  backgroundColor: '#461d72', height: 20 },
  };

    render()
    {
      const { navigate } = this.props.navigation;
        return (
            <ScrollView style={styles.main_body}>
            <View style={styles.nav_part}>
              <TouchableOpacity  onPress={()=>this.props.navigation.navigate('DrawerPage')}>
                <Image
                source={require('./assets/drawer.png')}
                style={{ backgroundColor:'black', borderRadius:3, width: 30, height: 30, marginLeft: 7, marginTop: 15, padding:12 }}
                />
              </TouchableOpacity>
              <Text style={styles.heading}>Job Scheduler</Text>
            </View>
            <View >
                <View><Image 
                style={styles.i_area}
                fadeDuration={1000}
                source={require('./assets/logo.png')}
                /></View>
                <View>
                <TouchableOpacity style={styles.but_area} onPress={()=>this.props.navigation.navigate('Home1')} color="#663320"><Text style={styles.inner_text}>Pre-Emptive</Text></TouchableOpacity>
                <TouchableOpacity style={styles.but_area} onPress={()=>this.props.navigation.navigate('Home2')} color="#663320"><Text style={styles.inner_text}>Non Pre-Emptive</Text></TouchableOpacity>
                <TouchableOpacity style={styles.but_area} onPress={()=>this.props.navigation.navigate('Comparision')} color="#663320"><Text style={styles.inner_text}>Comparisions</Text></TouchableOpacity>
                </View>
                <View style={styles.footer}><Text>Copyrights @2020 By MNY</Text></View>
            </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({

  heading:{
    marginTop:-35, paddingBottom: 8, marginLeft: 70, fontSize: 30, fontStyle: 'italic',  color: 'white' 
  },
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
    marginLeft: '10%',
    marginRight: '10%',
    marginTop: '5%',
    height: 60,
    paddingBottom: 10,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: '#461d72',
    borderRadius: 10,
    borderColor: 'white',
    borderWidth: 2
  },
  inner_text:{
    fontSize: 22,
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
