import React from 'react';
import Home from './Home';
import Layout from '../../components/Layout';

async function action({ fetch }) {
  const resp = await fetch('/api/products');
  const data = await resp.json();

  if (!data) throw new Error('Failed to load products.');
  return {
    chunks: ['home'],
    title: 'Esquito Cart',
    component: (
      <Layout>
        <Home products={data} />
      </Layout>
    ),
  };
}

export default action;
