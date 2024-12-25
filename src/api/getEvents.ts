import axios from "axios";

const BASE_API = "http://localhost:3000";

export interface GetEventResponseDTO {
  id: number;
  name: string;
  date: string;
  location: string;
  description: string;
  price: number;
  availableTickets: number;
}

export const getAllEvents = async (): Promise<GetEventResponseDTO[]> => {
  try {
    const response = await axios.get<GetEventResponseDTO[]>(
      `${BASE_API}/events`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
