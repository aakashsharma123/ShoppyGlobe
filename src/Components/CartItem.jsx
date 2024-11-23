import React from 'react'
import { useDispatch } from 'react-redux';
import { AddCartItem, RemoveCartItem , DeleteCartItem} from '../utlies/productSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons/faDumbbell';

// Represents a single item in the cart
const CartItem = ({ CartItems, index }) => {

  const dispatch = useDispatch();

  console.log(CartItem)


  return (
    <>

      <tr className='cartitem-container w-full '>
        <td className='text-center border-2 '>{index + 1}. ({CartItems.quantity} Qty) </td>
        <td className='border-2'><img className='w-52 mx-auto ' src={CartItems.images[0]} alt="" /></td>
        <td className='text-center border-2'>{CartItems.title}</td>
        <td className='text-center border-2'>{CartItems.price}</td>
        <td className='border-2 text-center'>
          <div className='flex justify-center items-center'>
            <button onClick={() => dispatch (DeleteCartItem (CartItems))} className='border border-red-400 px-4 py-2 hover:bg-red-300 hover:text-white transition-all duration-200'><FontAwesomeIcon icon={faTrash} /></button>
            <button onClick={() => dispatch(AddCartItem(CartItems))} className='ml-5 border border-sky-400 px-4 py-2 hover:bg-sky-500 hover:text-white transition-all duration-200'><FontAwesomeIcon icon={faPlus} /></button>
            <button onClick={() => dispatch(RemoveCartItem(CartItems))} className='ml-5 border border-amber-400 px-4 py-2 hover:bg-amber-500 hover:text-white transition-all duration-200'><FontAwesomeIcon icon={faMinus} /></button>
          </div>
        </td>
      </tr>

    </>
  )
}
export default CartItem


















// <div>
//                 <img className='w-52 mx-auto' src = {CartItems.images[0]}  alt="" />
//             </div>

//             <div>
//                 <p>{CartItems.title}</p>
//                 <p>{CartItems.description}</p>

//             </div>

//             <div>
//             <p>$ {CartItems.price}</p>
//               <div className=''>
//                 <button onClick={() => dispatch(AddCartItem (CartItems) )} className='text-3xl'><FontAwesomeIcon icon={faPlus}/></button>
//                 <button onClick={() => dispatch(RemoveCartItem(CartItems))} className='text-3xl ml-5'><FontAwesomeIcon icon={faMinus}/></button>
//               </div>

//               <div>
//               <p><span className='font-extrabold text-red-400'>Qunatity added : </span>{CartItems.quantity}</p>
//                   <p><span className='font-extrabold text-sky-300'>Qunatity left : </span>{CartItems.minimumOrderQuantity}</p>
//               </div>
//             </div>