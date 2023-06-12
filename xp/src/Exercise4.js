import React from 'react';
import './Exercise4.css';

const Exercise4 = () => {
  const style_header = {
    color: 'white',
    backgroundColor: 'DodgerBlue',
    padding: '10px',
    fontFamily: 'Arial'
  };

  return (
    <div>
      <h1 style={style_header}>Exercise 4</h1>
      <p className="para">This is a paragraph.</p>
      <a href="#">This is a link</a>
      <form>
        <input type="text" placeholder="Enter something" />
        <button type="submit">Submit</button>
      </form>
      <img src="https://pbs.twimg.com/card_img/1665652308074721285/YSxCWPu-?format=png&name=medium" alt="Example" />
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </div>
  );
};

export default Exercise4;
