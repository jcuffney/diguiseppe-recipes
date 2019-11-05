import React, { useState, memo } from 'react'
// import PropTypes from 'prop-types'
import { useLazyQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import Search from 'components/Search'

import styles from './index.module.sass'

const GET_RECIPES = gql`
  {
    recipes {
      id
      title
    }
  }
`;

export const HomeView = () => {

  const [variables, setVariables] = useState({ terms: [] });
  const [fetchData, { loading, error, data }] = useLazyQuery(GET_RECIPES, variables);

  document.title = 'DiGuiseppe Recipes'

  // todo: make this actually support mutlple query terms
  const handleSearch = terms => {
    setVariables({ terms: [terms] });
    fetchData();
  }

  if (loading) return <h1>loading</h1>;
  if (error) console.error(error);

  console.log('here', data, variables);

  return (
    <div className={styles.homeView}>
      <div>
        <h1 className={styles.title}>DiGuiseppe Recipes</h1>
        <Search
          search={ handleSearch }
          options={[]}
        />
      </div>
      <p className={styles.credits}>Made with <span className={styles.heart}>&hearts;</span> by Joe Cuffney</p>
    </div>
  )
};

HomeView.propTypes = {};

HomeView.defaultProps = {};

export default memo(HomeView);
