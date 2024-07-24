import { Fragment } from "react"
import { BsBag } from "@react-icons/all-files/bs/BsBag";
import { BsPerson } from "@react-icons/all-files/bs/BsPerson";
import { MdMenu } from "@react-icons/all-files/md/MdMenu";


const Hero = () => {
    return (
        <Fragment>

            <section id="herosection">
                <div className="navsec">
                    <a className="logo" href="/">beej</a>
                    <nav>
                        <a href="/">about</a>
                        <a href="#hovertxtsection">sustainability</a>
                        <a href="#shopsection">shop</a>
                    </nav>
                    <a href="https://www.ting.in/" className="bag"><BsBag /></a>
                    <a href="https://www.ting.in/" className="profile"><BsPerson /></a>
                    <a href="https://www.ting.in/" className="menu"><MdMenu /></a>
                </div>
                <div className="heropara">
                    <h1>Cruelty-Free Living Starts Here</h1><br />
                    <h1>save the world</h1><br />
                    <h1>Purchase the product which filed with Kindness</h1>
                </div>
            </section>



        </Fragment>
    )



}
export default Hero;