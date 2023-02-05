import './assets/scss/styles.scss'

import { Provider } from 'react-redux'
import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import { AppHeader } from './cmps/app-header'
import { ProductIndex } from './pages/product-index'
import { ShoppingCart } from './pages/shopping-cart'
import { store } from './store/store'


export function App() {
  return (
    <Provider store={store}>
      <Router>
        <main className="App main-layout">
          <AppHeader />
          <Routes>
            <Route element={<ProductIndex />} path="/" />
            <Route element={<ShoppingCart />} path="/cart" />
          </Routes>
        </main>
      </Router>
    </Provider>
  )
}

