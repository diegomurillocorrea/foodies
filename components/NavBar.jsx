const NavBar = () => {
    return (
        <div>
            <div className="font-noto-sans flex items-center justify-between px-5 py-10">
                <div>
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
                    <button>
                        Open
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;