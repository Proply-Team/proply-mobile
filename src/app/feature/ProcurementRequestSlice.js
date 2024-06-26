import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ProcurementRequestService from "../../service/ProcurementRequestService";

const { add } = ProcurementRequestService();

export const addProcurementsAction = createAsyncThunk(
  "procurements",
  async ({ userId, procurementCategoryId, procurementDetailRequests, approvalRequests, level }, { rejectWithValue }) => {
    try {
      return await add({ userId, procurementCategoryId, procurementDetailRequests, approvalRequests, level });
    } catch (e) {
      const errorMessage = e.message;
      return rejectWithValue(errorMessage);
    }
  }
);

const ProcurementRequestSlice = createSlice({
  name: "procurements",
  initialState: {
    isLoading: false,
    procurement: {},
    procurements: [],
    error: null,
  },
  reducers: {
    selectedProcurement: (state, { payload }) => {
      state.procurement = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addProcurementsAction.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addProcurementsAction.fulfilled, (state, { payload }) => {
        state.procurements.push(payload);
        console.log("Fulfilled", state.procurements);
        state.isLoading = false;
      })
      .addCase(addProcurementsAction.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const { selectedProcurement } = ProcurementRequestSlice.actions;

export default ProcurementRequestSlice;
