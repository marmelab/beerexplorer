import React from 'react';
import { Screen, ListView, Touchable } from '@shoutem/ui';

import beers from '../beers';
import { BeerRow } from '../components/BeerRow';

const Home = ({ navigation }) => (
    <Screen>
      <ListView
        testID="BeerList"
        data={beers}
        renderRow={beer => (
          <Touchable testID="BeerListItem" onPress={() => navigation.navigate('Detail', { beerId: beer.id })}>
            <BeerRow beer={beer} />
          </Touchable>
        )}
      />
    </Screen>
);

Home.navigationOptions = {
  title: 'Beer Explorer',
};

export default Home;
