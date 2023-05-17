import React from "react"
import Header from "../Component/Header"
import Land from "../Component/Land"
import Menu from "../Component/Menu"
import Testimonial from "../Component/Testimonial"
import Footer from "../Component/Footer"

export default function HomePage() {
    return (
      <main>
        <Header />
        <Land />
        <Menu />
        <Testimonial/>
        <Footer />
      </main>
    )
  }