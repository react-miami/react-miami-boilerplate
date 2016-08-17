// Dependencies.
import React from 'react';
import { connect } from 'react-redux';

// Layout components.
import Main from '../../layouts/main';

// UI components.
import { ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import Loader from '../../components/Loader';

// Utilities.
import utils from '../../utils';

// Redux actions.
import { fetchPokemon } from '../../redux/actions/getPokemon-actions';


// Define class.
class Homepage extends React.Component {
  constructor(props) {
    super(props);

    // Set page title.
    utils.title(props);
  }

  componentWillMount() {
    this.handleFetchPokemon('https://pokeapi.co/api/v2/pokemon');
  }

  handleFetchPokemon(url) {
    const { dispatch } = this.props;
    dispatch(fetchPokemon(url));
  }

  // Render method.
  render() {
    const { pokemon } = this.props;
    console.log(pokemon); // eslint-disable-line

    // Pokemon data.
    const pokemonItems = pokemon.items ? pokemon.items : null;
    const pokemonResults = pokemonItems ? pokemonItems.results : null;
    const pokemonCount = pokemonItems ? pokemonItems.count : null;
    const pokemonNextUrl = pokemonItems ? pokemonItems.next : null;
    const pokemonPreviousUrl = pokemonItems ? pokemonItems.previous : null;

    // List of pokemon names.
    let pokemonList = [];
    if (pokemonResults) {
      pokemonResults.forEach( result => {
        pokemonList.push(
          <ListGroupItem key={utils.unique()}>
            {result.name} ({result.url})
          </ListGroupItem>
        );
      });
    }

    // Next button.
    const nextButton = (
      <Button bsStyle={pokemonNextUrl ? 'primary' : 'default'}
        disabled={pokemonNextUrl ? false : true}
        onClick={this.handleFetchPokemon.bind(this, pokemonNextUrl)}
      >
        Next
      </Button>
    );

    // Previous button.
    const previousButton = (
      <Button bsStyle={pokemonPreviousUrl ? 'primary' : 'default'}
        disabled={pokemonPreviousUrl ? false : true}
        onClick={this.handleFetchPokemon.bind(this, pokemonPreviousUrl)}
      >
        Previous
      </Button>
    );

    return (
      <Main>
        <h1>
          Pokemon
          {pokemonCount ?
            <small className="pull-right">Total: {pokemonCount}</small>
          : null}
        </h1>

        {pokemon.isFetching ?
          <Loader theme="dark" />
        :
          <ListGroup>
            {pokemonList}
          </ListGroup>
        }

        <div className="clearfix">
          <div className="pull-left">{previousButton}</div>
          <div className="pull-right">{nextButton}</div>
        </div>
      </Main>
    );
  }
}

// PropTypes declaration.
Homepage.propTypes = {
  dispatch: React.PropTypes.func,
  pokemon: React.PropTypes.object,
};

// Redux connect to props.
const mapStateToProps = (state) => ({
  pokemon: state.pokemon,
});

// Export.
export default connect(mapStateToProps)(Homepage);
