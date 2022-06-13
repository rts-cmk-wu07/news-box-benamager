/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

import { useContext } from "react"

import Colors from "../contexts/colorsContext"

const Toggles = ({ children, width, borderRadius }) => {
  const colors = useContext(Colors)

  const styles = {
    container: css`
      background-color: ${colors.typo.snow};
      max-width: ${width};
      border-radius: ${borderRadius};
      margin: 0 auto;
      width: 100%;
      display: flex;
      flex-direction: column;
      & li:not(:last-of-type) {
        border-bottom: 1px solid ${colors.secondary.ice};
      }
    `,
  }

  return <ul css={styles.container}>{children}</ul>
}

export default Toggles
