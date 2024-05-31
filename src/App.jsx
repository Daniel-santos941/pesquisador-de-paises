import Header from './components/Header'
import Footer from './components/Footer'
import mapaMundi from './assets/img/mapa-mundi.jpeg'
import { FaSearch } from "react-icons/fa";
import './App.css'

function App() {
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
            <input type='text' placeholder='Brasil'/>
            <div className='icon-container'>
              <FaSearch size={20} />
            </div>
          </div>
        </div>
      </main>      
      <Footer/> 
    </div>  
  )
}

export default App
