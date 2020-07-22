import React from 'react';
//import { Router } from 'react-router-dom';
//import { createMemoryHistory } from 'history';
//import { act } from 'react-dom/test-utils';
import { render , fireEvent, wait, getByText, getByTestId, getByPlaceholderText } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Cart from './cart'

describe('test', () => {
  test('Testing cart empty', () => {
    const obj = JSON.stringify(
        {"address": 
            { "neighbourhood": "Vila N. Conceição", 
            "number": "177", 
            "city": "São Paulo", 
            "apartment": null, 
            "state": "SP", 
            "street": "R. Afonso Braz" }
        });
    const data = JSON.stringify(
        []);

    window.localStorage.clear();
    window.localStorage.setItem("addressUser", obj);
    window.localStorage.setItem("cart", data);

    const { container, getByText, getByTestId } = render(
          <Cart />
    );
    const addressLocalStorage = JSON.parse(localStorage.getItem('addressUser'))
    //expect(localStorage.getItem).toEqual({"address": {"street": "blabla"}})
    //console.log(addressLocalStorage)
    
    //console.log(container.innerHTML)
    const address = getByText(/R. Afonso Braz/i);
    expect(address).toBeInTheDocument(/R. Afonso Braz/i);

    const InputMoney = getByTestId(/money/i);
    userEvent.click(InputMoney)
    const InputCard = getByTestId(/card/i);
    expect(InputMoney).toBeChecked();
    expect(InputCard).not.toBeChecked();
    
  });

  test('Testing cart full', () => {
    
    const obj = JSON.stringify(
        {"address": 
            { "neighbourhood": "Vila N. Conceição", 
            "number": "177", 
            "city": "São Paulo", 
            "apartment": null, 
            "state": "SP", 
            "street": "R. Afonso Braz" }
        });
    const data = JSON.stringify(
        [{"id":1,"product": "cart", "price": 19}, 
         {"id":2,"product": "cart2", "price": 19}
        ]);
    
    window.localStorage.clear();
    window.localStorage.setItem("addressUser", obj);
    window.localStorage.setItem("cart", data);

    const { container, getByText, getByTestId } = render(
          <Cart />
    );
    const addressLocalStorage = JSON.parse(localStorage.getItem('addressUser'))
    //expect(localStorage.getItem).toEqual({"address": {"street": "blabla"}})
    //console.log(addressLocalStorage)
    
    //console.log(container.innerHTML)
    const address = getByText(/R. Afonso Braz/i);
    expect(address).toBeInTheDocument(/R. Afonso Braz/i);

    const InputMoney = getByTestId(/money/i);
    userEvent.click(InputMoney)
    const InputCard = getByTestId(/card/i);
    expect(InputMoney).toBeChecked();
    expect(InputCard).not.toBeChecked();
    
  });
})