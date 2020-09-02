import React, { Component } from 'react';
import axios from 'axios';
import ActivePokemon from './components/ActivePokemon';
import PokemonList from './components/PokemonList';

class App extends Component {
  state = {
    pokemonArr: [],
    activePokemonObj: {},
  };

  /*
   * Runs once when the component first mounts
   * Mounting is the phase in which our React component mounts on the DOM
   * see this diagram for more info: https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
   */
  componentDidMount() {
    // console.log('App component mounted');
    // a good place to call a method/function to init state data
    this.getActivePokeData('charmander');
    this.getPokeArrData();
  }

  /*
   * LifeCycle Method that runs many times
   * Anytime you call this.setState or click a <Link> component, componentDidUpdate will run
   * watch out for infinite loops here! Be sure to only setState when certain conditions are true
   */
  componentDidUpdate(_prevProps, prevState) {
    // console.log('App component updated');
    const { params } = this.props.match;
    if (
      params.name !== undefined &&
      prevState.activePokemonObj.name !== params.name
    ) {
      this.getActivePokeData(params.name);
    }
  }

  componentWillUnmount() {
    // console.log('App component has unmounted');
    // useful to remove things like setInterval if they are running inside the App component
  }

  /*
   * Fetch array of data and setState updating: pokemonArr
   */
  getPokeArrData() {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon`)
      .then((response) => {
        console.log(response);
        this.setState({
          pokemonArr: response.data.results,
        });
      })
      .catch((err) => console.log(err));
  }

  /*
   * Fetch an object and setState updating: activePokemon, takes 1 param which is the pokemon name
   */
  getActivePokeData(name) {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => {
        // console.log(response);
        this.setState({
          activePokemonObj: response.data,
        });
      })
      .catch((err) => console.log(err));
  }

  /*
   * Render method which runs many times
   */
  render() {
    console.log('App render');
    return (
      <div className="App">
        <div className="container">
          <div className="flex-columns">
            <div className="flex-columns__left">
              <ActivePokemon activePokemonObj={this.state.activePokemonObj} />
            </div>
            <div className="flex-columns__right">
              <PokemonList pokemonArr={this.state.pokemonArr} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
