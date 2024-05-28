import { configureStore } from '@reduxjs/toolkit';
import AuthSlice from './feature/AuthSlice';
import ProcurementListSlice from './feature/ProcurementListSlice';

const store = configureStore({
  reducer: {
    auth: AuthSlice.reducer,
    procurements: ProcurementListSlice.reducer
  },
});

export default store;
