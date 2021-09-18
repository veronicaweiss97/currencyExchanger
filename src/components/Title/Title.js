import classes from "./Title.module.css"

export const Title = ({ title }) => {
  return <h2 className={classes.title}>{title}</h2>
}
