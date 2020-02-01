import React from 'react';
import PropTypes from "prop-types";

function Food({ name, picture, rating }){
  return <div>
    <h2>I like {name}</h2>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name} />
  </div>
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};



const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FeTucCw1w6Ak%2Fmaxresdefault.jpg&f=1&nofb=1",
    rating: 3
    
  },

  {
    id: 2,
    name: "Samgyeopsal",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FIsEVv1Jt2Ro%2Fmaxresdefault.jpg&f=1&nofb=1",
    rating: 4.9
  },

  {
    id: 3,
    name: "Bibimbap",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F4%2F44%2FDolsot-bibimbap.jpg%2F1200px-Dolsot-bibimbap.jpg&f=1&nofb=1",
    rating: 4.8
  },

  {
    id: 4,
    name: "Doncasu",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F1169ED264C6A91F695&f=1&nofb=1",
    rating: 5.5
  },

  {
    id: 5,
    name: "Kimbap",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2F2G5SAC3UI3M%2Fmaxresdefault.jpg&f=1&nofb=1",
    rating: 3.7
  }

];


function App() {
  return ( 
  <div>
    {foodILike.map(dish => (
      <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} /> ))}
  </div>
  );
}

export default App;
