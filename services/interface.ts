export type TAddress = {
  id: string;
  name: string;
  details: string;
};

export type GetAllAddressesResponse = TAddress[];

export interface CreateOrderPayload {
  nationalId: string;
  phoneNumber: string;
  addressId: string;
}
