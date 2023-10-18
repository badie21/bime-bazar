import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CreateOrderPayload, GetAllAddressesResponse } from './interface';

export const bimeApi = createApi({
  reducerPath: 'bimeApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://front-end-task.bmbzr.ir/' }),

  endpoints: (builder) => ({
    getAllAddresses: builder.query<GetAllAddressesResponse, void>({
      query: () => ({ url: 'my-addresses/' }),
    }),
    createOrder: builder.mutation<{ message: string }, CreateOrderPayload>({
      query: (body) => ({
        url: 'order/completion/',
        method: 'POST',
        body,
      }),
    }),
  }),
});
export const { useGetAllAddressesQuery, useCreateOrderMutation } = bimeApi;
