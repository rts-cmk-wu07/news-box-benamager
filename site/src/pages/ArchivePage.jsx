import useChangeNav from "../hooks/useChangeNav"
import ArchivedContext from "../contexts/archivedContext"
import { useContext } from "react"
import Searchbar from "../components/Searchbar"
import DropdownContainer from "../components/DropdownContainer"

const ArchivePage = () => {
  const { archivedContext, setArchivedContext } = useContext(ArchivedContext)

  useChangeNav({
    title: "Archive",
    iconLeft: "IoIosArrowBack",
    iconRight: "IoMdSettings",
    linkLeft: "/",
    linkRight: "/settings",
  })

  return (
    <div>
      <Searchbar />
      {archivedContext.map((category) => {
        if (category.data.length > 0) {
          return (
            <DropdownContainer
              key={category.name}
              name={category.name}
              isOpen={category.isOpen}
              checked={category.checked}
            ></DropdownContainer>
          )
        } else {
          return null
        }
      })}
    </div>
  )
}

export default ArchivePage
