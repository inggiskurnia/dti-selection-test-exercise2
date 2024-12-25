"use client";

import { getAllEvents, GetEventResponseDTO } from "@/api/getEvents";
import { useQuery } from "@tanstack/react-query";
import { createContext, FC, ReactNode, useContext } from "react";

interface EventContextType {
  events: GetEventResponseDTO[] | undefined;
  eventError: Error | null;
  eventIsLoading: boolean;
}

const EventContext = createContext<EventContextType | undefined>(undefined);

interface EventProviderProps {
  children: ReactNode;
}

export const EventProvider: FC<EventProviderProps> = ({ children }) => {
  const {
    data: events,
    error: eventError,
    isLoading: eventIsLoading,
  } = useQuery<GetEventResponseDTO[], Error>({
    queryKey: ["event"],
    queryFn: getAllEvents,
  });

  return (
    <EventContext.Provider value={{ events, eventError, eventIsLoading }}>
      {children}
    </EventContext.Provider>
  );
};

export const useEvent = () => {
  const context = useContext(EventContext);
  if (!context) {
    throw new Error("useEvent must be used within an EventProvider");
  }
  return context;
};
