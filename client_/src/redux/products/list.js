import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../../api";
import toast from "react-hot-toast";

const initialState = {
    data: {},
    message: "",
    error: "",
    loading: false,
    status: ""
  };


export const productService = createAsyncThunk(
  "productService",
  async( data,{ rejectWithValue }) => {
    try {
      const response = await Api.products();
      return response;
  } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {

    builder.addCase(productService.pending, (state) => {
        state.loading = true;
        state.data = {};
        state.status = "panding";
    });
    builder.addCase(productService.fulfilled, (state, action) => {
        state.loading = false;
        state.data =  action.payload;
        state.error = "";
        toast.success("");
        state.status = "success";
    });
    builder.addCase(productService.rejected, (state, action) => {
        state.loading = false;
        state.data = {};
        state.error = action.payload?.data?.message || action.payload?.errors;
        state.status = "false";
        toast.error(action.payload?.data?.error);
    });
  }
})

export const {} = productSlice.actions;

export default productSlice.reducer;