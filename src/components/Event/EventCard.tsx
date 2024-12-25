import { GetEventResponseDTO } from "@/api/getEvents";
import { useCart } from "@/utils/provider/CartContext";
import { useEvent } from "@/utils/provider/EventContext";
import Link from "next/link";
import { FC, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

export interface EventItem {
  id: number;
  name: string;
  date: string;
  description: string;
  price: number;
}

interface EventCardProps {
  event: EventItem;
}

const EventCard: FC<EventCardProps> = ({ event }) => {
  const { id, name, date, description } = event;
  const { cart, addCart, removeCart } = useCart();
  const [totalEvent, setTotalEvent] = useState<number>(0);

  const handleAddCart = () => {
    addCart(event);
    setTotalEvent(totalEvent + 1);
  };

  const handleRemoveCart = () => {
    removeCart(id);
    if (totalEvent !== 0) {
      setTotalEvent(totalEvent - 1);
    }
  };

  return (
    <div className="w-full h-48 bg-white text-black rounded-md flex-col p-5">
      <Link href={`event/${id}`}>
        <h2 className="font-bold">{name}</h2>
      </Link>
      <p>{date}</p>
      <p>{description}</p>
      <div className="mt-2 flex gap-3 items-center">
        <button
          onClick={handleAddCart}
          className="border-2 border-black rounded-full p-1"
        >
          <FaPlus></FaPlus>
        </button>
        <p>{totalEvent}</p>
        <button
          onClick={handleRemoveCart}
          className="border-2 border-black rounded-full p-1"
        >
          <FaMinus></FaMinus>
        </button>
      </div>
    </div>
  );
};

export default EventCard;
