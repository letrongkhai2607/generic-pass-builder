import { create } from 'zustand'


export interface Information{
  logo: string
  header: string,
  subHeader: string,
  title: string,
  age: string,
  expYear: string,
  qrCode: string
  hexBackgroundColor: string
}
interface FormStoreState {
  information: Information;
  updateInformation: (payload: any) => void;
  resetInformation: () => void;
}
const initState = {
  logo: "",
  header: "",
  subHeader: "",
  title: "",
  age: "",
  expYear: "",
  qrCode: "",
  hexBackgroundColor: "",
}
export const useFormStore = create<FormStoreState>((set) => ({
  information: initState,
  updateInformation: (payload: any) => set((state) => ({ information: {
    ...state.information,
    ...payload
  } })),
  resetInformation: () => set((state) => ({ information: initState}))
}))