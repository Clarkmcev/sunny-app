import React from 'react'
import header from '../images/desktop/image-header.jpg'
import arrow from '../images/icon-arrow-down.svg'
import egg from '../images/desktop/image-transform.jpg'
import standOut from '../images/desktop/image-stand-out.jpg'
import cherry from '../images/desktop/image-graphic-design.jpg'
import photo from '../images/desktop/image-photography.jpg'
import imageEmily from '../images/image-emily.jpg'
import imageJennie from '../images/image-jennie.jpg'
import imageThomas from '../images/image-thomas.jpg'
import milk from '../images/desktop/image-gallery-milkbottles.jpg'
import ange from '../images/desktop/image-gallery-orange.jpg'
import cone from '../images/desktop/image-gallery-cone.jpg'
import cubes from '../images/desktop/image-gallery-sugarcubes.jpg'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
        <div className="text-white absolute text-8xl w-full text-center h-screen mt-64 font-bellefair">
            WE ARE CREATIVES
        <img src={arrow} alt="" className="text-center m-auto mt-20" />
        </div>
        <img src={header} alt="" className="h-screen w-full object-cover" />
        <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="col-span-1 text-left m-auto p-10 max-w-2xl">
                <h1 className="py-10 text-5xl font-bold">Transform your brand</h1>
                <p className="text-2xl">We are a full-service creative agency specializing in helping brands grow fast.
                    Engage your clients through compelling visuals that do most of the marketing for you.</p>
                <button className="text-2xl">Learn more</button>
            </div>
            <img className="col-span-1 w-full h-full" src={egg} alt="" />
            <img className="col-span-1 w-full h-full" src={standOut} alt="" />
            <div className="col-span-1 text-left m-auto p-10 max-w-xl">
                <h1 className=" py-10 text-5xl font-bold">Stand out to the right audience</h1>
                <p className="text-2xl">Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build
  and extend your brand in digital places.</p>
                <button className="text-2xl btn">Learn more</button>
            </div>
            <div className="col-span-1 w-full relative">
                <img  src={cherry} alt="" className="w-full"/>
                <div className="absolute bottom-44 left-44 max-w-2xl text-center">
                    <h1 className="py-10 text-5xl font-bold">Graphic design</h1>
                    <p className="text-2xl">Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential
                    clients’ attention.</p>
                </div>
            </div>
            <div className="col-span-1 w-full relative">
                <img  src={photo} alt="" className="w-full"/>
                <div className="absolute bottom-44 left-44 max-w-2xl text-center">
                    <h1 className="py-10 text-5xl font-bold">Photography</h1>
                    <p className="text-2xl">Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
                </div>
            </div>
        </div>
        <div className="p-20 flex flex-col justify-center items-center">
            <div className="text-3xl p-10 font-bellefair">CLIENT TESTIMONIALS</div>
            <div className="flex flex-wrap justify-center space-x-6 ">
                <div className="max-w-xl flex flex-col items-center text-center space-y-6">
                    <img src={imageEmily} alt="" className="rounded-full"/>
                    <p className="text-2xl">We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
                    <div>
                        <h1  className="font-bold text-">Emily R.</h1>
                        <h2>Marketing Director</h2>
                    </div>
                </div>
                <div className="max-w-xl flex flex-col items-center text-center space-y-6">
                    <img src={imageJennie} alt="" className="rounded-full"/>
                    <p className="text-2xl">Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.</p>
                    <div>
                        <h1 className="font-bold text-base">Thomas S.</h1>
                        <h2>Chief Operating Officer</h2>
                    </div>
                </div>
                <div className="max-w-xl flex flex-col items-center text-center space-y-6">
                    <img src={imageThomas} alt="" className="rounded-full"/>
                    <p className="text-2xl">Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!</p>
                    <div>
                        <h1 className="font-bold text-">Jennie F.</h1>
                        <h2>Business Owner</h2>
                    </div>
                </div>
            </div>
        </div>
        <div className="grid grid-cols-4">
        <img src={milk} alt="" className="col-span-1 m-auto"/>
        <img src={ange} alt="" className="col-span-1 m-auto"/>
        <img src={cone} alt="" className="col-span-1 m-auto"/>
        <img src={cubes} alt="" className="col-span-1 m-auto"/>
        </div>
        <Footer/>
    </div>
  )
}

export default Home