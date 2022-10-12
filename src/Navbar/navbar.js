import '../style.css';
import ItemListContainer from "./ItemListContainer.js";
import CartWidget from "./CartWidget.js"
import Apiautos from "../Json/autos";

function Navbar() {
    return(
      <header>
        <div className='header-menu'>
              <div>
                <h3>welcome <br/> to the tienda</h3>
              </div>
              <div>
                  <ul>
                    <li> <a href='#'>productos </a></li>
                    <li> <a href='#'>contacto </a></li>
                  </ul>
              </div>
              <CartWidget/> 
          </div>
          <div className='header-json'>
              <div className="header-center">
                {Apiautos.map((modelo, i) => (
                    <ItemListContainer key={i}
                      marca = {modelo.name}
                      patente = {modelo.metric}
                    />
                ))}
          </div>
        </div>
      </header>
    );
}

export default Navbar;
