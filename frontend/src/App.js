import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

import { Container } from 'react-bootstrap';

function App() {
  return (
    <>
      <main>
        <Header />
        <Container className='py-3'>
          <h1>welcome home</h1>
        </Container>
        <Footer />
      </main>
    </>
  );
}

export default App;
