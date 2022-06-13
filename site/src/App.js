import { Outlet } from "react-router-dom"
import { useState, useContext } from "react"

import Wrapper from "./templates/Wrapper"
import Navigation from "./components/Navigation"

import NavigationContext from "./contexts/navigationContext"
import CategoriesContext from "./contexts/categoriesContext"

function App() {
  const [navContext, setNavContext] = useState({
    iconLeft: "AiOutlineInbox",
    title: "Newsbox",
    iconRight: "IoMdSettings",
    linkLeft: "/archive",
    linkRight: "/settings",
  })

  const [categoriesContext, setCategoriesContext] = useState([
    {
      name: "arts",
      checked: false,
    },
    {
      name: "automobiles",
      checked: true,
    },
  ])

  return (
    <NavigationContext.Provider value={{ navContext, setNavContext }}>
      <CategoriesContext.Provider value={{ categoriesContext }}>
        <Wrapper maxWidth="375px">
          <Navigation
            title={navContext.title}
            height="65px"
            iconSize="20px"
            iconLeft={navContext.iconLeft}
            iconRight={navContext.iconRight}
            linkLeft={navContext.linkLeft}
            linkRight={navContext.linkRight}
          />
          <Outlet />
        </Wrapper>
      </CategoriesContext.Provider>
    </NavigationContext.Provider>
  )
}

export default App
