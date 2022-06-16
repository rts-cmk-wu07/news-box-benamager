/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

const DropdownContainer = ({ name, children }) => {
  return (
    <section>
      <h2>{name.toUpperCase()}</h2>
      {children}
    </section>
  )
}

export default DropdownContainer
