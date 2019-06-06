import React, { Component } from 'react';
import './Movie.css';


class Movie extends Component {
    render() {
        const props = this.props;
        const title = this.props.title ? this.props.title : '[unknown]';
        
        return (
            <div>
                <h1 data-title={this.props.title}>this movie is {title}</h1>
                <MoviePoster poster={this.props.poster}/>
            </div>
        );
    }
};

class MoviePoster extends Component {
    render() {
        return (
            <img src={this.props.poster ? this.props.poster : undefined} />
        );
    }
};

export default Movie;
