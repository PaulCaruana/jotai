export const Container: React.FC = ({ children }) => (
  <div
    style={{
      padding: 10,
      maxWidth: 600,
      marginLeft: "auto",
      marginRight: "auto"
    }}
  >
    {children}
  </div>
);
