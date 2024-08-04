import React from 'react';
import { render,fireEvent, waitFor, screen } from '@testing-library/react';
import Heading from "./components/sections/orderPages/Heading";
import { BrowserRouter } from 'react-router-dom';
import BookingForm from './components/sections/reservePages/BookingForm';

test("renders learn react link", () => {
  render(<Heading />);
  const headingElement = screen.getByText(/Order Online/);
  expect(headingElement).toBeInTheDocument();
});

describe('BookingForm component', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <BrowserRouter>
        <BookingForm />
      </BrowserRouter>
    );
    expect(getByText('Book Table')).toBeInTheDocument();
  });

});