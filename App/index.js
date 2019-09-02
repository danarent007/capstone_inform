/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { YellowBox } from 'react-native';


AppRegistry.registerComponent(appName, () => App )
constructor() 
{
    YellowBox.ignoreWarnings(['Setting a timer for a long']);
}