/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

const Wrapper = (props) => {
  const styles = {
    wrapper: css`
      max-width: 375px;
      margin: 0 auto;
    `,
  }

  return <div css={styles.wrapper}>{props.children}</div>
}

export default Wrapper
