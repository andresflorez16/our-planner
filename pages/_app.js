import '../styles/globals.css'
import Header from '../components/Header'

function MyApp({ Component, pageProps }) {

  return (
    <div style={{height:'100vh'}}>
      <Header />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
