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
  
  // render life cycle => [componentWillMount, render, componentDidMount]
  // update life cycle => [componentWillReceiveProps, shouldComponentUpdate, componentWillUpdate, render, componentDidUpdate] 

  // ----------------------------------------------------------
  // render cycle.↓


  // render life cycle 1.
  componentWillMount() {
    console.log('w')
  }

  // render life cycle 2.
  render() {
    console.log('r')
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

  // render life cycle 3.
  componentDidMount() {
    console.log('d')
  }

  // ----------------------------------------------------------
  // update cycle.↓


  // update life cycle 1.
  componentWillReceiveProps() {
    console.log('cwrp')
  }

  // update life cycle 2.
  shouldComponentUpdate() {
    // when props has changed, this will return true
    console.log('scu')
  }

  // update life cycle 3.
  componentWillUpdate() {
    // when shouldComponentUpdate() has returned true, this cycle will happen
    console.log('cwu')
    // i may use loading phrase, icon, something like those here.
  }

  // update life cycle 4.
  // render () {} -> when componentWillUpdate() after done, 

  // update life cycle 5.
  componentDidUpdate() {
    // when props has changed
    console.log('cdu')
  }


}

export default App;
