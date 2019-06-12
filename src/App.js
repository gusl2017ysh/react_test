import React, {Component} from 'react';
import './App.css';
import Movie, {PagingMovies} from './Movie';

class App extends Component {
  

  // 1.life cycle of component in react
  // render life cycle => [componentWillMount, render, componentDidMount]
  // update life cycle => [componentWillReceiveProps, shouldComponentUpdate, componentWillUpdate, render, componentDidUpdate] 


  // 2. state
  // state. is An Object in each of Components of react <but There is also stateless component>
  // when this state has changed, everytime, will call render() <include whole update cycle>
  state = {}



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

        {this.state.movies ? <h1>total page : {this.state.pages} </h1> : ''}
        
        <div className="paging">
          {this.state.pages ? this._renderPageingButton() : ''}
        </div>

        {/* this is much better */}
        {this.state.movies ? this._renderMovies() : 'loading'}

      </div>
    );
  }

  // render life cycle 3.
  componentDidMount() {
    console.log('d')

    // get movie first
    this._getMoviesFirst();
    
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

    console.log('loading')

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
    this.state.movies.map(movie => {
      return <Movie title={movie.title} poster={movie.medium_cover_image} alt={movie.id} key={movie.id}/>
    });

    return movies;
  } 


  // for Event functions


  _paging = async (page, e) => { // getting parameter
    e.preventDefault(); // must be. every events on react
    if (this.state.page) {
      page = (typeof(page) === "number") ? String(page) : '1';
    } else {
      return;
    }

    const json = await this._callMoviesDataApi(page)
        , data = json.data
        , spare = data.movie_count % data.limit
        , pages = ((data.movie_count - spare) / data.limit)  + (spare > 0 ? 1 : 0);
    this.setState({
      movies: data.movies,
      page,
      pages
    });
  }

  _callMoviesDataApi = (page) => {
    return fetch(`https://yts.lt/api/v2/list_movies.json?page=${page}`)
    .then((res) => res.json())
    .catch((err) => console.log(err));
  }


  // render movies function


  // handle event of here.
  _renderPageingButton = () => {
    let page = parseInt(this.state.page, 10);
    const pageCount = this.state.pages > 5 ? 5 : page;
    page = 
    page === 2 ? page - 1
    : page > 2 ? page - 2 : page;

    let pageButtons = [];
    for (let i = 0; i < pageCount; i++) {
      pageButtons = [
        ...pageButtons,
        <PagingMovies page={page} pagingEvent={this._paging} currentPage={this.state.page} key={page}/>
      ]
      page++;
    }

    return pageButtons
  } 

  _getMoviesFirst = async () => {
    const page = '1'
        , json = await this._callMoviesDataApi(page)
        , data = json.data
        , spare = data.movie_count % data.limit
        , pages = ((data.movie_count - spare) / data.limit)  + (spare > 0 ? 1 : 0);
    this.setState({
      movies: data.movies,
      page: page,
      pages: pages
    });
  }



}




export default App;
