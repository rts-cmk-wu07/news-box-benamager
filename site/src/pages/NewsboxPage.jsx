import { useContext } from "react"
import useChangeNav from "../hooks/useChangeNav"

const NewsboxPage = () => {
  useChangeNav({
    iconLeft: "AiOutlineInbox",
    title: "Newsbox",
    iconRight: "IoMdSettings",
    linkLeft: "/archive",
    linkRight: "/settings",
  })

  return <div>Newsbox (index)</div>
}

export default NewsboxPage
