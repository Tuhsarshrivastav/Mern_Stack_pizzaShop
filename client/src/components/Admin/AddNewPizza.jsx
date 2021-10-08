import React, { useState } from "react";
import { Form, Row, Button, Col } from "react-bootstrap";
import { addPizza } from "../../redux/actions/PizzaAction";
import { useDispatch, useSelector } from "react-redux";
import Error from "../../components/Error";
import Loader from "../../components/Loader";
import Success from "../../components/Success";
const AddNewPizza = () => {
  const [name, setName] = useState("");
  const [smallPrice, setsmallPrice] = useState("");
  const [largePrice, setlargePrice] = useState("");
  const [mediumPrice, setmediumPrice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const { loading, error, success } = useSelector(
    (state) => state.addPizzaReducer
  );

  const dispatch = useDispatch();
  const submitForm = (e) => {
    e.preventDefault();

    const pizza = {
      name,
      image,
      description,
      category,
      prices: {
        small: smallPrice,
        medium: mediumPrice,
        large: largePrice,
      },
    };
    dispatch(addPizza(pizza));
  };
  return (
    <div>
      {loading && <Loader />}
      {error && <Error error="error while adding new pizza" />}
      {success && <Success success="Pizza Added Successfully" />}
      <Form onSubmit={submitForm} className="bg-light p-4">
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter email"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Row className="mb-3 mt-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Small Prize</Form.Label>
              <Form.Control
                type="text"
                placeholder="Small Price"
                value={smallPrice}
                onChange={(e) => setsmallPrice(e.target.value)}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                placeholder="Medium Price"
                value={mediumPrice}
                onChange={(e) => setmediumPrice(e.target.value)}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control
                type="text"
                placeholder="Large Price"
                value={largePrice}
                onChange={(e) => setlargePrice(e.target.value)}
              />
            </Form.Group>
          </Row>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Image</Form.Label>
            <Form.Control
              placeholder="text"
              type="text"
              placeholder="Enter Image Url"
              value={image}
              onChange={(e) => setImage(e.target.nodeValue)}
            />
          </Form.Group>
        </Row>
        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Category</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add New
        </Button>
      </Form>
    </div>
  );
};

export default AddNewPizza;
