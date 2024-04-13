import { Routes, Route } from "react-router-dom"
import SiteNav from "./layout/SiteNav"
import Home from "./views/Home"
import Products from "./views/Products"
import SingleProduct from "./views/SingleProduct"
import ErrorPage from "./views/ErrorPage"
import { useTranslation } from "react-i18next"
import SecNavBar from "./layout/SecNavBar"
import FirstFooter from "./layout/FirstFooter"
import SecondFooter from "./layout/SecondFooter"

function App() {
  let { i18n } = useTranslation()

  return (
    <div className={i18n.language === 'ar' ? "rtl" : ""}>
      <SiteNav />
      <SecNavBar/>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/products" Component={Products} />
        <Route path="/products/single_product/:id" Component={SingleProduct} />
        <Route path="/*" Component={ErrorPage} />
      </Routes>
      <FirstFooter/>
      <SecondFooter/>
    </div>
  )
}

export default App
