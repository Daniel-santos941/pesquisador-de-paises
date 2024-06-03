import Header from './components/Header'
import Footer from './components/Footer'
import CountryModal from './components/CountryModal';
import mapaMundi from './assets/img/mapa-mundi.jpeg'
import { FaSearch } from "react-icons/fa";
import './App.css'
import { useState } from 'react';

function App() {
  const [value, setValue] = useState("")
  const [showCard, setShowCard] = useState(false)

  const processarPesquisa = ()=> {
    setShowCard(true)
  }


  return (
    <div className='container'>
      <Header/>
      <main>
        <div className='image-container'>
          <img src={mapaMundi} alt='imagem mapa mundi'/>
        </div>
        <div className='content'>
          <h1>Pesquise por um país...</h1>
          <div className='base-input'>
            <input 
              type='text' 
              value={value}
              onChange={(e)=> setValue(e.target.value)}
              placeholder='Brasil'
            />
            <div className='icon-container' onClick={processarPesquisa}>
              <FaSearch size={20} />
            </div>
          </div>
        </div>
      </main>  
      {showCard && <CountryModal/>}
      <Footer/> 
    </div>  
  )
}

export default App
