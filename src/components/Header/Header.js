import classes from "./Header.module.css"
import { NavLink } from "react-router-dom"
import { useEffect, useState } from "react"

export const Header = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const [isBurger, setIsBurger] = useState(false)
  const [navStyle, setNavStyle] = useState({
    right: "-50vw",
  })

  window.addEventListener("resize", () => {
    setScreenWidth(window.innerWidth)
  })

  useEffect(() => {
    if (screenWidth <= 590) {
      setIsBurger(true)
    } else {
      setIsBurger(false)
    }
  }, [screenWidth])
  return (
    <div className={classes.header}>
      <h1 className={classes.title}>ExchangeCurrencyEasily</h1>
      {!isBurger ? (
        <nav className={classes.navigation}>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/exchange">Exchange</NavLink>
        </nav>
      ) : (
        <>
          <div onClick={() => setNavStyle({ right: "0" })}>
            <div className={classes.burger}></div>
          </div>
          <nav className={classes.burgerNavigation} style={navStyle}>
            <div
              className={classes.close}
              onClick={() => setNavStyle({ right: "-50vw" })}
            ></div>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/exchange">Exchange</NavLink>
          </nav>
        </>
      )}
    </div>
  )
}
