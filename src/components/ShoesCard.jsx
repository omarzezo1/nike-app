import React from 'react'

const ShoesCard = ({imgURL, changeBigShoeImage, bigShoeImage}) => {

    const handelClick = ()=>{
        if(bigShoeImage !== imgURL.bigShoe){
            changeBigShoeImage(imgURL.bigShoe)
        }
    }

  return (
    <div 
    className={`border-2 rounded-xl 
    ${bigShoeImage === imgURL.bigShoe ? 'border-coral-red': 'border-transparent'}
    cursor-pointer max-sm:flex-1`}
    onClick={handelClick}
    >
        <div className='flex justify-center items-center bg-card bg-center bg-cover
        sm:w-40 sm:h-40 rounded-xl max-sm:p-4
        '>
            <img
            src={imgURL.thumbnail} alt={imgURL.thumbnail}
            width={127}
            height={103}
            className='object-contain'
            />
        </div>
    </div>
  )
}

export default ShoesCard