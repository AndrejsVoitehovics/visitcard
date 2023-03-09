import React from "react";
import '../css/FurnitureCss.css';
import '../css/modeling.css';

import {useTranslation} from "react-i18next";

import "../lightbox"
import "../lightbox.css"
import lightbox from "../lightbox"
import wh40k from "../imagesModelingInstr/40k1.jpg";
import aoc from "../imagesModelingInstr/aos1.jpg";
import malifaux from "../imagesModelingInstr/malifaux1.jpg";
import warmash from "../imagesModelingInstr/warmash1.jpg";
import infinity from "../imagesModelingInstr/infinity1.jpg";


import img1 from "../imagesWebDev/1.jpg";



lightbox.option({
    'resizeDuration': 400,
    'wrapAround': true
})

function addPhotoInstruments(imgModel){
    return(
        <div className="col ">
            <div className="skillDiv">
                <img src={imgModel} className="imgShrink" alt="..."/>
            </div>
        </div>
    );
}


function addPhotoInGallery(img) {
    return (
        <div className="col-lg-3 col-md-4 col-6 imgForGallery mt-2  ">
            <a href={img} className="d-block mb-4 h-100" data-lightbox="roadtrip">
                <img className="img-fluid  imgForGalleryImg h-100"
                     src={img} alt=""/>
            </a>
        </div>
    );
}



function MiniatureWargaming() {
    const {t} = useTranslation();
    return (

        <div className="bgColor">

            <div className="container-fluid d-flex justify-content-center containerInstrument modelImg1">
                <div className="row rowMaxHeight">


                    <div className="divForeText mt-5">
                        <div className="mainColor  text_24px text_bold mt-5  ">
                            {t("modelingDescr")}
                        </div>
                    </div>
                    <div className="text-center mt-5 mb-3">

                        <div className="row rowMaxHeight">


                            {addPhotoInstruments(wh40k)}
                            {addPhotoInstruments(aoc)}
                            {addPhotoInstruments(warmash)}
                            {addPhotoInstruments(malifaux)}
                            {addPhotoInstruments(infinity)}


                        </div>

                    </div>
                </div>
            </div>


            <div className="container-fluid d-flex justify-content-center containerInstrument modelImg2">


                <div className="galleryWrapper container ">
                    <div className="divForeText pt-3 pb-5 ">
                        <div className="mainColor  text_28px text_bold">
                            {t("myModels")}
                        </div>
                    </div>
                    <div className="row ">



                    </div>
                    <div className="row ">

                        {addPhotoInGallery(img1)}


                    </div>


                </div>
            </div>
        </div>

    );
}
export {MiniatureWargaming};