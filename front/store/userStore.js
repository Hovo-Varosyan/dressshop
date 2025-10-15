import { create } from 'zustand';

const userStore = create((set) => ({
    profileData: null,
    deleteFavoriteId: null,
    deleteCartId: null,
    setUserData: (data) => {
        console.log("setuser")
        set({ profileData: data });
    },
    updateUserData: (data) => {
        console.log("updateuser")
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
        console.log("addfavorite")
        set((state) => ({
            profileData: {
                ...state.profileData,
                favorite: [...state.profileData.favorite, id]
            }
        }));
    },
    removeFavorite: (id) => {
        console.log("removefavorit")
        set((state) => ({
            profileData: {
                ...state.profileData,
                favorite: state.profileData.favorite.filter(favId => favId !== id)
            },
            deleteFavoriteId: id
        }));
    },
    cartAdd: (id) => {
        console.log("cartadd")
        set((state) => ({
            profileData: {
                ...state.profileData,
                cart: [...state.profileData.cart, id]
            }
        }));
    },
    cartRemove: (id) => {
        console.log("cartremove")
        set((state) => ({
            profileData: {
                ...state.profileData,
                cart: state.profileData.cart.filter(cartId => cartId !== id)
            }, deleteCartId: id
        }));
    },
    deleteFavoriteReset: () => set({ deleteFavoriteId: null }),
    deleteCartReset: () => set({ deleteCartId: null }),
}));

export default userStore;
