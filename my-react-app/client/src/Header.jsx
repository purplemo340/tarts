import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)

function Header(){

 return (
 <div className='header'>
 <h1>Tarts</h1>
 <div className='menu'>
    <div className='menu-items'>
        <button><a href='index1.html'>Home</a></button>
    </div>
    <div className='cart'>
        <paypal-cart-button data-id="pp-view-cart" ></paypal-cart-button>
        </div>
 
 </div>
</div>
 )

}
export default Header;