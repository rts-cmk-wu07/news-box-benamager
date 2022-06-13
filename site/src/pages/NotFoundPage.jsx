import useChangeNav from "../hooks/useChangeNav"
import { Link } from "react-router-dom"

const NotFoundPage = () => {
  useChangeNav({
    title: "404",
    iconLeft: "IoIosArrowBack",
    iconRight: "IoMdSettings",
    linkLeft: "/",
    linkRight: "/",
  })

  return (
    <h1>
      The page you are looking for does not exist :/{" "}
      <Link to="/">Go to homepage</Link>
    </h1>
  )
}

export default NotFoundPage
