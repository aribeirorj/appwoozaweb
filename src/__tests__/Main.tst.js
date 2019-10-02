import React from 'react';
import MockAdapter from 'axios-mock-adapter';
import { render, waitForElement } from '@testing-library/react';

import Main from '../Main';
import api from '../services/api';

test('Main Component', async () => {
  const { getAllByTestId } = render(<Main />);

  const apiMock = new MockAdapter(api);
  const data = [
    ' Estel Schumm',
    ' Jordy Russel',
    ' Sallie DuBuque',
    ' Ms. Mckayla Bayer',
    ' Citlalli Smith',
    ' Sunny Bergnaum',
  ];
  apiMock
    .onGet('https://5d8d1cdb370f02001405bd41.mockapi.io/api/v1/users')
    .reply(200, data);

  const rowValues = await waitForElement(() =>
    getAllByTestId('row').map((row) => row.textContent)
  );

  expect(rowValues).toEqual(data);
});
