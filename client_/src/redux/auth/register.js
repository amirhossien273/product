import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../../api";
import toast from "react-hot-toast";


const initialState = {
    data: {},
    message: "",
    error: "",
    loading: false,
  };

export const signupServer = createAsyncThunk(
    "signup",
    async(payload, { rejectWithValue }) => {
        try {
        const response = await Api.signup(payload);
        return response;
    } catch (err) {
        return rejectWithValue(err.response);
      }
    }
);

const signupSlice = createSlice({
    name: "signup",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(signupServer.pending, (state) => {
            state.loading = true;
            state.data = {};
          });
          builder.addCase(signupServer.fulfilled, (state, action) => {
            state.loading = false;
            state.data =  action.payload;
            state.error = "";
            toast.success("inserted successfuluy");
           
          });
          builder.addCase(signupServer.rejected, (state, action) => {
            state.loading = false;
            state.data = {};
            state.error = action.payload?.data?.message || action.payload?.errors;
            toast.error(action.payload?.data?.error);
          
          });
    }
})

export const {} = signupSlice.actions;

export default signupSlice.reducer;