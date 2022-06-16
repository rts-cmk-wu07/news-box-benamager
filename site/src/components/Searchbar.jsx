import ColorsContext from "../contexts/colorsContext"

import Icon from "./Icon"

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

import { useContext, useRef } from "react"

const Searchbar = () => {
  const colors = useContext(ColorsContext)

  const styles = {
    searchbar: css`
      display: grid;
      align-items: center;
      margin: 18px 16px;
      border-radius: 7px;
      height: 55px;
      overflow: hidden;
      & input {
        grid-area: 1/1;
        background-color: ${colors.secondary.ice};
        color: ${colors.typo.slate};
        font-size: 15px;
        height: 100%;
        padding: 0 2rem;
        border: none;
        &:focus {
          outline: none;
        }
      }
      & svg {
        grid-area: 1/1;
        justify-self: flex-end;
        margin-right: 2rem;
      }
    `,
  }

  return (
    <div css={styles.searchbar}>
      <input placeholder="Search news" type="text" />
      <Icon iconName="FiSearch" color={colors.typo.slate} size="18px" />
    </div>
  )
}

export default Searchbar
