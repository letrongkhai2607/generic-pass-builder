import { create } from 'zustand'


interface Information{
  header: string,
  subHeader: string,
  title: string,
  age: string,
  expYear: string,
}
interface FormStoreState {
  information: Information;
  updateInformation: (payload: any) => void;
  resetInformation: () => void;
}
const initState = {
  header: "",
  subHeader: "",
  title: "",
  age: "",
  expYear: "",
}
export const useFormStore = create<FormStoreState>((set) => ({
  information: initState,
  updateInformation: (payload: any) => set((state) => ({ information: {
    ...state.information,
    ...payload
  } })),
  resetInformation: () => set((state) => ({ information: initState}))
}))