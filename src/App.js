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

    // # containing JUST calling functions in componentDidMount is much better. beacause we might have write lots of codes.

    //↓ the flow of  < change state > part is not going to happen like 1. and 2. and 3. ...
    // because of the setTimeOut, API, and asynchronous functions.

    // change state 1.
    setTimeout(() => {
      // this.state.greeting = 'not hello' -> error -> because it ignore life cycle
      this.setState({
        movies : [
            {
              title: "movie 1",
              poster: "https://movie.walkerplus.com/topSWF/mv66575.jpg"
            },
            {
              title: "movie 2",
              poster: "https://movie.walkerplus.com/movie/title/image_contents/m/mv67041-m.jpg"
            }
          ]
      })
      console.log('just setState');
    }, 1000)
    // # when state changed, render cycle will happen.

    // change state 2.
    setTimeout(() => {
      this.setState({
        movies: [
          // ...this.state.movies, // if this phrase doenst exist, this.state.movies wolud be replace.
          {
            title: "movie added by setState()",
            poster: "https://irs.www.warnerbros.com/keyart-jpeg/movies/media/browser/RAMPAGE_onesheet.JPEG"
          },
          {
            title: "movie 3 added by setState()",
            poster: "https://movie.walkerplus.com/movie/title/image_contents/m/mv66898-m.jpg"
          },
          {
            title: "movie 4 added by setState()",
            poster: "https://movie.walkerplus.com/api/resizeimage/news/article/192300/1154418?w=88"
          }// this < with ... > will add one object to array<this.state.movies> like <array.push()>
          // if you move <...this.state.movies> down here, like <array.unshift()> will be happen.
        ]
      })
      console.log('just setState with little trick');
    }, 2000);
    // # this setState() could be use to change list view of display when i scoll the page. like sns

    // change state 3.
    fetch('https://yts.lt/api/v2/list_movies.json?page=1')
    .then(res => {
      // console.log(res); // res === promise
      return res.json(); // actually return doesnt need. < => > is including return.
    })
    .then(json => {
      // console.log(json); // res === json

      // modifying json for what i want. or i could modifying my hogan
      const Movies = json.data.movies.map(movie => {
          return {
            title: movie.title,
            poster: movie.medium_cover_image
          }
        }
      );
      this.setState({
        movies: Movies
      });
      console.log('just fetch');

      return json;
    })
    .catch(err => {
      console.log(err);
    });

    // change state 3 - 2 < with async and await >.
    this._getMovies(2);
    this._getMovies(3);
    this._getMovies(4);
    // # dosent mean flow 2 and 3 and 4. it is up to how each function how fast done. i mean the api inside of function.
    // because, this._getMovies() have only one await function

    // change state 3 - 2 - 2 < another example with async and await >.
    this._getMoviesWithOrder(5);
    // this._getMoviesWithOrder() have more then one await function. so this is going to follow code. like .then().then()...





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
      // # by the way, using < index ↑ > as a key here, is not fast. using another one is better. like movie.id

      const _poster = 
      movie.medium_cover_image ? 
      movie.medium_cover_image : movie.poster ? 
      movie.poster : undefined;
      const _index = movie.id ? movie.id : index
      // # for example of modifying json from api. unless that, this code is unnecessary.

      // key has to be unique.
      return <Movie title={movie.title} poster={_poster} alt={_index} key={_index}/>
    });

    return movies; // ex) [<Movie />, <Movie />, <Movie />]
  } 


  // gettin api asynchronously function
  // # async function < or asynchronous function >
  _getMovies = async (page) => {
    page = (typeof(page) === "number") ? String(page) : '1';

    // await function
    const movies = await this._callMoviesApi(page);

    console.log(`fetch with async and await has start, with ${page}. means, await function has fished`);
    this.setState({
      movies
    });
    // # < movies : movies >   ===   < movies >   -> interesting on modern javascript

    console.log(`fetch with async and await has done, with ${page}`);
  }
  _callMoviesApi = (page) => {
    console.log(`await function with page ${page} has start.`);
    const movies = 
    fetch(`https://yts.lt/api/v2/list_movies.json?page=${page}`)
    .then(res => res.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err));
    console.log(`await function with page ${page} has done < not finished >. wich means, it is waiting now.`);
    return movies;
  }
  _getMoviesWithOrder = async (page) => {
    console.log('async, api, following order');

    // these are going to happen page 5 -> page 6 -> page 7.
    // await functions are going to be wait.
    // like .then().then().then()...

    let _page = page;
    let movies = await this._callMoviesApi(String(_page));
    console.log(`fetch with async and await has start, with ${_page}. means, await function has fished`);
    this.setState({movies});
    console.log(`fetch with async and await has done, with ${_page}`);

    _page = page + 1;
    movies = await this._callMoviesApi(String(_page));
    console.log(`fetch with async and await has start, with ${_page}. means, await function has fished`);
    this.setState({movies});
    console.log(`fetch with async and await has done, with ${_page}`);

    _page = page + 2;
    console.log(`fetch with async and await has start, with ${_page}. means, await function has fished`);
    movies = await this._callMoviesApi(String(_page));
    this.setState({movies});
    console.log(`fetch with async and await has done, with ${_page}`);
  }



}

export default App;
