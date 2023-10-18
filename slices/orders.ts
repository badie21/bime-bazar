import { TAddress } from '@/services/interface';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface State {
  order?: {
    phoneNumber: string;
    nationalId: string;
    address: TAddress;
  };
}

const initialState: State = {
  order: undefined,
};

export const OrderSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setOrder: (state, action: PayloadAction<State>) => {
      state.order = action.payload.order;
    },
  },
});

export const { setOrder } = OrderSlice.actions;

export default OrderSlice.reducer;
