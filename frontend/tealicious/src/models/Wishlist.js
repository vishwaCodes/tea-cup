import axios from 'axios';

const endPoint = 'http://localhost:8000/api/wishlist/';

class WishlistModel {
  static all = () => {
    let request = axios.get(endPoint);
    return request;
  };
};

export default WishlistModel;