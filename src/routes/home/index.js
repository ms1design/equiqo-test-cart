import React from 'react';
import Home from './Home';
import Layout from '../../components/Layout';

async function action({ fetch }) {
  const resp = await fetch('/api/products');
  const fetchedData = await resp.json();
  if (!fetchedData) throw new Error('Failed to load products.');

  return {
    chunks: ['home'],
    title: 'Equiqo Cart',
    component: <Layout>{<Home products={fetchedData} />}</Layout>,
  };
}

export default action;
