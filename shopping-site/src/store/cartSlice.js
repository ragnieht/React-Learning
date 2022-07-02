import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    {
      id: 1,
      title: "men top 1",
      price: "$25",
      image: `https://image.uniqlo.com/UQ/ST3/sg/imagesgoods/449566/item/sggoods_00_449566.jpg?width=1008&impolicy=quality_75`,
    },
    {
      id: 2,
      title: "men top 2",
      price: "$35",
      image: `https://image.uniqlo.com/UQ/ST3/sg/imagesgoods/449566/item/sggoods_00_449566.jpg?width=1008&impolicy=quality_75`,
    },
    {
      id: 3,
      title: "men top 3",
      price: "$15",
      image: `https://image.uniqlo.com/UQ/ST3/sg/imagesgoods/449566/item/sggoods_00_449566.jpg?width=1008&impolicy=quality_75`,
    },
    {
      id: 4,
      title: "men top 4",
      price: "$45",
      image: `https://image.uniqlo.com/UQ/ST3/sg/imagesgoods/449566/item/sggoods_00_449566.jpg?width=1008&impolicy=quality_75`,
    },
  ],
  total: "$120",
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {},
    removeFromCart: (state, action) => {},
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
