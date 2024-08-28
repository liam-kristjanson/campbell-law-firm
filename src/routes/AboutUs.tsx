import Icon from "@mdi/react";
import HeroGraphic from "../components/HeroGraphic";
import { mdiInformationOutline } from "@mdi/js";
import useNavBar from '../components/hooks/useNavBar';
import NavBar from "../components/NavBar";
import { mdiEye } from '@mdi/js';
import { mdiBullseyeArrow } from '@mdi/js';
import { mdiHandshakeOutline } from '@mdi/js';
import Footer from "../components/Footer";


export default function AboutUs() {
    const { showMenu, handleMenuShow, handleMenuHide } = useNavBar();

    return (
        <>
            <div className="container">
                <NavBar
                    selectedRoute="/about-us"
                    showMenu={showMenu}
                    menuHideHandler={handleMenuHide}
                    menuShowHandler={handleMenuShow}
                />
            </div>

            <HeroGraphic
                imageSource="aboutUsV2.jpg"
                graphicText=" About Us"
                iconPath={mdiInformationOutline}
            />

            <div className="container mb-5">
                <div className="row justify-content-center">
                    <div className="col-8 col">
                        <div>
                            <h3 className="text-primary">About A.L Campbell Law Office</h3>
                            <p>
                                Founded in 1995 by Adeoti, our firm has built a legacy of trust and excellence in providing comprehensive legal services. We specialize in a broad range of practice areas including real estate law, family law, and immigration law. Our dedicated team of seasoned attorneys brings a wealth of experience and a deep understanding of the law to every case, ensuring that our clients receive the highest quality representation.
                            </p>
                        </div>
                        <div className="pt-4 fw-bolder text-primary">
                            <Icon path={mdiBullseyeArrow} size={1.5} className="text-primary" /> Mission Statement
                        </div>
                        <div>
                            <p className="">
                                To provide exceptional legal services with integrity, dedication, and a client-centered approach.
                            </p>
                        </div>
                        <div className="pt-4 fw-bolder text-primary">
                            <Icon path={mdiEye} size={1.5} className="text-primary" /> Vision Statement
                        </div>
                        <div>
                            <p className="">
                                To be the leading law firm recognized for excellence, innovation, and unwavering client commitment.
                            </p>
                        </div>
                        <div className="pt-4 fw-bolder text-primary">
                            <Icon path={mdiHandshakeOutline} size={1.5} className="text-primary" /> Core Values
                        </div>
                        <div>
                            <ul className="d-flex flex-column gap-3">
                                <li><span className="fw-bold">Integrity: </span>Upholding the highest ethical standards in all our actions.</li>
                                <li><span className="fw-bold">Dedication: </span>Committing to relentless advocacy and personalized client service.</li>
                                <li><span className="fw-bold">Excellence: </span>Striving for unparalleled quality in legal practice and client satisfaction.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
