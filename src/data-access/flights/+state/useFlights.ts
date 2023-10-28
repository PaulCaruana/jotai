import faker from "faker";
import { find, without } from "lodash";
import { useAtom } from "jotai";
import { useCallback } from "react";
import { Flight } from "types";
import { flightsAtom } from "./flights";

// This mimics the use of what in a redux architecture would've been the
// reducers and actions' domain. We establish the data store through
// `useAtom(referenceAtom)` and then create stable (`useCallback`) handlers
// to work with our `flights` array data structure which is similar to how
// a reducer with action pairing works.
// We then expose these handlers (and flights data itself) through the hook
// return which forms our "consumer" API throughout the features/application.
export const useFlights = () => {
  const [flights, setFlights] = useAtom(flightsAtom);

  const handleAddFlight = useCallback(
    (flight: Omit<Flight, "id">) => {
      const id = faker.datatype.uuid();
      setFlights((state) => [
        ...state,
        {
          id,
          ...flight
        }
      ]);
    },
    [setFlights]
  );

  const handleRemoveFlight = useCallback(
    (id: Flight["id"]) => {
      const flight = find(flights, { id });
      if (flight) {
        setFlights((state) => without(state, flight));
      }
    },
    [setFlights, flights]
  );

  const handleClearFlights = useCallback(() => {
    setFlights([]);
  }, [setFlights]);

  return {
    flights,
    addFlight: handleAddFlight,
    removeFlight: handleRemoveFlight,
    clearFlights: handleClearFlights
  };
};
