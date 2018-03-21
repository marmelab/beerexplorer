import React from 'react';
import { StackNavigator } from 'react-navigation';
  
import Home from './screens/Home';
import Detail from './screens/Detail';

const Routes = StackNavigator(
    {
        Home: { screen: Home },
        Detail: { screen: Detail },
    },
    { initialRouteName: 'Home' },
);

export default () => <Routes />;

