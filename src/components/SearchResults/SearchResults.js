import React from 'react';
import styles from '../SearchResults/SearchResults.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import { settings } from '../../data/dataStore.js';
import Icon from '../Icon/Icon.js';

class SearchResults extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    cards: PropTypes.array,
    icon: PropTypes.node,    
  }; 

  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }

  componentDidMount () {
    // eslint-disable-next-line react/prop-types
    this.props.changeSearchString (this.props.id);
  }
  
  render() {   
    const {title, icon, cards} = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          {title}
          <span className={styles.icon}>
            <Icon name={icon} />
          </span>
        </h3>
        <div className={styles.cards}>
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </div>       
      </section>       
    );
  }
}

export default SearchResults;
