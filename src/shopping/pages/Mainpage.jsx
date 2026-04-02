import React, { useState } from 'react'
import Footer from '../componets/footer'
import Collection from '../componets/collection'
import Banner from '../componets/banner'
import Header from '../componets/header'
import { Gents, Ladies } from '../data'
import WomenCollection from '../componets/womenCollection'

const Mainpage = () => {
  const [gentsFashion, setGentsFashion] = useState(Gents)
  const [ladiesFashion, setladiesFashion] = useState(Ladies)

  console.log(Gents)

  return (
    <div>
      <Header />
      <Banner />
      <Collection gentsFashion={gentsFashion} />
      <WomenCollection ladiesFashion={ladiesFashion} />
      <Footer />
    </div>
  )
}

export default Mainpage