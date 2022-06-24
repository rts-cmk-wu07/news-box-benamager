import axios from "axios"
import { useState, useEffect } from "react"

const useAxios = (url) => {
  // Saving data to state
  const [datas, setDatas] = useState({
    isPending: true,
    error: false,
    data: null,
  })
  const { data, error, isPending } = datas

  // Getting data through axios
  useEffect(() => {
    axios.get(url).then((res) => {
      setDatas((prevState) => {
        return { ...prevState, data: res.data }
      })
    })
  }, [url])

  // Returns object
  return { data, error, isPending }
}

export default useAxios
