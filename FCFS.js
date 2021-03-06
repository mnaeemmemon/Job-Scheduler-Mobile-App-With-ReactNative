import React, {Component} from 'react';
import CountDown from 'react-native-countdown-component';
import { FlatList, StyleSheet, Text, View, TouchableOpacity, TextInput, Alert} from 'react-native';
const data = [];
const runing = [];
const ready = [];
const times =[];
let size = 0;
let upd, upd2;
var complete=false, k=0, strready="";
global.table_data = [];

export default class FCFS extends Component {

  static navigationOptions = {
    title: 'First Come First Serve',
    headerStyle: {  backgroundColor: '#461d72', height: 80, borderBottomColor: 'white', borderWidth: 3 },
    headerTintColor: '#fff',
    headerTitleStyle: {paddingBottom: 3, fontSize: 20, fontStyle: 'italic',  color: 'white'   }
  };
  
  state = 
  {
    id: '',
    time: 0,
    arvtime: 0,
    burstime:0,
    refreshing: false,
  }

  handlerefresh()
  {
    this.setState({
      refreshing: true
    },
    ()=> {
      
      this.renderItem;
      this.setState({
        refreshing: false
      })
    }
    )
  }

  handleid = (text) => {
      this.setState({ id: text })
  }
  handlearvtime = (text) => {
    this.setState({ arvtime: text })
  }
  handleburstime = (text) => {
    this.setState({ burstime: text })
  }

  renderItem = ({item, index}) => {
    return(
      <View style={styles.items}> 
      <Text>Process ID: {item.id}</Text>  
      </View>
    )
  }
  add_data()
  {
    var z = data.length, i=0;
    for(i=0;i<z;i++)
    {
        table_data.push({
          id: data[i].id,
          arrival_time: data[i].arvtime,
          burst_time: data[i].burstime,
          tattime:0,
          completiontime: 0,
          waitingtime:0,
        })
    }
    return;
  }

  addvalue(i, at, bt)
  {
    var t1 = parseInt(at);
    var t2 = parseInt(bt);  
    data.push({
      id: i,
      arvtime: t1,
      burstime: t2,
    });
    times.push({
      time: t1,
    })
    this.handlerefresh();
  }

  clearvalue()
  {
    while(data.length != 0)
    { data.pop(); }
    this.handlerefresh();
    this.reset();
    return;
  }

  addready(c)
  {
    ready.push({
      id: data[c].id,
      remaintime: data[c].burstime,
      burst: data[c].burstime,
    })
    var i;
    for(i=c;i<data.length-1;i++)
    {  data[i]=data[i+1]; }
    data.pop();
    for(i=c;i<times.length-1;i++)
    {  times[i]=times[i+1]; }
    times.pop();

    return;
  }
  calculate_values(interval, pid)
  {
    var i;
    for(i=0;i<table_data.length;i++)
    {
      if(table_data[i].id==pid)
      {  
        table_data[i].completiontime = interval;
        table_data[i].tattime = (interval - table_data[i].arrival_time);
        table_data[i].waitingtime = ( table_data[i].tattime - table_data[i].burst_time );
        break;
      }
    }
    return;
  }
  process(c)
  {
      strready="";
      if(runing.length==0 && ready.length==0)
      {  Alert.alert("At Interval "+c+" !","Both Queues Are empty!",[{text:"OK"}]); }
      else if(runing.length==0 && ready.length!=0)
      {
        runing.push({
          id: ready[0].id,
          remaintime: ready[0].remaintime,
          burst: ready[0].burst,
        });
        ready.shift();
        for(k=0;k<ready.length;k++)
        {  strready = strready + ready[k].id; }
        Alert.alert("At interval " + c + "!","Ready Queue: "+strready+"\nRuning Queue: "+runing[0].id, [{text:"OK"}] );  
        runing[0].remaintime--;
      }
      else if(runing.length!=0 && runing[0].remaintime>0)
      {
        runing[0].remaintime--;
        for(k=0;k<ready.length;k++)
        {  strready = strready + ready[k].id; }
        Alert.alert("At interval " + c + "!","Ready Queue: "+strready+"\nRuning Queue: "+runing[0].id, [{text:"OK"}] );  
      }
      else if(runing[0].remaintime==0 && ready.length!=0)
      {
        this.calculate_values(c, runing[0].id)
        runing.pop()
        runing.push({
          id: ready[0].id,
          remaintime: ready[0].remaintime,
          burst: ready[0].burst,
        });
        ready.shift();
        for(k=0;k<ready.length;k++)
        {  strready = strready + ready[k].id; }
        Alert.alert("At interval " + c + "!","Ready Queue: "+strready+"\nRuning Queue: "+runing[0].id, [{text:"OK"}] );  
        runing[0].remaintime--;
      }
      else if(runing[0].remaintime==0 && ready.length==0)
      {  
        if(data.length==0)
        {   this.calculate_values(c, runing[0].id);  complete = true; }
        else if(data.length!=0)
        {  this.calculate_values(c, runing[0].id); runing.pop(); Alert.alert("At Interval "+c+" !","Both Queues Are empty!",[{text:"OK"}]);}
      }

      return;
  }
  sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
  }
  reset()
  {
    while(data.length != 0)
    { data.pop(); }
    while(runing.length != 0)
    { runing.pop(); }
    while(ready.length != 0)
    { ready.pop(); }
    while(times.length != 0)
    { times.pop(); }
    size = 0;
    upd=0; 
    upd2=0;
    complete=false;
    strready="";
    k=0;

    return;
  }
  render()
  {
    const { navigate } = this.props.navigation;
      return (
        <View style={styles.main_body}>
          <View >
              <View style={styles.b1}>
                <Text style={styles.t}>Enter Process ID: </Text>
                <TextInput style = {styles.in_area} onChangeText={this.handleid} ></TextInput>
                <Text style={styles.t}>Enter Process Arriving Time: </Text>
                <TextInput style = {styles.in_area} keyboardType={'numeric'} onChangeText={this.handlearvtime}></TextInput>
                <Text style={styles.t}>Enter Process Burst Time: </Text>
                <TextInput style = {styles.in_area} keyboardType={'numeric'} onChangeText={this.handleburstime}></TextInput>
                <TouchableOpacity style={styles.but} onPress={()=>this.addvalue(this.state.id, this.state.arvtime, this.state.burstime)} >
                <Text style={{color: 'black'}}>Add Process</Text>
                </TouchableOpacity>
              </View>
          </View>

          <TouchableOpacity style={styles.butstart} onPress={()=>{
              while(table_data.length != 0)
              { table_data.pop(); }
              var i=0;
              var c=0;
              this.add_data();
              while(complete!=true)
              {
                for(i=0;i<times.length;i++){  if(times[i].time==c){  this.addready(i); i--; } }
                this.process(c); 
                this.sleep(2500);
                c++;
              } 
              Alert.alert("Task Completed", "All Process Done Their Jobs Successfully!", [{text: "OK"}]);
              
              this.props.navigation.navigate('Details');
              this.reset();
              this.handlerefresh();
          }}>
          <Text style={{color: 'white', fontSize: 17}}>Start Simulation</Text>
          </TouchableOpacity>
          <Text style={styles.heading}>Processes</Text>
          <View style={styles.b2}>
            <FlatList
              data = {data}
              style={styles.flist}
              renderItem={this.renderItem}
              onRefresh={()=>this.handlerefresh()}
              refreshing={this.state.refreshing}/>
          </View>
          <TouchableOpacity style={styles.butclear} onPress={()=>this.clearvalue()} >
                <Text style={{color: 'black'}}>Clear All Processes</Text>
          </TouchableOpacity>

        </View>
        
      );
  }
}

const styles = StyleSheet.create({

  flist:{
    height: 'auto',
    maxHeight: 100,
  },
  tableb:{
    height: '100%',
    backgroundColor: 'white',
  },
  pro:{
    backgroundColor: 'white',
    paddingLeft: '33%',
    padding: 8,
    fontSize: 22,
    marginTop: 10,
    color: 'black'
  },
  heading:{
    color: "white",
    borderColor: 'white',
    borderWidth: 2,
    borderTopWidth: 5,
    backgroundColor: 'black',
    paddingLeft: '33%',
    paddingTop: 12,
    paddingBottom: 4,
    fontSize: 22,
    marginTop: 10,

  },
  but:{
    marginLeft: '20%',
    marginRight: '20%',
    marginTop: '2%',
    height: 35,
    paddingBottom: 5,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: 'white',
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 2,
  },
  butstart:{
    marginLeft: '10%',
    marginRight: '10%',
    marginTop: '3%',
    height: 40,
    paddingTop: 4,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: '#461d72',
    borderRadius: 10,
    borderColor: 'white',
    borderWidth: 2,
  },
  main_body:{
    backgroundColor: 'black',
    height: '100%'
  },
  items:{
    marginLeft: '2%',
    marginRight: '2%',
    marginTop: '2%',
    height: 50,
    paddingBottom: 5,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: '#461d72',
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 2,
  },
  b1:{
    marginTop: 8,
    backgroundColor: '#461d72',
    height: 'auto',
    padding: 8,
  },
  in_area:{
    borderRadius: 5,
    height: 32,
    backgroundColor: 'white',
    padding: 5,
    borderColor: 'black',
    borderWidth: 1.5,
  },
  t:{
    fontSize: 14,
    color: 'white',
    margin: 1
  },
  b2:{
    marginBottom: 7,
    paddingBottom: 3,
    height: 'auto',
    backgroundColor: 'white',
  },
  butclear:{
    marginLeft: '5%',
    marginRight: '5%',
    height: 40,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: 'white',
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 2,
  },
  t1:{
    marginTop: 2,
    marginBottom: 3,
    marginLeft: "28%",
    fontWeight: "bold"
  }

});
