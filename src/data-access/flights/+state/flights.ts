import { atom } from "jotai";
import { Flight } from "../../../types";

export const flightsAtom = atom<Flight[]>([]);
