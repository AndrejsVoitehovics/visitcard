import React from "react";
import self from "../imagesTeh/self.jpg"
import geo from "../imagesTeh/GeoTeh2.jpg"
import {Link} from "react-router-dom";
import strojka from "../imagesTeh/strojka.jpg"
import FinWork from "../imagesTeh/FinWorks.jpg"
import Miniature from "../imagesTeh/MiniatureWargaming.jpg"
import Furniture from "../imagesTeh/BuildInFurniture.jpg"
import WebDev from "../imagesTeh/WebDev.jpg"
import {useTranslation} from "react-i18next";




function Home() {
    const {t} = useTranslation();

    return (

        <div>
            <section className="promo">
                <div className="containerHome">
                    <div className="titleOne mainColor text_24px text_bold textAnimationFromLeft"><h1 className="text_36px ">{t("hi")}</h1>
                        {t("intro")}
                        <div className="circle"></div>

                    </div>

                </div>
            </section>

            <div className="container">
                <section>
                    <div className="row secondScreen ">
                        <div className="col-md-4 col-lg-6 photoMe">
                            <img src={self} alt="photo_me" className="img-fluid"/>
                        </div>
                        <div className="col-md-10 col-lg-5">
                            <div className="textPhotoMe text_28px ">
                               {t("descrAbout")}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className="wraperSecondScreen">
                <div className="container">
                    <div className="row ">
                        <div className="col">
                            <div className="card cardWrapper border-dark ">
                                <img src={geo} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">{t("geo")}</h5>
                                    <Link to="/Geo" className="btn btn-dark btnButton">{t("next")}</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className=" card  cardWrapper border-dark">
                                <img src={strojka} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">{t("construction")}</h5>
                                    <Link to="/Buv" className="btn btn-dark btnButton">{t("next")}</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className=" card  cardWrapper border-dark">
                                <img src={FinWork} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">{t("finishworks")}</h5>
                                    <Link to="/FinishingWorks" className="btn btn-dark btnButton">{t("next")}</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card  cardWrapper border-dark">
                                <img src={WebDev} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">{t("it")}</h5>
                                    <Link to="/WebDev" className="btn btn-dark btnButton">{t("next")}</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card  cardWrapper border-dark">
                                <img src={Furniture} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">{t("meb")}</h5>

                                    <Link to="/BuildInFurniture" className="btn btn-dark btnButton">{t("next")}</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card  cardWrapper border-dark">
                                <img src={Miniature} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">{t("model")}</h5>

                                    <Link to="/MiniatureWargaming" className="btn btn-dark btnButton">{t("next")}</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    );
}

export {Home};