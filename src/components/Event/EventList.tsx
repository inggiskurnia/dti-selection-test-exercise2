"use client";

import { getAllEvents, GetEventResponseDTO } from "@/api/getEvents";
import { useQuery } from "@tanstack/react-query";
import { FC, useEffect } from "react";
import EventCard from "./EventCard";
import { useEvent } from "@/utils/provider/EventContext";

const EventList: FC = () => {
  const { events, eventError, eventIsLoading } = useEvent();

  return (
    <div className="p-10">
      {eventIsLoading && <p>Loading ....</p>}
      {eventError && <p>Error loading event</p>}
      {events && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {events.map((event) => (
            <EventCard key={event.id} event={event}></EventCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default EventList;
