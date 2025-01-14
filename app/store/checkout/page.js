"use client"
import BrandHeader from '@/app/componets/checkout-components/BrandHeader'
import ButtonComp from '@/app/componets/store-components/ButtonComp'
import CitySelector from '@/app/componets/store-components/CitySelector'
import InputComp from '@/app/componets/store-components/InputComp'
import { Input } from '@/components/ui/input'
import { Table, TableCaption, TableHead, TableHeader, TableRow,TableBody, TableCell } from '@/components/ui/table'
import React, { useState } from 'react'

const page = () => {
    const [city, setcity] = useState("not selected")
    const [name, setName] = useState("")
    const [Address, setAddress] = useState("")
    const [number, setNumber] = useState("")
    const handleChangeName =(value)=>{
        setName(value)
    }
    const handleChangeAddress =(value)=>{
        setAddress(value)
    }
    const handleChangePhone =(value)=>{
        setNumber(value)
    }

    const handleCityselect = (city) => {
        setcity(city)
        console.log("city selected")
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
            <div className='w-full flex flex-col sm:grid grid-cols-8 justify-center items-center sm:justify-start sm:items-start px-4 py-8 gap-8'>
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
                                                <TableBody className="text-xs sm:text-sm">
                                                  <TableRow >
                                                    <TableCell className="font-medium w-[100px]">1</TableCell>
                                                    <TableCell className="max-w-[50px]">Duos 2023</TableCell>
                                                    <TableCell className="w-[50px] text-center">3</TableCell>
                                                    <TableCell className="text-right">₹ 30000</TableCell>
                                                  </TableRow>


                                                  <TableRow className=" text-black hover:bg-white border-none p-2"  >
                                                    <TableCell colSpan={3} className="font-medium text-xs py-1 text-right">{"Gst  (18%)"}</TableCell>
                                                    <TableCell colSpan={1} className="text-right py-1 w-[200px]">₹ 30000</TableCell>
                                                  </TableRow>
                                                  <TableRow className=" text-black hover:bg-white border-b-black p-2"  >
                                                    <TableCell colSpan={3} className="font-medium text-xs py-1 text-right">Offer</TableCell>
                                                    <TableCell colSpan={1} className="text-right py-1 w-[200px]">₹ 30000</TableCell>
                                                  </TableRow>
                                                  <TableRow className="bg-[#BBFF27] text-black hover:bg-[#BBFF27] border-black  p-2"  >
                                                    <TableCell colSpan={3} className="font-medium text-xs py-1 text-right">You saved</TableCell>
                                                    <TableCell colSpan={1} className="text-right py-1 w-[200px]">₹ 30000</TableCell>
                                                  </TableRow>
                                                  <TableRow className="bg-black text-white hover:bg-black" >
                                                    <TableCell colSpan={3} className="font-medium text-lg lg:text-xl text-right">Total</TableCell>
                                                    <TableCell colSpan={1} className="text-right text-lg lg:text-xl w-[200px]">₹ 30000</TableCell>
                                                  </TableRow>
                                                </TableBody>
                            </Table>
                    </div>
                    <div className='w-full col-span-3'>
                    <div className='w-full p-4 border-[1px] border-black'>
                        <h1 className='text-sm lg:text-lg border-b-[1px] pb-2'>
                            Order Details
                        </h1>
                        <div>
                            <div className='flex flex-col justify-start py-4'>
                                <InputComp label={"Name"} placeHolder={"Heisenberg T"} onChange={handleChangeName} className='w-full max-w-[270px]' value={name}/>
                                <InputComp label={"Phone"} placeHolder={"+91 XXXXX XXXXX"} onChange={handleChangePhone} type={"number"} className='max-w-[250px]' value={number}/>
                                <InputComp label={"Address"} placeHolder={"Street/Town/landmark"} onChange={handleChangeAddress} type={""} className='max-w-xl' value={Address}/>
                                <CitySelector onCitySelect={handleCityselect} className={"max-w-lg "}/>
                                <ButtonComp className={"mt-4 py-4"} buttonName={"Place your enquiry"}/>
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