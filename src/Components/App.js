import React from 'react';

function App() {
  return (
    <div>
      <h1>This is a heading</h1>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
      <footer>
        <h3>This is a footer</h3>
      </footer>
    </div>
  );
}

//Another way to implement the above code is through Parent/Child Files/
import Footer from './Footer'
function App() {
  return (
    <div>
      <h1>This is a heading</h1>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
      <Footer />
    </div>
  );
}
export default App;