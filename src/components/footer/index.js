import * as React from "react"
import Container from "../container"
import * as styles from "./styles.module.scss"

// markup
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footerInner}>
          <p>&copy; Sisty Busana - {year}</p>
          {/* <p><a href="/">Dibuat oleh Tim Hans</a></p> */}
        </div>
      </Container>
    </footer>
  )
}


export default Footer