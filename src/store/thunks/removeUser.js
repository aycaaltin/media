import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { faker } from "@faker-js/faker";
const removeUser = createAsyncThunk("users/remove", async (userId) => {
    debugger;
  const response = await axios.delete(`http://localhost:3000/users/${userId}`);
  return response.data;
});

export { removeUser };
