import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ResourceTools = () => {
    const navigate = useNavigate();
    return (
        <section className="w-full px-4 md:px-28 py-12 text-slate-800" id="tools">
            <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end md:px-8">
                <h2 className="max-w-lg text-4xl font-bold md:text-5xl font-dmSans">
                    Grow faster with our
                    <span className="text-green"> all in one solution</span>
                </h2>
                <a href="/resources/maintenance-calculator">
                    <button className="rounded-md md:text-lg text-xs border-2  bg-light text-dark border-dark px-6 py-3 font-semibold uppercase  transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-md active:shadow-none my-2 md:my-5 whitespace-nowrap ">
                        Learn More
                    </button>
                </a>
            </div>
            <div className="mb-4 grid grid-cols-12 gap-4">
                <BounceCard className="col-span-12 md:col-span-4"
                >
                    <CardTitle>QR Code Generator</CardTitle>
                    <div
                        onClick={() => navigate("/resources/qr-code-generator")} className="absolute bottom-0 left-4  cursor-pointer right-4 top-32 translate-y-8 rounded-t-2xl overflow-hidden p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
                        <img src="https://images.fastcompany.com/image/upload/wp-cms/uploads/2022/04/p-1-how-qr-codes-work-and-what-makes-them-dangerous.jpg" alt=""
                            className="absolute inset-0 w-full h-full object-contain" />
                    </div>
                </BounceCard>
                <BounceCard className="col-span-12 md:col-span-8">
                    <CardTitle>Maintenance Calculator</CardTitle>
                    <div
                        onClick={() => navigate("/resources/maintenance-calculator")} className="absolute bottom-0 left-4 overflow-hidden cursor-pointer right-4 top-32 translate-y-8 rounded-t-2xl p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
                        <img src="https://t3.ftcdn.net/jpg/08/78/39/32/360_F_878393216_yN1vWSZQT3KGPnAnjbqombxQvCKu1HwF.jpg" alt=""
                            className="absolute inset-0 w-full h-full object-cover" />
                    </div>
                </BounceCard>
            </div>
            <div className="grid grid-cols-12 gap-4">
                <BounceCard className="col-span-12 md:col-span-8">
                    <CardTitle>Asset ROI Calculator</CardTitle>
                    <div
                        onClick={() => navigate("/resources/roi-calculator")} className="absolute bottom-0 left-4  cursor-pointer right-4 top-32 translate-y-8 rounded-t-2xl overflow-hidden  p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
                        <img src="https://www.shutterstock.com/image-photo/big-black-calculator-lies-on-600nw-2162616549.jpg" alt=""
                            className="absolute inset-0 w-full h-full object-cover" />
                    </div>
                </BounceCard>
                <BounceCard className="col-span-12 md:col-span-4">
                    <CardTitle>Barcode Generator</CardTitle>
                    <div
                        onClick={() => navigate("/resources/barcode-generator")} className="absolute bottom-0 left-4  cursor-pointer right-4 top-32 translate-y-8 rounded-t-2xl overflow-hidden p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
                        <img src="https://www.boxentriq.com/img/boxentriq-barcode-sample.png" alt=""
                            className="absolute inset-0 w-full h-full object-contain" />
                    </div>
                </BounceCard>
            </div>
        </section>
    );
};

const BounceCard = ({ className, children }) => {
    return (
        <motion.div
            whileHover={{ scale: 0.95, rotate: "-1deg" }}
            className={`group relative min-h-[300px] overflow-hidden rounded-md bg-dark/10 p-8 ${className}`}
        >
            {children}
        </motion.div>
    );
};

const CardTitle = ({ children }) => {
    return (
        <h3 className="mx-auto font-dmSans text-center text-3xl font-semibold">{children}</h3>
    );
};

export default ResourceTools;