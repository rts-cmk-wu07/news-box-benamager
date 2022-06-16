/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

import Icon from "./Icon"
import { useContext, useRef, useState } from "react"

import ColorsContext from "../contexts/colorsContext"

const DropdownContainer = ({ name, children }) => {
  const colors = useContext(ColorsContext)

  const [isOpen, setIsOpen] = useState(false)

  function handleClick() {
    setIsOpen((prevState) => !prevState)
  }

  const styles = {
    dropdownHeader: css`
      display: flex;
      align-items: center;
      border-bottom: 1px solid ${colors.secondary.ice};
      border-top: 1px solid ${colors.secondary.ice};
      padding: 0 16px;
      height: 58px;
      & .icon {
        background-color: ${colors.typo.snow};
        box-shadow: 0px 5px 60px -5px #000000;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 1rem;
      }
      & > svg {
        margin-left: auto;
        transition: transform 0.2s;
        transform: rotate(${isOpen === false ? "-90deg" : "0deg"});
      }
    `,
    dropdownElements: css`
      max-height: ${isOpen === false
        ? 0
        : children.props.children.length * 100 + "px"};
      overflow: hidden;
      transition: max-height 0.3s;
      & article {
        border-bottom: 1px solid ${colors.secondary.ice};
      }
    `,
  }

  return (
    <section>
      <div onClick={handleClick} css={styles.dropdownHeader}>
        <span className="icon">
          <Icon iconName="AiOutlineInbox" />
        </span>
        <h2>{name.toUpperCase()}</h2>
        <Icon iconName="FiChevronDown" size="24px" />
      </div>
      <div css={styles.dropdownElements}>{children}</div>
    </section>
  )
}

export default DropdownContainer
