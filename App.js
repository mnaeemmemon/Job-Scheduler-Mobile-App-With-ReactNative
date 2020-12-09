import  {createAppContainer}  from 'react-navigation';
import  {createStackNavigator} from 'react-navigation-stack';

import Home1 from './Home1';
import Home2 from './Home2';
import Choicepor from './Choicepor';
import FCFS from './FCFS';
import Priority from './Priority';
import Priority2 from './Priority2';
import RR from './RR';
import SJF from './SJF';
import STR from './STR';
import Details from './Details';
import Comparision from './Comparision';
import DrawerPage from './DrawerPage'

const App = createStackNavigator({
  Choicepor: {  screen: Choicepor  },
  Home1: {  screen: Home1 },
  Home2: {  screen: Home2 },
  Priority: {  screen: Priority },
  Priority2: {  screen: Priority2 },
  FCFS: {  screen: FCFS },
  RR:   {  screen: RR   },
  SJF:  {  screen: SJF  },
  STR:  {  screen: STR  },
  Details:{  screen:Details },
  Comparision:{  screen:Comparision },
  DrawerPage:{  screen:DrawerPage  },
},
{
  initialRouteName: 'Choicepor',
}
);

export default createAppContainer(App);