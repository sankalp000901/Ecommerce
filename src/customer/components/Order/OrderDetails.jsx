import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTracker from './OrderTracker'
import { Box, Grid } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import { StarIcon } from '@heroicons/react/24/outline'
import StarBorderIcon from '@mui/icons-material/StarBorder';

const OrderDetails = () => {
  return (
    <div className='px5 lg:px-20'>
        <div>
<h1 className='font-bold text-xl py-7 '>Delivery Address</h1>
        <AddressCard/>
        </div>
        <div className='py-20'>
            <OrderTracker activeStep={3}/>
        </div>

        <Grid className='space-x-5 'container>

{[1,1,1,1,1].map((item) => <Grid item container className='shadow-xl rounded-md p-5 border' sx={{alignItems:"center", justifyContent:"space-between"}}>

<Grid item sx={6}>
  <div className='flex items-center space-x-4'>
    <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://m.media-amazon.com/images/I/71gKcqlFfnL._AC_SX569_.jpg" alt="" />
  </div>
  <div className='space-y-1 ml-5'>
    <p className='flex items-start'>Lee womens Wrinkle Free Relaxed Fit Straight Leg Pant</p>
    <p className='space-x-5 flex items-start'><span> Color: Pink Size: M </span></p>
    <p className='flex items-start'> Seller: Lee Store</p>
    <p className='flex items-start' >$1999</p>
  </div>

</Grid>
<Grid item>

  <Box sx={{color:deepPurple[500]}}>

    <StarBorderIcon sx={{fontSize:"2rem"}} className='px-2 text-5xl'/>
    <span>Rate & Review Product</span>

  </Box>

</Grid>

</Grid>)}

          

        </Grid>
    </div>
  )
}

export default OrderDetails