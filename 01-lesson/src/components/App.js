import React from 'react';
import Product from './Product';
import Section from './Section';
import BookList from './BookList';
import favouriteBooks from '../books.json';

export default function App() {
  return (
    <>
      <BookList books={favouriteBooks} />
      <h1>Welcome!</h1>

      <Section>
        <Product
          // imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
          name="Tacos With Lime"
          price={20.99}
          quantity={30}
        />
      </Section>

      <Section title="Recommended">
        <Product
          imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
          name="Fries and Burger"
          price={15.75}
          quantity={100}
        />
      </Section>
    </>
  );
}
