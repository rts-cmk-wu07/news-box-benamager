import { createContext } from "react"

// Color scheme (static context)
const Colors = createContext({
  primary: {
    sage: "#87BCBF",
    rust: "#D97D54",
    drab: "#324755",
    danger: "#D95454",
  },
  secondary: {
    ice: "#F0F3F4",
    fossil: "#C8D1D3",
    sand: "#B9B0A2",
  },
  typo: {
    onyx: "#1B1C20",
    slate: "#6E8CA0",
    snow: "#FFFFFF",
  },
})

export default Colors
