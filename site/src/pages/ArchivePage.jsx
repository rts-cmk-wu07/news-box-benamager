import useChangeNav from "../hooks/useChangeNav"

import Searchbar from "../components/Searchbar"

const ArchivePage = () => {
  useChangeNav({
    title: "Archive",
    iconLeft: "IoIosArrowBack",
    iconRight: "IoMdSettings",
    linkLeft: "/",
    linkRight: "/settings",
  })

  return <Searchbar />
}

export default ArchivePage
