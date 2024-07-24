import React from 'react'
import AddressCard from "../AddressCard/AddressCard";
import { Button } from '@mui/material'
import CartItem from '../Cart/CartItem'

const OrderSummary = () => {
  return (
    <div>
        <div className='p-5 shadow-lg rounded-s-md border'>
            <AddressCard/>

        </div>
        <div>
      <div className="lg:grid grid-cols-3 relative">
        <div className="col-span-2">
          {[1,1,1,1].map((item)=><CartItem />)}
        </div>
        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
          <div className="border">
            <p className="flex items-start uppercase font-bold opacity-60 pb-4">Price Details</p>
            <hr />  
            <div className="space-y-3 font-semibold mb-10">
                <div className="flex justify-between pt-2 text-black">
                    <span>Price</span>
                    <span>$4465</span>
                </div>

                <div className="flex justify-between pt-2 text-green-600">
                    <span>Discount</span>
                    <span>-$4465</span>
                </div>

                <div className="flex justify-between pt-2 text-green-600">
                    <span>Delivery Charge</span>
                    <span>FREE</span>
                </div>

                <div className="flex justify-between pt-2 text-green-600">
                    <span>Total</span>
                    <span>$999999</span>
                </div>

            </div>
            <Button
              sx={{ mt: 2, bgcolor: "RGB(145,85,253)" }}
              size="large"
              variant="contained"
            >
              Check Out
            </Button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default OrderSummary