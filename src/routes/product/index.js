import React from 'react';
import Product from './Product';
import Layout from '../../components/Layout';

// debug only
import data from '../../mock/data.json';

async function action({ fetch }) {
  // const resp = await fetch('/graphql', {
  //   body: JSON.stringify({
  //     query: '{news{title,link,content}}',
  //   }),
  // });
  // const { data } = await resp.json();

  if (!data) throw new Error('Failed to load data.');
  return {
    chunks: ['product'],
    title: 'Esquito Cart',
    component: (
      <Layout>
        <Product {...data} />
      </Layout>
    ),
  };
}

export default action;
