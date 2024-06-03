import '../assets/style/CountryModal.css'
import Brasil from '../assets/img/brasil.svg'
import { FiX } from 'react-icons/fi'

function CountryModal() {
    return (
        <div className='container-modal'>
            <div className='title'>
                <strong>Brasil</strong>
                <FiX className='close'/>
            </div>
            <div className='country-infos'>
                <div className='country-image'>
                    <img src={Brasil}/>
                </div>
                <div className='infos'>
                    <p><span>Nome:</span> República Federativa do Brasil</p>
                    <p><span>Área:</span> 8.515.770 Km²</p>
                    <p><span>Idioma:</span> Português</p>
                    <p><span>Capital:</span> Brasília</p>
                    <p><span>Localização:</span> América do Sul</p>
                    <p><span>Moeda:</span> Real brasileiro</p>
                </div>
                <div className='country-history'>
                Maior país da América do Sul, com vasta área de litoral banhada pelo oceano Atlântico. 
Tem fronteiras com Venezuela, Guiana, Suriname, Guiana Francesa, Colômbia, Peru, Bolívia, Paraguai, Argentina e Uruguai. A floresta amazônica ocupa cerca de 50% do país, sendo ainda bastante coberta pela floresta tropical e outros biomas. É uma república desde 1889, possui 26 estados e um Distrito Federal, onde está a capital do país, Brasília. 
                </div>
            </div>
        </div>
    )
} 

export default CountryModal