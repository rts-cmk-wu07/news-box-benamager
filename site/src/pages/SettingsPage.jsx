import useChangeNav from "../hooks/useChangeNav"
import Colors from "../contexts/colorsContext"

import Toggle from "../components/Toggle"
import CategoriesContext from "../contexts/categoriesContext"

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"

import { useContext, useEffect, useState, useRef } from "react"

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
      & .categoriesWrapper {
        width: 90%;
        border-radius: 10px;
        overflow: hidden;
      }
      & ul {
        width: 100%;
        background-color: #ffffff;
        & li:not(:last-of-type) {
          border-bottom: 1px solid #f0f3f4;
        }
      }
    `,
    category: css`
      display: flex;
      position: relative;
      justify-content: space-between;
      align-items: center;
      padding: 0.8rem 7%;
      & p {
        text-transform: uppercase;
        & .index {
          font-size: 0.8rem;
          color: #87bcbf;
        }
      }
    `,
  }

  const { categoriesContext, setCategoriesContext } =
    useContext(CategoriesContext)

  function handleOnDragEnd(result) {
    if (!result.destination) return
    const items = Array.from(categoriesContext)
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)
    setCategoriesContext(items)
  }

  function handleClick(e, name) {
    e.preventDefault()
    setCategoriesContext((prevState) => {
      const mapped = prevState.map((category) => {
        return category.name === name
          ? { ...category, checked: !category.checked }
          : { ...category }
      })
      return mapped
    })
  }

  const checkedCategories = categoriesContext.filter(
    (category) => category.checked === true
  )

  return (
    <div css={styles.container}>
      <h2>Manage</h2>
      <p>Categories</p>
      <div className="categoriesWrapper">
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="characters">
            {(provided) => {
              return (
                <ul
                  className="categories"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {categoriesContext.map((category, index) => {
                    return (
                      <Draggable
                        key={category.name}
                        draggableId={category.name}
                        index={index}
                      >
                        {(provided) => (
                          <li
                            css={styles.category}
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <p>
                              {category.checked && (
                                <span className="index">
                                  #{checkedCategories.indexOf(category) + 1}{" "}
                                </span>
                              )}
                              {category.name}
                            </p>
                            <Toggle
                              checked={category.checked}
                              handleClick={(e) => handleClick(e, category.name)}
                            />
                          </li>
                        )}
                      </Draggable>
                    )
                  })}
                  {provided.placeholder}
                </ul>
              )
            }}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  )
}

export default SettingsPage
