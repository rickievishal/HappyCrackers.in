"use client";
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { VscMenu } from "react-icons/vsc";
import Link from 'next/link';
import logo from "./assets/logo/happycrackershorizontal.png";
import { PiBagThin } from "react-icons/pi";
import { AnimatePresence, easeIn, motion } from 'framer-motion';
import { IoCloseOutline } from "react-icons/io5";
import CartProduct from './componets/cart-componets/CartProduct';
import { useCartDetails } from '@/lib/reduxStore/store';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '@/lib/reduxStore/Reducers';
import { Button } from '@/components/ui/button';
import { GoArrowRight } from 'react-icons/go';

export const Header = () => {
    const [iscartClicked, IscartClicked] = useState(false);
    const [ismenuClicked, setIsmenuClicked] = useState(false);
    const [cartProducts, setCartProducts] = useState([])
    const [SubTotal, setSubTotal] = useState(0)
    const [netPrice,setNetPrice] = useState(0)
    const dispatch = useDispatch()
    
    const cartItems = useSelector((state) => state.cartAction.cartItems);
    const totalItems = useSelector((state) => state.cartAction.totalItems);
   
    useEffect(() => {
        setCartProducts(useCartDetails().cartItems)
         const calculateTotal = () =>{
        if(cartItems.length){
            console.log(cartItems)
            console.log(totalItems)
            let total = 0 
            cartItems.map((product)=>{
                total = product.quantity*product.productCost + total
            })
            console.log(total)
            setSubTotal(total)
            total = 0 
            cartItems.map((product)=>{
                total = product.quantity*product.productPrice + total
            })
            setNetPrice(total)
        }
    }
        calculateTotal();
        console.log(SubTotal)
    }, [totalItems])
    const handleCartClick = () => {
        IscartClicked(!iscartClicked);

        // Prevent body scroll when cart is open
        if (!iscartClicked) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    };

    const handleCloseCart = () => {
        IscartClicked(false);
        document.body.style.overflow = "auto"; // Restore body scroll
    };
    const handlemenuClick =()=>{
        setIsmenuClicked(true);
        console.log(ismenuClicked);
        document.body.style.overflow = "hidden";
    }
    const handleCloseMenu = () => {
        setIsmenuClicked(false);
        document.body.style.overflow = "auto";
    }
   
    console.log(cartProducts)
    return (
        <>
            {/* Overlay */}
            <AnimatePresence>
            {ismenuClicked && (
                <motion.div initial={{opacity:0,y:100}} animate={{opacity:1,y:0}} transition={{duration:0.5,ease : "circInOut"}} exit={{opacity:0,y:100}} 
                    className='fixed inset-0 bg-[#FFFFFF] z-50 p-[40px] px-4'
                >
                    <div className='max-w-sm mx-auto flex flex-col justify-center '>
                        <div className='flex flex-col justify-center'>
                        <div className='flex justify-between items-center'>
                            <p className='text-2xl '>
                                Menu
                            </p>
                            <p className='text-4xl' onClick={handleCloseMenu}>
                            <IoCloseOutline/>
                            </p>
                        </div>
                        <ul className='py-4 flex flex-col gap-y-4 '>
                            <li className='border-b-[1px] border-black'>
                                <Link href={'/'} className='text-xl' onClick={handleCloseMenu}>Home</Link>
                            </li>
                            <li className='border-b-[1px] border-black'>
                                <Link href={'/store'} className='text-xl ' onClick={handleCloseMenu}>Store</Link>
                            </li>
                            <li className='border-b-[1px] border-black'>
                                <Link href={'/reach_us'} className='text-xl ' onClick={handleCloseMenu}>Reach us</Link>
                            </li>
                        </ul>
                        </div>
                    </div>  
                </motion.div>
            )}
            </AnimatePresence>
            <AnimatePresence>
            {iscartClicked && (
                <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5,ease : "circInOut"}} exit={{opacity:0}} 
                    className='fixed inset-0 bg-black bg-opacity-50 z-30'
                    onClick={handleCloseCart} // Close cart on clicking overlay
                ></motion.div>
            )}
            </AnimatePresence>
            <AnimatePresence>
            {/* Cart Window */}
            {iscartClicked && (
                <motion.div initial={{x:"100%"}} animate={{x:0}} transition={{duration:0.5,ease : "circInOut"}} exit={{x:"100%"}}
                className='fixed top-0 right-0 w-full sm:w-[450px] h-full bg-white  shadow-lg overflow-y-auto py-[60px] pb-[120px] z-50'>
                    {
                        totalItems != "0" && (
                            <div className='w-full sm:w-[450px]'>
                                <div className='w-full sm:w-[450px] fixed bottom-0  text-white flex flex-col'>
                                    <div className='w-full sm:w-[450px] text-black bg-[#FFFFFF] flex flex-col items-center justify-center gap-y-1 border-t-[1px] border-black text-sm p-2'>
                                        <div className='w-full flex justify-between items-center'>
                                            <p className=''>Net Total</p>
                                            <p className='pl-8'>₹{netPrice}</p>
                                        </div>
                                        <div className='w-full flex justify-between items-center text-green-600'>
                                            <p className=''>You save</p>
                                            <p className='pl-8'>₹{netPrice - SubTotal}</p>
                                        </div>
                                        <div className='w-full flex justify-between items-center text-lg'>
                                            <p className=''>Offer Price</p>
                                            <p className='pl-8'>₹{SubTotal}</p>
                                        </div>
                                        <div className='w-full flex justify-between items-center'>
                                            <p className=''>Tax {"(18%)"}</p>
                                            <p className='pl-8'>₹{Math.round(SubTotal*.18)}</p>
                                        </div>
                                        <div className='w-full flex justify-between items-center text-xl'>
                                            <p className=''>Grand Total</p>
                                            <p className='pl-8'>₹{Math.round(SubTotal+(SubTotal*.18))}</p>
                                        </div>
                                    </div>
                                    <Link href={"/store/checkout"}>
                                        <div className='w-full sm:w-[450px] text-white bg-black flex flex-row  border-t-[1px] border-black text-sm items-center' onClick={handleCloseCart}>
                                            <button className='w-full bg-black text-white active:bg-[#161616] flex justify-center items-center py-4' >
                                                <p className='h-full text-center flex items-center justify-center' >Proceed to checkout</p>
                                            </button>
                                        </div>
                                    </Link>
                                </div>
                            </div> 
                        )
                    }
                    {
                        totalItems == "0" && (
                            <div className='w-full h-full flex flex-col justify-center items-center'>
                                <h1 className='py-4'>
                                    You Bag is empty
                                </h1>
                                <Button>
                                    <Link href={"/store"} className='flex gap-2 items-center justify-center rounded-0'>
                                        Go to store <GoArrowRight className='text-xl' />
                                    </Link>
                                </Button>
                            </div>
                        )
                    }
                    <div className='w-full sm:w-[450px] fixed top-0 bg-[#FFFFFF] p-2 sm:p-4 flex justify-between items-center border-b border-black'>
                        <h2 className='text-lg '>Your Bag</h2>
                        <button onClick={handleCloseCart} className='text-2xl font-bold'>
                        <IoCloseOutline />
                        </button>
                    </div>
                    <div className='p-2 sm:p-4 flex flex-col justify-center items-start gap-y-1'>
                        {/* Cart Content */}
                        {
                            cartItems.map((product) => (
                                <CartProduct data={product} key={product.productId}/>
                            ))
                        }
                        
                    </div>
                </motion.div>
            )}
            </AnimatePresence>
            <nav className="w-full h-[40px] border-b-[1px] border-black lg:px-[50px] flex flex-row justify-between items-center fixed top-0 bg-[#FFFFFF] z-40">
                <div className='px-[20px] w-full lg:max-w-7xl mx-auto flex flex-row justify-between items-center'>
                    <Link href={'/store'}>
                        <div className='w-[150px]'>
                            <Image
                                src={logo}
                                priority
                                width={200}
                                height={60}
                                alt="Logo"
                            />
                        </div>
                    </Link>
                    <div className='flex flex-row'>
                        <ul className='flex-row space-x-10 text-sm hidden lg:flex'>
                            <li><Link href={'/'}>Home</Link></li>
                            <li><Link href={'/store'}>Store</Link></li>
                            <li><Link href={'/reach_us'}>Reach us</Link></li>
                        </ul>
                        <div className='text-lg z-30 lg:hidden hover:cursor-pointer' onClick={handlemenuClick}>
                            <button>
                            <VscMenu />
                            </button>
                        </div>
                        <div
                            className='text-xl ml-5 lg:ml-10 cursor-pointer relative'
                            onClick={handleCartClick}
                        >
                            <PiBagThin className='text-2xl' />
                            {
                                totalItems!="0" && (
                                    <div className='w-[15px] h-[15px] bg-black text-white rounded-r-full rounded-l-full text-xs flex justify-center items-center font-bold absolute bottom-0 translate-y-[30%] lg:translate-y-[50%] translate-x-[100%]'>
                                        <p>{totalItems}</p>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};
