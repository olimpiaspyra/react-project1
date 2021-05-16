import React from 'react';
import Container from '../Container/Container.js';
import Hero from '../Hero/Hero.js';
import {faqContents} from '../../data/dataStore.js';
import PropTypes from 'prop-types';

const FAQ = () => (
    
  <Container>
    <Hero titleText={faqContents.title} imageLink={faqContents.image}/>
    {faqContents.description}    
  </Container>
);

FAQ.propTypes = {
  title: PropTypes.node,
  image: PropTypes.string,
  description: PropTypes.node,
};

export default FAQ;