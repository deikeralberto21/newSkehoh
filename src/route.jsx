import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './components/content-main/content.css'
import Mezcal from './page/MezcalPage.jsx'
import BlackCurrant from './page/BlackCurrantPage.jsx'
import Berga from './page/BergamotPage.jsx'
import Bourbon from './page/BourbonPage.jsx'
import Coconut from './page/CoconutPage.jsx'
import Espresso from './page/EspressoPage.jsx'
import Hazelnut from './page/HazelnutPage.jsx'
import Honey from './page/HoneyPage.jsx'
import Irish from './page/IrishPage.jsx'
import Lemon from './page/LemonPage.jsx'
import Meyer from './page/MeyerPage.jsx'
import Milk from './page/MilkPage.jsx'
import Orange from './page/OrangePage.jsx'
import Passion from './page/PassionPage.jsx'
import Raspbe from './page/RaspbePage.jsx'
import Saffron from './page/SaffronPage.jsx'
import Yuzu from './page/YuzuPage.jsx'
import GrandMarnier from './page/GrandMarnier.jsx'
import Burnt from './page/Burnt.jsx'
import Persian from './page/PersianPage.jsx'
import Lenoir from './page/LeNoir.jsx'
export default function AppRoute() {
  return (
    <Routes>
      {/* <Route path='/' element={<Home></Home>}/> */}
      <Route path='/shekoh/bergamot' element={<Berga/>}/>
      <Route path='/shekoh/mezcal' element={<Mezcal/>}/>
      <Route path='/shekoh/blackcurrant' element={<BlackCurrant/>}/>
      <Route path='/shekoh/bourbon' element={<Bourbon/>}/>
      <Route path='/shekoh/Coconut' element={<Coconut/>}/>
      <Route path='/shekoh/espresso' element={<Espresso/>}/>
      <Route path='/shekoh/grandmarnier' element={<GrandMarnier/>}/>
      <Route path='/shekoh/Hazelnut' element={<Hazelnut/>}/>
      <Route path='/shekoh/honey' element={<Honey/>}/>
      <Route path='/shekoh/irish' element={<Irish/>}/>
      <Route path='/shekoh/lemon' element={<Lemon/>}/>
      <Route path='/shekoh/meyer' element={<Meyer/>}/>
      <Route path='/shekoh/milk' element={<Milk/>}/>
      <Route path='/shekoh/orange' element={<Orange/>}/>
      <Route path='/shekoh/passion' element={<Passion/>}/>
      <Route path='/shekoh/raspbe' element={<Raspbe/>}/>
      <Route path='/shekoh/saffron' element={<Saffron/>}/>
      <Route path='/shekoh/yuzu' element={<Yuzu/>}/>
      <Route path='/shekoh/burnt' element={<Burnt/>}/>
      <Route path='/shekoh/persian' element={<Persian/>}/>
      <Route path='/shekoh/lenoir' element={<Lenoir/>}/>
      <Route path='*' element={<h3>not found 404</h3>}/>
    </Routes>
  );
}