import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import CartList from "../CartList/CartList"
import { Link } from "react-router-dom"


const CartListContainer = () => {

    const { cart, totalPriceOrder, clearCart } = useContext(CartContext)

    if (cart.length === 0) {
        return (
            <div>
                <h2 style={{ fontWeight: 400 }}>El carrito esta vacío</h2>
                <Link className="btn btn-warning m-1" to="/">Volver al catálogo</Link>
            </div >
        )
    }

    return (
        <div>
            {cart.map(item => <CartList {...item} key={item.id} />)}
            <h5 className="m-2">Total: {totalPriceOrder}</h5>
            <button className="btn btn-red m1" onClick={clearCart}> Borrar carrito </button>
            <Link className="btn btn-warning m-1" to="/checkout">Finalizar compra</Link>
        </div>
    )
}

export default CartListContainer
