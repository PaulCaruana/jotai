import { useEffect } from "react";

type FakeSubmitLoggerProps = { data: any; onSubmitDone: () => void };

export const FakeSubmitLogger: React.FC<FakeSubmitLoggerProps> = ({
  data,
  onSubmitDone
}) => {
  useEffect(() => {
    setTimeout(() => {
      onSubmitDone();
    }, 3000);
  }, [onSubmitDone]);

  return data ? (
    <div>
      <p style={{ fontSize: 12, textTransform: "uppercase" }}>
        Pretend submit logger,.. this will disappear in 3 seconds
      </p>
      <pre
        style={{ textAlign: "left", background: "rgba(0,0,0,.1)", padding: 10 }}
      >
        <code>{JSON.stringify(data, null, 2)}</code>
      </pre>
    </div>
  ) : null;
};
