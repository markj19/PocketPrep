import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json
import DetailsScreen from "./src/components/details"
import HomeScreen from "./src/components/home"
import Calendar from "./src/components/calendar"

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    Calendar: Calendar
  },
  {
    initialRouteName: 'Home',
  }
);
console.log("begin");
const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
