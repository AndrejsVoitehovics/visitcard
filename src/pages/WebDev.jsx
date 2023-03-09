import React from "react";
import '../css/FurnitureCss.css';
import '../css/it.css';
import java from "../imagesItInstr/javaFin.jpg";
import hibernate from "../imagesItInstr/hibernateFin.jpg";
import javascript from "../imagesItInstr/javaScriptFin.jpg";
import spring from "../imagesItInstr/springFin.jpg";
import react from "../imagesItInstr/reactFin.jpg";
import reactRouter from "../imagesItInstr/reactRouterFin.jpg";
import html from "../imagesItInstr/htmlFin.jpg";
import css from "../imagesItInstr/cssFin.jpg";
import gitHub from "../imagesItInstr/gitHubFin.jpg";
import i18next from "../imagesItInstr/i18NextFin.jpg";
import bootstrap from "../imagesItInstr/bootStrapFin.jpg";
import idea from "../imagesItInstr/intelliJFin.jpg";
import CSharp from "../imagesItInstr/CSharp.jpg";
import android from "../imagesItInstr/android.jpg";

import img1 from "../imagesWebDev/1.jpg";
import img2 from "../imagesWebDev/2.jpg";
import img3 from "../imagesWebDev/3.jpg";
import img4 from "../imagesWebDev/4.jpg";
import img5 from "../imagesWebDev/5.jpg";

import {useTranslation} from "react-i18next";

import "../lightbox"
import "../lightbox.css"
import lightbox from "../lightbox"


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



function WebDev() {
    const {t} = useTranslation();
    return (

        <div className="bgColor">

            <div className="container-fluid d-flex justify-content-center containerInstrument itImg1">
                <div className="row rowMaxHeight">


                    <div className="divForeText mt-5">
                        <div className="mainColor  text_24px text_bold mt-5  ">
                            {t("itDescr")}
                        </div>
                    </div>
                    <div className="text-center mt-5 mb-3">
                        <div className="mainColor text_18px text_bold  ">
                            {t("itSkills")}
                        </div>

                    <div className="row rowMaxHeight">


                        {addPhotoInstruments(java)}
                        {addPhotoInstruments(javascript)}
                        {addPhotoInstruments(html)}
                        {addPhotoInstruments(css)}
                        {addPhotoInstruments(spring)}
                        {addPhotoInstruments(hibernate)}
                        {addPhotoInstruments(react)}
                        {addPhotoInstruments(reactRouter)}
                        {addPhotoInstruments(i18next)}
                        {addPhotoInstruments(gitHub)}
                        {addPhotoInstruments(bootstrap)}
                        {addPhotoInstruments(idea)}
                        {addPhotoInstruments(CSharp)}
                        {addPhotoInstruments(android)}

                        </div>

                    </div>
                </div>
            </div>


            <div className="container-fluid d-flex justify-content-center containerInstrument itImg2">


                <div className="galleryWrapper container ">
                    <div className="divForeText pt-3 pb-5 ">
                        <div className="mainColor  text_18px text_bold">
                            {t("itDev")}
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

                    </div>


                </div>
            </div>
        </div>


    );
}
export {WebDev};