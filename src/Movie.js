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

export default Movie;
