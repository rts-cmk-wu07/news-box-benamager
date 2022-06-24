import { Outlet } from "react-router-dom"
import { useState, useContext, useEffect } from "react"

import Wrapper from "./templates/Wrapper"
import Navigation from "./components/Navigation"

import NavigationContext from "./contexts/navigationContext"
import CategoriesContext from "./contexts/categoriesContext"
import ArchivedContext from "./contexts/archivedContext"

function App() {
  const [navContext, setNavContext] = useState({
    iconLeft: "AiOutlineInbox",
    title: "Newsbox",
    iconRight: "IoMdSettings",
    linkLeft: "/archive",
    linkRight: "/settings",
  })

  const [archivedContext, setArchivedContext] = useState([
    {
      name: "automobiles",
      data: [],
      isOpen: false,
    },
    {
      name: "business",
      data: [],
      isOpen: false,
    },
    {
      name: "health",
      data: [],
      isOpen: false,
    },
    {
      name: "science",
      data: [],
      isOpen: false,
    },
    {
      name: "sports",
      data: [],
      isOpen: false,
    },
    {
      name: "technology",
      data: [],
      isOpen: false,
    },
    {
      name: "travel",
      data: [],
      isOpen: false,
    },
  ])

  const [categoriesContext, setCategoriesContext] = useState([
    {
      name: "Automobiles",
      checked: false,
      isOpen: false,
    },
    {
      name: "Business",
      checked: true,
      isOpen: true,
    },
    {
      name: "Health",
      checked: false,
      isOpen: false,
    },
    {
      name: "Science",
      checked: false,
      isOpen: false,
    },
    {
      name: "Sports",
      checked: false,
      isOpen: false,
    },
    {
      name: "Technology",
      checked: false,
      isOpen: false,
    },
    {
      name: "Travel",
      checked: false,
      isOpen: false,
    },
  ])

  return (
    <NavigationContext.Provider value={{ navContext, setNavContext }}>
      <CategoriesContext.Provider
        value={{ categoriesContext, setCategoriesContext }}
      >
        <ArchivedContext.Provider
          value={{ archivedContext, setArchivedContext }}
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
        </ArchivedContext.Provider>
      </CategoriesContext.Provider>
    </NavigationContext.Provider>
  )
}

export default App
