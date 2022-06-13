import NavigationContext from "../contexts/navigationContext"

import { useEffect, useContext } from "react"

function useChangeNav({ iconLeft, title, iconRight, linkLeft, linkRight }) {
  const { navContext, setNavContext } = useContext(NavigationContext)
  useEffect(() => {
    setNavContext((prevState) => {
      return {
        ...prevState,
        iconLeft: iconLeft,
        title: title,
        iconRight: iconRight,
        linkLeft: linkLeft,
        linkRight: linkRight,
      }
    })
  }, [iconLeft, title, iconRight])
}

export default useChangeNav
