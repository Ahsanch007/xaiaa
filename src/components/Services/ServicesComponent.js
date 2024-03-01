'use client'
import 'aos/dist/aos.css';
import Aos from 'aos';
import Image from 'next/image'
import React, { useEffect } from 'react'


export const ServicesComponent = () => {
    useEffect(() => {
        Aos.init(); // Initialize AOS on component mount
      }, []);
    return (
        <div className='bg-[#dee4ec]  '>
            <div className="container mx-auto py-[50px] px-[20px]">
                <div className="title pb-3">
                    <h1 className='poppins-semi-bold text-[36px] md:text-[48px] text-[#323335]'>
                        Service and Conditions
                    </h1>
                </div>
                <div className="grid grid-cols-12 gap-2 " data-aos="fade-up" data-aos-duration="1000">
                    <div className="col-span-12 md:col-span-4">
                        <div className="p-2">
                            <div className="img ">
                                <Image src='/assets/images/b6a79837-dcb8-4c41-a1f7-8d64e8cb9eaf.webp' height={1000} width={1000} className='max-w-full   h-auto' />
                            </div>
                            <h3 className='my-[20px] text-[24px] poppins-semi-bold text-[#323335]'>
                                Delivery
                            </h3>
                            <p className=' text-[18px] poppins-regular text-[#323335]'>
                                Crude peptides are mostly dispatched within 8-10 working days of reciept of the order. Purified peptides are generally dispatched within 18-24 working days. Delivery costs and VAT will be added to the invoice.
                            </p>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-4">
                        <div className="p-2">
                            <div className="img ">
                                <Image src='/assets/images/5ea59efb-d0c1-4323-b5ed-7d16afe728cb.webp' height={1000} width={1000} className='max-w-full   h-auto' />
                            </div>
                            <h3 className='my-[20px] text-[24px] poppins-semi-bold text-[#323335]'>
                                Standard peptides
                            </h3>
                            <p className=' text-[18px] poppins-regular text-[#323335]'>
                                Peptides less than 10 amino acids have a fixed fee. For peptides with more than 25 amino acids, D-amino acids or in large amounts please inquire. Purification is done by HPLC. If your peptide requires more than 95% purity we will comply with it as much as possible.
                            </p>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-4">
                        <div className="p-2">
                            <div className="img ">
                                <Image src='/assets/images/6f8a7d55-af9e-4315-9281-4ddd16102037.webp' height={1000} width={1000} className='max-w-full   h-auto' />
                            </div>
                            <h3 className='my-[20px] text-[24px] poppins-semi-bold text-[#323335]'>
                                Modifications
                            </h3>
                            <p className=' text-[18px] poppins-regular text-[#323335]'>
                                Other modifications will be done upon request. The prices refer to amounts of 1-15 mg
                            </p>
                            <div className="">
                                <ul className='list-disc pl-[30px]'>
                                    <li className='text-[18px] poppins-regular text-[#323335]'>
                                        C-end Amide (-NH2)
                                    </li>
                                    <li className='text-[18px] poppins-regular text-[#323335]'>
                                        N-end Acetate (Ac-)
                                    </li>
                                    <li className='text-[18px] poppins-regular text-[#323335]'>
                                        N-end biotinyl
                                    </li>
                                    <li className='text-[18px] poppins-regular text-[#323335]'>
                                        N-end FITC
                                    </li>
                                    <li className='text-[18px] poppins-regular text-[#323335]'>
                                        Tyr-OH phosphorylate
                                    </li>
                                    <li className='text-[18px] poppins-regular text-[#323335]'>
                                        Thr-OH phosphorylate
                                    </li>
                                    <li className='text-[18px] poppins-regular text-[#323335]'>
                                        Ser-OH phosphorylate
                                    </li>
                                    <li className='text-[18px] poppins-regular text-[#323335]'>
                                        Cyclisation
                                    </li>
                                </ul>
                            </div>

                            <p className=' text-[18px] poppins-regular text-[#323335]'>
                                Peptides labelled with C13 and N15 please inquire. Different flourescent markers please inquire.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="py-[40px]">
                    <h1 className='poppins-semi-bold text-[36px] md:text-[48px] text-[#323335]'>
                    Prices

                    </h1>
                    <div className="py-4">
                        <div className="grid grid-cols-12 gap-3 py-[60px] " data-aos="fade-up" data-aos-duration="1000">
                            <div className="col-span-12 md:col-span-4">
                                <div className="py-2">
                                    <div className="" style={{ 
                                        padding:'0 15px 30px'
                                     }}>

                                        <div className="py-[20px] text-[#323335]">
                                            <h3 className='text-[24px]  poppins-semi-bold mb-[20px] '>
                                            CRUDE
                                            </h3>
                                            <p className='text-[18px]  poppins-regular '>1-5mg with less than <strong>10AA</strong> is <strong>60€</strong>  <br /> 1-5mg with <strong>10-25AA</strong> is <strong>6€/AA</strong></p>
                                        </div>
                                     </div>
                                </div>
                            </div>
                            <div className="col-span-12 md:col-span-4">
                            <div className="py-2">
                                    <div className="" style={{ 
                                        padding:'0 15px 30px'
                                     }}>

                                        <div className="py-[20px] text-[#323335]">
                                            <h3 className='text-[24px]  poppins-semi-bold mb-[20px] '>
                                            <br />
                                            </h3>
                                            <p className='text-[18px]  poppins-regular '>5-10mg with less than <strong>10AA</strong> is <strong>80€</strong>  <br /> 5-10mg with <strong>10-25AA</strong> is <strong>8€/AA</strong></p>
                                        </div>
                                     </div>
                                </div>
                            </div>
                            <div className="col-span-12 md:col-span-4">
                            <div className="py-2">
                                    <div className="" style={{ 
                                        padding:'0 15px 30px'
                                     }}>

                                        <div className="py-[20px] text-[#323335]">
                                            <h3 className='text-[24px]  poppins-semi-bold mb-[20px] '>
                                            <br />
                                            </h3>
                                            <p className='text-[18px]  poppins-regular '>
                                             10-20mg with less than <strong>10AA</strong> is <strong>160€</strong><br />10-20mg with <strong>10-25AA</strong> is <strong>16€/AA</strong> 
                                                </p>
                                        </div>
                                     </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-12 gap-3 py-[60px]" data-aos="fade-up" data-aos-duration="1000">
                            <div className="col-span-12 md:col-span-4">
                                <div className="py-2">
                                    <div className="" style={{ 
                                        padding:'0 15px 30px'
                                     }}>

                                        <div className="py-[20px] text-[#323335]">
                                            <h3 className='text-[24px]  poppins-semi-bold mb-[20px] '>
                                            80-90% PURITY
                                            </h3>
                                            <p className='text-[18px]  poppins-regular '>1-5mg with less than <strong>10AA</strong> is <strong>160€</strong><br />1-5mg with <strong>10-25AA</strong> is <strong>13€/AA</strong></p>
                                        </div>
                                     </div>
                                </div>
                            </div>
                            <div className="col-span-12 md:col-span-4">
                            <div className="py-2">
                                    <div className="" style={{ 
                                        padding:'0 15px 30px'
                                     }}>

                                        <div className="py-[20px] text-[#323335]">
                                            <h3 className='text-[24px]  poppins-semi-bold mb-[20px] '>
                                            <br />
                                            </h3>
                                            <p className='text-[18px]  poppins-regular '>5-10mg with less than <strong>10AA</strong> is <strong>200€</strong><br />5-10mg with <strong>10-25AA</strong> is <strong>15€/AA</strong></p>
                                        </div>
                                     </div>
                                </div>
                            </div>
                            <div className="col-span-12 md:col-span-4">
                            <div className="py-2">
                                    <div className="" style={{ 
                                        padding:'0 15px 30px'
                                     }}>

                                        <div className="py-[20px] text-[#323335]">
                                            <h3 className='text-[24px]  poppins-semi-bold mb-[20px] '>
                                            <br />
                                            </h3>
                                            <p className='text-[18px]  poppins-regular '>
                                            10-20mg with less than <strong>10AA</strong> is <strong>240€</strong><br />10-20mg with <strong>10-25AA</strong> is <strong>25€/AA</strong>
                                                </p>
                                        </div>
                                     </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-12 gap-3 py-[60px]" data-aos="fade-up" data-aos-duration="1000">
                            <div className="col-span-12 md:col-span-4">
                                <div className="py-2">
                                    <div className="" style={{ 
                                        padding:'0 15px 30px'
                                     }}>

                                        <div className="py-[20px] text-[#323335]">
                                            <h3 className='text-[24px]  poppins-semi-bold mb-[20px] '>
                                            90-95% PURITY
                                            </h3>
                                            <p className='text-[18px]  poppins-regular '>
                                            1-5mg with less than <strong>10AA</strong> is <strong>190€</strong><br />1-5mg with <strong>10-25AA</strong> is <strong>18€/AA</strong></p>
                                        </div>
                                     </div>
                                </div>
                            </div>
                            <div className="col-span-12 md:col-span-4">
                            <div className="py-2">
                                    <div className="" style={{ 
                                        padding:'0 15px 30px'
                                     }}>

                                        <div className="py-[20px] text-[#323335]">
                                            <h3 className='text-[24px]  poppins-semi-bold mb-[20px] '>
                                            <br />
                                            </h3>
                                            <p className='text-[18px]  poppins-regular '>5-10mg with less than <strong>10AA</strong> is <strong>230€</strong><br />5-10mg with <strong>10-25AA</strong> is <strong>21€/AA</strong></p>
                                        </div>
                                     </div>
                                </div>
                            </div>
                            <div className="col-span-12 md:col-span-4">
                            <div className="py-2">
                                    <div className="" style={{ 
                                        padding:'0 15px 30px'
                                     }}>

                                        <div className="py-[20px] text-[#323335]">
                                            <h3 className='text-[24px]  poppins-semi-bold mb-[20px] '>
                                            <br />
                                            </h3>
                                            <p className='text-[18px]  poppins-regular '>
                                            10-20mg with less than <strong>10AA</strong> is <strong>250€</strong><br />10-20mg with <strong>10-25AA</strong> is <strong>25€/AA</strong>
                                                </p>
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
