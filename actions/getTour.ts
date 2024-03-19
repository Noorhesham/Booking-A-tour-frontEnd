"use server";
import { API_URL } from "@/constants/constants";
export const getTour = async (slug: String) => {
  const response = await fetch(`${API_URL}/tours/tour/${slug}`);
  if (!response.ok) {
    // If the response status is not OK, throw an error with the status and statusText
    throw new Error(`Failed to fetch tour: ${response.status} - ${response.statusText}`);
  }

  const tour = await response.json();

  if (tour?.error) {
    // If the tour object has an error property, throw an error with the error message
    throw new Error(tour.message);
  }

  // If no error, return the tour data
  return tour.data?.tour;
};
