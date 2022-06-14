/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

const Toggle = ({ name, checked, handleClick }) => {
  const styles = {
    switch: css`
      cursor: pointer;
      position: relative;
      display: inline-block;
      width: 55px;
      border-radius: 30px;
      height: 30px;
      transition: 0.4s;
      & input {
        visibility: hidden;
      }
      //filter: drop-shadow(5px 5px 10px #00000010);
      -webkit-box-shadow: 5px 4px 5px 0px rgba(0, 0, 0, 0.15);
      -moz-box-shadow: 5px 4px 5px 0px rgba(0, 0, 0, 0.15);
      box-shadow: 5px 4px 5px 0px rgba(0, 0, 0, 0.15);
    `,
    slider: css`
      position: absolute;
      background-color: #ffffff;
      top: 2px;
      bottom: 2px;
      left: 2px;
      width: 26px;
      border-radius: 50%;
      transition: 0.4s;
      filter: drop-shadow(5px 5px 10px #00000030);
    `,
    switchOn: css`
      background-color: #87bcbf;
      left: 2px;
      & .slider {
        left: 27px;
      }
    `,
    switchOff: css`
      background-color: #e0e5e5;
    `,
  }

  return (
    <label
      onClick={handleClick}
      css={[styles.switch, checked ? styles.switchOn : styles.switchOff]}
    >
      <input type="checkbox" defaultChecked={checked} />
      <span className="slider" css={styles.slider}></span>
    </label>
  )
}

export default Toggle
