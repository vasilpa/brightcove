import Head from 'next/head'
import styles from '../styles/Home.module.css'
import PlayList from '../components/PlayList'
import { getPlayList } from './api/playList'

const Home = ({ playList }) => {
  // proper error handling is needed, this will do for now
  const apiError = Array.isArray(playList) && playList[0]?.message;

  return (
    <div className={styles.container}>
      <Head>
        <title>Brightcove API</title>
        <meta name="description" content="brightcove API!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {apiError ? playList[0].message : (
          <>
            <h1>
              Welcome to {`${playList?.description}`}
            </h1>
            <h3>
              {`${playList?.name}`}
            </h3>
            <div className={styles.grid}>
              <PlayList list={playList?.videos} />
            </div>
          </>
        )}
      </main>
    </div>
  )
}

export default Home;

export async function getStaticProps() {
  const playListName = 'animal_show';

  const playList = await getPlayList(playListName);

  return {
    props: { playList }
  };
}
