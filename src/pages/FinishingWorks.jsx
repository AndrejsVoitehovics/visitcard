import React from "react";
import '../css/finWork.css';

import "../lightbox"
import "../lightbox.css"
import lightbox from "../lightbox"


import {useTranslation} from "react-i18next";



import img1 from "../imagesFinWork/1.jpg";
import img2 from "../imagesFinWork/2.jpg";
import img3 from "../imagesFinWork/3.jpg";
import img4 from "../imagesFinWork/4.jpg";
import img5 from "../imagesFinWork/5.jpg";
import img6 from "../imagesFinWork/6.jpg";
import img7 from "../imagesFinWork/7.jpg";
import img8 from "../imagesFinWork/8.jpg";
import fin0 from "../imagesFinWork/fin0.jpg";
import fin1 from "../imagesFinWork/fin1.jpg";

lightbox.option({
    'resizeDuration': 400,
    'wrapAround': true
})
function addPhotoInstruments(imgInstr){
    return(
        <div className="col ">
            <div className="skillDiv">
                <img src={imgInstr} className="imgShrink" alt="..."/>
            </div>
        </div>
    );
}
export default addPhotoInstruments();

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



function FinishingWorks() {
    const {t} = useTranslation();
    return (

        <div className="bgColor">

            <div className="container-fluid d-flex justify-content-center containerInstrument finWorkImg_1">
                <div className="row rowMaxHeight">


                    <div className="divForeText mt-5">
                        <div className="mainColor  text_24px text_bold mt-5  ">
                            {t("finishingDescr")}
                        </div>
                    </div>



                </div>
            </div>


            <div className="container-fluid d-flex justify-content-center containerInstrument finWorkImg_2">
                <div className="galleryWrapper container ">
                    <div className="divForeText pt-3 pb-5 ">
                        <div className="mainColor  text_24px text_bold">
                            {t("myWorks")}
                        </div>
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
                        {addPhotoInGallery(fin0)}
                        {addPhotoInGallery(fin1)}



                    </div>
                </div>
            </div>
        </div>


    );
}
export {FinishingWorks};