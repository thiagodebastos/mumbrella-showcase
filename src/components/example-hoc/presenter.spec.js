import React from 'react';
import { shallow } from 'enzyme';
import Stream from './presenter';

describe('Stream', () => {
    const props = {
        tracks: [{ id: 0, title: 'Journey' }, { id: 1, title: 'Neverending' }]
    };

    it('shows two elements', () => {
        const element = shallow(<Stream {...props} />);
        expect(element.find('.track')).toHaveLength(2);
    });
});
