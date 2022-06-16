/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { useContext } from "react"
import SwiperButton from "./SwiperButton"
import ColorsContext from "../contexts/colorsContext"

import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list"
import "react-swipeable-list/dist/styles.css"

const CategoryItem = ({ img, header, text }) => {
  const colors = useContext(ColorsContext)

  const styles = {
    container: css`
      display: flex;
      align-items: center;
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

  //   const leadingActions = () => (
  //     <LeadingActions>
  //       <SwipeAction onClick={() => console.info("swipe action triggered")}>
  //         Action name
  //       </SwipeAction>
  //     </LeadingActions>
  //   )

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction
        destructive={false}
        onClick={() => console.info("swipe action triggered")}
      >
        <SwiperButton
          iconName="AiOutlineInbox"
          bcgColor={colors.primary.sage}
          color={colors.typo.snow}
        />
      </SwipeAction>
    </TrailingActions>
  )

  return (
    <SwipeableListItem trailingActions={trailingActions()}>
      <article css={styles.container}>
        <img css={styles.image} src={img} alt={text} />
        <div css={styles.content}>
          <h2 className="header">{header}</h2>
          <p className="text">{text}</p>
        </div>
      </article>
    </SwipeableListItem>
  )
}

export default CategoryItem
