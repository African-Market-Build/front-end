import React, { useState } from "react";
import styled from "styled-components";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import AxiosWithAuth from "./../utils/AxiosWithAuth";
import { useNavigate } from "react-router-dom";

const AddItem = () => {
  const navigate = useNavigate();

  const [itemDetails, setItemDetails] = useState({
    item_name: "",
    item_location: "",
    item_description: "",
    item_price: "",
    available: true,
    owner_id: 1,
  });

  const handleChange = (e) => {
    setItemDetails({
      ...itemDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    AxiosWithAuth()
      .post(`/items`, itemDetails)
      .then((resp) => {
        console.log(resp);
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Container>
        <Form onSubmit={handleSubmit}>
          <label htmlFor="item-name">Owner ID: </label>
          <input
            onChange={handleChange}
            name="owner_id"
            id="owner_id"
            value={itemDetails.owner_id}
            className="form-control mt-2"
          />
          <label htmlFor="item-name">Name of Item:</label>
          <input
            onChange={handleChange}
            name="item_name"
            id="item-name"
            value={itemDetails.item_name}
            className="form-control mt-2"
          />
          <label htmlFor="item-location">Location:</label>
          <input
            onChange={handleChange}
            name="item_location"
            id="item-location"
            value={itemDetails.item_location}
            className="form-control mt-2"
          />
          <label htmlFor="item-description">Description:</label>
          <input
            onChange={handleChange}
            name="item_description"
            id="item-description"
            value={itemDetails.item_description}
            className="form-control mt-2"
          />
          <label htmlFor="item-price">Price:</label>
          <input
            onChange={handleChange}
            name="item_price"
            id="item-price"
            value={itemDetails.item_price}
            className="form-control mt-2"
          />

          <div>
            <Button className="AddItemFormBtn">Add Item</Button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default AddItem;

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 0px solid;
  color: black;

  margin-top: 2rem;

  background-color: #000;
  color: #ffffff;
  border: 1px solid rgb(0, 0, 0);
  border-radius: 3px;
  height: 2em;
  padding-left: 24px;
  padding-right: 24px;

  :hover {
    background-color: rgb(13, 110, 253);
    border: 1px solid rgb(13, 110, 253);
    color: white;
  }
`;
