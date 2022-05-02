    export const BoxesHome = () => {
        return(
        <div className='boxItem lg:w-64 w-full text-white lg:m-5 mb-5'>
            <div className='imgArea h-44 lg:w-64 w-full bg-violet-500 rounded opacity-40'></div>
            <div className='textArea text-justify flex flex-col'>
                <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Sed nemo inventore reiciendis ad nisi non, placeat quis magni
                    labore velit, voluptatum sequi earum dolores vel qui culpa modi nobis? Repellendus.
                </span>
                <button className='border rounded pl-5 pr-5 mt-4 hover:opacity-80'>See More</button>
            </div>
        </div>
        )
    }