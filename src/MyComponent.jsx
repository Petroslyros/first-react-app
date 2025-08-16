import { useState } from "react"


const MyComponent = () => {

    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(0)
    const [comment, setComment] = useState("")
    const [payment, setPayment] = useState("")
    const [shipping, setShipping] = useState("")

    const handleNameChange = (e) => {
        setName(e.target.value);
    } 
    const handlequantityChange = (e) => {
        setQuantity(e.target.value)
    }

    const handleCommentChange = (e) => {
        setComment(e.target.value)
    }

    const handlePayment = (e) => {
        setPayment(e.target.value)
    }

    const handleShippingChange = (e) => {
        setShipping(e.target.value)
    }

    return (<div>
        <input value={name} onChange={handleNameChange} />
        <p>Name : {name}</p>

        <input value={quantity} onChange={handlequantityChange} type="number"/>
        <p>Quantity : {quantity}</p>

        <textarea placeholder="Enter text here" onChange={handleCommentChange} value={comment} />
        <p>Comment: {comment}</p>

        <select value={payment} onChange={handlePayment}> 
            <option value="">Select an option</option>
            <option value="Visa">Visa</option>
            <option value="MasterCard">MasterCard</option>
            <option value="Giftcard">GiftCard</option>
        </select>
        <p>Payment: {payment}</p>

        <label>
            <input type="radio" value="Pickup" checked={shipping === "Pickup"} onChange={handleShippingChange}/>
            Pick up
        </label>

        <label>
            <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={handleShippingChange} />
            Delivery
            </label>
        <p>Shipping : {shipping}</p>
    </div>)
}

export default MyComponent