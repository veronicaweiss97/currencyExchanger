import classes from "./Footer.module.css"

export const Footer = () => {
  let date = new Date()
  let currentDate =
    date.getFullYear() + "." + date.getMonth() + "." + date.getDay()

  return (
    <div className={classes.footer}>
      <p>All rights reserved.</p>
      <p>{currentDate}</p>
    </div>
  )
}
