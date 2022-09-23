export interface Cart {
  id: number;
  subTotal: number;
  basket: {
    productId: number;
    quantity: number;
  }[];
}
