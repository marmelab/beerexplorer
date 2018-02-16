import React from 'react';

import {
    Row,
    View,
    Image,
    Divider,
    Subtitle,
    Caption,
} from '@shoutem/ui';

export const BeerRow = ({ beer }) => (
    <Row>
        <Image
            styleName="small rounded-corners"
            source={{ uri: beer.image.url }}
        />
        <View styleName="vertical stretch space-between">
            <Subtitle styleName="top">{beer.name}</Subtitle>
            <Caption>{beer.description}</Caption>
        </View>
        <Divider styleName="line" />
    </Row>
);

export default BeerRow;
