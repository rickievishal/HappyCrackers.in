"use client"
import BrandHeader from '@/app/componets/checkout-components/BrandHeader'
import ButtonComp from '@/app/componets/store-components/ButtonComp'
import CitySelector from '@/app/componets/store-components/CitySelector'
import InputComp from '@/app/componets/store-components/InputComp'
import { Input } from '@/components/ui/input'
import { Table, TableCaption, TableHead, TableHeader, TableRow,TableBody, TableCell } from '@/components/ui/table'
import { useCartDetails } from '@/lib/reduxStore/store'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const page = () => {
    const [city, setcity] = useState("not selected")
    const [name, setName] = useState("")
    const [Address, setAddress] = useState("")
    const [number, setNumber] = useState("")
    const [cartProducts, setCartProducts] = useState([])
    const [SubTotal, setSubTotal] = useState(0)
    const [netPrice,setNetPrice] = useState(0)
    const handleChangeName =(e)=>{
        setName(e.target.value)
    }
    const handleChangeAddress =(e)=>{
        setAddress(e.target.value)
    }
    const handleChangePhone =(e)=>{
        setNumber(e.target.value)
    }

    const handleCityselect = (city) => {
        setcity(city)
        console.log("city selected")
    } 
    const cartItems = useSelector((state) => state.cartAction.cartItems);
    const totalItems = useSelector((state) => state.cartAction.totalItems);
   
    useEffect(() => {
  // Set cart products directly from Redux instead of hook
  setCartProducts(cartItems);

  const calculateTotal = () => {
    if (cartItems.length) {
      let subTotalTemp = 0;
      let netTotalTemp = 0;

      cartItems.forEach((product) => {
        subTotalTemp += product.quantity * product.productCost;
        netTotalTemp += product.quantity * product.productPrice;
      });

      setSubTotal(subTotalTemp);
      setNetPrice(netTotalTemp);

      createOrder();
    }
  };
  calculateTotal();
}, [totalItems]);

  const createOrder = () => {
        if(name.length && Address.length && number && city){
          const products = cartItems.map((product) => ({
          productId: product.productId,
          productName: product.productName,
          productCost: product.productCost,
          productPrice: product.productPrice,
          quantity: product.quantity,
          productContent : product.productContent
        }));
        const orderTotal = SubTotal+SubTotal*.18
        console.log(SubTotal)
        const order = {
          userDetails: {
            userName: name,
            phoneNumber: number,
            userCity: city,
            userAddress: Address,
          },
          orderDetails: {
            orderTotal ,
            orderContent: products,
            createdAt : new Date().toString(),
            orderStatus : {
              pending : true,
              closed : false
            }
          },
        };

        console.log("Order Object:", order);
        return order
        }
  };
  const uploadOrder = async () => {
    console.log("uploading")

      const payload = createOrder()
      try{
      const res = await axios.post("http://localhost:3000/order",payload, {
      headers: {
        "Content-Type": "application/json"
      }
    })
      console.log(res.data.msg || "done")
      }
      catch(error) {
        console.error("Error while posting",error)
      }
    
  }

  return (
    <div className='py-[50px] sm:py-[50px] max-w-6xl mx-auto flex flex-col'>
       <div className='w-full'>
        <BrandHeader/>
       </div>
       <div className='w-full flex flex-col justify-center items-center py-[50px]'>
            <h2 className='text-lg tracking-tighter'>
                Your order summary
            </h2>
            <div className='w-full sm:max-w-3xl lg:max-w-7xl flex flex-col lg:grid grid-cols-8 justify-center items-center sm:justify-start sm:items-start px-4 py-8 gap-8'>
                    <div className='w-full  sm:col-span-5'>
                            <Table className="tracking-tighter border-[1px] border-black">
                                                {/* <TableCaption className="text-sm tracking-tighter">Contents of the Bundle</TableCaption> */}
                                                <TableHeader className="bg-black text-xs lg:text-sm">
                                                  <TableRow className="hover:bg-black">
                                                    <TableHead className="text-white w-[50px]">Code</TableHead>
                                                    <TableHead className="text-white max-w-[100px]">Product</TableHead>
                                                    <TableHead className="text-white w-[50px]">Quantity</TableHead>
                                                    <TableHead className="text-white text-right">Price</TableHead>
                                                  </TableRow>
                                                </TableHeader>
                                                <TableBody className="text-xs sm:text-sm" >
                                                  {
                                                    cartProducts.map((product,index) => (
                                                      
                                                      <TableRow key={index} >
                                                          <TableCell className="font-medium w-[100px]">{index+1}</TableCell>
                                                          <TableCell className="max-w-[50px]">{product.productName}</TableCell>
                                                          <TableCell className="w-[50px] text-center">{product.quantity}</TableCell>
                                                          <TableCell className="text-right">₹ {product.productCost}</TableCell>
                                                      </TableRow>
                                                      
                                                    ))
                                                  }


                                                  <TableRow className=" text-black hover:bg-white  p-2" key={"offer"}  >
                                                    <TableCell colSpan={3} className="font-medium text-xs py-1 text-right">SubTotal</TableCell>
                                                    <TableCell colSpan={1} className="text-right py-1 w-[200px]">₹ {SubTotal}</TableCell>
                                                  </TableRow>
                                                  <TableRow className=" text-black hover:bg-white  p-2 border-b-black" key={"tax"} >
                                                    <TableCell colSpan={3} className="font-medium text-xs py-1 text-right">{"Gst  (18%)"}</TableCell>
                                                    <TableCell colSpan={1} className="text-right py-1 w-[200px]">₹ {Math.round(SubTotal*.18)}</TableCell>
                                                  </TableRow>
                                                  <TableRow className="bg-[#BBFF27] text-black hover:bg-[#BBFF27] border-black  p-2" key={"save"}  >
                                                    <TableCell colSpan={3} className="font-medium text-xs py-1 text-right">You saved</TableCell>
                                                    <TableCell colSpan={1} className="text-right py-1 w-[200px]">₹ {netPrice-SubTotal}</TableCell>
                                                  </TableRow>
                                                  <TableRow className="bg-black text-white hover:bg-black" key={"total"} >
                                                    <TableCell colSpan={3} className="font-medium text-lg lg:text-xl text-right">Total</TableCell>
                                                    <TableCell colSpan={1} className="text-right text-lg lg:text-xl w-[200px]">₹ {Math.round(SubTotal+SubTotal*.18)}</TableCell>
                                                  </TableRow>
                                                </TableBody>
                            </Table>
                    </div>
                    <div className='w-full col-span-3 gap-y-2 flex flex-col'>
                    <div className='w-full'>
                        <h1 className='text-xl lg:text-lg  pb-2'>
                            Order Details
                        </h1>
                        <div>
                            <div className='flex flex-col justify-start '>
                                <InputComp label={"Name"} placeHolder={"Heisenberg T"} onChange={handleChangeName} className='w-full max-w-[270px]' value={name}/>
                                <InputComp label={"Phone"} placeHolder={"+91 XXXXX XXXXX"} onChange={handleChangePhone} type={"number"} className='max-w-[250px]' value={number}/>
                                <InputComp label={"Address"} placeHolder={"Street/Town/landmark"} onChange={handleChangeAddress} type={""} className='max-w-xl' value={Address}/>
                                <CitySelector onCitySelect={handleCityselect} className={"max-w-lg "}/>
                                <ButtonComp className={"mt-4 py-4"} onClick={uploadOrder} buttonName={"Place your enquiry"}/>
                            </div>
                        </div>
                    </div>
                    <div className='w-full p-4 border-[1px] border-black tracking-tighter'>
                        <h1 className='text-sm lg:text-lg border-b-[1px] pb-2'>
                            Estimated Cost
                        </h1>
                        <div>
                            <div className='flex flex-col gap-y-2 justify-start py-4'>
                               <div className='grid grid-cols-2 text-sm'>
                                  <div className='col-span-1 flex flex-row justify-start items-center'>
                                      SubTotal
                                  </div>
                                  <div className='col-span-1 flex justify-end items-center '>
                                   ₹{SubTotal}
                                  </div>
                               </div>
                               <div className='grid grid-cols-2 text-sm'>
                                  <div className='col-span-1 flex flex-row justify-start items-center'>
                                      Gst {"(18%)"}
                                  </div>
                                  <div className='col-span-1 flex justify-end items-center '>
                                  ₹{ Math.round(SubTotal*.18)}
                                  </div>
                               </div>
                               <div className='grid grid-cols-2 text-lg font-medium'>
                                  <div className='col-span-1 flex flex-row justify-start items-center'>
                                      Total
                                  </div>
                                  <div className='col-span-1 flex justify-end items-center '>
                                  ₹{Math.round(SubTotal+SubTotal*.18)}
                                  </div>
                               </div>
                            </div>
                        </div>
                    </div>
                    </div>
            </div>
       </div>
    </div>
  )
}

export default page