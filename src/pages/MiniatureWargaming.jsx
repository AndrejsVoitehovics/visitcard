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


import img1 from "../imagesModeling/1.jpg";
import img2 from "../imagesModeling/2.jpg";
import img3 from "../imagesModeling/3.jpg";
import img4 from "../imagesModeling/4.jpg";
import img5 from "../imagesModeling/5.jpg";
import img6 from "../imagesModeling/6.jpg";
import img7 from "../imagesModeling/7.jpg";
import img8 from "../imagesModeling/8.jpg";
import img9 from "../imagesModeling/9.jpg";
import img10 from "../imagesModeling/10.jpg";
import img11 from "../imagesModeling/11.jpg";
import img12 from "../imagesModeling/12.jpg";
import img13 from "../imagesModeling/13.jpg";
import img14 from "../imagesModeling/14.jpg";
import img15 from "../imagesModeling/15.jpg";
import img16 from "../imagesModeling/16.jpg";
import img17 from "../imagesModeling/17.jpg";
import img18 from "../imagesModeling/18.jpg";
import img19 from "../imagesModeling/19.jpg";
import img20 from "../imagesModeling/20.jpg";




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
                        {addPhotoInGallery(img2)}
                        {addPhotoInGallery(img3)}
                        {addPhotoInGallery(img4)}
                        {addPhotoInGallery(img5)}
                        {addPhotoInGallery(img6)}
                        {addPhotoInGallery(img7)}
                        {addPhotoInGallery(img8)}
                        {addPhotoInGallery(img9)}
                        {addPhotoInGallery(img10)}
                        {addPhotoInGallery(img11)}
                        {addPhotoInGallery(img12)}
                        {addPhotoInGallery(img13)}
                        {addPhotoInGallery(img14)}
                        {addPhotoInGallery(img15)}
                        {addPhotoInGallery(img16)}
                        {addPhotoInGallery(img17)}
                        {addPhotoInGallery(img18)}
                        {addPhotoInGallery(img19)}
                        {addPhotoInGallery(img20)}


                    </div>


                </div>
            </div>
        </div>

    );
}
export {MiniatureWargaming};