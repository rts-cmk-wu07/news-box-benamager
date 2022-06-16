/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

import { useContext } from "react"
import ColorsContext from "../contexts/colorsContext"

const DarkModeToggle = ({ onOff }) => {
  const colors = useContext(ColorsContext)

  const styles = {
    button: css`
      text-transform: uppercase;
      border: 1px solid ${colors.secondary.fossil};
      border-radius: 40px;
      padding: 1rem 0.2rem;
      background-color: ${onOff === true ? colors.primary.sage : "none"};
      transition: transform 0.1s;
      margin-bottom: 35px;
      &:active {
        transform: scale(1.05);
      }
    `,
  }

  return <button css={styles.button}>Toggle dark mode</button>
}

export default DarkModeToggle
