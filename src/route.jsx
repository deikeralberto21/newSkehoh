import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './page/Home.jsx'
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
export default function AppRoute() {
  return (
    <Routes>
      <Route path='/' element={<Home></Home>}/>
      <Route path='/bergamot' element={<Berga/>}/>
      <Route path='/mezcal' element={<Mezcal/>}/>
      <Route path='/blackcurrant' element={<BlackCurrant/>}/>
      <Route path='/bourbon' element={<Bourbon/>}/>
      <Route path='/Coconut' element={<Coconut/>}/>
      <Route path='/espresso' element={<Espresso/>}/>
      <Route path='/grandmarnier' element={<GrandMarnier/>}/>
      <Route path='/Hazelnut' element={<Hazelnut/>}/>
      <Route path='/honey' element={<Honey/>}/>
      <Route path='/irish' element={<Irish/>}/>
      <Route path='/lemon' element={<Lemon/>}/>
      <Route path='/meyer' element={<Meyer/>}/>
      <Route path='/milk' element={<Milk/>}/>
      <Route path='/orange' element={<Orange/>}/>
      <Route path='/passion' element={<Passion/>}/>
      <Route path='/raspbe' element={<Raspbe/>}/>
      <Route path='/saffron' element={<Saffron/>}/>
      <Route path='/yuzu' element={<Yuzu/>}/>
      <Route path='*' element={<h3>not found 404</h3>}/>
    </Routes>
  );
}