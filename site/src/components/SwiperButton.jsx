/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

import Icon from "./Icon"

const SwiperButton = ({ iconName, bcgColor, color }) => {
  const styles = {
    container: css`
      background-color: ${bcgColor};
      display: flex;
      align-items: center;
      justify-content: center;
    `,
  }

  return (
    <div css={styles.container}>
      <Icon iconName={iconName} size="22px" color={color} />
    </div>
  )
}

export default SwiperButton
