import React, {Component} from 'react';
import { COMBINATOR } from 'postcss-selector-parser';

function Moive_list() {
  return (
    <div className="mivie-list-div">
      <header className="movie-list-header">
        <h1>movie list</h1>

        {/* list */}
        <div className="list-div">
            <ul className="list-ul">
                <li className="list-li">li 1</li>
                <li className="list-li">li 2</li>
                <li className="list-li">li 3</li>
                <li className="list-li">li 4</li>
                <li className="list-li">li 5</li>
            </ul>
        </div>

        {/* card list */}
        <div className="card-list">
            <table>
                <tr>
                    <Card_td />
                </tr>
            </table>
        </div>

      </header>
    </div>
  );
};

class Card_td extends Component {
    render() {
        if (1 > 2) {
            return (
                <td>test_td_true</td>
            );
        } else {
            return (
                <td>test_td_false</td>
            );
        }
    }
};


function Movie_card() {
    return (
        <div className="movie-card">

        </div>
    );
};

function Movie_cover() {
    return (
        <div className="movie-cover"></div>
    );
};

// classでcomponent作成
class movie_card_c extends Component {
    render() {
        return (
            <div className="movie-card">
            
            </div>
        );
    }
};


export default Moive_list;
