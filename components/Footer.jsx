const Footer = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center text-center space-y-5">
                <div className="space-y-5 border-b-2 border-yellow-500 py-5">
                    <div>
                        <p className="font-druk-bold text-dark-350 text-3xl">
                            Foodies
                        </p>
                    </div>
                    <div className="flex items-center justify-between -space-x-10">
                        <div>
                            <button
                                className="w-9/12 focus:outline-none"
                            >
                                <img
                                    src="../img/apple-store.png" alt="Apple store image"
                                />
                            </button>
                        </div>
                        <div>
                            <button
                                className="w-9/12 focus:outline-none"
                            >
                                <img
                                    src="../img/play-store.png" alt="Play store image"
                                />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="space-y-5 text-gray-600 text-lg">
                    <div>
                        <a>
                            Conoce nuestras sucursales
                        </a>
                    </div>
                    <div>
                        <a>
                            Acerca de
                        </a>
                    </div>
                    <div>
                        <a>
                            Conoce nuestras sucursales
                        </a>
                    </div>
                    <div>
                        <a>
                            ¿Qué hablan de nosotros?
                        </a>
                    </div>
                    <div>
                        <a>
                            Contáctanos
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;