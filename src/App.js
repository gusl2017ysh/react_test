import React, {Component} from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {
  

  // 1.life cycle of component in react
  // render life cycle => [componentWillMount, render, componentDidMount]
  // update life cycle => [componentWillReceiveProps, shouldComponentUpdate, componentWillUpdate, render, componentDidUpdate] 


  // 2. state
  // state. is An Object in each of Components of react <but There is also stateless component>
  // when this state has changed, everytime, will call render() <include whole update cycle>
  state = {
    // greeting: 'hello',
    // movies : [
    //   {
    //     title: "movie 1",
    //     poster: "https://movie.walkerplus.com/topSWF/mv66575.jpg"
    //   },
    //   {
    //     title: "movie 2",
    //     poster: "https://movie.walkerplus.com/movie/title/image_contents/m/mv67041-m.jpg"
    //   },
    //   {
    //     title: "movie 3",
    //     poster: "https://movie.walkerplus.com/movie/title/image_contents/m/mv66898-m.jpg"
    //   },
    //   {
    //     title: "movie 4",
    //     poster: "https://movie.walkerplus.com/api/resizeimage/news/article/192300/1154418?w=88"
    //   }
    // ]
  }



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

        {/* this is much better */}
        {this.state.movies ? this._renderMovies() : 'loading'}

        {/* 
        {this.state.movies.map((movie , index) => {
          // key has to be unique.
          return <Movie title={movie.title} poster={movie.poster} alt={index} key={index}/>
        })}
        */}

      </div>
    );
  }

  // render life cycle 3.
  componentDidMount() {
    console.log('d')

    // change state 1.
    setTimeout(() => {
      // this.state.greeting = 'not hello' -> error -> because it ignore life cycle
      this.setState({
        greeting: 'hello again.'
      })
    }, 2000)
    // # when state changed, render cycle will happen.

    // change state 2.
    setTimeout(() => {
      this.setState({
        movies: [
          // ...this.state.movies, // if this phrase doenst exist, this.state.movies wolud be replace.
          {
            title: "movie added by setState()",
            poster: "https://irs.www.warnerbros.com/keyart-jpeg/movies/media/browser/RAMPAGE_onesheet.JPEG"
          } // this will add one object to array<this.state.movies> like <array.push()>
            // if you move <...this.state.movies> down here, like <array.unshift()> will be happen.
        ]
      })
    }, 1000);
    // # this could be use to change list view of display when i scoll the page. like sns

    // change state 3.
    const callApiFromFetch = fetch('https://yts.lt/api/v2/list_movies.json')
    .then(res => {
      console.log(res); // res === promise
      return res.json();
    })
    .then(json => {
      console.log(json); // res === json

      // modifying json for what i want. or i could modifying my hogan
      const Movies = json.data.movies.map(movie => {
          return {
            title: movie.title,
            poster: movie.medium_cover_image
          }
        }
      )
      this.setState({
        movies: Movies
      })

      return json;
    })
    .catch(err => {
      console.log(err);
    });





  }

  // ----------------------------------------------------------
  // update cycle.↓


  // update life cycle 1.
  componentWillReceiveProps() {
    console.log('cwrp')
  }

  // update life cycle 2.
  shouldComponentUpdate() {
    // when props or state has changed, this will return true
    console.log('scu')

    return true;
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

  // ----------------------------------------------------------
  // some functions.↓


  // render movies function
  _renderMovies = () => {
    const movies =
    this.state.movies.map((movie , index) => {
      // key has to be unique.
      return <Movie title={movie.title} poster={movie.poster} alt={index} key={index}/>
    });

    return movies; // ex) [<Movie />, <Movie />, <Movie />]
  } 


}

export default App;
