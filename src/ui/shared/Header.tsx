import { Container } from "./Container";

export const Header: React.FC = ({ children }) => (
  <header
    style={{
      flex: "0 0 auto",
      backgroundColor: "white",
      borderBottom: "1px solid rgba(0,0,0, .3)",
      padding: "20px 10px",
      textAlign: "left"
    }}
  >
    <Container>{children}</Container>
  </header>
);
