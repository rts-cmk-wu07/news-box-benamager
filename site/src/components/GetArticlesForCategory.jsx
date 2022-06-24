import CategoryItem from "../components/CategoryItem"
import API_KEY from "../contexts/apiKey"

import useAxios from "../hooks/useAxios"
import { useState, useEffect, useContext } from "react"

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import { ThreeDots } from "react-loader-spinner"

const GetArticlesForCategory = ({ name, loadingColor }) => {
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

  function handleClick(url) {
    window.open(url)
  }

  return (
    <>
      {!articleData && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <ThreeDots
            height="100"
            width="100"
            color={loadingColor}
            ariaLabel="loading"
          />
        </div>
      )}
      {articleData &&
        articleData.map((article) => {
          const articleTitle = article.title.substring(0, 30) + "..."
          const articleText = article.abstract.substring(0, 70) + "..."

          return (
            <CategoryItem
              key={article.title}
              img={article.multimedia[2].url}
              header={articleTitle}
              text={articleText}
              category={name}
              handleClick={() => handleClick(article.url)}
            />
          )
        })}
    </>
  )
}

export default GetArticlesForCategory
