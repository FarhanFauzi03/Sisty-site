import * as React from "react"
import * as styles from "./styles.module.scss"

// markup
const Container = ({children, size}) => {
 const containerClasses = [styles.container, styles[size]];
  return (
    <div className={containerClasses.join(" ")}>
      {children}
    </div>
  )
}


export default Container