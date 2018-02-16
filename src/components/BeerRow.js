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
            source={{ uri: beer.images[0] }}
        />
        <View styleName="vertical stretch space-between">
            <Subtitle styleName="top">{beer.name}</Subtitle>
            <Caption>{beer.summary}</Caption>
        </View>
        <Divider styleName="line" />
    </Row>
);

export default BeerRow;
