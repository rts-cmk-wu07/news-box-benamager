import { useContext } from "react"
import useChangeNav from "../hooks/useChangeNav"

import Searchbar from "../components/Searchbar"
import DropdownContainer from "../components/DropdownContainer"

import { SwipeableList } from "react-swipeable-list"

import CategoryItem from "../components/CategoryItem"

const NewsboxPage = () => {
  useChangeNav({
    iconLeft: "AiOutlineInbox",
    title: "Newsbox",
    iconRight: "IoMdSettings",
    linkLeft: "/archive",
    linkRight: "/settings",
  })

  return (
    <div>
      <Searchbar />
      <SwipeableList>
        <CategoryItem
          img="https://picsum.photos/100/100"
          header="Headline"
          text="Surfing is a surface water sport in which the wave rider, referred to as..."
        />
        <CategoryItem
          img="https://picsum.photos/100/100"
          header="Headline"
          text="Surfing is a surface water sport in which the wave rider, referred to as..."
        />
      </SwipeableList>
    </div>
  )
}

export default NewsboxPage
