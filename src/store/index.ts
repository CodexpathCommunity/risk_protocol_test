import create from "zustand";

type tokenState = {
  selectPair: boolean
  setSelectPair: (newState: boolean ) => void
}

export const useSelectTokenState = create<tokenState>((set) => ({
 selectPair: false,
  setSelectPair: (newState ) => set({ selectPair: newState }),
}));