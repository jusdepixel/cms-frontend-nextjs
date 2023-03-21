import App from 'next/app'
import 'scss/index.scss'

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}

MyApp.getInitialProps = async appContext => {
    const appProps = await App.getInitialProps(appContext)

    return { ...appProps }
}

export default MyApp
