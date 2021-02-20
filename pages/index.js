import Head from 'next/head'
import styles from '../styles/Home.module.css'
import UserList from '../src/components/UserList'

export const getServerSideProps = async ({ query }) => {
  // Fetch the first page as default
  const page = query.page || 1
  let userData = null
  // Fetch data from external API
  try {
    const res = await fetch(`${process.env.FETCH_URL}/api/users?page=${page}`)
    if (res.status !== 200) {
      throw new Error('Failed to fetch')
    }
    userData = await res.json()
  } catch (err) {
    userData = { error: { message: err.message } }
  }
  // Pass data to the page via props
  return { props: { userData } }
}

export default function Home({ userData }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to imaginary long feed!
        </h1>
        <div className="home-page">
          <UserList userData={userData} />
        </div>
      </main>
    </div>
  )
}
