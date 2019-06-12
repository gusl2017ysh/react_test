import React, { Component } from 'react';
import PropTypes from 'prop-types' // npm install, yarn added. beacuse react already have some like propTypes.
import './Movie.css';


class Movie extends Component {
    // check type
    static propTypes = {
        title: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired,
        alt: PropTypes.number.isRequired
    }

    render() {
        return (
            <div>
                <h1 data-title={this.props.title}>this movie is {this.props.title}</h1>
                <MoviePoster poster={this.props.poster} alt={this.props.alt}/>
                {/* <DumbMoviePoster poster={this.props.poster} alt={this.props.alt}/> -> in case of dumb component */}
            </div>
        );
    }
};

// class component. aka, smart component
class MoviePoster extends Component {
    static propTypes = {
        poster: PropTypes.string.isRequired,
        alt: PropTypes.number.isRequired
    }
    render() {
        return (
            <img src={this.props.poster ? this.props.poster : undefined} alt={this.props.alt} />
        );
    }
};

// functional component. also called stateless component or stateless functional component. aka, dumb component
function DumbMoviePoster({poster, alt}) {
    // doesnt need  < state, Component, render, life cycle > -> more Codeless
    return (
        <img src={poster ? poster : undefined} alt={alt} />
    )
    // # this dumb component is just for return jsx <after all, HTML>
}
DumbMoviePoster.propTypes = {
    poster: PropTypes.string.isRequired
}
// # this is how to check type of props in dumb component



// export function PagingMovies({page, e}) {
//     return <button className="pageBtn" onClick={e}>{page}</button>
// }
// PagingMovies.propTypes ={
//     page: PropTypes.number.isRequired
// }

export class PagingMovies extends Component {
    static propTypes = {
        page: PropTypes.number.isRequired
    }
    constructor(props) {
        super(props);
        // this.handleClick = this.handleClick.bind(this);

        // getting event from parent component
        this._handleClick = this.props.pagingEvent.bind(this, this.props.page); // handle parameter
    }
    // handleClick() {
    //     debugger
    //     console.log('click!!!');
    // }
    render() {
        return <button className="pageBtn" onClick={this._handleClick}>
               {String(this.props.page) === this.props.currentPage ? <h1>{this.props.page}</h1> : this.props.page}
               </button>
    }
}



export default Movie;
