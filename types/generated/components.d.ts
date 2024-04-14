import type { Schema, Attribute } from '@strapi/strapi';

export interface OrderdItemOrderdItem extends Schema.Component {
  collectionName: 'components_orderd_item_orderd_items';
  info: {
    displayName: 'OrderdItem';
  };
  attributes: {
    quantity: Attribute.Integer;
    price: Attribute.BigInteger;
    product: Attribute.Relation<
      'orderd-item.orderd-item',
      'oneToOne',
      'api::product.product'
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'orderd-item.orderd-item': OrderdItemOrderdItem;
    }
  }
}
