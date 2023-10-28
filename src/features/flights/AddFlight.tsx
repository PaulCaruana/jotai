import faker from "faker";
import { useCallback } from "react";
import { useFlights } from "data-access/flights";

export const AddFlight: React.FC = () => {
  const { addFlight } = useFlights();

  const handleAddFlight = useCallback(() => {
    // Simulates passing-in of data as used if this came from a form submit for example
    addFlight({
      origin: faker.address.country(),
      destination: faker.address.country()
    });
  }, [addFlight]);

  return <button onClick={handleAddFlight}>Add Flight</button>;
};
