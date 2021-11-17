import Layout from "../../components/Layout";
import NavBar from "../../components/NavBar";
import Button from "../../components/Button";
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
                        classes="font-syne-bold space-x-3 text-lg group"
                        label="Para llevar"
                        iconL={<Food
                            classes="fill-current"
                        />}
                        iconRClasses="group-hover:animate-bouncer"
                    />
                </div>
                <div>
                    <Button
                        classes="font-syne-bold space-x-3 text-lg group"
                        label="Domicilio"
                        iconL={<Truck
                            classes="fill-current"
                        />}
                        iconRClasses="group-hover:animate-bouncer"
                    />
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </Layout>
    );
};

export default Components;