import axios from "axios";

const BASE_API = "http://localhost:3000";

interface EventData {
  name: string;
  date: string;
  location: string;
  description: string;
  price: number;
  availableTickets: number;
}

export const createEvent = async (eventData: EventData) => {
  try {
    const response = await axios.post(`${BASE_API}/event`, eventData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response.data);
    return response.data;
  } catch (e) {
    console.log("Error generating new event", e);
    throw e;
  }
};
