import { configureStore } from '@reduxjs/toolkit';
import AuthSlice from './feature/AuthSlice';
import ProcurementListSlice from './feature/ProcurementListSlice';
import ProcurementRequestSlice from './feature/ProcurementRequestSlice';

const store = configureStore({
  reducer: {
    auth: AuthSlice.reducer,
    procurements: ProcurementListSlice.reducer,
    procurementsRequest: ProcurementRequestSlice.reducer
  },
});

export default store;
