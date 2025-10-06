import { create } from 'zustand';

const userStore = create((set) => ({
    profileData: null,
    deleteFavoriteId: null,
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
    addFavorite: (id) => {
        set((state) => ({
            profileData: {
                ...state.profileData,
                favorite: [...state.profileData.favorite, id]
            }
        }));
    },
    removeFavorite: (id) => {
        set((state) => ({
            profileData: {
                ...state.profileData,
                favorite: state.profileData.favorite.filter(favId => favId !== id)
            },
            deleteFavoriteId: id
        }));
    }
}));

export default userStore;
