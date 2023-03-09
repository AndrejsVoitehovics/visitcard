import React from "react";
import '../css/buv.css';

import "../lightbox"
import "../lightbox.css"
import lightbox from "../lightbox"


import {useTranslation} from "react-i18next";



import img1 from "../imagesBuv/1.jpg";
import img2 from "../imagesBuv/2.jpg";
import img3 from "../imagesBuv/3.jpg";
import img4 from "../imagesBuv/4.jpg";
import img5 from "../imagesBuv/5.jpg";
import img6 from "../imagesBuv/6.jpg";
import img7 from "../imagesBuv/7.jpg";
import img8 from "../imagesBuv/8.jpg";
import img9 from "../imagesBuv/9.jpg";
import img10 from "../imagesBuv/10.jpg";
import img11 from "../imagesBuv/11.jpg";
import img12 from "../imagesBuv/12.jpg";
import img13 from "../imagesBuv/13.jpg";
import img14 from "../imagesBuv/14.jpg";
import img15 from "../imagesBuv/15.jpg";
import img16 from "../imagesBuv/16.jpg";
import img17 from "../imagesBuv/17.jpg";
import img18 from "../imagesBuv/18.jpg";
import fin from "../imagesBuv/fin.jpg";








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


function Buv() {
    const {t} = useTranslation();
    return (


        <div className="bgColor">

            <div className="container-fluid d-flex justify-content-center containerInstrument buvImg1">
                <div className="row rowMaxHeight">


                    <div className="divForeText mt-5">
                        <div className="mainColor  text_24px text_bold mt-5  ">
                            {t("buvDescr")}
                        </div>
                    </div>



                </div>
            </div>


            <div className="container-fluid d-flex justify-content-center containerInstrument buvImg2">
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
                        {addPhotoInGallery(fin)}

                    </div>
                </div>
            </div>
        </div>

    );
}
export {Buv};