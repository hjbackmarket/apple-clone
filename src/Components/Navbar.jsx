import React from 'react'
import { FaApple } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { FiBox } from "react-icons/fi";
import { BiBookmark } from "react-icons/bi";
import { GrSettingsOption } from "react-icons/gr";
import { RiAccountCircleLine } from "react-icons/ri";
const Navbar = () => {
    return <>
        <div className='
        Navbar flex max-w-full h-[44px] items-center
  bg-[#F5F5F7CC] backdrop-blur-md
  transition-colors duration-300
  hover:bg-white  '>
            <ul className='  menu flex max-w-full mx-auto gap-x-[35px] items-center
  relative ' >
                <li><a href="" className='text-[17px]'><FaApple /></a></li>

                <li className=' group'>
                    <a href="" className='text-[12px] '>Store</a>
                    <div className='fixed left-0 right-0 top-[44px]
    w-screen
    bg-red-500
    opacity-0 translate-y-[-10px]
    pointer-events-none
    transition-all duration-300 ease-out
    group-hover:opacity-100
    group-hover:translate-y-0
    group-hover:pointer-events-auto
    flex justify-center
    z-40
                  '>
                        <div className='w-[980px]  pt-[40px] pb-[84px] pr-[22px] pl-[22px] flex  '>
                            <div className='w-auto pr-[88px]'>
                                <ul>
                                    <h2 className='text-[12px] text-[#6E6E73]'>Shop</h2>
                                    <li><a href="" className='text-[24px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px] transition-colors duration-200 '>Shop Gifts</a></li>
                                    <li><a href="" className='text-[24px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px] transition-colors duration-200 '>Ipad</a></li>
                                    <li><a href="" className='text-[24px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px] transition-colors duration-200 '>Iphone</a></li>
                                    <li><a href="" className='text-[24px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px] transition-colors duration-200 '>Apple Watch</a></li>
                                    <li><a href="" className='text-[24px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px] transition-colors duration-200 '>Apple Vision Pro</a></li>
                                    <li><a href="" className='text-[24px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px] transition-colors duration-200 '>Airpods</a></li>
                                    <li><a href="" className='text-[24px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px] transition-colors duration-200 '>Accessories</a></li>
                                </ul>
                            </div>
                            <div className='w-auto h-[326px]'>
                                <ul>
                                    <h2 className='text-[12px] text-[#6E6E73]'>Quick Links</h2>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-7 pb-7 pr-[11px]'>Find a Store</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-7 pb-7 pr-[11px]'>Order Status</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-7 pb-7 pr-[11px]'>Apple Trade In</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-7 pb-7 pr-[11px]'>Financing</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-7 pb-7 pr-[11px]'>Personal Setup</a></li>
                                </ul>
                            </div>
                            <div className='w-auto  h-[326px] px-[44px]'>
                                <ul>
                                    <h2 className='text-[12px] text-[#6E6E73]'>More from Mac</h2>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Mac Support</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>AppleCare</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>macOs Tahoe</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Apple intelligence</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Apps by Apple</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Better with iphone</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>iCloud+</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Mac for Business</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Education</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>






                <li className=' group'>
                    <a href="" className='text-[12px]'>Mac</a>
                    <div className=' fixed left-0 right-0 top-[44px]
    w-screen
    bg-red-500
    opacity-0 translate-y-[-10px]
    pointer-events-none
    transition-all duration-300 ease-out
    group-hover:opacity-100
    group-hover:translate-y-0
    group-hover:pointer-events-auto
    flex justify-center
    z-40
                  '>
                        <div className='w-[980px]  pt-[40px] pb-[84px] pr-[22px] pl-[22px] flex  '>
                            <div className='w-auto pr-[88px]'>
                                <ul>
                                    <h2 className='text-[12px] text-[#6E6E73]'>Explore Mac</h2>
                                    <li><a href="" className='text-[24px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Exokire All Mac</a></li>
                                    <li><a href="" className='text-[24px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Macbook Air</a></li>
                                    <li><a href="" className='text-[24px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Macbook Pro</a></li>
                                    <li><a href="" className='text-[24px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>imac</a></li>
                                    <li><a href="" className='text-[24px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Mac mini</a></li>
                                    <li><a href="" className='text-[24px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Mac Studio</a></li>
                                    <li><a href="" className='text-[24px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Mac Pro</a></li>
                                    <li><a href="" className='text-[24px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Display</a></li>
                                    <li><a href="" className='text-[24px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Compare Mac</a></li>
                                    <li><a href="" className='text-[24px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Switch</a></li>
                                </ul>
                            </div>
                            <div className='w-auto  h-[326px]'>
                                <ul>
                                    <li><a href="" className='text-[12px] text-[#6E6E73]'>Shop Mac</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Shop Mac</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Help Me Choose</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Mac Accessories</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Apple Trade in</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Financing</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Personal Setup</a></li>
                                </ul>
                            </div>
                            <div className='w-auto h-[326px] px-[44px]'>
                                <ul>
                                    <li><a href="" className='text-[12px] text-[#6E6E73]'>More from Mac</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Mac Support</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Apple Care</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>MacOs Tahoe</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Apple intelligence</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Apps by apple</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>












                <li className=' group'>
                    <a href="" className='text-[12px]'>Ipad</a>
                    <div className=' fixed left-0 right-0 top-[44px]
    w-screen
    bg-red-500
    opacity-0 translate-y-[-10px]
    pointer-events-none
    transition-all duration-300 ease-out
    group-hover:opacity-100
    group-hover:translate-y-0
    group-hover:pointer-events-auto
    flex justify-center
    z-40
                  '>
                        <div className='w-[980px]  pt-[40px] pb-[84px] pr-[22px] pl-[22px] flex '>
                            <div className='w-auto pr-[88px]'>
                                <ul>
                                    <h2 className='text-[12px] text-[#6E6E73]'>Explore iPad</h2>
                                    <li><a href="" className='text-[24px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Explore ALL ipad</a></li>
                                    <li><a href="" className='text-[24px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>iPad Pro</a></li>
                                    <li><a href="" className='text-[24px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>iPad Air</a></li>
                                    <li><a href="" className='text-[24px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>iPad</a></li>
                                    <li><a href="" className='text-[24px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>iPad mini</a></li>
                                    <li><a href="" className='text-[24px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Apple Pencil</a></li>
                                    <li><a href="" className='text-[24px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Keyboards</a></li>
                                    <li><a href="" className='text-[24px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Compare ipad</a></li>
                                </ul>
                            </div>
                            <div className='w-auto h-[326px] '>
                                <ul>
                                    <li><a href="" className='text-[12px] text-[#6E6E73]'>Shop iPad</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>iPad Accessories</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Apple Trade In</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Financing</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>personal Setup</a></li>
                                </ul>
                            </div>
                            <div className='w-auto h-[326px] px-[88px]'>
                                <ul>
                                    <li><a href="" className='text-[12px] text-[#6E6E73]'>More from iPad</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>iPad Support</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>AppleCare</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>iPadOs 26</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Apple intelligence</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Apps by Apple</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>iCloud+</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Education</a></li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </li>





                <li className=' group'>
                    <a href="" className='text-[12px]'>Iphone</a>
                    <div className=' fixed left-0 right-0 top-[44px]
    w-screen
    bg-red-500
    opacity-0 translate-y-[-10px]
    pointer-events-none
    transition-all duration-300 ease-out
    group-hover:opacity-100
    group-hover:translate-y-0
    group-hover:pointer-events-auto
    flex justify-center
    z-40
                  '>
                        <div className='w-[980px]  pt-[40px] pb-[84px] pr-[22px] pl-[22px] flex '>
                            <div className='w-auto pr-[88px]'>
                                <ul>
                                    <h2 className='text-[12px] text-[#6E6E73]'>Explore iPhone</h2>
                                    <li><a href="" className='text-[24px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>iPhone 17pro</a></li>
                                    <li><a href="" className='text-[24px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>iPhone Air</a></li>
                                    <li><a href="" className='text-[24px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>iPhone 17</a></li>
                                    <li><a href="" className='text-[24px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>iPhone 16</a></li>
                                    <li><a href="" className='text-[24px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>iPhone 16e</a></li>
                                    <li><a href="" className='text-[24px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Compare iPhone</a></li>
                                    <li><a href="" className='text-[24px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Switch from Android</a></li>
                                </ul>
                            </div>
                            <div className='w-auto h-[326px] '>
                                <ul>
                                    <li><a href="" className='text-[12px] text-[#6E6E73]'>Shop iPhone</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Shop iPhone</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Iphone Accessories</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Apple Trade In</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Carrier Deals at Apples</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Personal Setup</a></li>
                                </ul>
                            </div>
                            <div className='w-auto h-[326px] px-[44px]'>
                                <ul>
                                    <li><a href="" className='text-[12px] text-[#6E6E73]'>More from iPhone</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>iPhone Support</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>AppleCare</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>IOS 26</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Apple Intelligence</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Apps by Apple</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>iPhone Privacy</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Better with Mac</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>iCloud+</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Wallet,Pay,Card</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Siri</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>


                </li>




                <li className=' group'>
                    <a href="" className='text-[12px]'>Watch</a>
                    <div className=' fixed left-0 right-0 top-[44px]
    w-screen
    bg-red-500
    opacity-0 translate-y-[-10px]
    pointer-events-none
    transition-all duration-300 ease-out
    group-hover:opacity-100
    group-hover:translate-y-0
    group-hover:pointer-events-auto
    flex justify-center
    z-40
                  '>
                        <div className='w-[980px]  pt-[40px] pb-[84px] pr-[22px] pl-[22px] flex '>
                            <div className='w-auto pr-[88px]'>
                                <ul>
                                    <h2 className='text-[12px] text-[#6E6E73]'>Explore Watch</h2>
                                    <li><a href="" className='text-[24px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Explore All Apple Watch</a></li>
                                    <li><a href="" className='text-[24px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Aple Watch Series 11</a></li>
                                    <li><a href="" className='text-[24px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Apple Watch SE 3</a></li>
                                    <li><a href="" className='text-[24px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Apple Watch ULtra 3</a></li>
                                    <li><a href="" className='text-[24px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Apple Watch Nike </a></li>
                                    <li><a href="" className='text-[24px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Apple Watch Hermes</a></li>
                                    <li><a href="" className='text-[24px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>compare Watch</a></li>
                                    <li><a href="" className='text-[24px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Why Apple Watch</a></li>
                                </ul>
                            </div>
                            <div className='w-auto h-[326px]'>
                                <ul>
                                    <li><a href="" className='text-[12px] text-[#6E6E73]'>Shop Watch </a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>shop Apple Watch</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Apple Watch Bands</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Apple Watch Accessories</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Apple Trade In</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Financing</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Personal Setupd</a></li>
                                </ul>
                            </div>
                            <div className='w-auto h-[326px] px-[44px]'>
                                <ul>
                                    <li><a href="" className='text-[12px] text-[#6E6E73]'>More from Watch</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Apple Watch Support</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>AppleCare</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>watchOS 26</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Apple Watch FOr YOur Kids</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Apps by Apple</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Apple Finess+</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>iCloud+</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Mac for Business</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Education</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>




                <li className='group'>
                    <a href="" className='text-[12px]'>Vision</a>
                    <div className=' fixed left-0 right-0 top-[44px]
    w-screen
    bg-red-500
    opacity-0 translate-y-[-10px]
    pointer-events-none
    transition-all duration-300 ease-out
    group-hover:opacity-100
    group-hover:translate-y-0
    group-hover:pointer-events-auto
    flex justify-center
    z-40
                  '>
                        <div className='w-[980px]  pt-[40px] pb-[84px] pr-[22px] pl-[22px] flex  '>
                            <div className='w-auto pr-[88px]'>
                                <ul>
                                    <h2 className='text-[12px] text-[#6E6E73]'>Explore Vision</h2>
                                    <h1 className='text-[24px] #333336 pt-[5px]  pr-11  w-auto'>Explore Apple Vision Pro</h1>
                                    <li><a href="" className='text-[24px] #333336 pt-[5px] pr-11 '>Tech Specs</a></li>
                                </ul>
                            </div>
                            <div className='w-auto '>
                                <ul>
                                    <li><a href="" className='text-[12px] text-[#6E6E73]'>Shop Vision </a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>shop Apple Vision Pro</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Apple Vision Pro </a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Accessories</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Book a Demo</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Financing</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Personal Setup</a></li>
                                </ul>
                            </div>
                            <div className='w-auto  px-[44px]'>
                                <ul>
                                    <li><a href="" className='text-[12px] text-[#6E6E73]'>More from Vision </a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Apple Vision Pro Support</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>AppleCare</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>visionOs 26</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>




                <li className=' group'>
                    <a href="" className='text-[12px]'>Airpods</a>
                    <div className=' fixed left-0 right-0 top-[44px]
    w-screen
    bg-red-500
    opacity-0 translate-y-[-10px]
    pointer-events-none
    transition-all duration-300 ease-out
    group-hover:opacity-100
    group-hover:translate-y-0
    group-hover:pointer-events-auto
    flex justify-center
    z-40
                  '>
                        <div className='w-[980px]  pt-[40px] pb-[84px] pr-[22px] pl-[22px] flex  '>
                            <div className='w-auto pr-[88px]'>
                                <ul>
                                    <h2 className='text-[12px] text-[#6E6E73]'>Explore AirPods</h2>
                                    <li><a href="" className='text-[24px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>AirPods 4</a></li>
                                    <li><a href="" className='text-[24px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>AirPods Pro 3</a></li>
                                    <li><a href="" className='text-[24px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>AirPods Max</a></li>
                                    <li><a href="" className='text-[24px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>compare Airpods</a></li>
                                </ul>
                            </div>
                            <div className='w-auto h-[326px]'>
                                <ul>
                                    <li><a href="" className='text-[12px] text-[#6E6E73]'>Shop Airpods </a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>shop Airpods</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Airpods Accessories</a></li>
                                </ul>
                            </div>
                            <div className='w-auto h-[326px] px-[44px]'>
                                <ul>
                                    <li><a href="" className='text-[12px] text-[#6E6E73]'>More from Airpods</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Airpods Support</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>AppleCare</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Hearing Health</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Apple Music</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Fitness+</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>



                <li className=' group'>
                    <a href="" className='text-[12px]'>TV & Home</a>
                    <div className=' fixed left-0 right-0 top-[44px]
    w-screen
    bg-red-500
    opacity-0 translate-y-[-10px]
    pointer-events-none
    transition-all duration-300 ease-out
    group-hover:opacity-100
    group-hover:translate-y-0
    group-hover:pointer-events-auto
    flex justify-center
    z-40
                  '>
                        <div className='w-[980px]  pt-[40px] pb-[84px] pr-[22px] pl-[22px] flex '>
                            <div className='w-auto pr-[88px]'>
                                <ul>
                                    <h2 className='text-[12px] text-[#6E6E73]'>Explore TV & Home</h2>
                                    <li><a href="" className='text-[24px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Explore All TV & Home</a></li>
                                    <li><a href="" className='text-[24px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Apple TV 4K</a></li>
                                    <li><a href="" className='text-[24px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>HomePod </a></li>
                                    <li><a href="" className='text-[24px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>HomePod mini</a></li>
                                </ul>
                            </div>
                            <div className='w-auto h-[326px] '>
                                <ul>
                                    <li><a href="" className='text-[12px] text-[#6E6E73]'>Shop Tv & Home </a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Shop Apple TV 4K</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Shop HomePod </a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Shop HomePod mini</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>shop Siri Remote</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Tv & Home Accessories</a></li>
                                </ul>
                            </div>
                            <div className='w-auto h-[326px] px-[44px]'>
                                <ul>
                                    <li><a href="" className='text-[12px] text-[#6E6E73]'>More from TV & Home</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Airpods TV & Home Support</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>HomePod Support</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>AppleCare for Apple TV</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>AppleCare for HomePod</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Apple TV app</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Apple TV</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>HOme app</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Apple Music</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Siri</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>AirPlay</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>



                <li className=' group'>
                    <a href="" className='text-[12px]'>Entertainment</a>
                    <div className=' fixed left-0 right-0 top-[44px]
    w-screen
    bg-red-500
    opacity-0 translate-y-[-10px]
    pointer-events-none
    transition-all duration-300 ease-out
    group-hover:opacity-100
    group-hover:translate-y-0
    group-hover:pointer-events-auto
    flex justify-center
    z-40
                  '>
                        <div className='w-[980px]  pt-[40px] pb-[84px] pr-[22px] pl-[22px] flex  '>
                            <div className='w-auto pr-[88px]'>
                                <ul>
                                    <h2 className='text-[12px] text-[#6E6E73]'>Explore Entertainment</h2>
                                    <li><a href="" className='text-[24px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Apple One</a></li>
                                    <li><a href="" className='text-[24px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Apple Music </a></li>
                                    <li><a href="" className='text-[24px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Apple Arcade</a></li>
                                    <li><a href="" className='text-[24px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Apple Fitness+</a></li>
                                    <li><a href="" className='text-[24px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Apple New+</a></li>
                                    <li><a href="" className='text-[24px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Apple Podcasts</a></li>
                                    <li><a href="" className='text-[24px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Apple Books</a></li>
                                    <li><a href="" className='text-[24px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Apple Store</a></li>
                                </ul>
                            </div>
                            <div className='w-auto h-[326px] px-[44px]'>
                                <ul>
                                    <li><a href="" className='text-[12px] text-[#6E6E73]'>Support</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Apple TV Support</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Apple Music Support</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>



                <li className=' group'>
                    <a href="" className='text-[12px]'>Accessories</a>
                    <div className=' fixed left-0 right-0 top-[44px]
    w-screen
    bg-red-500
    opacity-0 translate-y-[-10px]
    pointer-events-none
    transition-all duration-300 ease-out
    group-hover:opacity-100
    group-hover:translate-y-0
    group-hover:pointer-events-auto
    flex justify-center
    z-40
                  '>
                        <div className='w-[980px] pt-[40px] pb-[84px] pr-[22px] pl-[22px] flex '>
                            <div className='w-auto pr-[88px]'>
                                <ul>
                                    <h2 className='text-[12px] text-[#6E6E73]'>Shop Accessories</h2>
                                    <li><a href="" className='text-[24px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Mac</a></li>
                                    <li><a href="" className='text-[24px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>ipad</a></li>
                                    <li><a href="" className='text-[24px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>iPhone</a></li>
                                    <li><a href="" className='text-[24px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Apple Watch</a></li>
                                    <li><a href="" className='text-[24px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Applw Vision Pro</a></li>
                                    <li><a href="" className='text-[24px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>AirPods</a></li>
                                    <li><a href="" className='text-[24px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>AirPods</a></li>
                                    <li><a href="" className='text-[24px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>TV & Home</a></li>
                                </ul>
                            </div>
                            <div className='w-auto h-[326px] px-[44px]'>
                                <ul>
                                    <li><a href="" className='text-[12px] text-[#6E6E73]'>Explore Accessories</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Made by Apple</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Beats</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>AirTag</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Assistive Technologies</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>


                <li className=' group'>
                    <a href="" className='text-[12px]'>Support</a>
                    <div className=' fixed left-0 right-0 top-[44px]
    w-screen
    bg-red-500
    opacity-0 translate-y-[-10px]
    pointer-events-none
    transition-all duration-300 ease-out
    group-hover:opacity-100
    group-hover:translate-y-0
    group-hover:pointer-events-auto
    flex justify-center
    z-40
                  '>
                        <div className='w-[980px] pt-[40px] pb-[84px] pr-[22px] pl-[22px] flex '>
                            <div className='w-auto pr-[88px]'>
                                <ul>
                                    <h2 className='text-[12px] text-[#6E6E73]'>Explore Support</h2>
                                    <li><a href="" className='text-[24px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Mac</a></li>
                                    <li><a href="" className='text-[24px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Watch</a></li>
                                    <li><a href="" className='text-[24px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Apple Vision Pro</a></li>
                                    <li><a href="" className='text-[24px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>AirPods</a></li>
                                    <li><a href="" className='text-[24px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Music</a></li>
                                    <li><a href="" className='text-[24px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>TV</a></li>
                                    <li><a href="" className='text-[24px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Explore Support</a></li>
                                </ul>
                            </div>
                            <div className='w-auto h-[326px]'>
                                <ul>
                                    <li><a href="" className='text-[12px] text-[#6E6E73]'>Get Help</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Community</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Check Converage</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Genius Bar</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'></a></li>
                                </ul>
                            </div>
                            <div className='w-auto h-[326px] px-[44px]'>
                                <ul>
                                    <li className='text-[12px] text-[#6E6E73]'><a href="">Helpful Topics</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Get AppleCare</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Applw Account and <br /> Password</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Billing & Subscriptions</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>




                <li className='group'>
                    <a href="" className='text-[20px]'><CiSearch /></a>
                    <div className=' fixed left-0 right-0 top-[44px]
    w-screen
    bg-red-500
    opacity-0 translate-y-[-10px]
    pointer-events-none
    transition-all duration-300 ease-out
    group-hover:opacity-100
    group-hover:translate-y-0
    group-hover:pointer-events-auto
    flex justify-center
    z-40
                  '>
                        <div className='w-[980px]  pt-[40px] pb-[84px] pr-[22px] pl-[22px] flex '>
                            <div>
                                <ul>
                                    <input type="text" placeholder='Search apple.com'
                                        className='w-[927px] '
                                    />
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Quik Links</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Shop Gifts</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Find a Store</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Apple Gift Card</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Apple Vision Pro</a></li>
                                    <li><a href="" className='text-[12px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] h-[44px]'>Apple Trand in</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>





                <li className='group'>
                    <a href="" className='text-[20px]'><LiaShoppingBagSolid /></a>
                    <div className=' fixed left-0 right-0 top-[44px]
    w-screen
    bg-red-500
    opacity-0 translate-y-[-10px]
    pointer-events-none
    transition-all duration-300 ease-out
    group-hover:opacity-100
    group-hover:translate-y-0
    group-hover:pointer-events-auto
    flex justify-center
    z-40
                  '>
                    <div className='w-[980px]  pt-[40px] pb-[84px] pr-[22px] pl-[22px] flex '>
                        <div>
                            <ul>
                                <li><a href="" className='text-[24px] text-[#333336] pt-9 pb-7 pr-11  w-[135px] '>Your Bag is empty</a></li>
                                <li className='mt-[14px]'><a href="" className='text-[12px] text-[#6E6E73]   pr-11   w-[135px] h-[44px]'><span className='underline decoration-red-600 mr-2  text-[#333336] '  > Sign in</span>
                                     to see if you have any saved items
                                </a></li>
                                <li className='mt-[14px]'><a href="" className='text-[12px] text-[#6E6E73] pt-9 pb-7 pr-11  w-[135px] h-[44px] ' >My Profile</a></li>
                                <li><a href="" className='text-[12px] text-[#333336] pt-[8px]  pr-11  w-[135px] flex items-center gap-x-2 '><FiBox />Orders</a></li>
                                <li ><a href="" className='text-[12px] text-[#333336]  pt-[8px]  pr-11  w-[135px] flex items-center gap-x-2'> 
                                <BiBookmark />Your Saves</a></li>
                                <li><a href="" className='text-[12px] text-[#333336] pt-[8px]  pr-11  w-[135px] flex items-center gap-x-2'><GrSettingsOption />Account</a></li>
                                <li><a href="" className='text-[12px] text-[#333336] pt-[8px] pr-11  w-[135px] flex items-center gap-x-2'><RiAccountCircleLine />Sign in</a></li>
                            </ul>
                        </div>
                        </div>
                    </div>















                </li>

















            </ul>
        </div>
    </>
}

export default Navbar