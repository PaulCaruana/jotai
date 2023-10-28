import "./styles.css";
import { Header, Footer, Content } from "./ui/shared";
import { AddFlight, FlightsList, SubmitFlights } from "./features/flights";

// This "App" mimics the use case of a "route" where it composes the layout and
// fills out the layout with features, the features themselves do not know how to
// position themselves on the page by design to allow them to be composed into
// other layouts/routes/pages.
export default function App() {
  return (
    <div
      className="App"
      style={{ display: "flex", flexFlow: "column nowrap", height: "100vh" }}
    >
      <Header>
        <h1 style={{ fontSize: 22 }}>
          Simple demo of Jotai state management and sharing state across
          components
        </h1>
      </Header>
      <Content>
        {/* Clicking this button will set app-wide global state that is used in the 2 components below */}
        <AddFlight />
        <hr />
        {/* This renders a list based of the data in the global state */}
        <FlightsList />
      </Content>
      <Footer>
        {/* This takes what's in the global state and "pretends" to submit it in the console and resets the state */}
        <SubmitFlights />
      </Footer>
    </div>
  );
}
