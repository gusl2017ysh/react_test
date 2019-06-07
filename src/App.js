import React, {Component} from 'react';
import './App.css';

import Movie from './Movie';

const movies = [
  {
    title: "movie 1",
    poster: "https://movie.walkerplus.com/topSWF/mv66575.jpg"
  },
  {
    title: "movie 2",
    poster: "https://movie.walkerplus.com/movie/title/image_contents/m/mv67041-m.jpg"
  },
  {
    title: "movie 3",
    poster: "https://movie.walkerplus.com/movie/title/image_contents/m/mv66898-m.jpg"
  },
  {
    title: "movie 4",
    poster: "https://movie.walkerplus.com/api/resizeimage/news/article/192300/1154418?w=88"
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">

        {/* smarter way */}
        {movies.map((movie , index) => {
          // key has to be unique.
          return <Movie title={movie.title} poster={movie.poster} alt={index} key={index}/>
        })}

      </div>
    );
  }
}



export default App;
