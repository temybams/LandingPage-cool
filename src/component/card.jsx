// const people = [
//   {
//     name: "Calvin Hawkins",
//     email: "calvin.hawkins@example.com",
//     image:
//       "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//   },
//   {
//     name: "Kristen Ramos",
//     email: "kristen.ramos@example.com",
//     image:
//       "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//   },
//   {
//     name: "Ted Fox",
//     email: "ted.fox@example.com",
//     image:
//       "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//   },
// ];

// export default function Example() {
//   return (
//     <ul className='divide-y divide-gray-200'>
//       {people.map((person) => (
//         <li key={person.email} className='py-4 flex'>
//           <img className='h-10 w-10 rounded-full' src={person.image} alt='' />
//           <div className='ml-3'>
//             <p className='text-sm font-medium text-gray-900'>{person.name}</p>
//             <p className='text-sm text-gray-500'>{person.email}</p>
//           </div>
//         </li>
//       ))}
//     </ul>
//   );
// }

      {/* <section>
        <div className="one_step  p-20">
          <div className=" text-center text-6xl text-black m-20 p-20">
            Your one-stop marketplace for finding the talent your business
            needs.
          </div>

          <div className=" text-black gap-10 flex px-20 pb-20 flex-col justify-center">
            <div className="flex flex-wrap gap-5 items-center justify-center">
              <div className=" w-96 flex flex-col gap-4">
                <div className="text-2xl font-semibold ">
                  Find Dev and IT professionals to scale your business.
                </div>
                <div className="icon_x_text grid grid-cols-2 gap-4">
                  <div className="flex text-sm items-center gap-2">
                    <i className="fa-solid fa-award icon-primary rotate-180"></i>
                    989 Skils
                  </div>
                  <div className="flex text-sm items-center gap-2">
                    <i className="fa-solid fa-award icon-primary rotate-180"></i>
                    45 Sub-Categories
                  </div>
                  <div className="flex text-sm items-center gap-2">
                    <i className="fa-solid fa-award icon-primary rotate-180"></i>
                    1011 Profiles
                  </div>
                </div>
              </div>
              <div className="right-box min-w-96 flex flex-col items-center justify-end  ">
                <div className="box mx-20 bg-white max-w-[700px] min-w-80 p-4  rounded-2xl w-full">
                  <p className=" text-lg">It & Development</p>
                  <div className="item flex flex-wrap gap-4 mt-2 p-2">
                    {items1.map((item) => (
                      <div
                        className="item_box w-[100px] flex flex-col items-center justify-center gap-2"
                        key={item.name}
                      >
                        <div className="img_cont flex items-center justify-center w-20 h-20 bg-gray-200 rounded-full">
                          <img src={item.image} alt="" />
                        </div>
                        <div className="article w-[70px] font-semibold capitalize text-center">
                          {item.name}
                        </div>
                      </div>
                    ))}
                    <button className="item-button w-[70px] h-[70px] flex items-center justify-center rounded-2xl bg-gray-200">
                      <img src={Iconbtn} alt="" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-8 items-center  justify-center">
              <div className="article w-96  flex flex-col gap-4">
                <div className="text-2xl font-semibold ">
                  Explore Creative individuals with a Keen eye for details
                </div>
                <div className="icon_x_text grid grid-cols-2 gap-4">
                  <div className="flex text-sm items-center gap-2">
                    <i className="fa-solid fa-award icon-primary rotate-180"></i>
                    989 Skils
                  </div>
                  <div className="flex text-sm items-center gap-2">
                    <i className="fa-solid fa-award icon-primary rotate-180"></i>
                    1011 Sub-Categories
                  </div>
                  <div className="flex text-sm items-center gap-2">
                    <i className="fa-solid fa-award icon-primary rotate-180"></i>
                    1011 Profiles
                  </div>
                </div>
              </div>
              <div className="right-box flex flex-col items-center justify-end  ">
                <div className="box mx-20 bg-white max-w-[700px] min-w-80 p-4  rounded-2xl w-full ">
                  <p className=" text-lg">Design & Creative</p>
                  <div className="item flex flex-wrap gap-4 mt-2 p-2">
                    <button className="item-button rotate-180 w-[70px] ml-5 h-[70px] flex items-center justify-center rounded-2xl bg-gray-200">
                      <img src={Iconbtn} alt="" />
                    </button>
                    {items2.map((item) => (
                      <div
                        className="item_box w-[100px] flex flex-col items-center justify-center gap-2"
                        key={item.name}
                      >
                        <div className="img_cont flex items-center justify-center w-20 h-20 bg-gray-200 rounded-full">
                          <img src={item.image} alt="" />
                        </div>
                        <div className="article w-[70px] font-semibold capitalize text-center">
                          {item.name}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-center">
              <div className="article w-96 flex items-center gap-4">
                <button className="item-button w-[70px]  h-[70px] flex items-center justify-center rounded-2xl bg-black">
                  <img src={Iconbtn2} alt="" />
                </button>
                <p className="text-black font-semibold text-xl">Explore More</p>
              </div>
              <div className="right-box flex items-center justify-end ">
                <div className="box mx-20 max-w-[700px] p-4 rounded-xl w-full text-xl">
                  <span className="font-semibold">30 More</span> to explore
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}