import { useState } from "react";
import Open from "../components/icons/Open";
import Closed from "../components/icons/Closed";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
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
                <div className="xl:block">
                    <button 
                        className="w-10 h-10" 
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? 
                        <Closed classes="fill-current text-black" /> : 
                        <Open classes="stroke-current text-black" />}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;