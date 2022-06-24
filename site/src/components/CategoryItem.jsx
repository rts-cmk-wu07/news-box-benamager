/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { useContext } from "react"
import ColorsContext from "../contexts/colorsContext"

import "react-swipeable-list/dist/styles.css"

import ArchivedContext from "../contexts/archivedContext"
import { useEffect } from "react"

const CategoryItem = ({ img, header, text, category, handleClick }) => {
  const colors = useContext(ColorsContext)
  const { archivedContext, setArchivedContext } = useContext(ArchivedContext)

  const styles = {
    container: css`
      display: flex;
      align-items: center;
      //background-color: ${colors.primary.sage};
      gap: 21px;
      height: 100px;
      width: 100%;
      padding: 0 16px;
      letter-spacing: 0.02rem;
    `,
    image: css`
      min-width: 70px;
      min-height: 70px;
      width: 70px;
      height: 70px;
      border-radius: 50%;
    `,
    content: css`
      .header {
        font-size: 15px;
      }
      .text {
        font-size: 14px;
        font-weight: 300;
      }
    `,
  }

  // const leadingActions = () => (
  //   <LeadingActions>
  //     <SwipeAction onClick={() => console.info("swipe action triggered")}>
  //       Action name
  //     </SwipeAction>
  //   </LeadingActions>
  // )

  const archivedDataForCategory = archivedContext.find(
    (item) => item.name === category.toLowerCase()
  ).data

  const isArchived = archivedDataForCategory.find((item) => item.img === img)

  return (
    <article
      onClick={handleClick}
      style={isArchived && { backgroundColor: colors.primary.sage }}
      css={styles.container}
    >
      <img css={styles.image} src={img} alt={text} />
      <div css={styles.content}>
        <h2 className="header">{header}</h2>
        <p className="text">{text}</p>
      </div>
    </article>
  )
}

export default CategoryItem
