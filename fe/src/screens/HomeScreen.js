import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product.js';
// import products from '../products';
import { useDispatch, useSelector } from 'react-redux';
import { listProduct } from '../actions/productAction.js';
import Loader from '../components/Loader.js';
import Message from '../components/Message.js';
const HomeScreen = () => {
  // const [products,setProducts]=useState([]);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.productList);
  const { loading, error, products } = data;
  useEffect(() => {
    // const fetchProducts=async ()=>{
    //   const {data}=await axios.get('/api/products');
    //   setProducts(data)
    // }
    // fetchProducts();
    dispatch(listProduct());
  }, [dispatch]);
  return (
    <>
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          {products.map((product) => {
            return (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            );
          })}
        </Row>
      )}
    </>
  );
};
export default HomeScreen;
