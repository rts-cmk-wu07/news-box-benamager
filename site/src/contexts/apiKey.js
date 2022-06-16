import { createContext } from "react"

// Color scheme (state held)
// Getting for enviroment variables .env
const API_KEY = process.env.REACT_APP_API_KEY
const CategoriesContext = createContext(API_KEY)

export default CategoriesContext
