import create from "zustand";

type navState = {
  topUpNavState: boolean
  toggleTopUpNav: (newState: boolean) => void
}

export const useTopUpNavState = create<navState>((set) => ({
  topUpNavState: false,
  toggleTopUpNav: (newState) => set({ topUpNavState: newState }),
}));