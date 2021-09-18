import { useEffect, useState } from "react"
import { Currencies } from "../../components/Currencies/Currencies"
import { Title } from "../../components/Title/Title"
import classes from "./Home.module.css"

export const Home = ({ curr, setCurr }) => {
  const [title, setTitle] = useState("Welcome to currency coverter!")
  const [inputValue, setInputValue] = useState("")
  const [foundCurr, setFoundCurr] = useState([])
  const [isSearched, setIsSearched] = useState(false)

  let currItem = []
  const currData = () => {
    for (let key in curr) {
      currItem.push({ item: key, value: curr[key] })
    }
    return currItem
  }
  currData()
  console.log(currItem)
  console.log(isSearched)

  useEffect(() => {
    const search = () => {
      /*     setIsSearched(true) */
      let filteredItems = currItem.filter((item) =>
        item.item.includes(inputValue)
      )

      setFoundCurr(filteredItems)
    }
    search()
  }, [inputValue])

  const onChangeInput = (e) => {
    setInputValue(e.target.value.toUpperCase())
    setIsSearched(true)
  }

  return (
    <div className={classes.home}>
      <Title title={title} />
      <input
        className={classes.searchInput}
        type="text"
        placeholder="Enter code of your currency"
        value={inputValue}
        onChange={
          (e) => onChangeInput(e)
          /* search(e.target.value.toUpperCase()) */
        }
      />
      {!isSearched
        ? currItem.map((item, i) => {
            return <Currencies item={item} key={i} />
          })
        : foundCurr.map((item, i) => {
            return <Currencies item={item} key={i} />
          })}
    </div>
  )
}
