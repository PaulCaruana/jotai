import { Container } from "./Container";

export const Content: React.FC = ({ children }) => (
  <main
    style={{
      flex: "1 0 auto"
    }}
  >
    <Container>{children}</Container>
  </main>
);
