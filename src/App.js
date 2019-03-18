import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Flashcards from './Flashcards';

class App extends Component {
  render() {
    const items = [{
      id: 1,
      front: {
        type: 'string',
        display: 'How much wood could a woodchuck chuck?',
      },
      back: {
        type: 'string',
        display: `Light years Euclid explorations tendrils of gossamer clouds preserve and cherish that pale blue dot kindling the energy hidden in matter. White dwarf concept of the number one bits of moving fluff cosmic ocean extraordinary claims require extraordinary evidence the only home we've ever known. Sea of Tranquility the ash of stellar alchemy descended from astronomers dispassionate extraterrestrial observer vastness is bearable only through love with pretty stories for which there's little good evidence and billions upon billions upon billions upon billions upon billions upon billions upon billions.  alchemy descended from astronomers dispassionate extraterrestrial observer vastness is bearable only through love with pretty stories for which there's little good evidence and billions upon billions upon billions upon billions upon billions upon billions upon billions.  alchemy descended from astronomers dispassionate extraterrestrial observer vastness is bearable only through love with pretty stories for which there's little good evidence and billions upon billions upon billions upon billions upon billions upon billions upon billions`
      }
    }, {
      id: 2,
      front: {
        type: 'string',
        display: 'Question number 2',
      },
      back: {
        type: 'string',
        display: 'This is a slightly longer short string blah blah',
      }
    }, {
      id: 3,
      front: {
        type: 'string',
        display: 'Is this a short answer?',
      },
      back: {
        type: 'string',
        display: 'Short string answer.',
      }
    }, {
      id: 4,
      front: {
        type: 'string',
        display: 'What is this a picture of?',
      },
      back: {
        type: 'image',
        display: 'http://placeimg.com/640/480/nature',
        options: {
          alt: 'A random picture of nature.'
        }
      }
    }, {
      id: 5,
      front: {
        type: 'string',
        display: 'What is this a picture of?',
      },
      back: {
        type: 'image',
        display: 'http://placeimg.com/640/480/animals',
        options: {
          alt: 'A random picture of an animal.'
        }
      }
    }];
    return (
      <div className="App">
        <h1>Flashcards</h1>
        <Flashcards items={items}/>
      </div>
    );
  }
}

export default App;
