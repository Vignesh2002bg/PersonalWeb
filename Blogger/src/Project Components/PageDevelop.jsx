function PageDevelop() {
    return ( 
        <>
        <div className=" mt-10">
            <div className=" container grid grid-flow-row items-center justify-center w-[92%] mx-auto mt-5 mb-2">
                <div>
                <h2 className=" text-center text-xl font-bold  mb-4">Quotes</h2>
                </div>
                <div class="relative size-40 mb-4">
                <svg class="size-full" width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="18" cy="18" r="16" fill="none" class="stroke-current text-gray-200 dark:text-gray-700" stroke-width="2"></circle>
                    <g class="origin-center -rotate-90 transform">
                    <circle cx="18" cy="18" r="16" fill="none" class="stroke-current text-blue-600 dark:text-blue-500" stroke-width="2" stroke-dasharray="100" stroke-dashoffset="75"></circle>
                    </g>
                </svg>
                <div class="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
                    <span class="text-center text-2xl font-bold text-gray-800 dark:text-white">25%</span>
                </div>
               </div>
               <div className=" grid grid-cols-1">
            <div className="flex mb-3">
            <h4 className=" text-center text-sm font-semibold">Work Progressing<span className=" text-blue-500">....</span></h4>
            <svg className=" text-blue-300 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg>
            </div>
        </div>
        </div>
        </div>
        </>
     );
}

export default PageDevelop;