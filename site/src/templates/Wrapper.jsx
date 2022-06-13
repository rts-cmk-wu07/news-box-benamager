/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

const Wrapper = (props) => {
  const { maxWidth, children } = props
  const styles = {
    wrapper: css`
      max-width: ${maxWidth};
      margin: 0 auto;
    `,
  }

  return <div css={styles.wrapper}>{children}</div>
}

Wrapper.defaultProps = {
  maxWidth: "unset",
}

export default Wrapper
