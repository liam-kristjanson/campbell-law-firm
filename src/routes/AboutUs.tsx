import Icon from "@mdi/react";
import HeroGraphic from "../components/HeroGraphic";
import {mdiInformationOutline } from "@mdi/js";
import useNavBar from '../components/hooks/useNavBar';
import NavBar from "../components/NavBar";
import { mdiEye } from '@mdi/js';
import { mdiBullseyeArrow } from '@mdi/js';
import { mdiHandshakeOutline } from '@mdi/js';
import Footer from "../components/Footer";


export default function AboutUs() {
    const {showMenu, handleMenuShow, handleMenuHide} = useNavBar();
return(

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

        <div className=" container mb-5">
            <div className=" row justify-content-center">
                <div className="col-8 col">

                    <div>
                        <h3 className=" text-primary"> Welcome to Campbell Law firm </h3> 
                        <p>  Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum odio odit maiores reprehenderit! Animi, labore rerum neque, necessitatibus velit assumenda error accusamus architecto et laborum modi reiciendis ad at repudiandae?</p>
                    </div>
                    <div className=" pt-4 fw-bolder text-primary">
                       <Icon path={mdiBullseyeArrow} size={1.5} className="text-primary" />   Mission Statement

                    </div>
                   <div> <p className=""> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque ut totam vero eveniet numquam iusto, recusandae, facere laborum aperiam doloribus incidunt neque praesentium quae! Temporibus expedita similique fugit vel earum. </p>

                   </div>

                   
                    <div className=" pt-4 fw-bolder text-primary"> 
                     <Icon path={mdiEye} size={1.5} className="text-primary" />  Vision Statement

                    </div>
                   <div> <p className=""> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque ut totam vero eveniet numquam iusto, recusandae, facere laborum aperiam doloribus incidunt neque praesentium quae! Temporibus expedita similique fugit vel earum. </p>

                   </div>

                   <div className=" pt-4 fw-bolder text-primary">
                      <Icon path={mdiHandshakeOutline} size={1.5} className="text-primary"  />  Core Values 

                    </div>
                   <div> <p className=""> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque ut totam vero eveniet numquam iusto, recusandae, facere laborum aperiam doloribus incidunt neque praesentium quae! Temporibus expedita similique fugit vel earum. </p>

                   </div>
                </div>
                
            </div>
            
        </div>    
        <Footer/>
    </>

)
}