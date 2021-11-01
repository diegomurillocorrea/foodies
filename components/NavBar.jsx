import { useState } from "react";
import Open from "../components/icons/Open";
import Closed from "../components/icons/Closed";

const NavBar = ({ navBarColor }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={`${navBarColor}`}>
            <div className="font-noto-sans flex items-center justify-between px-5 py-10">
                <div className="-mt-2">
                    <a
                        href=""
                        className="font-druk-bold font-extrabold text-3xl"
                    >
                        Foodies
                    </a>
                </div>
                <div className="xl:block hidden">
                    <div>
                        <a href="">Acerca de</a>
                    </div>
                    <div>
                        <a href="">Restaurantes</a>
                    </div>
                    <div>
                        <a href="">Menú</a>
                    </div>
                    <div>
                        <a href="">Contáctanos</a>
                    </div>
                </div>
                <div className="xl:hidden">
                    <button
                        className="w-10 h-10"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ?
                            <Closed classes="fill-current" /> :
                            <Open classes="stroke-current" />}
                    </button>
                </div>
            </div>
            <div className={`${isOpen ? "block" : "hidden"}`}>
                <div className="px-5 font-noto-sans">
                    <div>
                        <a href="">Acerca de</a>
                    </div>
                    <div>
                        <a href="">Restaurantes</a>
                    </div>
                    <div>
                        <a href="">Menú</a>
                    </div>
                    <div>
                        <a href="">Contáctanos</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;