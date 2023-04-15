import create from "zustand";

type bookState = {
  data: []
  setData: (newState: []) => void
}

export const useBookDataState = create<bookState>((set) => ({
  data: [],
  setData: (newState ) => set({ data: newState }),
}));