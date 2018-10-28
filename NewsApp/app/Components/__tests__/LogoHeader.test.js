import React from 'react';
import renderer from 'react-test-renderer';

import LogoHeader from '../LogoHeader';

describe('Logo Header', () => {

    it('It displays the Logo Header correctly', () => {
        const tree = renderer.create(<LogoHeader />)
                        .toJSON();
        expect(tree).toMatchSnapshot();
    });

});