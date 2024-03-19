"use server"
import { API_URL } from "@/constants/constants";
export const getAllTours=async()=>{
    const tours = await fetch(`${API_URL}/tours`).then((res) => res.json())
    return tours.data.docs
}