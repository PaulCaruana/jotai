# Simple Jotai state management example

This should guide the usage of Jotai and UI Composition patterns (UI components to derive layout from) and Feature composition.

Please do not follow the folder structure or file naming exactly as this has not been given much thought when putting together this example.

Please do not use `style={}` attributes in real code, Material UI provides a pattern for this so we will use their methodology of writing and applying CSS to our components.

## Parts of the demo

### App.tsx

The `App.tsx` could be looked at through the eyes of a page in a router.
It composes a layout from UI components (Header, Content, Footer) and places self-contained features into the appropriate areas.

It does not contain any API calls, state management or local state.

### data-access

Since this demo app doesn't call APIs, all our state code is nested in the `+state` folder.

Contains the Jotai state atom and exposes this to the wider application as a `useFlights()` hook which mimics the redux functionality of reducer and actions through its global store and the exposed handlers.

The atom itself `flightsAtom` is also exported directly and could be used in compositional patterns anywhere in the application.

### ui

These are our simple render components, they contain no external state logic.
We use them to manage our page layout and reusable render UI (`FlightCard`).

### types

In order to not create poor patterns of cross-boundary imports, we delegate our types to this folder so our components can consume them as needed, see: `FlightCard.tsx`.

### features

This is where our "Flights" related features live.
They are grouped by folder `/flights` and individually compose themselves from the `data-access/flights` `useFlights` hook and `ui/flights` `FlightCard` components.

They all access the same _global state_ in the `flightsAtom` via the `useFlights()` hook, any data modified in the atom triggers cross-component re-renders as expected: Add a flight and watch the submit button closely for instance.
