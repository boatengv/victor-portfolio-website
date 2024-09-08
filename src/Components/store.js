import { create } from 'zustand'

export const useStore = create((set) => ({
    current: "AboutMe",
    setCurrentAboutMe: () => set({current: "AboutMe"}),
    setCurrentHobbiesInterest: () => set({current: "HobbiesInterest"}),
    setCurrentJourney: () => set({current: "Journey"}),
    setCurrentPersonalProjects: () => set({current: "PersonalProjects"})
}))