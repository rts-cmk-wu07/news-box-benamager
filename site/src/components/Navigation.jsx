import { useContext } from "react"
import { Link } from "react-router-dom"

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

import Colors from "../contexts/colorsContext"
import Icon from "./Icon"

const Navigation = (props) => {
  const { title, height, iconSize, iconLeft, iconRight, linkLeft, linkRight } =
    props
  const colors = useContext(Colors)

  const styles = {
    container: css`
      display: grid;
      grid-template-columns: 50px 1fr 50px;
      align-items: center;
      border-bottom: 2px solid ${colors.secondary.fossil};
      height: ${height};
      padding: 0 20px;
      font-weight: 700;
      color: ${colors.primary.drab};
      & a {
        text-align: center;
      }
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
        <Link to={linkLeft}>
          <Icon
            iconName={iconLeft}
            size={iconSize}
            justify="start"
            colStart={1}
          />
        </Link>
      )}
      <Link to="/">
        <h3 css={styles.header}>{title}</h3>
      </Link>
      {iconRight && (
        <Link to={linkRight}>
          <Icon
            iconName={iconRight}
            size={iconSize}
            justify="end"
            colStart={3}
          />
        </Link>
      )}
    </nav>
  )
}

export default Navigation
