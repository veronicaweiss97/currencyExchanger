import classes from "./Header.module.css"
import { NavLink } from "react-router-dom"

export const Header = () => {
  return (
    <div className={classes.header}>
      <h1 className={classes.title}>ExchangeCurrencyEasily</h1>
      <nav className={classes.navigation}>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/exchange">Exchange</NavLink>
      </nav>
    </div>
  )
}
