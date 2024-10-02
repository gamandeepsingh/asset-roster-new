import React from 'react'

const ResourceMaintainance = () => {
    return (
        <div className='w-screen flex flex-col items-center mt-5'>
            <div className='w-full px-4 md:px-28 mx-auto flex flex-col items-center md:block'>
                <div className='w-full flex justify-center'>
                    <h1 className='text-4xl font-dmSans font-extrabold  text-center w-fit m-3' >Maintenance Calculator Software</h1>
                </div>
                <p className='text-center font-dmSans text-2xl my-1'>Maintenance Calculator for Assets</p>
                <p className='text-center font-dmSans text-xl text-dark/50 my-1'>Calculate all kinds of maintenance-related metrics quickly with <span className='text-green'>Assets Roster</span></p>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-16 space-y-3 space-x-3 my-10'>
                    <div className='flex flex-col gap-5 shadow-md rounded-md p-5 md:p-10'>
                        <h3 className='text-center font-dmSans  font-bold text-xl'>Compliance to Maintenance Schedules</h3>
                        <div className="input-group">
                            <label htmlFor="users" className='uppercase'>Number of completed scheduled work orders on time</label>
                            <input
                                className='w-full'
                                type="number"
                                name="users"
                                id="users"
                                placeholder="No. of completed scheduled work orders"
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="users" className='uppercase'>Total scheduled work orders</label>
                            <input
                                className='w-full'
                                type="number"
                                name="users"
                                id="users"
                                placeholder="total scheduled work orders"
                            />
                        </div>
                        <button className="rounded-md border-2 text-sm md:text-lg  bg-green text-light border-black px-6 py-3 font-semibold uppercase  transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-md active:shadow-none my-2 md:my-5 ">
                            Check your compliance to schedules
                        </button>
                        <p className='text-center text-xl'>Your Scheduled Compliance is <span className='text-green'>0%</span> </p>
                    </div>
                    <div className='flex flex-col gap-5 shadow-md rounded-md p-5 md:p-10'>
                        <h3 className='text-center  font-dmSans  font-bold text-xl'>Calculate Equipment Downtime</h3>
                        <div className="input-group">
                            <label htmlFor="users" className='uppercase'>Downtime (Hrs)</label>
                            <input
                                className='w-full'
                                type="number"
                                name="users"
                                id="users"
                                placeholder="No. of completed scheduled work orders"
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="users" className='uppercase'>Total evaluation time considered (Hrs)
                            </label>
                            <input
                                className='w-full'
                                type="number"
                                name="users"
                                id="users"
                                placeholder="total scheduled work orders"
                            />
                        </div>
                        <button className="rounded-md border-2 text-sm md:text-lg  bg-green text-light border-black px-6 py-3 font-semibold uppercase  transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-md active:shadow-none my-2 md:my-5 ">
                        Check your equipment downtime
                        </button>
                        <p className='text-center text-xl'>Your Equipment Downtime is <span className='text-green'>0%</span> </p>
                    </div>
                    <div className='flex flex-col gap-5 shadow-md rounded-md p-5 md:p-10'>
                        <h3 className='text-center  font-dmSans  font-bold text-xl'>Calculate Asset Availability</h3>
                        <div className="input-group">
                            <label htmlFor="users" className='uppercase'>Asset Available for (Hrs)</label>
                            <input
                                className='w-full'
                                type="number"
                                name="users"
                                id="users"
                                placeholder="No. of completed scheduled work orders"
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="users" className='uppercase'>Planned Downtime of Asset (Hrs)</label>
                            <input
                                className='w-full'
                                type="number"
                                name="users"
                                id="users"
                                placeholder="total scheduled work orders"
                            />
                        </div>
                        <button className="rounded-md border-2 text-sm md:text-lg  bg-green text-light border-black px-6 py-3 font-semibold uppercase  transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-md active:shadow-none my-2 md:my-5 ">
                        Check Asset Availability
                        </button>
                        <p className='text-center text-xl'>Your Asset Availability is <span className='text-green'>0%</span> </p>
                    </div>
                    <div className='flex flex-col gap-5 shadow-md rounded-md p-5 md:p-10'>
                        <h3 className='text-center  font-dmSans  font-bold text-xl'>Calculate performance efficiency of your equipment</h3>
                        <div className="input-group">
                            <label htmlFor="users" className='uppercase'>No. of equipment to calculate for</label>
                            <input
                                className='w-full'
                                type="number"
                                name="users"
                                id="users"
                                placeholder="No. of completed scheduled work orders"
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="users" className='uppercase'>How many minutes should each cycle take (out-of-box)?</label>
                            <input
                                className='w-full'
                                type="number"
                                name="users"
                                id="users"
                                placeholder="total scheduled work orders"
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="users" className='uppercase'>How many minutes does a cycle actually take?</label>
                            <input
                                className='w-full'
                                type="number"
                                name="users"
                                id="users"
                                placeholder="total scheduled work orders"
                            />
                        </div>
                        <button className="rounded-md border-2 text-sm md:text-lg  bg-green text-light border-black px-6 py-3 font-semibold uppercase  transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-md active:shadow-none my-2 md:my-5 ">
                        What is my Equipment Performance Efficiency?
                        </button>
                        <p className='text-center text-xl'>Your equipment is performing with an efficiency of <span className='text-green'>0%</span> </p>
                    </div>
                    <div className='flex flex-col gap-5 shadow-md rounded-md p-5 md:p-10'>
                        <h3 className='text-center  font-dmSans  font-bold text-xl'>Calculate Effectiveness of Equipment</h3>
                        <div className="input-group">
                            <label htmlFor="users" className='uppercase'>Equipment Availability %</label>
                            <input
                                className='w-full'
                                type="number"
                                name="users"
                                id="users"
                                placeholder="No. of completed scheduled work orders"
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="users" className='uppercase'>Equipment Performance Efficiency %</label>
                            <input
                                className='w-full'
                                type="number"
                                name="users"
                                id="users"
                                placeholder="total scheduled work orders"
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="users" className='uppercase'>Rate of Quality Products %</label>
                            <input
                                className='w-full'
                                type="number"
                                name="users"
                                id="users"
                                placeholder="total scheduled work orders"
                            />
                        </div>
                        <button className="rounded-md border-2 text-sm md:text-lg  bg-green text-light border-black px-6 py-3 font-semibold uppercase  transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-md active:shadow-none my-2 md:my-5 ">
                        Calculate Overall Equipment Effectiveness
                        </button>
                        <p className='text-center text-xl'>Your overall equipment effectiveness is <span className='text-green'>0%</span> </p>
                    </div>
                    <div className='flex flex-col gap-5 shadow-md rounded-md p-5 md:p-10'>
                        <h3 className='text-center  font-dmSans  font-bold text-xl'>Calculate Quality of Output</h3>
                        <div className="input-group">
                            <label htmlFor="users" className='uppercase'>No. of output products of acceptable quality</label>
                            <input
                                className='w-full'
                                type="number"
                                name="users"
                                id="users"
                                placeholder="No. of completed scheduled work orders"
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="users" className='uppercase'>No. of total units produced</label>
                            <input
                                className='w-full'
                                type="number"
                                name="users"
                                id="users"
                                placeholder="total scheduled work orders"
                            />
                        </div>
                        <button className="rounded-md border-2 text-sm md:text-lg  bg-green text-light border-black px-6 py-3 font-semibold uppercase  transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-md active:shadow-none my-2 md:my-5 ">
                        Calculate quality of output
                        </button>
                        <p className='text-center text-xl'>Your rate of quality products is <span className='text-green'>0%</span> </p>
                    </div>
                    <div className='flex flex-col gap-5 shadow-md rounded-md p-5 md:p-10'>
                        <h3 className='text-center  font-dmSans  font-bold text-xl'>Calculate Average time between breakdowns</h3>
                        <div className="input-group">
                            <label htmlFor="users" className='uppercase'>Uptime in hrs (in a month)</label>
                            <input
                                className='w-full'
                                type="number"
                                name="users"
                                id="users"
                                placeholder="No. of completed scheduled work orders"
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="users" className='uppercase'>No. of breakdowns (in a month)</label>
                            <input
                                className='w-full'
                                type="number"
                                name="users"
                                id="users"
                                placeholder="total scheduled work orders"
                            />
                        </div>
                        <button className="rounded-md border-2 text-sm md:text-lg  bg-green text-light border-black px-6 py-3 font-semibold uppercase  transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-md active:shadow-none my-2 md:my-5 ">
                        Calculate avg. time between breakdowns
                        </button>
                        <p className='text-center text-xl'>Your average time between breakdowns is <span className='text-green'>0 hours</span> </p>
                    </div>
                    <div className='flex flex-col gap-5 shadow-md rounded-md p-5 md:p-10'>
                        <h3 className='text-center  font-dmSans  font-bold text-xl'>Planned Maintenance % Calculator</h3>
                        <div className="input-group">
                            <label htmlFor="users" className='uppercase'>Monthly Planned Maintenance (in Hrs)</label>
                            <input
                                className='w-full'
                                type="number"
                                name="users"
                                id="users"
                                placeholder="No. of completed scheduled work orders"
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="users" className='uppercase'>Total Maintenance Hoours (in a month)</label>
                            <input
                                className='w-full'
                                type="number"
                                name="users"
                                id="users"
                                placeholder="total scheduled work orders"
                            />
                        </div>
                        <button className="rounded-md border-2 text-sm md:text-lg  bg-green text-light border-black px-6 py-3 font-semibold uppercase  transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-md active:shadow-none my-2 md:my-5 ">
                        What’s my planned maintenance %?
                        </button>
                        <p className='text-center text-xl'>Your Planned Maintenance is <span className='text-green'>0 hours</span> </p>
                    </div>
                    <div className='flex flex-col gap-5 shadow-md rounded-md p-5 md:p-10'>
                        <h3 className='text-center  font-dmSans  font-bold text-xl'>Average Repair Time Calculator</h3>
                        <div className="input-group">
                            <label htmlFor="users" className='uppercase'>Annual Downtime (in hrs)</label>
                            <input
                                className='w-full'
                                type="number"
                                name="users"
                                id="users"
                                placeholder="No. of completed scheduled work orders"
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="users" className='uppercase'>No. of annual stoppages</label>
                            <input
                                className='w-full'
                                type="number"
                                name="users"
                                id="users"
                                placeholder="total scheduled work orders"
                            />
                        </div>
                        <button className="rounded-md border-2 text-sm md:text-lg  bg-green text-light border-black px-6 py-3 font-semibold uppercase  transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-md active:shadow-none my-2 md:my-5 ">
                        Calculate Average Repair Time
                        </button>
                        <p className='text-center text-xl'>Your average repair time is <span className='text-green'>0 hours</span> </p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default ResourceMaintainance