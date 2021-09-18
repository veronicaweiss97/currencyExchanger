import classes from "./Exchange.module.css"
import { useState } from "react"
import { Title } from "../../components/Title/Title"
import { ExchangeInput } from "../../components/ExchangeInput/ExchangeInput"

export const Exchange = ({ curr }) => {
  const [title, setTitle] = useState("Start here:")
  return (
    <div className={classes.exchange}>
      <Title title={title} />
      <ExchangeInput curr={curr} />
    </div>
  )
}
