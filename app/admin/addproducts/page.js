"use client";
import React, { useState } from "react";
import InputComp from "@/app/componets/store-components/InputComp";
import CheckBox from "@/app/componets/store-components/CheckBox";
import ButtonComp from "@/app/componets/store-components/ButtonComp";
import ImageAdd from "@/app/componets/store-components/ImageAdd";
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";
const Page = () => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productCost, setProductCost] = useState(0);
  const [isOffer, setIsOffer] = useState(false);
  const [offerPercent, setOfferPercent] = useState(0);
  const [productDescription, setProductDescription] = useState("");
  const [productImages, setProductImages] = useState([]); // image URLs
  const [contents ,setContents] = useState([])
  const [content,setContent] = useState("")
  const [quantity,setQuantity] =useState("")
  const handleAddContent = () =>{
    const obj = {
        item : content ,
        quantity : quantity
    }
    setContents((prev) => [...prev,obj])
  }
    const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("image", file);

    const res = await fetch("http://localhost:3000/upload-image", {
      method: "POST",
      body: formData
    });

    const data = await res.json();
    return data.imageUrl; // URL from server
  };

  const handleImageSelect = async (file) => {
    if (!file) return;
    try {
      const imageUrl = await uploadImage(file);
      setProductImages((prev) => [...prev, imageUrl]);
    } catch (err) {
      console.error("Upload failed:", err);
    }
  };

  const handleUpload = async () => {
    if (productImages.length === 0) {
      alert("Please upload at least one image");
      return;
    }
    console.log(contents)
    const payload = {
      productId : uuidv4(),
      productName,
      productDescription,
      productCost,
      productPrice,
      productOffer: {
        isOffer,
        offerPercent
      },
      productContent: contents, 
      productImages
    };

     try {
    const res = await axios.post("http://localhost:3000/products", payload, {
      headers: {
        "Content-Type": "application/json"
      }
    });

    console.log("Upload Response:", res.data);
    alert("Uploaded!");
  } catch (error) {
    console.error("Upload Error:", error);
    alert("Something went wrong!");
  }

    

    alert("Uploaded!");
  };

  return (
    <div className="max-w-4xl mx-auto grid grid-cols-7 py-8">
      <div className="col-span-7 py-4">
        <h1 className="w-full text-xl tracking-tighter">New Product</h1>
      </div>

      <div className="col-span-3 space-y-3">
        <InputComp label="Product Name" value={productName} onChange={(e) => setProductName(e.target.value)} />
        <InputComp label="Description" value={productDescription} onChange={(e) => setProductDescription(e.target.value)} />
        <InputComp 
            label="Retail price" 
            type="text" 
            iscurrency={true}
            value={productCost === "" ? "" : String(productCost)} 
            onChange={(e) => {
                const val = e.target.value;
                if (val === "") {
                setProductCost("");
                return;
                }
                const numericValue = parseInt(val.replace(/\D/g, ""), 10);

                if (!isNaN(numericValue)) {
                setProductCost(numericValue);
                }
            }} 
            />

        <InputComp 
        label="MRP" 
        type="text" 
        iscurrency={true}
        value={productPrice === "" ? "" : String(productPrice)} 
        onChange={(e) => {
            const val = e.target.value;
            if (val === "") {
            setProductPrice("");
            return;
            }

            const numericValue = parseInt(val.replace(/\D/g, ""), 10);
            if (!isNaN(numericValue)) {
            setProductPrice(numericValue);
            }
        }} 
        />

        <InputComp 
        label="Offer Percent" 
        type="text" 
        value={offerPercent === "" ? "" : String(offerPercent)} 
        
        onChange={(e) => {
            const val = e.target.value;
            if (val === "") {
            setOfferPercent("");
            return;
            }

            const numericValue = parseInt(val.replace(/\D/g, ""), 10);
            if (!isNaN(numericValue)) {
            setOfferPercent(numericValue);
            }
        }} 
        />

        <CheckBox label="Has Offer?" checked={isOffer} onChange={() => setIsOffer(!isOffer)} />
        <ButtonComp buttonName="Save Product" onClick={handleUpload} />
      </div>

      <div className="col-span-4 p-4 flex flex-col">
        <ImageAdd onChange={(e) => handleImageSelect(e.target.files[0])} />
        <div className="flex flex-col py-4">
            <div className="flex items-center gap-2">
                <InputComp label={"content"} onChange={(e) => setContent(e.target.value)}/>
                <InputComp type="number" label={"quantity"} onChange={(e) => setQuantity(parseInt(e.target.value))}/>   
                <ButtonComp buttonName={"Add"} onClick={handleAddContent}/>        
            </div>
            <table className="w-full pt-2 border-[1px] border-black"  border="1"  cellPadding="8">
                 <thead className="w-full bg-black text-white">
                    <tr >
                         <td className="px-2">
                                Item
                        </td>
                        <td className="px-2">
                            quantity
                        </td>
                    </tr>
                 </thead>
                <tbody>
                {
                    !contents.length && (
                        <tr>
                            <td  className="px-2">
                                add content
                            </td>
                        </tr>
                    )
                }
                {
                    contents.map((contentData,index) => (
                        <tr key={index}>
                            <td className="px-2">
                                {contentData.item}
                            </td>
                            <td className="px-2">
                                {contentData.quantity}
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>

        </div>
      </div>
    </div>
  );
};

export default Page;
