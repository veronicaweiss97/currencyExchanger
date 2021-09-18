import classes from "./Currencies.module.css"

export const Currencies = ({ item }) => {
  return (
    <div className={classes.currencies}>
      <div className={classes.uds}>
        <h3 className={classes.curTitle}>{item.item}</h3>
        <p className={classes.curDescr}>{item.value}</p>
      </div>
    </div>
  )
}
