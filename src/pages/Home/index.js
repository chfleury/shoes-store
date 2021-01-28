import React, { Component } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { connect } from 'react-redux';

import api from '../../services/apiClient';
import { formatPrice } from '../../util/format';
import { ProductList } from './styles';

class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('products');
    const products = response.data;

    products.forEach((p) => (p.price = formatPrice(p.price)));
    this.setState({ products: response.data });
  }

  handleAddProduct = (p) => {
    const { dispatch } = this.props;

    dispatch({
      type: 'ADD_TO_CART',
      product: p,
    });
  };

  render() {
    const { products } = this.state;
    return (
      <ProductList>
        {products.map((p) => (
          <li key={p.id}>
            <img src={p.image} alt={p.title} />
            <strong>{p.title}</strong>
            <span>{p.price}</span>

            <button type="button" onClick={() => this.handleAddProduct(p)}>
              <div>
                <MdAddShoppingCart size={16} color="#FFF" />
              </div>

              <span>ADICIONAR AO CARRINHO</span>
            </button>
          </li>
        ))}
      </ProductList>
    );
  }
}

export default connect()(Home);
