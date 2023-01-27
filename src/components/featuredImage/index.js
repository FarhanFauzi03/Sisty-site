import * as React from "react"
import Container from "../container"
import * as styles from "./styles.module.scss"

// markup
const FeaturedImage = () => {
  return (
    <div className={styles.featuredImage}>
      <Container size="medium">
        <img src="https://source.unsplash.com/random" alt="test" />
      </Container>
    </div>
  )
}


export default FeaturedImage