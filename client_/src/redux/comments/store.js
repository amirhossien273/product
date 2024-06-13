import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../../api";
import toast from "react-hot-toast";

const initialState = {
    data: {},
    message: "",
    error: "",
    loading: false,
  };

export const storeCommentServer = createAsyncThunk(
    "storeComment",
    async(payload, { rejectWithValue }) => {
        try {
        const response = await Api.storeComment(payload);
        return response;
    } catch (err) {
        return rejectWithValue(err.response);
      }
    }
);

const storeCommentSlice = createSlice({
    name: "storeComment",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(storeCommentServer.pending, (state) => {
            state.loading = true;
            state.data = {};
          });
          builder.addCase(storeCommentServer.fulfilled, (state, action) => {
            state.loading = false;
            state.data =  action.payload;
            state.error = "";
            toast.success("inserted successfuluy");
          });
          builder.addCase(storeCommentServer.rejected, (state, action) => {
            state.loading = false;
            state.data = {};
            state.error = action.payload?.data?.message || action.payload?.errors;
            toast.error(action.payload?.data?.error);
          });
    }
})

export const {} = storeCommentSlice.actions;

export default storeCommentSlice.reducer;