// const element = document.createElement('h1');
// element.innerText = 'hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);


// usando React
// import React from 'react';
// import ReactDOM from 'react-dom';

// // const jsx= <h1>Hello, Platzi Badges from React!</h1>
// // const element = React.createElement('a', { href: 'https://platzi.com'}, 'ir a platzi');

// // const name = 'Sebastian';
// // const element =  React.createElement('h1',{}, `Hola, soy ${name}`);
// // const jsx = <h1> hola soy {name}</h1>

// const jsx = <div>
//     <h1>Hola, soy Sebastian</h1>
//     <p>Soy Dev</p>
// </div>

// const element = React.createElement(
//     'div',
//     {},
//     React.createElement('h1', {}, 'Hola, soy Sebastian'),
//     React.createElement('p', {}, 'Soy Dev')
// );

// const container = document.getElementById('app');

// // ReactDOM.render(__qúe__, __dónde__);

// ReactDOM.render(element, container);

import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import './global.css';
import App from './components/App';

const container = document.getElementById('app');

ReactDOM.render(<App />, container);