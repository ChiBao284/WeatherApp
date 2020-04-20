/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import HorizontalWeather from './screen/HorizontalWeather';
import Icon from 'react-native-vector-icons/Ionicons';

AppRegistry.registerComponent(appName, () => HorizontalWeather);
