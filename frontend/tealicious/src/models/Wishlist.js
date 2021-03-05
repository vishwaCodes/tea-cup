import axios from 'axios';

const endPoint = 'http://localhost:8000/api/wishlist/';

class WishlistModel {
  static all = () => {
    let request = axios.get(endPoint);
    return request;
  };

  static create = (wishlist) => {
    console.log(wishlist);
    let request = axios.post(endPoint, wishlist);
    return request;
  };

  static delete = (wishlist) => {
    let request = axios.delete(`${endPoint}/${wishlist.id}`);
    return request;
  }
};

export default WishlistModel;