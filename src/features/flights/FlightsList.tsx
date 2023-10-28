import { useFlights } from "data-access/flights";
import { useCallback } from "react";
import { FlightCard } from "ui/flights";

export const FlightsList = () => {
  const { flights, removeFlight } = useFlights();

  // We compose this as a curried function so our UI Component "FlightCard" does not need
  // to implement a specific `onRemove` function signature and can just call it as given.
  const handleRemove = useCallback(
    (id: string) => () => {
      removeFlight(id);
    },
    [removeFlight]
  );

  return (
    <>
      {/* Render a list from the data store "atom" */}
      {flights.map((flight) => (
        <FlightCard
          key={flight.id}
          id={flight.id}
          origin={flight.origin}
          destination={flight.destination}
          onRemove={handleRemove(flight.id)} // not providing this callback will remove the UI for this button
        />
      ))}
    </>
  );
};
