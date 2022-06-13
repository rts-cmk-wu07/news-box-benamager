import useChangeNav from "../hooks/useChangeNav"

const ArchivePage = () => {
  useChangeNav({
    title: "Archive",
    iconLeft: "IoIosArrowBack",
    iconRight: "IoMdSettings",
    linkLeft: "/",
    linkRight: "/settings",
  })

  return <h1>Archive</h1>
}

export default ArchivePage
