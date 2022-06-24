import { useContext, useEffect, useState } from "react"
import useChangeNav from "../hooks/useChangeNav"

import Searchbar from "../components/Searchbar"
import DropdownContainer from "../components/DropdownContainer"

import CategoriesContext from "../contexts/categoriesContext"

const NewsboxPage = () => {
  useChangeNav({
    iconLeft: "AiOutlineInbox",
    title: "Newsbox",
    iconRight: "IoMdSettings",
    linkLeft: "/archive",
    linkRight: "/settings",
  })

  const { categoriesContext, setCategoriesContext } =
    useContext(CategoriesContext)
  const categoriesOnlyChecked = categoriesContext.filter(
    (category) => category.checked === true
  )

  return (
    <div>
      <Searchbar />
      {categoriesOnlyChecked.map((category) => (
        <DropdownContainer
          key={category.name}
          name={category.name}
          isOpen={category.isOpen}
          checked={category.checked}
          handleContext={setCategoriesContext}
        ></DropdownContainer>
      ))}
    </div>
  )
}

export default NewsboxPage
