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
            </div>
        );
    }
};

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

export default Movie;
