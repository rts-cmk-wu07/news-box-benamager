/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

import Icon from "./Icon"
import { useContext, useRef, useState, useEffect } from "react"
import API_KEY from "../contexts/apiKey"
import useAxios from "../hooks/useAxios"
import SwiperButton from "./SwiperButton"
import { ThreeDots } from "react-loader-spinner"
import ArchivedContext from "../contexts/archivedContext"

import {
  SwipeableList,
  SwipeableListItem,
  TrailingActions,
  SwipeAction,
} from "react-swipeable-list"

import GetArticlesForCategory from "./GetArticlesForCategory"
import ColorsContext from "../contexts/colorsContext"
import CategoryItem from "./CategoryItem"

const DropdownContainer = ({ name, isOpen, checked, handleContext }) => {
  const colors = useContext(ColorsContext)
  const { archivedContext, setArchivedContext } = useContext(ArchivedContext)

  const myRef = useRef()

  const styles = {
    container: css`
      & .dropdownHeader {
        display: flex;
        align-items: center;
        border-bottom: 1px solid ${colors.secondary.ice};
        border-top: 1px solid ${colors.secondary.ice};
        transition: background-color 0.1s;
        padding: 0 16px;
        height: 58px;
        &:active {
          background-color: ${colors.secondary.fossil};
        }
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
        }
      }
      & .dropdownElements {
        transition: max-height 0.3s;
        position: relative;
        & article {
          border-bottom: 1px solid ${colors.secondary.ice};
        }
      }
    `,
    containerClosed: css`
      & .dropdownHeader {
        & > svg {
          transform: rotate(-90deg);
        }
      }
    `,
    containerOpen: css`
      & .dropdownHeader {
        & > svg {
          transform: rotate(0deg);
        }
      }
    `,
  }

  function handleClick(name) {
    handleContext((prevState) => {
      return [...prevState].map((category) => {
        if (category.name === name) {
          return { ...category, isOpen: !category.isOpen }
        } else {
          return category
        }
      })
    })
  }

  const APIKEY = useContext(API_KEY)

  const { data, isLoading, isError } = useAxios(
    `https://api.nytimes.com/svc/topstories/v2/${name}.json?api-key=${APIKEY}`
  )

  const [articleData, setArticleData] = useState(null)

  useEffect(() => {
    if (data) {
      const filteredData = data.results.filter(
        (article) =>
          article.section === name.toLowerCase() &&
          article.title &&
          article.abstract &&
          article.multimedia
      )
      setArticleData(filteredData)
    }
  }, [data])

  function handleOpenUrl(url) {
    window.open(url)
  }

  // Archive
  function handleArchive({ img, header, text, category }) {
    setArchivedContext((prevState) => {
      const newItem = [
        ...prevState.find((article) => article.name === category).data,
        { img, header, text },
      ]

      let mapped = prevState.map((article) => {
        if (article.name === category) {
          return { ...article, data: newItem }
        } else {
          return article
        }
      })

      return mapped
    })
  }

  const trailingActions = (data) => (
    <TrailingActions>
      <SwipeAction destructive={false} onClick={() => handleArchive(data)}>
        <SwiperButton
          iconName="AiOutlineInbox"
          bcgColor={colors.primary.sage}
          color={colors.typo.snow}
        />
      </SwipeAction>
    </TrailingActions>
  )

  return (
    <section
      css={[
        styles.container,
        isOpen ? styles.containerOpen : styles.containerClosed,
      ]}
    >
      <div onClick={() => handleClick(name)} className="dropdownHeader">
        <span className="icon">
          <Icon iconName="AiOutlineInbox" />
        </span>
        <h2>{name.toUpperCase()}</h2>
        <Icon iconName="FiChevronDown" size="24px" />
      </div>
      <div ref={myRef} className="dropdownElements">
        {!articleData && (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <ThreeDots
              height="100"
              width="100"
              color="red"
              ariaLabel="loading"
            />
          </div>
        )}
        {isOpen && (
          <SwipeableList>
            {articleData &&
              articleData.map((article) => {
                const articleTitle = article.title.substring(0, 30) + "..."
                const articleText = article.abstract.substring(0, 70) + "..."

                return (
                  <SwipeableListItem
                    key={article.url}
                    trailingActions={trailingActions({
                      img: article.multimedia[2].url,
                      header: articleTitle,
                      text: articleText,
                      category: name.toLowerCase(),
                    })}
                  >
                    <CategoryItem
                      key={article.title}
                      img={article.multimedia[2].url}
                      header={articleTitle}
                      text={articleText}
                      category={name}
                      handleClick={() => handleOpenUrl(article.url)}
                    />
                  </SwipeableListItem>
                )
              })}
          </SwipeableList>
        )}
      </div>
    </section>
  )
}

export default DropdownContainer
