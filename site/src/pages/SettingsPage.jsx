import useChangeNav from "../hooks/useChangeNav"
import Colors from "../contexts/colorsContext"

import Toggles from "../templates/Toggles"
import Category from "../components/Category"
import categoriesContext from "../contexts/categoriesContext"

import { useContext } from "react"

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

const SettingsPage = () => {
  useChangeNav({
    title: "News settings",
    iconLeft: "IoIosArrowBack",
    iconRight: null,
    linkLeft: "/",
    linkRight: null,
  })

  const colors = useContext(Colors)
  const styles = {
    container: css`
      background-color: ${colors.others.bcgSettings};
      height: calc(100vh - 65px);
      display: flex;
      flex-direction: column;
      align-items: center;
    `,
  }

  const categories = useContext(categoriesContext)

  return (
    <div css={styles.container}>
      <h2>Manage</h2>
      <p>Categories</p>

      <Toggles width="95%" borderRadius="10px">
        {categories.categoriesContext.map((category) => (
          <Category
            key={category.name}
            name={category.name}
            checked={category.checked}
          />
        ))}
      </Toggles>
    </div>
  )
}

export default SettingsPage
