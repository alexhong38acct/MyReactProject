import React from 'react';

class Product extends React.Component {
	render() {
		const { details } = this.props;
		return(
			<li className="products">
				<img src={details.image} alt={details.name}/>
				<h3>{details.name}</h3>
				<p>{details.desc}</p>
			</li>
		)
	}
}

export default Product;
