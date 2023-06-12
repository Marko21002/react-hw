import logo from './logo.svg';
import './App.css';
import NoJSX from './NoJSX';
import React from 'react';
import User from './User';
import Exercise4 from './Exercise4';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const myelement = <h1>I Love JSX!</h1>;
const sum = 5 + 5;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Exercise4/>
      {/* <h1>Hello World</h1>
      {myelement}
      <p>React is {sum} times better with JSX</p>
      <User/>
       <NoJSX/> */}
        <div>
      <Carousel>
        <div>
          <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.jpg" alt="Image 1" />
        </div>
        <div>
          <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/c1cklkyp6ms02tougufx.webp" alt="Image 2" />
        </div>
        <div>
          <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/liw377az16sxmp9a6ylg.webp" alt="Image 3" />
        </div>
      </Carousel>
    </div>
      </header>
    </div>
  );
}



export default App;
