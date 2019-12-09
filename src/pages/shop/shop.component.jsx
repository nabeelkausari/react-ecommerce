import React, {Component} from 'react';
import SHOP_DATA from "./shop.data"
import CollectionPreview from "../../components/collection-preview/collection-preview.component"

class ShopPage extends Component {
  state = {
    collections: SHOP_DATA
  }
  render() {
    const { collections } = this.state;
    return (
      <div>
        {
          collections.map(({ id, ...rest}) => (
            <CollectionPreview key={id} {...rest} />
          ))
        }
      </div>
    );
  }
}

export default ShopPage;
