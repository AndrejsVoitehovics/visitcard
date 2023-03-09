import React from "react";
import '../css/FurnitureCss.css';
import samet from "../imagesTeh/samet.jpg";
import blum from "../imagesTeh/blum.png";
import hettich from "../imagesTeh/hettich.jpg";
import pfeidlerer from "../imagesTeh/pfleiderer.png";
import kronospan from "../imagesTeh/kronospan.png";
import cleaf from "../imagesTeh/cleaf.jpg";
import egger from "../imagesTeh/egger.jpg";
import {useTranslation} from "react-i18next";

import "../lightbox"
import "../lightbox.css"
import lightbox from "../lightbox"

import img1 from "../imagesFurniture/komorka.jpg"
import img2 from "../imagesFurniture/shkaf_irina.jpg"
import img3 from "../imagesFurniture/komnata_skaf.jpg"
import img4 from "../imagesFurniture/kuh_darzini.jpg"
import img5 from "../imagesFurniture/mir_stol.jpg"
import img6 from "../imagesFurniture/polka_svet.jpg"
import img7 from "../imagesFurniture/gravis-1.jpg"
import img8 from "../imagesFurniture/gravis-2.jpg"
import img9 from "../imagesFurniture/skaf_mira_1.jpg"
import img10 from "../imagesFurniture/skaf_mira_2.JPEG"
import img11 from "../imagesFurniture/tumba_melnsila.JPEG"
import img12 from "../imagesFurniture/garderob_melnsila_1.JPEG"
import img13 from "../imagesFurniture/garderob_melnsila_2.JPEG"
import img14 from "../imagesFurniture/garderob_melnsila_3.JPEG"
import img15 from "../imagesFurniture/Kuh_melnsila_2.JPEG"
import img16 from "../imagesFurniture/kuh_darzini_2.jpg"
import img17 from "../imagesFurniture/polka_melnsila.JPEG"
import img18 from "../imagesFurniture/skaf_darzini_nas.JPEG"
import img19 from "../imagesFurniture/skaf_darzini_pust.jpg"
import img20 from "../imagesFurniture/vhod_melnsila_1.JPEG"
import img21 from "../imagesFurniture/stol_melnsila.JPEG"
import img22 from "../imagesFurniture/skaf_melnsila_1.JPEG"
import img23 from "../imagesFurniture/skaf_melnsila_2.JPEG"
import img24 from "../imagesFurniture/gravis-3.jpg"
import img25 from "../imagesFurniture/detskaja.jpg"
import img26 from "../imagesFurniture/gard_gravis.jpg"

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




function BuildInFurniture() {

    const {t} = useTranslation();
    return (

        <div className="bgColor">

            <div className="container-fluid d-flex justify-content-center containerInstrument bgFurnitureImg1">
                <div className="row rowMaxHeight">


                    <div className="divForeText mt-5">
                        <div className="mainColor  text_24px text_bold mt-5  ">
                            {t("discrOfMeb")}
                        </div>
                    </div>


                    <div className="row rowMaxHeight">
                        <div className="text-center mt-5 mb-3">
                            <div className="mainColor text_18px text_bold  ">
                                {t("skills-tools")}
                            </div>
                        </div>


                        {addPhotoInstruments(samet)}
                        {addPhotoInstruments(egger)}
                        {addPhotoInstruments(blum)}
                        {addPhotoInstruments(kronospan)}
                        {addPhotoInstruments(hettich)}
                        {addPhotoInstruments(pfeidlerer)}
                        {addPhotoInstruments(cleaf)}

                    </div>
                </div>
            </div>


            <div className="container-fluid d-flex justify-content-center containerInstrument bgFurnitureImg3">
                <div className="galleryWrapper container ">
                    <div className="divForeText pt-3 pb-5 ">
                        <div className="mainColor  text_24px text_bold">
                            {t("myWorks")}
                        </div>
                    </div>


                    <div className="row ">
                        {addPhotoInGallery(img18)}
                        {addPhotoInGallery(img17)}
                        {addPhotoInGallery(img3)}
                        {addPhotoInGallery(img4)}
                        {addPhotoInGallery(img16)}
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
                        {addPhotoInGallery(img2)}
                        {addPhotoInGallery(img1)}
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

export {BuildInFurniture};
