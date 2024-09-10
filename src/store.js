import { create } from 'zustand'

export const useStore = create((set) => ({
    current: "AboutMe",
    contactMe: false,
    setCurrentAboutMe: () => set({current: "AboutMe"}),
    setCurrentHobbiesInterest: () => set({current: "HobbiesInterest"}),
    setCurrentJourney: () => set({current: "Journey"}),
    setCurrentPersonalProjects: () => set({current: "PersonalProjects"}),
    openContactMe: () => set({contactMe: true}),
    closeContactMe: () => set({contactMe: false})
}))