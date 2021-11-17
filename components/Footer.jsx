import Button from "./Button";

const Footer = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center text-center space-y-5 md:items-stretch md:px-5 mx-auto max-w-screen-2xl">
                <div className="space-y-5 border-b-2 border-yellow-500 py-5 md:flex md:space-y-0 md:justify-between md:items-center xl:pl-14 xl:pr-0">
                    <div className="md:pl-5">
                        <p className="font-druk-bold text-dark-350 text-3xl">
                            Foodies
                        </p>
                    </div>
                    <div className="flex items-center justify-between -space-x-10">
                        <div>
                            <Button
                                classes="w-9/12 focus:outline-none hover:opacity-90 duration-300 ease-in-out"
                                href="https://apps.apple.com/es/app/foodie-c%C3%A1mara-de-la-vida/id1076859004"
                                target="_blank"
                            >
                                <img src="../img/apple-store.png" alt="Apple store image" />
                            </Button>
                        </div>
                        <div>
                            <Button
                                classes="w-9/12 focus:outline-none hover:opacity-90 duration-300 ease-in-out"
                                href="https://play.google.com/store/apps/details?id=com.linecorp.foodcam.android&hl=es"
                                target="_blank"
                            >
                                <img src="../img/play-store.png" alt="Play store image" />
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="space-y-5 text-gray-600 text-lg md:grid md:grid-cols-3 md:space-y-0 md:gap-5 md:px-8 md:text-base xl:text-xl xl:flex xl:pl-20 xl:space-x-8">
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
                    <div className="md:text-left lg:text-center">
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