import React from 'react'
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

const useLatestApartment = () => {
 const fetchLatestApartment = () =>
      apiClient.get<ApartmentResponse>('apartment/latest')
           .then(response => response.data)

      return useQuery<ApartmentResponse, Error>({
         queryKey: ['latestApartment'],
         queryFn: fetchLatestApartment,
         staleTime: 10 * 1000
      });
}

export default useLatestApartment