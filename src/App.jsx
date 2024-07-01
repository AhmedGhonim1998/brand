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
import Chart from "./views/Chart"
import { useEffect, useState } from "react";  
import EditProduct from "./layout/EditProduct";
import AddProduct from "./layout/AddProduct";

function App() {
  const storedChartData = JSON.parse(window.localStorage.getItem('chartData'));
  const [chart, setChart] = useState(storedChartData || []);

  useEffect(() => {
    window.localStorage.setItem('chartData', JSON.stringify(chart));
  }, [chart]);
  const handleClick = (item) => {
    if (chart.some(chartItem => chartItem.title === item.title)){
      alert("This item is already exist");
      return;
    }
    setChart([...chart, item]);
  }

  
  let { i18n } = useTranslation()

  return (
    <div className={i18n.language === 'ar' ? "rtl" : ""}>
      <SiteNav />
      <SecNavBar/>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/products" element={<Products  handleClick={handleClick}/>} />
        <Route path="/products/single_product/:id" Component={SingleProduct} />
        <Route path="/*" Component={ErrorPage} />
        <Route path="/chart" element={<Chart chart={chart} setChart={setChart}/>}/>
        <Route path="/products/edit/:id" Component={EditProduct} />
        <Route path="/add_new_product" Component={AddProduct} />
      </Routes>
      <FirstFooter/>
      <SecondFooter/>
    </div>
  )
}

export default App
