import { Container } from "./Container";

export const Footer: React.FC = ({ children }) => (
  <footer
    style={{
      flex: "0 0 auto",
      padding: 10,
      background: "white",
      borderTop: "1px solid rgba(0,0,0, .3)"
    }}
  >
    <Container>{children}</Container>
  </footer>
);
