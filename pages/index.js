import Head from 'next/head'
import Image from 'next/image'

import styles from "../styles/home.module.scss"
import commonStyles from "../styles/commons.module.scss"


const Home = () => {
  return (
    <>
      <main>
        <div className={commonStyles.logo}>
          recyc | <span>ABLE</span>
        </div>
        <div>Hello here</div>

      </main>
    </>

  )
}


export default Home;
