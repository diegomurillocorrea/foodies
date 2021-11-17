import Layout from "../../components/Layout";
import NavBar from "../../components/NavBar";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Textarea from "../../components/Textarea";
import Footer from "../../components/Footer";
import ArrowRight from "../../components/icons/ArrowRight";
import Truck from "../../components/icons/Truck";
import Food from "../../components/icons/Food";

const Components = () => {
    return (
        <Layout title="Components">
            <div className="">
                <NavBar navBarColor="bg-black text-white" />
            </div>
            <div className="flex items-center justify-center space-x-20 py-10">
                <div>
                    <Button
                        classes="font-syne-bold space-x-3 text-lg group"
                        label="Encuentranos"
                        iconR={<ArrowRight
                            classes="stroke-current"
                        />}
                        iconRClasses="group-hover:animate-bouncer"
                    />
                </div>
                <div>
                    <Button
                        classes="font-syne-bold space-x-3 text-lg group"
                        label="Contáctanos"
                        iconR={<ArrowRight
                            classes="stroke-current"
                        />}
                        iconRClasses="group-hover:animate-bouncer"
                    />
                </div>
            </div>
            <div className="flex items-center justify-center space-x-20 py-10">
                <div>
                    <Button
                        classes="font-syne-bold space-x-3 text-lg bg-black text-white py-5 px-10 rounded hover:opacity-90 duration-300 ease-in-out"
                        label="Para llevar"
                        iconL={<Food
                            classes="fill-current"
                        />}
                    />
                </div>
                <div>
                    <Button
                        classes="font-syne-bold space-x-3 text-lg"
                        label="Domicilio"
                        iconL={<Truck
                            classes="fill-current"
                        />}
                    />
                </div>
            </div>
            <div className="bg-black flex items-center justify-center space-x-20 py-10">
                <div>
                    <Input
                        containerClasses="text-white font-noto-sans space-y-3"
                        classes="bg-transparent border border-white py-2 px-3 rounded"
                        placeholder="John Doe"
                        label="Nombre y Apellido"
                    />
                </div>
                <div>
                    <Input
                        containerClasses="text-white font-noto-sans space-y-3"
                        classes="bg-transparent border border-white py-2 px-3 rounded"
                        placeholder="j.doe@correo.com"
                        label="Correo electrónico"
                    />
                </div>
            </div>
            <div className="bg-black flex items-center justify-center py-10">
                <Textarea
                    containerClasses="text-white font-noto-sans space-y-3 w-5/12"
                    classes="bg-transparent border border-white py-2 px-3 rounded w-full h-40"
                    placeholder="El día de ahora mi experiencia fue..."
                    label="Mensaje"
                />
            </div>
            <div>
                <Footer />
            </div>
        </Layout>
    );
};

export default Components;