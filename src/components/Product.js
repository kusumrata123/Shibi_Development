import React, { Component } from 'react';

class Product extends Component {
    constructor(props){
        super(props);
        this.state = {
           products : props.productDetails
        }
      }

    componentWillReceiveProps(props){
        if(props.productDetails){
            let products = props.productDetails;
            this.setState({products})
        }
        
        
    }
  render() {
      const {products} = this.state;
      console.log("products..."+JSON.stringify(products))
    return (
      <div className="animated fadeIn">
        <div className="row">
            <div className="col-md-12">
            <div className="product">
                <img id="productImage" className="img img-responsive" src={products[0].image.thumbnail1} />
                <div>
                    <b>
                        <h4>{products[0].name}</h4>
                    </b>
                    <div>
                     <div className="productDes">{products[0].description}</div>   
                    </div>
                 </div>
            </div>

                <div>
                         {products[0].price}
                </div>                    
                <div>Chutney, Sambar
                </div>
                    {
                        products[0].attributes.Ingredients && products[0].attributes.Ingredients.map((item, key)=>{
                            <div>{item}</div>
                        })
                    }
        </div>
      </div>
      </div>
    )
  }
}

export default Product;
