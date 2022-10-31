import React from 'react';
import clsx from 'clsx';


export default function ApplicationWindow({ classes, children }) {
return (
    <div className="taper w-full h-auto my-auto flex flex-col overflow-hidden">
        <div className="h-9 bg-neutral-700 rounded-t-md flex flex-nowrap flex-row justify-start">
        <div className="h-3 w-3 rounded-full my-3 mx-1.5 ml-3 bg-red-400"></div>
        <div className="h-3 w-3 rounded-full my-3 mx-1.5 bg-yellow-400"></div>
        <div className="h-3 w-3 rounded-full my-3 mx-1.5 bg-emerald-400"></div>
        <div className="w-full m-auto text-center text-neutral-400 pr-16 text-sm">HouseQuests</div>
        </div>
        <div className="bg-white rounded-b-md overflow-hidden relative">{children}</div>
    </div>
    )
}
