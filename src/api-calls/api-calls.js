import axios from "axios";


const headers = {authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI4MTAyMWNjNC00YjFkLTQyOGItYjJmMC0wNjhkYTQ4YTk4MzQiLCJlbWFpbCI6ImFkYXJzaGJhbGlrYUBnbWFpbC5jb20ifQ.45ynQ6aZhoM1zsNwIKCYR_IATaszKn0ssvnPPQkKL8E' }



const addToWishlist = async(product) => {
    try {
        const response = await axios.post(`/api/user/wishlist` , {product} , {headers})
        return {wishlist : response.data.wishlist}
    } catch (err) {
        console.log(err);
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
        console.log(err);
    }
}

const getWishlist = async() => {
    try {
        const response = await axios.get(`/api/user/wishlist` , {headers})
        return {wishlist : response.data.wishlist}
    } catch (err) {
        console.log(err);
    }
} 


export {addToWishlist , removeFromWishlist , getWishlist}