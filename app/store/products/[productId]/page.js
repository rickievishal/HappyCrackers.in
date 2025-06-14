"use client"
import { AnimatePresence, motion } from 'framer-motion'
import { RiGovernmentFill } from "react-icons/ri";
import Image from 'next/image'
import { GiFireworkRocket } from "react-icons/gi";
import React, { use, useEffect, useState } from 'react'
import { TbLicense } from "react-icons/tb";
import image from "../../../assets/logo/product.jpg"
import OfferTag from '@/app/componets/advertisment-components/OfferTag'
import { IoAddSharp, IoCloseOutline } from 'react-icons/io5'
import { TfiMinus } from 'react-icons/tfi'
import { FaChildren } from "react-icons/fa6";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import AdMarquee from '@/app/componets/advertisment-components/AdMarquee'
import ProductCard from '@/app/componets/cart-componets/ProductCard'
import ProuductPageImageZoom from '@/app/componets/cart-componets/ProuductPageImageZoom'
import upiLogo from "../../../assets/logo/upilogo.jpg"
import GpayLogo from "../../../assets/logo/GooglePayLogo.png"
import PhonepeLogo from "../../../assets/logo/PhonepeLogo.png"
import ProductGallery from '@/app/componets/store-components/ProductGallery'
import Link from 'next/link'
import { useCartDetails } from '@/lib/reduxStore/store'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, incrementQuantity } from '@/lib/reduxStore/Reducers'
import axios from 'axios';

const page = ({params}) => {

  const unwrappedParams = use(params)
  const productId = unwrappedParams.productId
  const dispatch = useDispatch();
  console.log(productId)
  const [productQuantity, setProductQuantity] = useState(1)
  const [isImageClicked, setIsImageClicked] = useState(false)
  const [productPageData, setProductPageData] = useState({})
  const [content,setContent] =useState("")
    useEffect(() => {
    axios.get("http://localhost:3000/products")
      .then((response) => {

        const products = response.data;
        const product = products.find(p => p.productId === productId);
        if (product) {
          console.log(product)
          setProductPageData(product);
        }
      })
      .catch((error) => {
        console.error("Failed to fetch products:", error);
      });
  }, [productId]);
  const increment = () => {
    if(productQuantity < 11){
      setProductQuantity(productQuantity+1)
    }
  }
useEffect(() => {
  if (productPageData && productPageData.productContent) {
    setContent(productPageData.productContent);
  }
}, [productPageData]);


const dispatchAdd = () =>{
   dispatch(addToCart(productPageData));
}
 let productContent = [{...productPageData.productContent}]



  const cartItems = useSelector((state) => state.cartAction.cartItems);
  const totalItems = useSelector((state) => state.cartAction.totalItems);
  console.log(cartItems,totalItems)
  return (<>
    <div className='w-full py-[50px] px-4 sm:px-12 relative'>
        <AnimatePresence>
        {
        isImageClicked && (<motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:.2, ease:"circInOut"}}  className='fixed top-0 left-0 w-screen h-screen  z-40 flex justify-center items-center '>
             <div className='w-screen h-screen fixed bg-[#00000071]'>
              </div>
          <div className='max-w-3xl w-[85vw] h-[calc(50vh+10vw)] bg-white relative border-[1px] border-black'>
              <div className='w-[30px] h-[30px]  absolute right-0 top-0 -translate-y-[100%] translate-x-[100%]  flex justify-center items-center'  onClick={()=>{setIsImageClicked(false)}}>
                  <IoCloseOutline className='text-white text-5xl'/>
              </div>
              <div className='w-full h-full overflow-hidden relative'>
                    <img src={image.src} className='h-full w-full object-cover'/>
                    <div className='w-full h-[30px] absolute bottom-0 left-0 bg-white flex justify-between items-center px-4'>
                      <p className='text-sm text-black'>
                        {productPageData.productName}
                      </p><p className='text-sm text-black'>
                        2 qty
                      </p>
                    </div>
              </div>
          </div>
          </motion.div>)
      }
        </AnimatePresence>
        <div className="max-w-7xl  mx-auto flex flex-col sm:grid grid-cols-12 ">
            <div className='col-span-6  pb-4 relative '>
                     <div className='sticky top-[100px] flex flex-col justify-center items-start'>
                     <ProductGallery data={productPageData.productImages || ["ASfdas","ASDF"]} />
                      <p className='text-xs tracking-tighter py-2'>
                        The images are for illustration purposes only actual product may be different.
                      </p>
                     </div>
            </div>
            <div className='col-span-6 flex flex-col  py-5 px-4 lg:px-[50px]'>
                <div className='flex justify-between items-center'>
                  <p className='text-sm tracking-tighter'>
                    Kids Bundle
                  </p>
                  <OfferTag OfferPercentage={56}/>
                </div>
                <div className='flex flex-col my-4'>
                  <h1 className='text-xl tracking-tighter'>
                    {productPageData.productName}
                  </h1>
                  <div className='flex flex-col mt-2'>
                    <p className='line-through text-sm font-normal text-gray-900'>
                    {productPageData.productPrice} ₹
                    </p>
                   <div className='flex items-center'>
                   <p className=' text-xl font-normal text-gray-900 mr-2'>
                    {productPageData.productCost} ₹
                    </p>
                    <p className='text-xs text-gray-700 tracking-tighter'>
                      Exclusive of Gst.
                    </p>
                   </div>
                  </div>
                  <div className='flex items-center my-6'>
                    {/* <div className='flex flex-col'>
                      <p className='text-sm tracking-tighter'>
                        Quantity
                      </p>
                      <div className='flex items-center justify-center pt-2'>
                      <div className='w-[25px] h-[25px] border-[1px] border-black flex justify-center items-center active:scale-90' >
                            <TfiMinus className='text-black'  />
                      </div>
                      <div className='px-4'>
                          <p className='text-xs text-center'>
                            {productQuantity}
                          </p>
                      </div>
                      <div className='w-[25px] h-[25px] border-[1px] border-black flex justify-center items-center active:scale-90' onClick={increment}>
                          <IoAddSharp className='text-black'  />
                      </div>
                    </div>
                    </div> */}
                  </div>
                  <div className='flex flex-col'>
                    <h2 className='tracking-tighter'>
                      Product Description
                    </h2>
                    <p className='text-xs'>
                        {productPageData.productDescription}
                    </p>
                  </div>
                  
                </div>
                <div className='w-full flex gap-2'>
                <Link className='w-full' href={"/store/checkout"}>
                <button className='w-full text-sm tracking-tighter py-2 px-5 h-[50px] bg-black text-white my-2'>
                          Buy Now
                </button>
                </Link>
                <button className='w-full text-sm tracking-tighter py-2 px-5 h-[50px] bg-white text-black border-[1px] border-black my-2' onClick={dispatchAdd}>
                          Add to Cart
                </button>
                </div>
                <div className='w-full flex justify-start items-center py-4 tracking-tighter'>
                    <p>
                      What you get in the Bundle.
                    </p>
                </div>
                <div className='z-10'>
                  
                <Table className="tracking-tighter border-[1px] border-black">
                    <TableCaption className="text-sm tracking-tighter">Contents of the Bundle</TableCaption>
                    <TableHeader className="bg-black ">
                      <TableRow className="hover:bg-black">
                        <TableHead className="w-[50px] text-white">No</TableHead>
                        <TableHead className=" text-white">Content</TableHead>
                        <TableHead className="text-white text-right">Quantity</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {/* <TableRow onClick={()=>{
                        setIsImageClicked(true)
                      }}>
                        <TableCell className="font-medium">1</TableCell>
                        <TableCell>Duos 2023</TableCell>
                        <TableCell className="text-right">3</TableCell>
                      </TableRow> */}
                      {Array.isArray(productPageData.productContent) && productPageData.productContent.map((content, index) => (
                          <TableRow key={index}>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>{content.item}</TableCell>
                            <TableCell className="text-right">{content.quantity}</TableCell>
                          </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                </div>
                <div className='w-full py-4 mt-4'>
                      <div className='w-full flex items-center justify-center'>
                          <h2 className='tracking-tighter'>
                            Safety and precautions
                          </h2>
                      </div>
                      <div className='full flex flex-col mt-4 leading-[48px]'>
                          <div className='w-full h-[180px] bg-black flex items-center justify-between text-white gap-x-[40px] px-8'>
                                <div>
                                      <RiGovernmentFill  className='text-[48px] text-[#BBFF27]'/>
                                </div>
                                <div className='text-left text-xl tracking-[-2px] leading-[20px]'>
                                    Make sure you follow all the local rules by your Government.
                                </div>
                          </div>
                          <div className='w-full h-[180px] bg-black flex items-center justify-between text-white gap-x-[40px] px-8 border-t-[1px] border-[#BBFF27]'>
                                <div>
                                      <FaChildren   className='text-[48px] text-[#BBFF27] leading-[20px]'/>
                                </div>
                                <div className='text-left text-xl tracking-[-2px]'>
                                    A responsible adult should supervise the children while handling fireworks.
                                </div>
                          </div>
                          <div className='w-full h-[180px] bg-black flex items-center justify-between text-white gap-x-[40px] px-8 border-t-[1px] border-[#BBFF27]'>
                                <div>
                                      <GiFireworkRocket   className='text-[48px] text-[#BBFF27] leading-[20px]'/>
                                </div>
                                <div className='text-left text-xl tracking-[-2px] leading-[20px]'>
                                    Do not experiment with home made crackers. And never relight a crackers that is dead.
                                </div>
                          </div>
                          <div className='w-full h-[180px] bg-black flex items-center justify-between text-white gap-x-[40px] px-8 border-t-[1px] border-[#BBFF27]'>
                                <div>
                                      <TbLicense className='text-[48px] text-[#BBFF27] leading-[20px]'/>
                                </div>
                                <div className='text-left text-xl tracking-[-2px]'>
                                    Always purchase the fireworks only from registered and licensed retailers.
                                </div>
                          </div>
                      </div>
                </div>
                <div className='w-full py-4'>
                      <div className='w-full flex items-center justify-center'>
                          <h2 className='tracking-tighter'>
                            Hustle free Experience 
                          </h2>
                      </div>
                      <div className='flex flex-wrap gap-x-2 gap-y-2 items-center justify-center mt-2'>
                            <div className='w-[100px] h-[50px] border-[1px] border-black '>
                                  <Image src={upiLogo} className='w-full h-full object-cover' alt='upi' />
                            </div> <div className='w-[100px] h-[50px] border-[1px] border-black '>
                                  <Image src={GpayLogo} className='w-full object-cover px-2' alt='upi' />
                            </div> <div className='w-[100px] h-[50px] border-[1px] border-black '>
                                  <Image src={PhonepeLogo} className='w-full h-full object-cover' alt='upi' />
                            </div>
                      </div>
                </div>
            </div>  
        </div>
    </div>
    <div className='w-full'><AdMarquee/></div>
    <div className='max-w-5xl mx-auto py-[50px]'>
          <div className='w-full flex flex-col justify-center items-center'>
              <h1 className='text-2xl text-center tracking-tighter px-4'>
                Other products that you might as well like.
              </h1>
              <div className='flex flex-wrap gap-[5px] justify-center items-center mt-[50px] gap-y-5'>
                  <ProductCard/>
                  <ProductCard/>
                  <ProductCard/>
                  <ProductCard/>
                  <ProductCard/>
                  <ProductCard/>
                  <ProductCard/>
                  <ProductCard/>
                  <ProductCard/>
                  <ProductCard/>
                  <ProductCard/>
                  <ProductCard/>

              </div>
          </div>
    </div></>
  )
}

export default page