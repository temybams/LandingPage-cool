const Cardhero = () => {
  return (
    <div className='w-full h-full flex items-center justify-center text-black'>
      <div className='card_container rounded-xl flex-col py-4 px-10 flex justify-center items-center w-full'>
        <div className='card_container-tab w-fit rounded-md h-10 max-h-10  bg-gray-200/90 text-black flex item-center justify-center'>
          <button className=' bg-green-200 font-semibold text-sm rounded-md capitalize px-5 py-2'>
            it & Developent
          </button>
          <button className='text-sm capitalize px-5 py-2'>it & Developent</button>
        </div>
        <div className='content test-sm h-full w-full  flex items-center justify-between py-10'>
          <div className='list_item flex flex-col gap-4 capitalize'>
            <div className='item'>Phython developer</div>
            <div className='item'>shopify Developer</div>
            <div className='item font-bold'> MERN stack Developer</div>
            <div className='item'>Full Stack Developer </div>
          </div>
          <div className='list_item flex gap-4 flex-col  capitalize'>
            <div className='item'>Data Scientist</div>
            <div className='item'>Front End Developer</div>
            <div className='item'> Shopify Developer</div>
            <div className='item '>Python Developer </div>
          </div>
          <div className='list_item gap-4 flex flex-col  capitalize'>
            <div className='item'>shopify Developer</div>
            <div className='item'>Phython developer</div>
            <div className='item'>Full Stack Developer </div>
            <div className='item font-bold'> Explore more</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardhero;
