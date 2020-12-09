import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Alert } from 'react-native';

const data=[
  "\nROUND ROBIN\nThe way this algorithm works is nearly the same as the priority algorithm. First, it takes the naem of the processes and their processing times. After that for every 3 seconds all processes will be executed until they have finished. For every process will be calculated the execution time and the time they have to wait to finish executing. When is all over, it will be calculated the total waiting and the average waiting time. All this is going to be printed. I have made a simple (as simplified as possible) diagram of this algorithm in order to be understood better \n\nPRIORITY\nThe priority algorithm first, takes the names of the processes and their respective priorities. After that, it compares the priorities with each other and catches the process with the highest priority and executes it, while the others wait. The waiting time increases with every process executing. So at the end the waiting time for the process with the lowest priority will be the larger one. When all the calculations will be done, will be printed the waiting time, turn around time, the average turn around time and the average waiting time.",
  "\nROUND ROBIN\nThe way this algorithm works is nearly the same as the priority algorithm. First, it takes the naem of the processes and their processing times. After that for every 3 seconds all processes will be executed until they have finished. For every process will be calculated the execution time and the time they have to wait to finish executing. When is all over, it will be calculated the total waiting and the average waiting time. All this is going to be printed. I have made a simple (as simplified as possible) diagram of this algorithm in order to be understood better \n\nShortest Time Remaining\nThis Algorithm is the preemptive version of SJF scheduling. In SRTF, the execution of the process can be stopped after certain amount of time. At the arrival of every process, the short term scheduler schedules the process with the least remaining burst time among the list of available processes and the running process. Once all the processes are available in the ready queue, No preemption will be done and the algorithm will work as SJF scheduling. The context of the process is saved in the Process Control Block when the process is removed from the execution and the next process is scheduled. This PCB is accessed on the next execution of this process.",
  "\nROUND ROBIN\nThe way this algorithm works is nearly the same as the priority algorithm. First, it takes the naem of the processes and their processing times. After that for every 3 seconds all processes will be executed until they have finished. For every process will be calculated the execution time and the time they have to wait to finish executing. When is all over, it will be calculated the total waiting and the average waiting time. All this is going to be printed. I have made a simple (as simplified as possible) diagram of this algorithm in order to be understood better.\n\nShortest Job First\nSJF scheduling algorithm, schedules the processes according to their burst time. In SJF scheduling, the process with the lowest burst time, among the list of available processes in the ready queue, is going to be scheduled next. However, it is very difficult to predict the burst time needed for a process hence this algorithm is very difficult to implement in the system.",
  "\nROUND ROBIN\nThe way this algorithm works is nearly the same as the priority algorithm. First, it takes the naem of the processes and their processing times. After that for every 3 seconds all processes will be executed until they have finished. For every process will be calculated the execution time and the time they have to wait to finish executing. When is all over, it will be calculated the total waiting and the average waiting time. All this is going to be printed. I have made a simple (as simplified as possible) diagram of this algorithm in order to be understood better.\n\nPriority(Non-Preemptive)\nThe priority with non preempetive algorithm first, takes the names of the processes and their respective priorities. After that, it compares the priorities with each other and catches the process with the highest priority and executes it, while the others wait. The waiting time increases with every process executing. So at the end the waiting time for the process with the lowest priority will be the larger one. When all the calculations will be done, will be printed the waiting time, turn around time, the average turn around time and the average waiting time",
  "\nROUND ROBIN\nThe way this algorithm works is nearly the same as the priority algorithm. First, it takes the naem of the processes and their processing times. After that for every 3 seconds all processes will be executed until they have finished. For every process will be calculated the execution time and the time they have to wait to finish executing. When is all over, it will be calculated the total waiting and the average waiting time. All this is going to be printed. I have made a simple (as simplified as possible) diagram of this algorithm in order to be understood better.\n\nFirst Come First Serve\nFirst come first serve (FCFS) scheduling algorithm simply schedules the jobs according to their arrival time. The job which comes first in the ready queue will get the CPU first. The lesser the arrival time of the job, the sooner will the job get the CPU. FCFS scheduling may cause the problem of starvation if the burst time of the first process is the longest among all the jobs.",
  "\nPRIORITY\nThe priority algorithm first, takes the names of the processes and their respective priorities. After that, it compares the priorities with each other and catches the process with the highest priority and executes it, while the others wait. The waiting time increases with every process executing. So at the end the waiting time for the process with the lowest priority will be the larger one. When all the calculations will be done, will be printed the waiting time, turn around time, the average turn around time and the average waiting time\n\nShortest Time Remaining\nThis Algorithm is the preemptive version of SJF scheduling. In SRTF, the execution of the process can be stopped after certain amount of time. At the arrival of every process, the short term scheduler schedules the process with the least remaining burst time among the list of available processes and the running process. Once all the processes are available in the ready queue, No preemption will be done and the algorithm will work as SJF scheduling. The context of the process is saved in the Process Control Block when the process is removed from the execution and the next process is scheduled. This PCB is accessed on the next execution of this process",
  "\nPRIORITY\nThe priority algorithm first, takes the names of the processes and their respective priorities. After that, it compares the priorities with each other and catches the process with the highest priority and executes it, while the others wait. The waiting time increases with every process executing. So at the end the waiting time for the process with the lowest priority will be the larger one. When all the calculations will be done, will be printed the waiting time, turn around time, the average turn around time and the average waiting time\n\nShortest Job First\nSJF scheduling algorithm, schedules the processes according to their burst time. In SJF scheduling, the process with the lowest burst time, among the list of available processes in the ready queue, is going to be scheduled next. However, it is very difficult to predict the burst time needed for a process hence this algorithm is very difficult to implement in the system",
  "\nPRIORITY\nThe priority algorithm first, takes the names of the processes and their respective priorities. After that, it compares the priorities with each other and catches the process with the highest priority and executes it, while the others wait. The waiting time increases with every process executing. So at the end the waiting time for the process with the lowest priority will be the larger one. When all the calculations will be done, will be printed the waiting time, turn around time, the average turn around time and the average waiting time\n\nPRIORITY(Non Preemptive)\nThe priority with nonpreemptive algorithm first, takes the names of the processes and their respective priorities. After that, it compares the priorities with each other and catches the process with the highest priority and executes it, while the others wait. The waiting time increases with every process executing. So at the end the waiting time for the process with the lowest priority will be the larger one. When all the calculations will be done, will be printed the waiting time, turn around time, the average turn around time and the average waiting time.",
  "\nPRIORITY\nThe priority algorithm first, takes the names of the processes and their respective priorities. After that, it compares the priorities with each other and catches the process with the highest priority and executes it, while the others wait. The waiting time increases with every process executing. So at the end the waiting time for the process with the lowest priority will be the larger one. When all the calculations will be done, will be printed the waiting time, turn around time, the average turn around time and the average waiting time\n\nFirst Come First Serve\nFirst come first serve (FCFS) scheduling algorithm simply schedules the jobs according to their arrival time. The job which comes first in the ready queue will get the CPU first. The lesser the arrival time of the job, the sooner will the job get the CPU. FCFS scheduling may cause the problem of starvation if the burst time of the first process is the longest among all the jobs",
  "\nShortest Time Remaining\nThis Algorithm is the preemptive version of SJF scheduling. In SRTF, the execution of the process can be stopped after certain amount of time. At the arrival of every process, the short term scheduler schedules the process with the least remaining burst time among the list of available processes and the running process. Once all the processes are available in the ready queue, No preemption will be done and the algorithm will work as SJF scheduling. The context of the process is saved in the Process Control Block when the process is removed from the execution and the next process is scheduled. This PCB is accessed on the next execution of this process\n\nShortest Job First\nSJF scheduling algorithm, schedules the processes according to their burst time. In SJF scheduling, the process with the lowest burst time, among the list of available processes in the ready queue, is going to be scheduled next. However, it is very difficult to predict the burst time needed for a process hence this algorithm is very difficult to implement in the system",
  "\nShortest Time Remaining\nThis Algorithm is the preemptive version of SJF scheduling. In SRTF, the execution of the process can be stopped after certain amount of time. At the arrival of every process, the short term scheduler schedules the process with the least remaining burst time among the list of available processes and the running process. Once all the processes are available in the ready queue, No preemption will be done and the algorithm will work as SJF scheduling. The context of the process is saved in the Process Control Block when the process is removed from the execution and the next process is scheduled. This PCB is accessed on the next execution of this process \n\nPRIORITY(NonPreempetive)\nThe priority algorithm first, takes the names of the processes and their respective priorities. After that, it compares the priorities with each other and catches the process with the highest priority and executes it, while the others wait. The waiting time increases with every process executing. So at the end the waiting time for the process with the lowest priority will be the larger one. When all the calculations will be done, will be printed the waiting time, turn around time, the average turn around time and the average waiting time",
  "\nShortest Time Remaining\nThis Algorithm is the preemptive version of SJF scheduling. In SRTF, the execution of the process can be stopped after certain amount of time. At the arrival of every process, the short term scheduler schedules the process with the least remaining burst time among the list of available processes and the running process. Once all the processes are available in the ready queue, No preemption will be done and the algorithm will work as SJF scheduling. The context of the process is saved in the Process Control Block when the process is removed from the execution and the next process is scheduled. This PCB is accessed on the next execution of this process \n\nFirst Come First Serve\nFirst come first serve (FCFS) scheduling algorithm simply schedules the jobs according to their arrival time. The job which comes first in the ready queue will get the CPU first. The lesser the arrival time of the job, the sooner will the job get the CPU. FCFS scheduling may cause the problem of starvation if the burst time of the first process is the longest among all the jobs",
  "\nShortest Job First\nSJF scheduling algorithm, schedules the processes according to their burst time. In SJF scheduling, the process with the lowest burst time, among the list of available processes in the ready queue, is going to be scheduled next. However, it is very difficult to predict the burst time needed for a process hence this algorithm is very difficult to implement in the system \nPRIORITY(NonPreempetive)\nThe priority algorithm first, takes the names of the processes and their respective priorities. After that, it compares the priorities with each other and catches the process with the highest priority and executes it, while the others wait. The waiting time increases with every process executing. So at the end the waiting time for the process with the lowest priority will be the larger one. When all the calculations will be done, will be printed the waiting time, turn around time, the average turn around time and the average waiting time",
  "\nShortest Job First\nSJF scheduling algorithm, schedules the processes according to their burst time. In SJF scheduling, the process with the lowest burst time, among the list of available processes in the ready queue, is going to be scheduled next. However, it is very difficult to predict the burst time needed for a process hence this algorithm is very difficult to implement in the system\nFirst Come First Serve\nFirst come first serve (FCFS) scheduling algorithm simply schedules the jobs according to their arrival time. The job which comes first in the ready queue will get the CPU first. The lesser the arrival time of the job, the sooner will the job get the CPU. FCFS scheduling may cause the problem of starvation if the burst time of the first process is the longest among all the jobs",
  "\nPRIORITY(NonPreempetive)\nThe priority algorithm first, takes the names of the processes and their respective priorities. After that, it compares the priorities with each other and catches the process with the highest priority and executes it, while the others wait. The waiting time increases with every process executing. So at the end the waiting time for the process with the lowest priority will be the larger one. When all the calculations will be done, will be printed the waiting time, turn around time, the average turn around time and the average waiting time \n\nFirst Come First Serve\nFirst come first serve (FCFS) scheduling algorithm simply schedules the jobs according to their arrival time. The job which comes first in the ready queue will get the CPU first. The lesser the arrival time of the job, the sooner will the job get the CPU. FCFS scheduling may cause the problem of starvation if the burst time of the first process is the longest among all the jobs"
];
var count=0;

export default class Comparision extends React.Component {

  static navigationOptions = {
    title: 'Comparsions',
    headerStyle: {  backgroundColor: '#461d72', height: 80, borderBottomColor: 'white', borderWidth: 3 },
    headerTintColor: '#fff',
    headerTitleStyle: {  paddingBottom: 8, fontSize: 30, fontStyle: 'italic',  color: 'white'   }
  };
  state = 
  {
    i: 0,
    j: 0,
  }
  updateval(val1)
  { 
    var val = parseInt(val1);
    
    if(count==0)
    {
        this.setState({
            i:val
        })
        count+=1;
        return;
    }
    else if(count==1)
    {
        this.setState({
            j:val
        })
        console.log(this.state.i +","+ val)
        if(this.state.i==0 && val==1 || val==0 && this.state.i==1)
        {   Alert.alert("Comparision", data[0] , [{text: "OK"}]);    }
        else if(this.state.i==0 && val==2 || val==0 && this.state.i==2)
        {   Alert.alert("Comparision", data[1] , [{text: "OK"}]);    }
        else if(this.state.i==0 && val==3 || val==0 && this.state.i==3)
        {   Alert.alert("Comparision", data[2] , [{text: "OK"}]);    }
        else if(this.state.i==0 && val==4 || val==0 && this.state.i==4)
        {   Alert.alert("Comparision", data[3] , [{text: "OK"}]);    }
        else if(this.state.i==0 && val==5 || val==0 && this.state.i==5)
        {   Alert.alert("Comparision", data[4] , [{text: "OK"}]);    }
        else if(this.state.i==1 && val==2 || val==1 && this.state.i==2)
        {   Alert.alert("Comparision", data[5] , [{text: "OK"}]);    }
        else if(this.state.i==1 && val==3 || val==1 && this.state.i==3)
        {   Alert.alert("Comparision", data[6] , [{text: "OK"}]);    }
        else if(this.state.i==1 && val==4 || val==1 && this.state.i==4)
        {   Alert.alert("Comparision", data[7] , [{text: "OK"}]);    }
        else if(this.state.i==1 && val==5 || val==1 && this.state.i==5)
        {   Alert.alert("Comparision", data[8] , [{text: "OK"}]);    }
        else if(this.state.i==2 && val==3 || val==2 && this.state.i==3)
        {   Alert.alert("Comparision", data[9] , [{text: "OK"}]);    }
        else if(this.state.i==2 && val==4 || val==2 && this.state.i==4)
        {   Alert.alert("Comparision", data[10] , [{text: "OK"}]);    }
        else if(this.state.i==2 && val==5 || val==2 && this.state.i==5)
        {   Alert.alert("Comparision", data[11] , [{text: "OK"}]);    }
        else if(this.state.i==3 && val==4 || val==3 && this.state.i==4)
        {   Alert.alert("Comparision", data[12] , [{text: "OK"}]);    }
        else if(this.state.i==3 && val==5 || val==3 && this.state.i==5)
        {   Alert.alert("Comparision", data[13] , [{text: "OK"}]);    }
        else if(this.state.i==4 && val==5 || val==4 && this.state.i==5)
        {   Alert.alert("Comparision", data[14] , [{text: "OK"}]);    }

        count = 0;
    }
    return;
  }

    render()
    {
      const { navigate } = this.props.navigation;
        return (
            <ScrollView style={styles.main_body}>
                <View>
                <Text style={styles.heading}>PreEmptive</Text>
                <TouchableOpacity style={styles.but_area} onPress={()=>this.updateval(0)} color="#461d72"><Text style={styles.inner_text}>Round Robin</Text></TouchableOpacity>
                <TouchableOpacity style={styles.but_area} onPress={()=>this.updateval(1)} color="#461d72"><Text style={styles.inner_text}>Priority</Text></TouchableOpacity>
                <TouchableOpacity style={styles.but_area} onPress={()=>this.updateval(2)} color="#461d72"><Text style={styles.inner_text}>Shortest Remaining Time</Text></TouchableOpacity>
                </View>
                <View>
                <Text style={styles.heading}>Non-PreEmptive</Text>
                <TouchableOpacity style={styles.but_area} onPress={()=>this.updateval(3)} color="#663320"><Text style={styles.inner_text}>Shortest Job First</Text></TouchableOpacity>
                <TouchableOpacity style={styles.but_area} onPress={()=>this.updateval(4)} color="#663320"><Text style={styles.inner_text}>Priority</Text></TouchableOpacity>
                <TouchableOpacity style={styles.but_area} onPress={()=>this.updateval(5)} color="#663320"><Text style={styles.inner_text}>First Come Firt Serve</Text></TouchableOpacity>
                </View>
                <View style={styles.footer}><Text>Copyrights @2020 By MNY</Text></View>
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
  heading:{
    color: "white",
    borderColor: 'white',
    borderWidth: 2,
    backgroundColor: 'black',
    paddingLeft: '25%',
    paddingTop: 10,
    paddingBottom: 8,
    fontSize: 22,
    marginTop: 15,
    marginBottom: 5,

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
    paddingTop:8,
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
    backgroundColor:'gray',
  }
});
