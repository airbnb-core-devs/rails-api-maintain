import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import StripeCheckout from "react-stripe-checkout"

function App() {

  const [product, setProduct] = useState({
    name: "React from Facebook",
    price: 10,
    productBy: "Facebook"
  })


  const makePayment = token => {
    const body = {
      token,
      product
    }
    const headers = {
      "Content-Type": "application/json"
    }

    return fetch(`http://localhost:8282//payment`,{
      method: "POST",
      headers,
      body: JSON.stringify(body)
    }).then(response => {
      console.log("RESPONSE", response)
      const{status} = response;
      console.log("STATUS",status)
    })
    .catch(err => console.log(err))
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <StripeCheckout
        stripeKey="pk_test_j3uZWpUyNTJpaAmd6WHEhMVh00kgTPnm4R"
        token=""
        name="Buy React"
        amount = {product.price * 100}
        >
          <button className="btn-large pink">Buy React just in ${product.price}</button>
        </StripeCheckout>
      </header>
    </div>
  );
}

export default App;
