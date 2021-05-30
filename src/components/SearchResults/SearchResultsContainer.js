import {connect} from 'react-redux';
import SearchResults from './SearchResults.js';
import {getCardsForSearchResults} from '../../redux/cardsRedux.js';
import {createAction_changeSearchString} from '../../redux/searchStringRedux';

const mapStateToProps = (state, props) => ({
  id: props.match.params.id,
  cards: getCardsForSearchResults (state),
});

const mapDispatchToProps = (dispatch) => ({
  changeSearchString: newSearchString => dispatch(createAction_changeSearchString(newSearchString)),
});

export default connect (mapStateToProps, mapDispatchToProps)(SearchResults);