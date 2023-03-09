import React from "react";
import '../css/FurnitureCss.css';
import '../css/geo.css';
import autocad from "../ImagesGeoInstr/Autocad_fin.jpg";
import corel from "../ImagesGeoInstr/corel_fin.jpg";
import office from "../ImagesGeoInstr/office_fin.jpg";
import surfer from "../ImagesGeoInstr/surfer_fin.jpg";
import grapher from "../ImagesGeoInstr/grapher_fin.jpg";
import photoshop from "../ImagesGeoInstr/photoshop_fin.jpg";
import radex from "../ImagesGeoInstr/radex_fin.jpg";


import {useTranslation} from "react-i18next";

import "../lightbox"
import "../lightbox.css"
import lightbox from "../lightbox"

import img1 from "../ImagesGeo/1.jpg"
import img2 from "../ImagesGeo/2.jpg"
import img3 from "../ImagesGeo/3.png"
import img4 from "../ImagesGeo/4.jpg"
import img5 from "../ImagesGeo/5.png"
import img6 from "../ImagesGeo/6.jpg"
import img7 from "../ImagesGeo/7.jpg"
import img8 from "../ImagesGeo/8.png"
import img9 from "../ImagesGeo/9.png"
import img10 from "../ImagesGeo/10.jpg"
import img11 from "../ImagesGeo/11.jpg"
import img12 from "../ImagesGeo/12.jpg"
import img13 from "../ImagesGeo/13.jpg"
import img14 from "../ImagesGeo/14.jpg"
import img15 from "../ImagesGeo/15.jpg"
import img16 from "../ImagesGeo/16.png"
import img17 from "../ImagesGeo/17.jpg"
import img18 from "../ImagesGeo/18.png"
import img19 from "../ImagesGeo/19.jpg"
import img20 from "../ImagesGeo/20.jpg"
import img21 from "../ImagesGeo/21.jpg"
import img22 from "../ImagesGeo/22.jpg"
import img23 from "../ImagesGeo/23.jpg"
import img24 from "../ImagesGeo/24.jpg"
import img25 from "../ImagesGeo/25.jpg"
import img26 from "../ImagesGeo/26.jpg"









lightbox.option({
    'resizeDuration': 400,
    'wrapAround': true
})


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
export default addPhotoInGallery();


function Geo() {
    const {t} = useTranslation();
    return (


        <div className="bgColor">

            <div className="container-fluid d-flex justify-content-center containerInstrument geoImg1">
                <div className="row rowMaxHeight">


                    <div className="divForeText mt-5">
                        <div className="mainColor  text_24px text_bold mt-5  ">
                            {t("geoDescr")}
                        </div>
                    </div>


                    <div className="row rowMaxHeight">
                        <div className="text-center mt-5 mb-3">
                            <div className="mainColor text_18px text_bold  ">
                                {t("skills-tools-geo")}
                            </div>
                        </div>
                        <div className="col  ">
                            <div className="skillDiv">
                                <img src={autocad} className="imgShrink" alt="..."/>
                            </div>
                        </div>
                        <div className="col ">
                            <div className="skillDiv">
                                <img src={grapher} className="imgShrink" alt="..."/>
                            </div>
                        </div>
                        <div className="col ">
                            <div className="skillDiv">
                                <img src={surfer} className="imgShrink" alt="..."/>
                            </div>
                        </div>
                        <div className="col ">
                            <div className="skillDiv">
                                <img src={radex} className="imgShrink" alt="..."/>
                            </div>
                        </div>
                        <div className="col ">
                            <div className="skillDiv">
                                <img src={office} className="imgShrink" alt="..."/>
                            </div>
                        </div>
                        <div className="col ">
                            <div className="skillDiv">
                                <img src={corel} className="imgShrink" alt="..."/>
                            </div>
                        </div>
                        <div className="col ">
                            <div className="skillDiv">
                                <img src={photoshop} className="imgShrink" alt="..."/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container-fluid d-flex justify-content-center containerInstrument geoImg2">
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
                        {addPhotoInGallery(img19)}
                        {addPhotoInGallery(img20)}
                        {addPhotoInGallery(img21)}
                        {addPhotoInGallery(img22)}
                        {addPhotoInGallery(img23)}
                        {addPhotoInGallery(img24)}
                        {addPhotoInGallery(img25)}
                        {addPhotoInGallery(img26)}


                    </div>
                </div>
            </div>
        </div>



    );
}

export {Geo};