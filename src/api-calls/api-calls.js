import axios from "axios";

const headers = {authorization: localStorage.getItem('token') };
const addToWishlist = async(product) => {
    try {
        const response = await axios.post(`/api/user/wishlist` , {product} , {headers})
        return {wishlist : response.data.wishlist}
    } catch (err) {
        console.error(err);
    }
} 

const addToCart = async(product) => {
    try {
        const response = await axios.post(`/api/user/cart` , {product} , {headers});
        return {cartlist : response.data.cart}
    } catch (err) {
        console.error(err);
    }
} 

const removeFromWishlist = async(product) => {
    try {
        const response = await axios({
            method: "delete",
            url: `/api/user/wishlist/${product._id}`,
            headers: headers ,
            data: {
              product: product
            },
          });
        return { wishlist : response.data.wishlist}
    } catch (err) {
        console.error(err);
    }
}

const removeFromCartlist = async(product) => {
    try {
        const response = await axios({
            method: "delete",
            url: `/api/user/cart/${product._id}`,
            headers: headers ,
            data: {
              product: product
            },
          });
        return { cartlist : response}
    } catch (err) {
        console.error(err);
    }
}

const getWishlist = async() => {
    try {
        const response = await axios.get(`/api/user/wishlist` , {headers})
        return {wishlist : response.data.wishlist}
    } catch (err) {
        console.error(err);
    }
} 

const getCartlist = async() => {
    try {
        const response = await axios.get(`/api/user/cart` , {headers})
        return {cart : response.data.cart}
    } catch (err) {
        console.error(err);
    }
} 


export {addToWishlist , removeFromWishlist , getWishlist , addToCart , removeFromCartlist , getCartlist}