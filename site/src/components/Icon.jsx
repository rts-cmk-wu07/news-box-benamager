import { createElement } from "react"

// Importing the icon galleries
import * as FontAwesome from "react-icons/ai"
import * as Ionicons from "react-icons/io"
const libary = { ...FontAwesome, ...Ionicons }

const Icon = (props) => {
  // Finding icon and returning
  const { iconName, size, color, justify, colStart } = props

  // Checks if icon exists in libary (if not error icon gets displayed)
  const iconExists = iconName in libary

  const icon = createElement(
    libary[iconExists ? iconName : "IoIosCloseCircle"],
    {
      style: {
        fontSize: size,
        color: iconExists ? color : "red",
        justifySelf: justify,
        colStart: { colStart },
      },
    }
  )
  return <>{icon}</>
}

export default Icon
