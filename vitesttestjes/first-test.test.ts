import { expect, test } from 'vitest'
import { sum } from './first-test';
// import {} from '@testing/library';

test('adds 1 + 2 to equal 3', () => {
  
  render(JouwPagina);

  let btn = screen.getByRole('button');
  userEvent.click(btn);

  let nrOfRows = screen.getAllByRole('tablerow');

  expect(nrOfRows).toBe(3)
});
