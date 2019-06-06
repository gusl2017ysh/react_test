import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Movie from './Movie';

const movieTitles = [
  "movie 1",
  "movie 2",
  "movie 3",
  "movie 4"
];

const movieImages = [
  "https://movie.walkerplus.com/topSWF/mv66575.jpg",
  "https://movie.walkerplus.com/movie/title/image_contents/m/mv67041-m.jpg",
  "https://movie.walkerplus.com/movie/title/image_contents/m/mv66898-m.jpg",
  "https://movie.walkerplus.com/api/resizeimage/news/article/192300/1154418?w=88"
];

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
        {/* basic and dumb */}
        <Movie title={movieTitles[0]} poster={movieImages[0]}/>
        <Movie title={movieTitles[1]} poster={movieImages[1]}/>
        <Movie title={movieTitles[2]} poster={movieImages[2]}/>

        {/* smarter way */}
        {movies.map(movie , index => {
          // key has to be unique.
          return <Movie title={movie.title} poster={movie.poster} key={index}/>
        })}

        {/* ↑ what smarter way is doing */}
        {
          [
            <Movie title={movies[0].title} poster={movies[0].poster} key={0}/>,
            <Movie title={movies[1].title} poster={movies[1].poster} key={1}/>,
            <Movie title={movies[2].title} poster={movies[2].poster} key={2}/>,
            <Movie title={movies[3].title} poster={movies[3].poster} key={3}/>
          ]
        }

      </div>
    );
  }
}




class App2 extends Component {
  render() {
    return (
      <div className="App">
      
      </div>
    );
  }
}


class App3 extends Component {
  render() {
    return (
      <div className="App">
      
      </div>
    );
  }
}

export default App;
