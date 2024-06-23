import { create } from "zustand";

interface FormStoreState {
  activeField: string;
  updateActiveField: (field: string) => void;
}

export const useActiveFormStore = create<FormStoreState>((set) => ({
  activeField: "",
  updateActiveField: (field: string) =>
    set((state) => ({ activeField: field })),
}));
