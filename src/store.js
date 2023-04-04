import { create } from 'zustand'

export const useStore = create((set) => ({
    likedImages: {},
    toggleLiked: (image) => {
        set((state) => ({
            likedImages: {
                ...state.likedImages,
                [image]: !state.likedImages[image],
        }}))
    }
}))