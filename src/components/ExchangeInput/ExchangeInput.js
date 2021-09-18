import { useState } from "react"
import classes from "./ExchangeInput.module.css"

//[Курс]=[Сумма в валюте конвертации]*[Кратность]/[Сумма в базовой валюте]
// сумме в валюте конвертации = курс / (кратность / сумму в базовой валюте)

export const ExchangeInput = ({ curr }) => {
  const [courseValue, setCourseValue] = useState([])
  const [resultCurr, setResultCurr] = useState(0)
  const [baseCurr, setBaseCurr] = useState()
  const [toCurr, setToCurr] = useState([])

  const count = () => {
    const conversionalRate = courseValue[0].value / toCurr[0].value
    let sum = baseCurr / conversionalRate
    setResultCurr(sum)
  }

  let currItem = []
  const currData = () => {
    for (let key in curr) {
      currItem.push({ item: key, value: curr[key] })
    }
    return currItem
  }
  currData()

  const getObjectKey = (e, isCurr) => {
    let result = currItem.filter((item, index) => item.item === e.target.value)
    isCurr ? setToCurr(result) : setCourseValue(result)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    count()
  }

  console.log(courseValue[0])
  console.log(currItem)
  return (
    <div className={classes.exchangeInput}>
      <div className={classes.exchangeForm}>
        <form action="submit" method="POST" onSubmit={(e) => onSubmit(e)}>
          <input
            placeholder="Enter amount"
            type="number"
            name="number"
            onChange={(e) => setBaseCurr(e.target.value)}
          ></input>
          <div className={classes.toFromWrapper}>
            <lable htmlFor="from">From</lable>
            <select onChange={(e) => getObjectKey(e)} name="from">
              <option value="">...</option>
              {currItem.map((item, i) => {
                return (
                  <option value={item.item} key={i}>
                    {item.item}
                  </option>
                )
              })}
            </select>
            <lable htmlFor="to">to</lable>
            <select onChange={(e) => getObjectKey(e, true)} name="to">
              <option value="">...</option>
              {currItem.map((item, i) => {
                return (
                  <option value={item.item} key={i}>
                    {item.item}
                  </option>
                )
              })}
            </select>
          </div>
          <button className={classes.btn} type="submit">
            Submit
          </button>
        </form>
      </div>
      <div className={classes.show}>
        <p className={classes.showDescr}>{resultCurr.toFixed(2)}</p>
      </div>
    </div>
  )
}
