import React from 'react';

function Food({ name, picture }){
  return <div>
    <h2>I like {name}</h2>
    <img src={picture} />

  </div>
}

const foodILike = [
  {
    name: "Kimchi",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FeTucCw1w6Ak%2Fmaxresdefault.jpg&f=1&nofb=1",
    
  },

  {
    name: "Samgyeopsal",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FIsEVv1Jt2Ro%2Fmaxresdefault.jpg&f=1&nofb=1",

  },

  {
    name: "Bibimbap",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F4%2F44%2FDolsot-bibimbap.jpg%2F1200px-Dolsot-bibimbap.jpg&f=1&nofb=1",

  },

  {
    name: "Doncasu",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F1169ED264C6A91F695&f=1&nofb=1",

  },

  {
    name: "Kimbap",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2F2G5SAC3UI3M%2Fmaxresdefault.jpg&f=1&nofb=1",

  }

];


function App() {
  return ( 
  <div>
    {foodILike.map(dish => (
      <Food name={dish.name} picture={dish.image} /> ))}
  </div>
  );
}

export default App;
