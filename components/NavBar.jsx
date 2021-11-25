import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Open from "../components/icons/Open";
import Closed from "../components/icons/Closed";

const Links = ({ classes }) => {
    return (
        <div className={classes}>
            <div>
                <a href="">
                    Acerca de
                </a>
            </div>
            <div>
                <a href="">
                    Restaurantes
                </a>
            </div>
            <div>
                <a href="">
                    Menú
                </a>
            </div>
            <div>
                <a href="">
                    Contáctanos
                </a>
            </div>
        </div>
    );
};

const NavBar = ({ navBarColor }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={`${navBarColor}`}>
            <div className="font-syne-bold flex items-center justify-between xl:justify-start px-5 pt-10 pb-7 md:px-10 xl:space-x-24 xl:py-10 mx-auto max-w-screen-2xl">
                <div className="-mt-2 xl:mt-0">
                    <a
                        href=""
                        className="font-druk-bold font-extrabold text-3xl"
                    >
                        Foodies
                    </a>
                </div>
                <div className="xl:block hidden">
                    <Links classes="flex space-x-10"
                    />
                </div>
                <div className="xl:hidden">
                    <button
                        className="w-10 h-10 focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <div>
                            {isOpen ?
                                <Closed classes="fill-current" /> :
                                <Open classes="stroke-current" />}
                        </div>
                    </button>
                </div>
            </div>
            <AnimatePresence>
                {isOpen ?
                    (<motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                    >
                        <div className="px-5 pb-9 font-syne-bold text-xl md:px-10 xl:hidden">
                            <Links
                                classes="flex flex-col space-y-9"
                            />
                        </div>
                    </motion.div>) : ""}
            </AnimatePresence>
        </div>
    );
};

export default NavBar;