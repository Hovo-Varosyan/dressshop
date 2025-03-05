import { create } from 'zustand';

const userStore = create((set) => ({
    profileData: null,
    setUserData: (data) => {
        set({ profileData: data });
    },
    updateUserData: (data) => {
        set((state) => ({
            profileData: {
                ...state.profileData,
                userData: {
                    ...state.profileData.userData,
                    ...data
                }
            }
        }));
    },
}));

export default userStore;
