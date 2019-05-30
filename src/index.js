import React from 'react';
import ReactDOM from 'react-dom';

//1. ReactDOM.render(WHAT DO I WANT TO RENDER, WHERE DO I WANT TO RENDER IT)

//2. JSX Javascript rendition of HTML
//3. React from line 1 helps interpreting JSX
 
//4. Functional Components
function MyApp() {
  return (
    <div>
      <ul>
        <li>a</li>
        <li>b</li>
      </ul>
    </div>
  );
}

/*5. ReactDOM.render(<div><ul><li>a</li><li>b</li></ul></div>, document.getElementById('root'))*/

//6. This gives the same result as 5. Here, we can see the use of functional components
//ReactDOM.render(<MyApp />, document.getElementById('root'))

//7. Excercise 2: Try using another Functional Components
/*function Excercise2() {
  return (
    <div>
      <h1>qwetuaoaipalcbajkxlm;</h1>
    </div>
  );
}
ReactDOM.render(<Excercise2 />, document.getElementById('root'))*/

//8. It is advisable to keep each functional component in a different file since the code in one file can get messy. And the convention is to keep these component files grouped togetjer in a component folder. Let's create an App.js file inside the Components folder which will be the root or the entry point into the project 
import App from './Components/App'
ReactDOM.render(<App />, document.getElementById('root'))

//9. The Parent Child Files can be 