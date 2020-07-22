import React from 'react';
import reactDOM from 'react-dom';
import {render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Restaurant from './Restaurant';

it('render without crashing', () => {
    const div = document.createElement('div');
    reactDOM.render({Restaurant}, div);
})