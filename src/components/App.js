import React, { Component } from 'react';
import Footer from './Footer';
import Url from './Url';

class App extends Component {

  render() {
    return (
      <div className="text-center">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h2 className="text-red">React URL SHORTNER</h2>
        <Url />
        <Footer />
      </div>
    );
  }
}

export default App;
