import React, { useEffect, useState } from 'react'
import apiClient from '../services/apiClient';
import { useQuery } from '@tanstack/react-query';

interface Apartment {
  location: {
    type: string;
    coordinates: [number, number];
    formattedAddress: string;
    city: string;
  };
  _id: string;
  type: string;
  images: string[];
  price: number;
  description: string;
  agent: string[];
  available: string;
  bedrooms: number;
  bathrooms: number;
  petPolicy: string;
  amenities: string[];
  createdAt: string;
  reviews: any[];
  __v: number;
};

interface ApartmentResponse {
   apartment: Apartment[];
}

const useApartment = () => {
    const fetchApartment = () =>
      apiClient.get<ApartmentResponse>('apartment')
           .then(response => response.data)

      return useQuery<ApartmentResponse, Error>({
         queryKey: ['apartment'],
         queryFn: fetchApartment,
         staleTime: 10 * 1000
      });

}

export default useApartment