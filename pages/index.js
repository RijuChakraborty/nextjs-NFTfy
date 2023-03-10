import Head from 'next/head'
import Header from '@/components/Header'
import Minter from '@/components/minter'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
  <div className={styles.container}>
    <Head>
        <title>NFTfy</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div>
      <Header/>
    </div>
    <div id="heading">
      <p>
        Your one stop solution to create a NFT
      </p>
    </div>
    <div id="stepcircles">
      <div class="step">Step</div>
      <div class="step" id="st2">Step</div>
      <div class="step" id="st3">Step</div>
      <br></br>
      <div class="circles">1</div>
      <img
        class="arrow"
        src="https://img.icons8.com/ios-glyphs/512/arrow.png"
      />
      <div class="circles">2</div>
      <img
        class="arrow"
        src="https://img.icons8.com/ios-glyphs/512/arrow.png"
      />
      <div class="circles">3</div>
      <br></br>
      <div id="allSteps">
        <div class="stDes" id="sd1">Select the file and enter the name of NFT and it's description</div>

        <div class="stDes" id="sd2">Click on upload and wait for Token URI to be generated</div>

        <div class="stDes" id="sd3">Finally click on mint, sign the transaction from your wallet and then your new NFT is minted</div>
    </div>
    </div>
    <div>
      <Minter/>
    </div>
  </div>
  )
}
