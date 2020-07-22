import React from 'react'
import { Router } from 'react-router-dom'
import { render, fireEvent, wait } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createMemoryHistory } from 'history';

import Login from './LoginPage'

test('LoginPage route SignUpPage', () => {
    const history = createMemoryHistory();
    const { getByTestId, getByText } = render (
        <Router history={history}>
            <App />
        </Router>
    )
})