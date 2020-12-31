/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import demo from './demo';
import Calculator from './Calculator';
import FormSignUp from './FormSignUp';
import home from './hompage';
import FlatList from './FlatList';
import {name as appName} from './app.json';



AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, ()=> demo);
AppRegistry.registerComponent(appName, ()=> Calculator);
AppRegistry.registerComponent(appName, ()=> FormSignUp);
//AppRegistry.registerComponent(appName, ()=> FlatList);




