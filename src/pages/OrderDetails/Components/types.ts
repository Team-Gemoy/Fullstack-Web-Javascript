import { HTMLAttributes } from 'react';

export interface OrdererProp extends HTMLAttributes<HTMLDivElement> {
  name: string;
  phoneNumber: string;
  email: string;
}

export interface OrderPopProp extends HTMLAttributes<HTMLDivElement> {
  name: string;
  phoneNumber: string;
  email: string;
  id: string;
  gender?: string;
  isShow: boolean;
  isClose: () => void;
}

export interface PassengerPopProp extends HTMLAttributes<HTMLDivElement> {
  name: string;
  id: string;
  gender?: string;
  isShow: boolean;
  isClose: () => void;
}

export interface PassengerCardProp extends HTMLAttributes<HTMLDivElement> {
  orderer?: boolean;
  isShow: () => void;
}

export interface TotalPriceProp extends HTMLAttributes<HTMLDivElement> {
  payNow: () => void;
}
export interface PaymentDetailProp extends HTMLAttributes<HTMLDivElement> {
  continueOrder: () => void;
  orderDetail: () => void;
}