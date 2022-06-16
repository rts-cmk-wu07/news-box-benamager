import { Outlet } from "react-router-dom"
import { useState, useContext, useEffect } from "react"

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
      name: "Automobiles",
      checked: true,
      isOpen: false,
    },
    {
      name: "Business",
      checked: false,
      isOpen: false,
    },
    {
      name: "Health",
      checked: true,
      isOpen: false,
    },
    {
      name: "Politics",
      checked: true,
      isOpen: false,
    },
    {
      name: "Science",
      checked: false,
      isOpen: false,
    },
    {
      name: "Sports",
      checked: true,
      isOpen: false,
    },
    {
      name: "Technology",
      checked: true,
      isOpen: false,
    },
    {
      name: "Travel",
      checked: true,
      isOpen: false,
    },
  ])

  return (
    <NavigationContext.Provider value={{ navContext, setNavContext }}>
      <CategoriesContext.Provider
        value={{ categoriesContext, setCategoriesContext }}
      >
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
