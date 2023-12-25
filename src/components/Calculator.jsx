import React, { useState } from 'react'

function Calculator() {
    const [result, setresult] = useState('');
    const clickHandle = (e) => {
        setresult(result.concat(e.target.value));
    }
    const clearScreen = () => {
        setresult("");
    }
    const calculate = () => {
        setresult(eval(result).toString());
    }
    return (
        <div>
            <div className="bg-gray-800 text-white w-screen h-screen flex justify-center items-center">
                <div className="main w-64 h-auto bg-gray-900 rounded-2xl shadow-xl border-4 border-gray-100">
                    <div className="screen p-2 ">
                        <input type="text" value={result} className='text-black w-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] placeholder-black px-1 rounded-l bg-gray-100 text-2xl pt-10 outline-none text-right' placeholder='0'></input>
                    </div>

                    <div className="brand bg-gray-200 bg-opacity-90 text-right mb-2 p-1">
                        <h1 className='text-gray-900 text-xs font-bold  '>CASIO</h1>
                    </div>

                    <div className="keyboard">
                        <div className='flex justify-between m-2'>
                            <input type="button" value="C" onClick={clearScreen} className='bg-red-300 shadow-md w-12 h-12 rounded-lg text-center font-medium text-black' />
                            <input type="button" value="<" onClick={clickHandle} className='bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center font-medium text-black' />
                            <input type="button" value="%" onClick={clickHandle} className='bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center font-medium text-black' />
                            <input type="button" value="/" onClick={clickHandle} className='bg-pink-300 shadow-md w-12 h-12 rounded-lg text-center font-medium text-black' />
                        </div>
                        <div className='flex justify-between m-2'>
                            <input type="button" value="7" onClick={clickHandle} className='bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center font-medium text-black' />
                            <input type="button" value="8" onClick={clickHandle} className='bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center font-medium text-black' />
                            <input type="button" value="9" onClick={clickHandle} className='bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center font-medium text-black' />
                            <input type="button" value="*" onClick={clickHandle} className='bg-green-300 shadow-md w-12 h-12 rounded-lg text-center font-medium text-black' />
                        </div>
                        <div className='flex justify-between m-2'>
                            <input type="button" value="4" onClick={clickHandle} className='bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center font-medium text-black' />
                            <input type="button" value="5" onClick={clickHandle} className='bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center font-medium text-black' />
                            <input type="button" value="6" onClick={clickHandle} className='bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center font-medium text-black' />
                            <input type="button" value="-" onClick={clickHandle} className='bg-purple-300 shadow-md w-12 h-12 rounded-lg text-center font-medium text-black' />
                        </div>
                        <div className='flex justify-between m-2'>
                            <input type="button" value="1" onClick={clickHandle} className='bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center font-medium text-black' />
                            <input type="button" value="2" onClick={clickHandle} className='bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center font-medium text-black' />
                            <input type="button" value="3" onClick={clickHandle} className='bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center font-medium text-black' />
                            <input type="button" value="+" onClick={clickHandle} className='bg-violet-300 shadow-md w-12 h-12 rounded-lg text-center font-medium text-black' />
                        </div>
                        <div className='flex justify-between m-2'>
                            <input type="button" value="0" onClick={clickHandle} className='bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center font-medium text-black' />
                            <input type="button" value="00" onClick={clickHandle} className='bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center font-medium text-black' />
                            <input type="button" value="." onClick={clickHandle} className='bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center font-medium text-black' />
                            <input type="button" value="=" onClick={calculate} className='bg-orange-300 shadow-md w-12 h-12 rounded-lg text-center font-medium text-black' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calculator
