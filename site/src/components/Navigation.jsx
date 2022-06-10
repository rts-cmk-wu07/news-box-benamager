import { useContext } from "react"

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

import Colors from "../contexts/colors"
import Icon from "./Icon"

const Navigation = (props) => {
  const { title, height, iconSize, iconLeft, iconRight } = props
  const colors = useContext(Colors)

  const styles = {
    container: css`
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      align-items: center;
      border-bottom: 2px solid ${colors.secondary.fossil};
      height: ${height};
      padding: 0 30px;
      font-weight: 700;
      color: ${colors.primary.drab};
    `,
    header: css`
      font-size: 18px;
      letter-spacing: -0.2px;
      justify-self: center;
      grid-column-start: 2;
    `,
  }

  return (
    <nav css={styles.container}>
      {iconLeft && (
        <Icon
          iconName={iconLeft}
          size={iconSize}
          justify="start"
          colStart={1}
        />
      )}
      <h1 css={styles.header}>{title}</h1>
      {iconRight && (
        <Icon iconName={iconRight} size={iconSize} justify="end" colStart={3} />
      )}
    </nav>
  )
}

export default Navigation
