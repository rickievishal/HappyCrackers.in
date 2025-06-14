"use client"
import React, { useEffect, useState } from 'react'
import { Table, TableCaption, TableHead, TableHeader, TableRow,TableBody, TableCell } from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { IoMdClose } from "react-icons/io";
import axios from 'axios'
import Link from 'next/link';
const page = () => {
  const [orders, setOrders] = useState([])
  const [isOrderWindowOpen,setIsOrderWindowOpen] = useState(false)
  const [curretOrder,setCurrentOrder] = useState(null)
  const [activeOrder,setActiveOrder] = useState([])
   const getOrders = async() => {
        try {
          const res = await axios.get("http://localhost:3000/orders")
          console.log(res.data)
          setOrders(res.data)
        }catch(error) {
          console.log(error)
        }
    }
  useEffect(() => {
   
    getOrders()
    
  }, [])
  const handlePending = async(orderId) =>{
   try{
     await axios.post('http://localhost:3000/orders/update-status/close', {
        orderId,
    });
    console.log("updated")
   }catch(err){
    console.log(err)
   }
    getOrders()
  }
  const handleClose = async(orderId) => {
   try{
     await axios.post("http://localhost:3000/orders/update-status/pending",{
      orderId,
    })
   }catch(err) {
    console.log(err)
   }
    getOrders()
  }
  const deleteOrder = async (orderId)=> {
    await axios.post("http://localhost:3000/orders/delete",{orderId})
    getOrders()
  }
  const [iscontentViewHovered,setIscontentViewHovered] = useState()
  return (
    <div className='w-full relative'>
      {
        isOrderWindowOpen && (
          <div className='w-screen h-screen fixed left-0 top-0  z-40 flex justify-center items-center'>
              <div className='w-full h-full max-w-xl lg:max-h-[80%] border-[1px] border-black bg-white p-2 relative overflow-auto'>
                  <div className='w-[30px] h-[30px] bg-white border-[1px]  border-black rounded-full flex justify-center items-center absolute right-4 top-4 hover:cursor-pointer hover:bg-gray-200 ' onClick={() => {
                    setIsOrderWindowOpen(!isOrderWindowOpen)
                  }}>
                    <IoMdClose />
                  </div>
                  <div className='py-2'>
                        <h2 className='text-black text-xl'>
                          Order
                        </h2>
                  </div>
                  <div className='w-full h-full '>
                     <Table className="w-full">
                        <TableHeader>
                            <TableRow>
                              <TableHead>
                                sno
                              </TableHead>
                              
                              <TableHead>
                                ProductName
                              </TableHead>
                              <TableHead>
                                Quantity
                              </TableHead>
                              <TableHead>
                                ProductPrice
                              </TableHead>
                              <TableHead>
                                ProductCost
                              </TableHead>
                              
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {
                              activeOrder.map((product,index)=>(
                                <React.Fragment key={index}>
                                  <TableRow>
                                    <TableCell>
                                      {index+1}
                                    </TableCell>
                                    <TableCell>
                                      <Link href={`/store/products/${product.productId}`}>{product.productName}</Link>
                                    </TableCell>
                                    <TableCell>
                                      {product.quantity}
                                    </TableCell>
                                    <TableCell>
                                        ₹{product.productPrice}
                                    </TableCell>
                                    <TableCell>
                                        ₹{product.productCost}
                                    </TableCell>
                                  </TableRow>
                                  <TableRow className="w-full border-b-[1px] border-black">
                                    <TableCell className="border-b-[1px] border-black" colSpan={5}>
                                      <Table >
                                        <TableHeader>
                                          <TableRow>
                                          <TableHead>
                                            Content
                                          </TableHead>
                                          <TableHead>
                                            quantity
                                          </TableHead>
                                          </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                          {
                                            product.productContent.map((item,index)=>(
                                              <TableRow key={index}>
                                                <TableCell>
                                                      <p>
                                                        {item.item}
                                                      </p>
                                                </TableCell>
                                                <TableCell>
                                                      <p>
                                                        {item.quantity}
                                                      </p>
                                                </TableCell>
                                              </TableRow>
                                            ))
                                          }
                                        </TableBody>
                                      </Table>
                                    </TableCell>
                                  </TableRow>
                                </React.Fragment>
                              ))
                            }
                        </TableBody>
                      </Table>
                  </div>
              </div>
          </div>
        )
      }
      <div className='w-full min-h-screen max-w-7xl mx-auto px-4 py-8 flex flex-col relative'>
        
        <div className='flex justify-start items-start py-4'>
          <h1 className='text-2xl '>
            Orders
          </h1>
        </div>
        <Table className="w-full">
          <TableHeader>
              <TableRow>
                <TableHead>
                  ID
                </TableHead>
                <TableHead>
                  createdAt
                </TableHead>
                 <TableHead>
                  Name
                </TableHead>
                <TableHead>
                  PhoneNumber
                </TableHead>
                <TableHead>
                  Payable Amount
                </TableHead>
                <TableHead>
                  Order Status
                </TableHead>
                <TableHead>
                  View order
                </TableHead>
              </TableRow>
          </TableHeader>
          <TableBody>
              {
                orders.map((order,index) => (
                  <React.Fragment key={index}>
                    
                    <TableRow>
                      <TableCell>
                        {index+1}
                      </TableCell>
                      <TableCell>
                        {order.orderDetails.createdAt} 
                      </TableCell>
                      <TableCell>
                        
                        {order.userDetails.userName}
                      </TableCell>
                      <TableCell>
                        {order.userDetails.phoneNumber}
                      </TableCell>
                      <TableCell>
                        ₹{order.orderDetails.orderTotal}
                      </TableCell>
                      <TableCell>
                         {
                          order.orderDetails.orderStatus.pending && (
                             <button className='px-4 py-1 bg-green-500 rounded-lg hover:cursor-pointer' onClick={()=>handlePending(order._id)}>
                              Pending
                            </button>
                          )
                         }
                         {
                          order.orderDetails.orderStatus.closed && (
                            <button className='px-4 py-1 bg-red-500 rounded-lg hover:cursor-pointer' onClick={()=>handleClose(order._id)}>
                              Closed
                            </button>
                          )
                         }
                      </TableCell>
                      <TableCell>
                        <p className='underline text-blue-500 hover:cursor-pointer' onClick={()=>{
                          setActiveOrder(order.orderDetails.orderContent)
                          console.log(order.orderDetails.orderContent)
                          setIsOrderWindowOpen(true)
                        }}>View</p>

                      </TableCell>
                    </TableRow>

                  </React.Fragment>
                ))
              }
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default page