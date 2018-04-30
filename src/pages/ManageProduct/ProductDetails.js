import React, { Component } from 'react';
import Product from '../../components/Product.js';
import ProductUtils from '../../utils/productUtils';



class ProductDetails extends Component {
  constructor(props){
    super(props);
    this.state = {
       products : [{
        "image":{"thumbnail1":"https://res.cloudinary.com/dyik5vyw7/image/upload/v1516058084/ShriAnandhaas/594a992f0e518_pb.jpg"},"subCategory":"Ghee Dosa","taxExempt":false,"available":true,"description":"Ghee Onion Dosa","discountAmount":0,"active":true,"discountPercentage":0,"price":105,"name":"Ghee Onion Dosa","attributes":{"Side dish":"Chutney, Sambar","Ingredients":["Lentils","Rice"]},"id":"1000003561421004106","category":"Dosas"}
      ]
    }
  }

  componentDidMount(){
    ProductUtils.getProduct()
    .then((response) => {
      alert("resnnnnn..."+JSON.stringify(response))      
  });
  }

  render() {
    const {products} = this.state;
    console.log("products....123..."+JSON.stringify(products))
    return (
      <div className="animated fadeIn">
        <Product productDetails={products}/>
      </div>
    )
  }
}

export default ProductDetails;
