"use client"
import Image from "next/image";
import AdMarquee from "./componets/advertisment-components/AdMarquee";
import CategoryCard from "./componets/store-components/CategoryCard";
import { GoArrowUpRight } from "react-icons/go";
import { MdOutlineArrowForward } from "react-icons/md";
import ProductCard from "./componets/cart-componets/ProductCard";
import { TfiPackage } from "react-icons/tfi";
import { BiSolidBadgeDollar } from "react-icons/bi";
import { RiInstagramFill } from "react-icons/ri";
import { BiSolidOffer } from "react-icons/bi";
import { motion } from "framer-motion";
import Link from "next/link";
import BlurText from "./componets/animated-components/BlurText";
import CountUp from "./componets/animated-components/CountUp";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addToCart } from "@/lib/reduxStore/Reducers";
export default function Home() {
  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };
 
  
  return (
   <div className="w-full">
      <div className="max-w-7xl h-[calc(100vh-40vh)] mx-auto flex flex-col items-center justify-center">
          <div className="flex flex-col justify-center items-center my-6">

            <BlurText
              text="This Diwali should be lit!"
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="text-4xl sm:text-4xl lg:text-5xl leading-5xl text-center tracking-[-3px] font-bold"
            />

          <motion.div  initial={{opacity:0,y:"100%"}} animate={{opacity:1,y:0}} transition={{duration:1,delay:2,ease:"circInOut"}} className="flex flex-col justify-center items-center ">
          <p className="max-w-sm text-xs sm:text-sm tracking-tight text-center mt-1 ">
          enjoy offers upto flat 70% on your first order.
          </p>
          </motion.div>
          </div>
         <motion.div  initial={{opacity:0,y:"100%"}} animate={{opacity:1,y:0}} transition={{duration:1,delay:2.3,ease:"circInOut"}}>
         <Link href={"/store"}>
                <button className="text-sm flex justify-center items-center font-bold tracking-[-1px] px-4 py-2 bg-[#BBFF27] hover:bg-[#bdf448] mt-4 border-[1px] border-black scale-75 sm:scale-100">
                  Shop at store
                  <GoArrowUpRight className="text-lg ml-1"/>
                </button>
          </Link>
         </motion.div>
      </div>
      <AdMarquee  speed={10}/>
      <div className="max-w-7xl mx-auto py-[150px] flex flex-col justify-center items-center ">
        <h2 className="text-2xl text-center  tracking-[-2px]">
        Confused what to buy? buy as a bundle and save upto 50%!
        </h2>
       <div className="w-full flex flex-col justify-center items-center my-6">
       <h3 className="text-3xl font-bold  text-center">
        Speacial bundles
        </h3>
        <div className="text-sm hover:cursor-pointer underline text-gray-700 hover:text-black flex justify-center items-center mt-1">
              <p>
              View all
              </p>
              <GoArrowUpRight className="text-lg ml-1"/>
        </div>
       </div>
        <div className="max-w-3xl mx-auto flex flex-wrap justify-center items-center gap-x-4 gap-y-4 ">
            <CategoryCard categoryName={"Wedding bundles"}/>
            <CategoryCard categoryName={"Wedding bundles"}/>
            <CategoryCard categoryName={"Wedding bundles"}/>
            <CategoryCard categoryName={"Wedding bundles"}/>
            <CategoryCard categoryName={"Wedding bundles"}/>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pb-[50px]">
        <div className="w-full flex flex-col ">
          <h4 className=" text-2xl sm:text-3xl font-bold  text-center tracking-[-2px] px-4">
             Exclusive  special sale! grab it before it ends!
          </h4>
          {/* Here best sale of the day should be displayed */}
          <div className="max-w-7xl mx-auto my-[50px] flex flex-wrap justify-center items-center gap-x-[5px] gap-y-[20px] ">
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
          </div>
        </div>
      </div>
      <div className="w-full py-[100px] bg-[#000000]">
            <div className="max-w-7xl mx-auto flex flex-col justify-center items-center px-3">
            <h5 className="text-3xl text-[#FFFFFF] font-bold tracking-[-2px] text-center">
              Celebrating the <span className="bg-[] text-[#bafe28] glow-green relative"><span>
                <CountUp
                    from={10}
                    to={30}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text"
                  />+
              </span>
<span className="w-[50px] h-[50px] bg-[rgb(190,255,49)] absolute left-0 blur-2xl"></span>
</span> years of serving light and joy. 
            </h5>
            <p className="pt-5 max-w-sm text-center text-[#f1f1f1] leading-tight tracking-tighter">
            we are one of the most trusted, licensed vendors, based at sivakasi.
            </p>
            <p className="text-lg text-[#d5d5d5] pt-5 tracking-tighter">
              Since 1990's
            </p>
            <div className="w-full max-w-3xl sm:h-[350px] bg-black grid sm:grid-cols-3 my-[50px] gap-x-1">
                <div className="w-full col-span-1 bg-gradient-to-tl from-[#141E00] to-[#121212] m-1 rounded-3xl flex flex-col justify-start items-center py-10">
                <div className="flex flex-col justify-center items-center px-4">
                        <BiSolidBadgeDollar className="text-5xl text-[#BBFF27]" />
                          <h1 className="text-lg font-bold tracking-[-1px] text-[#f1f1f1] mt-3">
                          Quality First
                          </h1>
                          <p className="text-sm text-[#f1f1f1] text-center py-4">
                          We source our products from top class vendor across Sivakasi.
                          </p>
                          <p className="text-sm text-[#f1f1f1] text-center py-2">
                          You get the best quality right from the production town.
                          </p>
                        </div>
                </div>
                <div className="w-full col-span-1 flex flex-col m-1 gap-y-1">
                    <div className="w-full h-[80%] bg-gradient-to-t from-[#141E00] to-[#121212]  rounded-3xl flex flex-col justify-start items-center py-10">
                        <div className="flex flex-col justify-center items-center px-4">
                          <TfiPackage className="text-4xl text-[#BBFF27]" />
                          <h1 className="text-lg font-bold tracking-[-1px] text-[#f1f1f1] mt-3">
                          Easy Shipment
                          </h1>
                          <p className="text-sm text-[#f1f1f1] text-center py-4">
                          we have one easy and well optimized shipment facility.
                          </p>
                        
                        </div>
                    </div>
                    <div className="w-full h-[20%] px-4 flex justify-between items-center bg-[#BBFF27] rounded-3xl">
                      <p className="tracking-[-1px]">
                        Locate us
                      </p>
                      <MdOutlineArrowForward className="text-xl" />
                    </div>
                </div> 
                <div className="w-full col-span-1 bg-gradient-to-tr from-[#141E00] to-[#121212] m-1 rounded-3xl flex flex-col justify-start items-center py-10">
                <div className="flex flex-col justify-center items-center px-4">
                          <BiSolidOffer className="text-5xl text-[#BBFF27]" />
                          <h1 className="text-lg font-bold tracking-[-1px] text-[#f1f1f1] mt-3">
                          Exculsive discounts.
                          </h1>
                          <p className="text-sm text-[#f1f1f1] text-center py-4">
                          we have one easy and well optimized shipment facility.
                          </p>
                          <p className="text-sm text-[#f1f1f1] text-center py-2">
                          we have one easy and well optimized shipment facility.
                          </p>
                        </div>
                </div>
               
            </div>
            <div className="w-full py-[50px] flex flex-col justify-center items-center">
                <p className="text-lg text-[#f1f1f1] text-center tracking-[-1px] flex items-center ">
                Reach us out through  +91 9443919192, +91 7598007270 
                </p>
                <p className="text-lg text-[#f1f1f1] tracking-[-1px] flex items-center justify-center ">
                Dm us at <RiInstagramFill className="text-xl text-[#BBFF27] mx-1"/> @happycrackers
                </p>
            </div>
            <div className="w-full py-[50px] flex flex-col justify-center items-center">
                <p className="text-3xl font-bold text-[#f1f1f1] tracking-[-2px] text-center">
                  Wanna make your <span className="text-black bg-[#BBFF27] px-1">special occasions</span> lit?
                </p>
                <p className="max-w-sm text-center text-sm text-[#f1f1f1] tracking-[-1px] mt-4 ">
                avail special discounts for your first order.
                Place the order and we will reach you very soon. 
                </p>
                <button className="text-sm font-bold tracking-[-1px] px-4 py-2 bg-[#BBFF27] hover:bg-[#bdf448] mt-6 ">
                  Shop at store
                </button>
            </div>
            </div>
      </div>
   </div>
  );
}
