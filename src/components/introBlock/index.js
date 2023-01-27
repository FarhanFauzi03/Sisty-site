import * as React from "react"
import Container from "../container"

import * as styles from "./styles.module.scss"

const IntroBlock = () => {
    return (
        <div className={styles.introBlock}>
            <Container size="small">
                <h1 className={styles.introBlockTitle}>
                    <span>Mau busana berkualitas tapi harga terjangkau? Tenang, Sisty Busana lah solusinya</span> 
                </h1>
            </Container>
        </div>
    )
}

export default IntroBlock