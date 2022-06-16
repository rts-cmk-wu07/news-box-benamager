import { useContext } from "react"
import useChangeNav from "../hooks/useChangeNav"

import Searchbar from "../components/Searchbar"
import DropdownContainer from "../components/DropdownContainer"
import useAxios from "../hooks/useAxios"

import { SwipeableList } from "react-swipeable-list"

import CategoryItem from "../components/CategoryItem"

import CategoriesContext from "../contexts/categoriesContext"

const NewsboxPage = () => {
  useChangeNav({
    iconLeft: "AiOutlineInbox",
    title: "Newsbox",
    iconRight: "IoMdSettings",
    linkLeft: "/archive",
    linkRight: "/settings",
  })

  const categoriesContext = useContext(CategoriesContext)
  const categoriesOnlyChecked = categoriesContext.categoriesContext.filter(
    (category) => category.checked === true
  )

  const { data, error, isPending } = useAxios(
    "https://api.nytimes.com/svc/topstories/v2/automobiles.json?api-key=oQqnw05TbH7wxG0t2f5FO9TNqRrYMXi8"
  )
  console.log(data)

  console.log(categoriesOnlyChecked)
  //const [dropdownContainers, setDropdownContainers] = useState({})

  return (
    <div>
      <Searchbar />
      {categoriesOnlyChecked.map((category) => (
        <DropdownContainer key={category.name} name={category.name}>
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
        </DropdownContainer>
      ))}
    </div>
  )
}

export default NewsboxPage
