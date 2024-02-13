const Dashboard = () => {
    return (
        <section className="max-w-[1170px] px-5 mx-auto">
            <div className="grid lg:grid-cols-3 gap-[30px] lg:gap-[50px]">
                <div className="lg:col-span-2">
                    <div className="mt-8">
                        <div>
                            <div className="flex items-center gap-4 mb-10">
                                <figure className="max-w-[200px] max-h-[200px]">
                                    <img src='' alt="" className="w-full" />
                                </figure>

                                <div>
                                    <span className="bg-[#CCF0F3] text-irisBlueColor py1 px-4 lg:py-2 lg:px-6 rounded
                                            text-[12px] leading-4 lg:text-[16px] lg:leading-6 font-semibold">
                                        Specialization
                                    </span>


                                    <h3 className="text-[22px] leading-9 font-bold text-headingColor mt-3">
                                        Name
                                    </h3>

                                    <div className="flex items-center gap-[6px]">
                                        <span className="flex items-center gap-[6px] text-headingColor text-[14px] 
                                                        leading-5 lg:text-[16px] lg:leading-6 font-semibold">
                                            <img src="/assets/images/Star.png" alt="" />
                                            Average rating
                                        </span>

                                        <span className="text-textColor text-[14px] leading-5 lg:text-[16px] 
                                                        lg:leading-6 font-semibold">
                                            Total rating
                                        </span>
                                    </div>

                                    <p className="text__para text-[15px] lg:max-w-[390px] leading-6">
                                        Bio
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;