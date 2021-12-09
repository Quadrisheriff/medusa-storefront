const { default: axios } = require('axios');
  
module.exports = async () => {
  try {
    const res = await axios.get('http://localhost:9000/store/products');
    return res.data.products;
  } catch (error) {
    console.error(error);
  }
};