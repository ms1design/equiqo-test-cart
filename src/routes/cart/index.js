import React from 'react';
import Cart from './Cart';
import Layout from '../../components/Layout';

async function action({ store }) {
  const state = await store.getState();
  const orderedProducts = state.cart;
  return {
    chunks: ['home'],
    title: 'Esquito Cart',
    component: (
      <Layout>
        <Cart items={orderedProducts} />
      </Layout>
    ),
  };
}

export default action;
