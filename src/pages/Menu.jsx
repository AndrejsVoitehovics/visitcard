import {Link, Outlet} from "react-router-dom";
import React from "react";
import {useTranslation} from "react-i18next";


const Menu = () => {
    const {t, i18n} = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    return (

        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark menuItems ">
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <Link to="/Home">
                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="white"
                         className="bi bi-house-door" viewBox="0 0 16 16">
                        <path
                            d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"/>
                    </svg>
                </Link>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav ml-auto mr-auto mt-2 mt-lg-0  ">
                        <li className="nav-item active mr-5 ">
                            <Link to="/Geo" className="nav-link ">{t('geo')}</Link>
                        </li>
                        <li className="nav-item active mr-5 ">
                            <Link to="/Buv" className="nav-link ">{t("construction")}</Link>
                        </li>
                        <li className="nav-item active mr-5 ">
                            <Link to="/FinishingWorks" className="nav-link ">{t("finishworks")}</Link>
                        </li>
                        <li className="nav-item active mr-5 ">
                            <Link to="/WebDev" className="nav-link ">{t("it")}</Link>
                        </li>
                        <li className="nav-item active mr-5 ">
                            <Link to="/BuildInFurniture" className="nav-link ">{t("meb")}</Link>
                        </li>
                        <li className="nav-item active mr-5 ">
                            <Link to="/MiniatureWargaming" className="nav-link ">{t("model")}</Link>
                        </li>
                    </ul>


                </div>

                <div className="nav-item dropdown mainColor mr-5">
                    <button className="nav-link dropdown-toggle btn btn-dark mainColor" id="navbarDropdown"

                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {t("lang")}
                    </button>
                    <ul className="dropdown-menu bg-dark ">
                        <li>
                            <button className="dropdown-item btn btn-dark text-white" type="button"
                                    onClick={() => changeLanguage('en')}>
                                EN
                            </button>
                        </li>
                        <li>
                            <button className="dropdown-item btn btn-dark text-white" type="button"
                                    onClick={() => changeLanguage('ru')}>
                                RU
                            </button>
                        </li>
                        <li>
                            <button className="dropdown-item btn btn-dark text-white" type="button"
                                    onClick={() => changeLanguage('lv')}>
                                LV
                            </button>
                        </li>
                    </ul>
                </div>

            </nav>

            <Outlet/>


        </div>


    )

}
export {Menu};