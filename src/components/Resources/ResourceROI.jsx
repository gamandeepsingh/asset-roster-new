import React, { useState } from 'react';

const ResourceROI = () => {
    const [assetLossInputs, setAssetLossInputs] = useState({
        users: 100,
        assets: 50,
        avgAssetValue: 1000,
        estAssetsLostAnnually: 10,
        assetTrackPercentage: 50,
    });

    const [ghostAssetInputs, setGhostAssetInputs] = useState({
        ghostAssetPercentage: 30,
        lifeRemainingPercentage: 70,
        federalTaxRate: 20,
        stateTaxRate: 10,
        propertyTaxRate: 5,
        insuranceRate: 2,
    });

    const [locatingAssetInputs, setLocatingAssetInputs] = useState({
        workDaysSpent: 20,
        annualSalary: 50000,
    });

    const calculateAnnualAssetLoss = () => {
        const avgAssetValue = parseFloat(assetLossInputs.avgAssetValue);
        const estAssetsLostAnnually = parseFloat(assetLossInputs.estAssetsLostAnnually);
        const assetTrackPercentage = parseFloat(assetLossInputs.assetTrackPercentage) / 100; 

        return avgAssetValue * estAssetsLostAnnually * assetTrackPercentage;
    };

    const calculateGhostAssetValue = () => {
        const ghostAssetPercentage = parseFloat(ghostAssetInputs.ghostAssetPercentage);
        const lifeRemainingPercentage = parseFloat(ghostAssetInputs.lifeRemainingPercentage);
        const avgAssetValue = parseFloat(assetLossInputs.avgAssetValue);
        return (avgAssetValue * ghostAssetPercentage * lifeRemainingPercentage) / 10000;
    };

    const calculateCostOfAudits = () => {
        const workDaysSpent = parseFloat(locatingAssetInputs.workDaysSpent);
        const annualSalary = parseFloat(locatingAssetInputs.annualSalary);
        return (annualSalary / 365) * workDaysSpent;
    };

    const handleAssetLossChange = (e) => {
        const { name, value } = e.target;
        setAssetLossInputs(prevState => ({
            ...prevState,
            [name]: Number(value), 
        }));
    };

    const handleGhostAssetChange = (e) => {
        const { name, value } = e.target;
        setGhostAssetInputs(prevState => ({
            ...prevState,
            [name]: Number(value), 
        }));
    };

    const handleLocatingAssetChange = (e) => {
        const { name, value } = e.target;
        setLocatingAssetInputs(prevState => ({
            ...prevState,
            [name]: Number(value), 
        }));
    };

    const calculateSavingsOnAssetLoss = () => {
        return calculateAnnualAssetLoss(); 
    };

    const calculateSavingsOnTaxesAndInsurance = () => {
        const ghostAssetValue = calculateGhostAssetValue(); 
        const federalTaxRate = parseFloat(ghostAssetInputs.federalTaxRate) / 100;
        const stateTaxRate = parseFloat(ghostAssetInputs.stateTaxRate) / 100;
        const propertyTaxRate = parseFloat(ghostAssetInputs.propertyTaxRate) / 100;
        const insuranceRate = parseFloat(ghostAssetInputs.insuranceRate) / 100;

        
        return ghostAssetValue * (federalTaxRate + stateTaxRate + propertyTaxRate + insuranceRate);
    };

    const calculateSavingsThroughAudits = () => {
        return calculateCostOfAudits(); 
    };

    const calculateTotalAnnualSavings = () => {
        return (
            calculateSavingsOnAssetLoss() +
            calculateSavingsOnTaxesAndInsurance() +
            calculateSavingsThroughAudits()
        );
    };

    const calculateDailyLoss = () => {
        return calculateAnnualAssetLoss() / 365; 
    };

    return (
        <div className='w-screen flex flex-col items-center'>
            <div className='w-full mx-auto px-4 md:px-28 flex flex-col items-center md:block  mt-6'>
                <div className='w-full flex justify-center'>
                    <h1 className='text-4xl font-extrabold  text-center w-fit m-3 font-dmSans' >ROI Calculator Software</h1>
                </div>
                <div className='flex flex-wrap justify-center md:justify-between items-center my-10'>
                    <div className='w-full md:w-1/2 flex flex-col min-h-[200px] justify-evenly'>
                        <p className='text-2xl md:w-5/6 font-semibold text-center md:text-start font-dmSans'>Calculate ROI efficiently, easily & precisely!</p>
                        <p className='font-dmSans text-lg md:w-5/6 mt-2 text-dark/60 md:text-start text-center'>
                            Use the ROI (Return on Investment) calculator to know overall profit or loss on
                            your investment. You can also calculate the remaining value of assets,
                            total cost of assets and audit cost etc.
                        </p>
                    </div>
                    <div className='w-full md:w-1/2 flex justify-center items-center md:block mt-5 md:mt-0'>
                        <img
                            src="https://images.pexels.com/photos/6120218/pexels-photo-6120218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            className='rounded-md h-full w-full'
                            alt=""
                        />
                    </div>
                </div>

                {/* calculator */}
                <div className='grid grid-cols-1 md:grid-cols-3 md:grid-rows-1 gap-4 mb-10 mt-20'>
                    <div className='grid col-span-2 gap-3'>
                        <div className='col-span-1 bg-light/50 shadow-md rounded-md border-t-[5px] border-t-green px-5 py-10'>
                            <h3 className='text-2xl  text-center md:text-start font-dmSans'>Calculate Current Asset Loss</h3>
                            <form action="" className='my-5'>
                                <div className='grid grid-cols-1 grid-rows-4 sm:grid-cols-2 sm:grid-rows-2 gap-5'>
                                    <div className="input-group">
                                        <label htmlFor="users" className='uppercase font-dmSans'>No. of users</label>
                                        <input
                                            className=''
                                            type="number"
                                            name="users"
                                            id="users"
                                            placeholder="No. of users"
                                            value={assetLossInputs.users}
                                            onChange={handleAssetLossChange}
                                        />
                                    </div>
                                    <div className="input-group">
                                        <label htmlFor="assets" className='uppercase font-dmSans'>No. of assets</label>
                                        <input
                                            type="number"
                                            name="assets"
                                            id="assets"
                                            placeholder="No. of assets"
                                            value={assetLossInputs.assets}
                                            onChange={handleAssetLossChange}
                                        />
                                    </div>
                                    <div className="input-group">
                                        <label htmlFor="avgAssetValue" className='uppercase font-dmSans'>AVG. ASSET VALUE</label>
                                        <input
                                            type="number"
                                            name="avgAssetValue"
                                            id="avgAssetValue"
                                            placeholder="avg asset value"
                                            value={assetLossInputs.avgAssetValue}
                                            onChange={handleAssetLossChange}
                                        />
                                    </div>
                                    <div className="input-group">
                                        <label htmlFor="estAssetsLostAnnually" className='uppercase'>Est. ASSETS lost annually</label>
                                        <input
                                            type="number"
                                            name="estAssetsLostAnnually"
                                            id="estAssetsLostAnnually"
                                            placeholder="est. assets lost annually"
                                            value={assetLossInputs.estAssetsLostAnnually}
                                            onChange={handleAssetLossChange}
                                        />
                                    </div>
                                </div>

                                {/* range */}
                                <div className='mt-4 flex flex-col gap-4'>
                                    <div className='w-full flex flex-wrap justify-between'>
                                        <h4 className='text-xl text-dark font-bold font-dmSans'>How many assets do you currently track? (%)</h4>
                                        <p className='text-lg font-bold'> {assetLossInputs.assetTrackPercentage}% </p>
                                    </div>
                                    <input
                                        className='w-full'
                                        type="range"
                                        name="assetTrackPercentage"
                                        id="assetTrackPercentage"
                                        min="10"
                                        max="100"
                                        value={assetLossInputs.assetTrackPercentage}
                                        onChange={handleAssetLossChange}
                                    />
                                    <div className='font-dmSans flex flex-wrap justify-between w-full text-2xl'>
                                        <p>Annual Asset Loss Value</p>
                                        <p className='text-green'>${calculateAnnualAssetLoss().toFixed(3) || "0.00"}</p>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className='col-span-1 bg-light/50 shadow-md rounded-md border-t-[5px] border-t-green px-5 py-10'>
                            <h3 className='text-2xl font-dmSans'>Calculate Current Ghost Asset Cost</h3>
                            <form action="" className='my-5'>
                                {/* range */}
                                <div className='mt-4 flex flex-col gap-4'>
                                    <div className='w-full flex justify-between'>
                                        <h4 className='text-xl text-dark font-bold font-dmSans'>How many of your assets are ghost assets? (%)</h4>
                                        <p className='text-lg font-bold'>{ghostAssetInputs.ghostAssetPercentage}%</p> {/* Display value */}
                                    </div>
                                    <input
                                        className='w-full'
                                        type="range"
                                        name="ghostAssetPercentage"
                                        id="ghostAssetPercentage"
                                        min="10"
                                        max="100"
                                        value={ghostAssetInputs.ghostAssetPercentage}
                                        onChange={handleGhostAssetChange}
                                    />
                                    <div className='w-full flex justify-between'>
                                        <h4 className='text-xl text-dark font-bold font-dmSans'>Life Remaining of the ghost assets (%)</h4>
                                        <p className='text-lg font-bold'>{ghostAssetInputs.lifeRemainingPercentage}%</p> {/* Display value */}
                                    </div>
                                    <input
                                        className='w-full'
                                        type="range"
                                        name="lifeRemainingPercentage"
                                        id="lifeRemainingPercentage"
                                        min="10"
                                        max="100"
                                        value={ghostAssetInputs.lifeRemainingPercentage}
                                        onChange={handleGhostAssetChange}
                                    />

                                    <div className='flex flex-wrap justify-between w-full text-2xl'>
                                        <p className='font-dmSans'>Value of Ghost Assets</p>
                                        <p className='text-green'>${calculateGhostAssetValue().toFixed(3)}</p>
                                    </div>
                                </div>
                                <div className='grid sm:grid-cols-2 sm:grid-rows-2 gap-5'>
                                    <div className="input-group">
                                        <label htmlFor="federalTaxRate" className='font-dmSans uppercase'>Your country's federal/central tax rate (%)</label>
                                        <input
                                            type="number"
                                            name="federalTaxRate"
                                            id="federalTaxRate"
                                            placeholder="Federal tax rate"
                                            value={ghostAssetInputs.federalTaxRate}
                                            onChange={handleGhostAssetChange}
                                        />
                                    </div>
                                    <div className="input-group">
                                        <label htmlFor="stateTaxRate" className='uppercase font-dmSans'>State/Province Tax Rate (%)</label>
                                        <input
                                            type="number"
                                            name="stateTaxRate"
                                            id="stateTaxRate"
                                            placeholder="State/Province Tax Rate"
                                            value={ghostAssetInputs.stateTaxRate}
                                            onChange={handleGhostAssetChange}
                                        />
                                    </div>
                                    <div className="input-group">
                                        <label htmlFor="propertyTaxRate" className='uppercase font-dmSans'>Your Property Tax Rate (%)</label>
                                        <input
                                            type="number"
                                            name="propertyTaxRate"
                                            id="propertyTaxRate"
                                            placeholder="Property Tax Rate"
                                            value={ghostAssetInputs.propertyTaxRate}
                                            onChange={handleGhostAssetChange}
                                        />
                                    </div>
                                    <div className="input-group">
                                        <label htmlFor="insuranceRate" className='uppercase font-dmSans'>Your Insurance Rate (%)</label>
                                        <input
                                            type="number"
                                            name="insuranceRate"
                                            id="insuranceRate"
                                            placeholder="Insurance Rate"
                                            value={ghostAssetInputs.insuranceRate}
                                            onChange={handleGhostAssetChange}
                                        />
                                    </div>
                                </div>
                                <div className='flex font-dmSans flex-wrap justify-between w-full text-2xl mt-5'>
                                    <p className='font-dmSans'>Money Stuck in Ghost Assets</p>
                                    <p className='text-green'>${calculateGhostAssetValue().toFixed(3)}</p>
                                </div>
                            </form>
                        </div>
                        <div className='col-span-1 bg-light/50 shadow-md rounded-md border-t-[5px] border-t-green px-5 py-10'>
                            <h3 className='text-2xl font-dmSans'>Calculate Cost of Audits & Scanning</h3>
                            <form action="" className='my-5'>
                                <div className='mt-4 grid md:grid-cols-2 gap-4'>
                                    <div className="input-group">
                                        <label htmlFor="insuranceRate" className='uppercase font-dmSans'>How many workdays are spent locating assets?</label>
                                        <input
                                            type="number"
                                            name="workDaysSpent"
                                            id="workDaysSpent"
                                            placeholder="work day spent"
                                            value={locatingAssetInputs.workDaysSpent}
                                            onChange={handleLocatingAssetChange}
                                        />
                                    </div>
                                    <div className="input-group">
                                        <label htmlFor="insuranceRate" className='uppercase font-dmSans'>Employee annual salary</label>
                                        <input
                                            type="number"
                                            name="annualSalary"
                                            id="annualSalary"
                                            placeholder="annual salary"
                                            value={ghostAssetInputs.insuranceRate}
                                            onChange={handleGhostAssetChange}
                                        />
                                    </div>
                                </div>
                                <div className='flex flex-wrap justify-between w-full text-2xl mt-5'>
                                    <p className='font-dmSans'>Total Cost of Audits</p>
                                    <p className='text-green'>${calculateCostOfAudits().toFixed(3)}</p>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* text section */}
                    <div className='col-span-1 bg-light/50 shadow-md rounded-md border-t-[5px] border-t-green px-5 py-10'>
                        <h3 className='text-2xl md:text-4xl mb-2 font-dmSans'>Savings Summary</h3>
                        <p className='text-md font-dmSans'>Savings on asset loss:
                            <br /> <span className='font-bold text-xl'>${calculateSavingsOnAssetLoss().toFixed(3)}</span></p>
                        <p className='text-md font-dmSans'>Savings on taxes & insurance:
                            <br /> <span className='font-bold text-xl'>${calculateSavingsOnTaxesAndInsurance().toFixed(3)}</span></p>
                        <p className='text-md font-dmSans'>Savings through audits:
                            <br /> <span className='font-bold text-xl'>${calculateSavingsThroughAudits().toFixed(3)}</span></p>
                        <br />
                        <p className='text-sm font-bold text-green font-dmSans'>Annual Savings:
                            <br /> <span className='font-bold text-xl'>${calculateTotalAnnualSavings().toFixed(3)}</span></p>
                        <br />
                        <p className='text-sm font-bold text-green font-dmSans'>Daily loss being incurred:
                            <br /> <span className='font-bold text-xl'>${calculateDailyLoss().toFixed(3)}</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResourceROI;
