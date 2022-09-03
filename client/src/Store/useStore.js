import create from "zustand";
import createUserSlice from "./slices/createUserSlice";

const useStore = create((set, get) => ({
  ...createUserSlice(set, get),
}));

export default useStore;
