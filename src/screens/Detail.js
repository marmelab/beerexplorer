import React from 'react';
import { withProps, setStatic, compose } from 'recompose';

import {
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';

import {
  Screen,
  ImageBackground,
  Tile,
  Title,
  Overlay,
  Subtitle,
} from '@shoutem/ui';

import beers from '../beers';

const Detail = ({ beer }) => (
    <Screen>
      <ImageBackground
        testID="DetailBackground"
        styleName="large-banner"
        source={{ uri: beer.images[0] }}
      >
        <Tile>
          <Overlay styleName="image-overlay">
            <Title testID="DetailTitle" styleName="sm-gutter-horizontal">{beer.name}</Title>
            <Subtitle testID="DetailSubTitle">{beer.summary}</Subtitle>
          </Overlay>
        </Tile>
      </ImageBackground>
      <ScrollView>
        <Text style={styles.description}>
          {beer.description}
        </Text>
      </ScrollView>
    </Screen>
);

const styles = StyleSheet.create({
  description: {
    padding: 25,
  },
});

const mapNavigationToProps = ({ navigation }) => ({
  beer: beers.find(({ id }) => id == navigation.state.params.beerId),
});

export default compose(
  setStatic('navigationOptions', props => {
    const { beer } = mapNavigationToProps(props);
    return { title: beer.name };
  }),
  withProps(mapNavigationToProps),
)(Detail);
