import { configureStore } from '@reduxjs/toolkit'
import siteReducer from "./stores/site"

export const store = configureStore({
  reducer: {
    site:siteReducer
  },
})