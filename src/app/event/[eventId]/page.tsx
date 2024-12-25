"use client";

import { GetEventResponseDTO } from "@/api/getEvents";
import { useEvent } from "@/utils/provider/EventContext";
import { useParams } from "next/navigation";
import { FC, useEffect, useState } from "react";

const Event: FC = () => {
  const { eventId } = useParams();
  const { events, eventError, eventIsLoading } = useEvent();
  const [event, setEvent] = useState<GetEventResponseDTO | undefined>(
    undefined
  );

  useEffect(() => {
    if (events && eventId) {
      const selectedEvent = events.find((event) => event.id == Number(eventId));
      if (selectedEvent) {
        setEvent(selectedEvent);
      }
    }
  }, [events, eventId]);

  if (eventIsLoading) return <p>Loading...</p>;
  if (eventError) return <p>Error loading event.</p>;

  return (
    <>
      {event ? (
        <div>
          <h2>{event.name}</h2>
          <p>{event.date}</p>
          <p>{event.description}</p>
        </div>
      ) : (
        <p>Event not found</p>
      )}
    </>
  );
};

export default Event;
