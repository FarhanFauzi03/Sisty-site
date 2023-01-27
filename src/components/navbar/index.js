import * as React from "react"
import Container from "../container"
import * as styles from "./styles.module.scss"

// markup
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Container>
        <div className={styles.navbarInner}>
        <a className={styles.logo} href="#"><img src="https://iili.io/Hl4YIbn.png" alt="Logo" />Sisty Busana</a>
        <a className={styles.cta} href="https://wa.me/6287878362281">Hubungi</a>
        </div>
      </Container>
    </div>
  )
}


export default Navbar