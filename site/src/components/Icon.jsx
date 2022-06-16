import { createElement } from "react"

// Importing the icon galleries
import * as FontAwesome from "react-icons/ai"
import * as Ionicons from "react-icons/io"
import * as FeatherIcons from "react-icons/fi"
const libary = { ...FontAwesome, ...Ionicons, ...FeatherIcons }

const Icon = (props) => {
  // Finding icon and returning
  const { iconName, size, color, justify, colStart } = props

  // Checks if icon exists in libary (if not error icon gets displayed in red)
  const iconExists = iconName in libary

  // Creating icon from libaries, if it doesnt exist return error icon.
  const icon = createElement(
    libary[iconExists ? iconName : "IoIosCloseCircle"],
    {
      style: {
        fontSize: size,
        color: iconExists ? color : "red",
        justifySelf: "justify",
        boxSizing: "content-box",
        padding: "10px",
        colStart: { colStart },
      },
    }
  )
  return <>{icon}</>
}

export default Icon
