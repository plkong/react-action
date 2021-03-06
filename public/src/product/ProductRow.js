/**
 * Author: CodeLai
 * Email: codelai@dotdotbuy.com
 * DateTime: 2016/7/14 16:46
 */
import React from 'react';

export default class ProductRow extends React.Component {

  render() {
    const name = this.props.product.stocked
        ? this.props.product.name
        : <span style={{color: 'red'}}>
      {this.props.product.name}
    </span>;

    return (<tr>
      <td>{name}</td>
      <td>{this.props.product.price}</td>
    </tr>);
  }
}