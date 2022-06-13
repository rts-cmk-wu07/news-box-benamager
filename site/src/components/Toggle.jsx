/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

import { useContext } from "react"

const Toggle = ({ checked }) => {
  const styles = {
    containerDefault: css`
      display: flex;
      align-items: center;
      background-color: #e0e5e5;
      width: 55px;
      height: 30px;
      border-radius: 40px;
      cursor: pointer;
      & input {
        display: none;
      }
    `,
    defaultSwitch: css`
      background-color: #ffffff;
      height: 27px;
      width: 27px;
      transition: all 1s;
      border-radius: 50%;
    `,
    containerUnchecked: css`
      background-color: #e0e5e5;
      & .switch {
        margin-left: 2px;
      }
    `,
    containerChecked: css`
      background-color: #87bcbf;
      & .switch {
        margin-left: 26px;
      }
    `,
  }

  return (
    <label class="switch">
      <input type="checkbox" />
      <span class="slider round"></span>
    </label>
  )
}

export default Toggle
