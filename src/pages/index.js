import * as React from "react"
import Navbar from "../components/navbar"
import IntroBlock from "../components/introBlock"
import FeaturedImage from "../components/featuredImage"
import Footer from "../components/footer"
import "../sass/basics.scss"

// markup
const IndexPage = () => {
  return (
    <>
    <Navbar />
    <IntroBlock />
    <FeaturedImage />
    <Footer />
    </>
  )
}

export default IndexPage
