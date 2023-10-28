import { Flight } from "types";

interface FlightCardProps extends Flight {
  onRemove?: () => void;
}
export const FlightCard: React.FC<FlightCardProps> = ({
  id,
  origin,
  destination,
  onRemove
}) => {
  return (
    <div
      style={{
        border: "1px solid #999",
        boxShadow: "0 2px 3px rgba(0,0,0, .15)",
        background: "white",
        margin: "20px 0",
        padding: 10
      }}
    >
      <p>
        <strong>{origin}</strong> to <strong>{destination}</strong>
      </p>
      <p>Flight ID: {id}</p>
      {onRemove ? <button onClick={onRemove}>Remove this flight</button> : null}
    </div>
  );
};
