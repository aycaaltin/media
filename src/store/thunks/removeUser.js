import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const removeUser = createAsyncThunk("users/remove", async (userId) => {
    debugger;
  const response = await axios.delete('http://localhost:3005/users');
  return response.data;
});

export { removeUser };
