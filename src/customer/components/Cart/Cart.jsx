import React from "react";
import CartItem from "./CartItem";
import { Button, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate=useNavigate();
  const handleCheckout=()=>{
    navigate("/checkout?step=2")
  }
  return (
    <div>
      <div className="lg:grid grid-cols-3 lg:px-16 relative">
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
            <Button onClick={handleCheckout}
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
  );
};

export default Cart;
