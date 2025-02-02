import { configureStore } from '@reduxjs/toolkit'
import authReducer from "@/lib/slices/authSlice"

export const store = configureStore({
  reducer: {
    counter: authReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

