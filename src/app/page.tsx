import Cart from "@/components/Cart";
import EventList from "@/components/Event/EventList";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <h1 className="font-bold text-center mt-10 text-xl">List of events</h1>
      <div className="flex-grow">
        <EventList></EventList>
      </div>
      <Cart></Cart>
    </div>
  );
}
