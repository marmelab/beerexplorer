import React from 'react';
import { withProps } from 'recompose';

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
        source={{ uri: beer.image.url }}
      >
        <Tile>
          <Overlay styleName="image-overlay">
            <Title testID="DetailTitle" styleName="sm-gutter-horizontal">{beer.name}</Title>
            <Subtitle testID="DetailSubTitle">{beer.description}</Subtitle>
          </Overlay>
        </Tile>
      </ImageBackground>
    </Screen>
);

Detail.navigationOptions = {
  title: 'Detail',
};

const mapNavigationToProps = ({ navigation }) => ({
  beer: beers.find(({ id }) => id == navigation.state.params.beerId),
});

export default withProps(mapNavigationToProps)(Detail);
