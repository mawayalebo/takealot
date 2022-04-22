import 'tailwindcss/tailwind.css'
import { Provider } from 'react-redux'
import { store } from '../app/store'
import { AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps }) {
  return(
    <Provider store={store}>  
      <AnimatePresence>
        <Component {...pageProps} />
      </AnimatePresence>
    </Provider>
  ) 
}

export default MyApp
