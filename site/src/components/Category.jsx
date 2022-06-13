/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

import Toggle from "./Toggle"

const CategoryToggle = ({ name, checked }) => {
  const styles = {
    container: css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.8rem 7%;
      & p {
        text-transform: uppercase;
      }
    `,
  }

  return (
    <li css={styles.container}>
      <p>{name}</p>
      <Toggle name={name} checked={checked} />
    </li>
  )
}

export default CategoryToggle
