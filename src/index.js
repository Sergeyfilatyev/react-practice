// import React from "react";
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import './index.css';

// const data = {
//   id: 'id-1',
//   url: 'https://cdn.pixabay.com/photo/2017/07/31/22/05/feathers-2561511_1280.jpg',
//   title: 'Feathers. Art abstract',
//   price: 500,
//   author: {
//     tag: 'ractapopulous',
//     url: 'https://pixabay.com/users/ractapopulous-24766/',
//   },
//   quantity: 10,
// };
// const painting = (
// 	<div>
// 		<img src={data.url} alt={data.title} width="480" />
// 		<h2>{data.title}</h2>
// 		<p>Author {data.author.tag}</p>
// 		<p>Цена {data.price} кредитов</p>
// 	</div>
// );
// console.log(painting);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.querySelector('#root')
// );
