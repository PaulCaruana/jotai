import { useCallback, useMemo, useState } from "react";
import { useFlights } from "data-access/flights";
import { FakeSubmitLogger } from "ui/shared";

export const SubmitFlights = () => {
  // Global State/actions
  const { flights, clearFlights } = useFlights();

  // Local state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const isDisabled = !flights.length;

  // Local handlers
  const handleSubmit = useCallback(() => {
    console.log("Starting the submit...");
    setIsSubmitting(true);
  }, [setIsSubmitting]);

  const handleSubmitDone = useCallback(() => {
    console.log("Submit done! Clearing source data.");
    setIsSubmitting(false);
    clearFlights();
  }, [setIsSubmitting, clearFlights]);

  // Computed render values
  const label = useMemo(() => {
    if (isDisabled) return "Add some flights to get started.";
    if (isSubmitting) return "Is submitting...";

    const count = flights.length;
    return `Submit ${count} flight${count > 1 ? "s" : ""}`;
  }, [isDisabled, isSubmitting, flights]);

  return (
    <>
      <button disabled={isDisabled} onClick={handleSubmit}>
        {label}
      </button>
      {/* The following just shows the data temporarily that we just "submitted" */}
      {isSubmitting ? (
        <FakeSubmitLogger data={flights} onSubmitDone={handleSubmitDone} />
      ) : null}
    </>
  );
};
