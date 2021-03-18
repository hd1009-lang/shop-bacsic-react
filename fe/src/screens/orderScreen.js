import React, { useEffect, useState } from 'react';
import {
  Button,
  Form,
  Row,
  Col,
  Image,
  Card,
  ListGroup,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import FormContainer from '../components/FormContainer';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { getOrderDetails } from '../actions/orderAction';

const OrderScreen = ({ match }) => {
  const orderId=match.params.id
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [district, setDistrict] = useState('');
  const [city, setCity] = useState('');
 
  const cart = useSelector(state=>state.cart)
  const orderDetails= useSelector((state) => state.orderDetails);
  const {order,loading,error}=orderDetails;
  
  
 
  
  useEffect(() => {
   dispatch(getOrderDetails(orderId));
   
  }, []);
  console.log(order);
  return (
    <div>
      {loading?<Loader/>:error?<Message variant="danger">{error}</Message>:""}
      {order && (
        <Row>
        <Col md={9}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>Order {order._id}</h2>
              <p><strong>Tên:</strong>{order.user.name}</p>
              <p><strong>Email:</strong><a href={`mailto:${order.user.email}`}>{order.user.email}</a></p>

              <p>
                <strong>Address:</strong>
                {order.shippingAddress.address},
                {order.shippingAddress.district},
                {order.shippingAddress.city}
              </p>
              {order.isDelivered?<Message variant="success">Đã giao</Message>:<Message variant="danger">Chưa giao</Message>}

            </ListGroup.Item>
            <ListGroup.Item>
              <h2>Phương thức thanh toán</h2>
              <p><strong>Method: </strong>
              {order.paymentMethod}</p>
              {order.isPaid?<Message variant="success">Đã thanh toán</Message>:<Message variant="danger">Chưa thanh toán</Message>}
            </ListGroup.Item>
            <ListGroup.Item>
              <h2>Giỏ hàng</h2>
              <ListGroup variant='flush'>
                {order.orderItems.map((el,index)=>(
                  <ListGroup.Item key={index}>
                      <Row>
                        <Col md={1}>
                            <Image src={el.image} alt={el.name} fluid rounded/>
                        </Col>
                        <Col>
                          <Link to={`/product/${el.prodcut}`}>
                            {el.name}
                          </Link>
                        </Col>
                        <Col md={5}>
                            {el.qty} x ${el.price} = ${el.qty * el.price}
                        </Col>
                      </Row>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
            <Card>
              <ListGroup varian='flush'>
                  <ListGroup.Item>
                    <h2>Hoá đơn</h2>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Items</Col>
                      <Col>${order.orderItems.reduce((acc,item)=>acc + item.price * item.qty,0).toFixed(2)}</Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Shipping</Col>
                      <Col>${order.shippingPrice}</Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Tổng</Col>
                      <Col>${order.totalPrice}</Col>
                    </Row>
                  </ListGroup.Item>
                 
              </ListGroup>
            </Card>
        </Col>
      </Row>
      )}
    </div>
    
  )
        

};

export default OrderScreen;
