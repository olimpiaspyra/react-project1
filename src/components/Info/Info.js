import React from 'react';
import Container from '../Container/Container.js';
import Hero from '../Hero/Hero.js';
import {infoContents} from '../../data/dataStore.js'; 
import PropTypes from 'prop-types';

const Info = () => (
  <Container>
    <Hero titleText={infoContents.title} imageLink={infoContents.image}/>
    {infoContents.description}    
  </Container>
);

Info.propTypes = {
  title: PropTypes.node,
  image: PropTypes.string,
  description: PropTypes.node,
};

export default Info;