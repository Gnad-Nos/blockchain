import Rating from "../../components/rating/Rating";

function History() {
  return (
    <div className="flex bg-white">
      {/* left */}
      <div className="w-1/6">
        <div className="h-[1000px] py-8 bg-slate-50 shadow flex-col justify-between items-start inline-flex">
          <div className="h-[565px] flex-col justify-start items-center gap-8 flex">
            <div className="pr-16 justify-start items-center gap-2 inline-flex">
              <div className="w-8 h-8 relative">
                <div className="w-8 h-8 left-0 top-0 absolute bg-indigo-600 rounded-full" />
                <div className="w-5 h-5 left-[7px] top-[24px] absolute origin-top-left -rotate-90" />
              </div>
              <div className="text-gray-800 text-2xl font-bold font-['Red Hat Display'] leading-9">
                JobHuntly
              </div>
            </div>
            <div className="self-stretch h-[497px] flex-col justify-center items-start gap-8 flex">
              <div className="flex-col justify-start items-start flex">
                <div className="w-[272px] pl-8 pr-4 py-3 bg-violet-100 justify-start items-center gap-4 inline-flex">
                  <div className="grow shrink basis-0 h-6 text-indigo-600 text-base font-medium font-['Inter'] leading-relaxed">
                    History
                  </div>
                </div>

                <div className="justify-center items-center gap-3 inline-flex">
                  <div className="h-12 pl-8 py-3 justify-start items-start gap-4 flex">
                    <a
                      href="/profile"
                      className="grow shrink basis-0 h-6 text-slate-500 text-base font-medium font-['Inter'] leading-relaxed"
                    >
                      My Public Profile
                    </a>
                  </div>
                </div>
              </div>
              <div className="self-stretch h-px bg-indigo-200" />
              <div className="self-stretch h-36 flex-col justify-start items-start gap-6 flex">
                <div className="pl-8 justify-start items-start gap-2.5 inline-flex">
                  <div className="opacity-50 text-gray-800 text-sm font-semibold font-['Inter'] leading-normal tracking-wide">
                    SETTINGS
                  </div>
                </div>
                <div className="self-stretch h-24 flex-col justify-start items-start flex">
                  <div className="self-stretch pl-8 pr-4 py-3 justify-start items-center gap-4 inline-flex">
                    <a
                      href="/setting"
                      className="grow shrink basis-0 h-6 text-slate-500 text-base font-medium font-['Inter'] leading-relaxed"
                    >
                      Settings
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[272px] h-[316px] relative" />
          <div className="w-[272px] h-[72px] relative">
            <div className="w-[200px] h-12 left-[32px] top-[24px] absolute">
              <div className="w-[136px] h-12 left-[64px] top-0 absolute">
                <div className="left-0 top-0 absolute text-gray-800 text-lg font-semibold font-['Epilogue'] leading-[28.80px]">
                  Jake Gyll
                </div>
                <div className="left-0 top-[26px] absolute opacity-50 text-gray-800 text-sm font-normal font-['Epilogue'] leading-snug">
                  jakegyll@email.com
                </div>
              </div>
              <div className="w-12 h-12 left-0 top-0 absolute">
                <img
                  className="w-12 h-12 left-0 top-0 absolute rounded-full"
                  src="https://via.placeholder.com/48x48"
                />
                <img
                  className="w-[50px] h-[50px] left-[-1px] top-[-1px] absolute"
                  src="https://via.placeholder.com/50x50"
                />
              </div>
            </div>
            <div className="w-[272px] h-[0px] left-0 top-0 absolute"></div>
            <div className="w-[233px] h-20 left-[19px] top-[-78px] absolute">
              <div className="w-[233px] h-20 left-0 top-0 absolute bg-white rounded-lg shadow border border-slate-200" />
              <div className="w-24 h-[26px] left-[24px] top-[28px] absolute flex-col justify-start items-start gap-4 inline-flex">
                <div className="w-24 h-[26px] relative">
                  <div className="left-[40px] top-0 absolute text-red-400 text-base font-medium font-['Epilogue'] leading-relaxed">
                    Logout
                  </div>
                  <div className="w-6 h-6 left-0 top-[1px] absolute" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* right */}
      <div className="w-5/6">
        <div className="h-[114px] relative bg-white shadow-inner border-b-[1px]">
          <div className="left-[32px] top-[38px] absolute text-slate-800 text-[32px] font-semibold font-['Clash Display Variable'] leading-[38.40px]">
            My Profile
          </div>
          <div className="right-[40px] top-[32px] absolute justify-center items-center gap-8 inline-flex">
            <div className="h-[50px] px-6 py-3 border border-indigo-200 justify-center items-center gap-2.5 flex">
              <div className="text-center text-indigo-600 text-base font-bold font-['Epilogue'] leading-relaxed">
                Back to homepage
              </div>
            </div>
            <div className="w-10 h-10 relative">
              <div className="w-10 h-10 left-0 top-0 absolute bg-white rounded-full" />
              <div className="w-6 h-6 left-[8px] top-[8.07px] absolute">
                <div className="w-1.5 h-1.5 left-[15px] top-[3px] absolute bg-red-400 rounded-full border border-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Rate ***** */}
        <div className="w-[1168px] text-black ml-8 mt-3">
          <div className="text-4xl ">My Total Rating</div>
          <div className="flex items-center mt-4">
            <svg
              className="w-10 h-10 text-yellow-300 ms-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-10 h-10 text-yellow-300 ms-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-10 h-10 text-yellow-300 ms-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-10 h-10 text-yellow-300 ms-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-10 h-10 ms-1 text-gray-300 dark:text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          </div>
        </div>
        {/* History */}
        <div className="w-[1168px] h-[775px] pt-8 flex-col justify-start items-center gap-6 inline-flex">
          <div className="w-[1168px] pl-8 py-3 bg-white shadow-inner justify-start items-start gap-8 inline-flex">
            <div className="w-[78px] flex-col justify-start items-center gap-[7px] inline-flex">
              <div>
                <span className="text-slate-800 text-base font-semibold font-['Epilogue'] leading-relaxed">
                  All{" "}
                </span>
                <span className="text-slate-500 text-base font-semibold font-['Epilogue'] leading-relaxed">
                  (
                </span>
                <span className="text-indigo-600 text-base font-semibold font-['Epilogue'] leading-relaxed">
                  45
                </span>
                <span className="text-slate-500 text-base font-semibold font-['Epilogue'] leading-relaxed">
                  )
                </span>
              </div>
            </div>
            {/* <div className="flex-col justify-start items-center gap-[7px] inline-flex">
              <div className="text-slate-500 text-base font-semibold font-['Epilogue'] leading-relaxed">
                In Review (34)
              </div>
            </div>
            <div className="flex-col justify-start items-center gap-[7px] inline-flex">
              <div className="text-slate-500 text-base font-semibold font-['Epilogue'] leading-relaxed">
                Interviewing (18)
              </div>
            </div>
            <div className="flex-col justify-start items-center gap-[7px] inline-flex">
              <div className="text-slate-500 text-base font-semibold font-['Epilogue'] leading-relaxed">
                Assessment (5)
              </div>
            </div>
            <div className="flex-col justify-start items-center gap-[7px] inline-flex">
              <div className="text-slate-500 text-base font-semibold font-['Epilogue'] leading-relaxed">
                Offered (2)
              </div>
            </div>
            <div className="flex-col justify-start items-center gap-[7px] inline-flex">
              <div className="text-slate-500 text-base font-semibold font-['Epilogue'] leading-relaxed">
                Hired (1)
              </div>
            </div> */}
          </div>
          <div className="pb-6 bg-white flex-col justify-center items-center gap-6 flex">
            <div className="justify-start items-center gap-[624px] inline-flex">
              <div className="text-slate-800 text-xl font-semibold font-['Epilogue'] leading-normal">
                History
              </div>
              <div className="justify-start items-start gap-2 flex">
                <div className="px-4 py-3 bg-white border border-zinc-200 justify-center items-center gap-2 flex">
                  <div className="w-6 h-6 relative">
                    <div className="w-[18.76px] h-[19.22px] left-[2.78px] top-[2.78px] absolute">
                      <div className="w-[17.98px] h-[17.98px] left-0 top-0 absolute rounded-full border-2 border-slate-800" />
                    </div>
                  </div>
                  <div className="text-slate-800 text-base font-medium font-['Inter'] leading-relaxed">
                    Search
                  </div>
                </div>
                <div className="px-4 py-3 bg-white border border-zinc-200 justify-center items-center gap-2 flex">
                  <div className="w-6 h-6 relative" />
                  <div className="text-slate-800 text-base font-medium font-['Inter'] leading-relaxed">
                    Filter
                  </div>
                </div>
              </div>
            </div>
            <div className="shadow-inner flex-col justify-start items-start flex">
              <div className="w-[1150px] pl-6 pb-6 bg-white shadow-inner justify-start items-center inline-flex">
                <div className="w-14 opacity-50 text-gray-800 text-base font-medium font-['Inter'] leading-relaxed">
                  #
                </div>
                <div className="w-[221px] opacity-50 text-gray-800 text-base font-medium font-['Inter'] leading-relaxed">
                  Employee Name
                </div>
                <div className="w-[260px] opacity-50 text-gray-800 text-base font-medium font-['Inter'] leading-relaxed">
                  Job Roles
                </div>
                <div className="w-[194px] opacity-50 text-gray-800 text-base font-medium font-['Inter'] leading-relaxed">
                  Date Applied
                </div>
                <div className="w-[250px] opacity-50 text-gray-800 text-base font-medium font-['Inter'] leading-relaxed">
                  Status
                </div>
                <div className="opacity-50 text-gray-800 text-base font-medium font-['Inter'] leading-relaxed">
                  Rating
                </div>
              </div>
              <div className="w-[1150px] p-6 bg-white justify-start items-center inline-flex">
                <div className="w-14 text-slate-800 text-base font-normal font-['Inter'] leading-relaxed">
                  1
                </div>
                <div className="w-[221px] h-10 justify-start items-center gap-2 flex">
                  <div className="w-10 h-10 relative">
                    <div className="w-10 h-10 left-0 top-0 absolute bg-stone-300 rounded-full" />
                    <img
                      className="w-10 h-10 left-0 top-0 absolute"
                      src="https://via.placeholder.com/40x40"
                    />
                  </div>
                  <div className=" text-slate-800 text-base font-normal font-['Inter'] leading-relaxed">
                    Dang Son
                  </div>
                </div>
                <div className="w-[275px] text-slate-800 text-base font-normal font-['Inter'] leading-relaxed">
                  Social Media Assistant
                </div>
                <div className="w-[194px] text-slate-800 text-base font-normal font-['Inter'] leading-relaxed">
                  24 July 2023
                </div>
                <div className="w-[246px] flex-col justify-center items-start gap-2.5 inline-flex">
                  <div className="px-2.5 py-1.5 rounded-[80px] border border-amber-400 justify-center items-center gap-2 inline-flex">
                    <div className="text-amber-400 text-sm font-semibold font-['Epilogue'] leading-snug">
                      In Review
                    </div>
                  </div>
                </div>
                <div className="w-[110px]">
                  <Rating />
                </div>
                <div className="w-6 h-6 relative" />
              </div>
              <div className="w-[1150px] p-6 bg-slate-50 justify-start items-center inline-flex">
                <div className="w-14 text-slate-800 text-base font-normal font-['Inter'] leading-relaxed">
                  2
                </div>
                <div className="w-[221px] h-10 justify-start items-center gap-2 flex">
                  <div className="w-10 h-10 relative">
                    <div className="w-10 h-10 left-0 top-0 absolute bg-stone-300 rounded-full" />
                    <img
                      className="w-10 h-10 left-0 top-0 absolute"
                      src="https://via.placeholder.com/40x40"
                    />
                  </div>
                  <div className="text-slate-800 text-base font-normal font-['Inter'] leading-relaxed">
                    Duc Tam
                  </div>
                </div>
                <div className="w-[275px] text-slate-800 text-base font-normal font-['Inter'] leading-relaxed">
                  Social Media Assistant
                </div>
                <div className="w-[194px] text-slate-800 text-base font-normal font-['Inter'] leading-relaxed">
                  20 July 2023
                </div>
                <div className="w-[246px] flex-col justify-center items-start gap-2.5 inline-flex">
                  <div className="px-2.5 py-1.5 rounded-[80px] border border-amber-400 justify-center items-center gap-2 inline-flex">
                    <div className="text-amber-400 text-sm font-semibold font-['Epilogue'] leading-snug">
                      In Review
                    </div>
                  </div>
                </div>
                <div className="w-[110px]">
                  <Rating />
                </div>
                <div className="w-6 h-6 relative" />
              </div>
              <div className="w-[1150px] p-6 bg-white justify-start items-center inline-flex">
                <div className="w-14 text-slate-800 text-base font-normal font-['Inter'] leading-relaxed">
                  3
                </div>
                <div className="w-[221px] h-10 justify-start items-center gap-2 flex">
                  <div className="w-10 h-10 relative">
                    <div className="w-10 h-10 left-0 top-0 absolute bg-stone-300 rounded-full" />
                    <img
                      className="w-10 h-10 left-0 top-0 absolute"
                      src="https://via.placeholder.com/40x40"
                    />
                  </div>
                  <div className="text-slate-800 text-base font-normal font-['Inter'] leading-relaxed">
                    Son
                  </div>
                </div>
                <div className="w-[275px] text-slate-800 text-base font-normal font-['Inter'] leading-relaxed">
                  Social Media Assistant
                </div>
                <div className="w-[194px] text-slate-800 text-base font-normal font-['Inter'] leading-relaxed">
                  16 July 2023
                </div>
                <div className="w-[246px] flex-col justify-center items-start gap-2.5 inline-flex">
                  <div className="px-2.5 py-1.5 rounded-[80px] border border-amber-400 justify-center items-center gap-2 inline-flex">
                    <div className="text-amber-400 text-sm font-semibold font-['Epilogue'] leading-snug">
                      In Review
                    </div>
                  </div>
                </div>
                <div className="w-[110px]">
                  <Rating />
                </div>
                <div className="w-6 h-6 relative" />
              </div>
              <div className="w-[1150px] p-6 bg-slate-50 justify-start items-center inline-flex">
                <div className="w-14 text-slate-800 text-base font-normal font-['Inter'] leading-relaxed">
                  4
                </div>
                <div className="w-[221px] h-10 justify-start items-center gap-2 flex">
                  <div className="w-10 h-10 relative">
                    <div className="w-10 h-10 left-0 top-0 absolute bg-stone-300 rounded-full" />
                    <img
                      className="w-10 h-10 left-0 top-0 absolute"
                      src="https://via.placeholder.com/40x40"
                    />
                  </div>
                  <div className="text-slate-800 text-base font-normal font-['Inter'] leading-relaxed">
                    Tam
                  </div>
                </div>
                <div className="w-[275px] text-slate-800 text-base font-normal font-['Inter'] leading-relaxed">
                  Social Media Assistant
                </div>
                <div className="w-[194px] text-slate-800 text-base font-normal font-['Inter'] leading-relaxed">
                  14 July 2023
                </div>
                <div className="w-[246px] flex-col justify-center items-start gap-2.5 inline-flex">
                  <div className="px-2.5 py-1.5 rounded-[80px] border border-amber-400 justify-center items-center gap-2 inline-flex">
                    <div className="text-amber-400 text-sm font-semibold font-['Epilogue'] leading-snug">
                      Interviewing
                    </div>
                  </div>
                </div>
                <div className="w-[110px]">
                  <Rating />
                </div>
                <div className="w-6 h-6 relative" />
              </div>
              <div className="w-[1150px] p-6 bg-white justify-start items-center inline-flex">
                <div className="w-14 text-slate-800 text-base font-normal font-['Inter'] leading-relaxed">
                  5
                </div>
                <div className="w-[221px] h-10 justify-start items-center gap-2 flex">
                  <div className="w-10 h-10 relative">
                    <div className="w-10 h-10 left-0 top-0 absolute rounded-full" />
                    <img
                      className="w-10 h-10 left-0 top-0 absolute"
                      src="https://via.placeholder.com/40x40"
                    />
                  </div>
                  <div className="text-slate-800 text-base font-normal font-['Inter'] leading-relaxed">
                    DHHS
                  </div>
                </div>
                <div className="w-[275px] text-slate-800 text-base font-normal font-['Inter'] leading-relaxed">
                  Social Media Assistant
                </div>
                <div className="w-[194px] text-slate-800 text-base font-normal font-['Inter'] leading-relaxed">
                  10 July 2023
                </div>
                <div className="w-[246px] flex-col justify-center items-start gap-2.5 inline-flex">
                  <div className="px-2.5 py-1.5 rounded-[80px] border border-red-400 justify-center items-center gap-2 inline-flex">
                    <div className="text-red-400 text-sm font-semibold font-['Epilogue'] leading-snug">
                      Unsuitable
                    </div>
                  </div>
                </div>
                <div className="w-[110px]">
                  <Rating />
                </div>
                <div className="w-6 h-6 relative" />
              </div>
            </div>
            <div className="justify-center items-center gap-2 inline-flex">
              <div className="w-6 h-6 relative" />
              <div className="justify-start items-start flex">
                <div className="px-3 py-2.5 bg-indigo-600 rounded-lg justify-center items-center gap-2 flex">
                  <div className="w-[22px] text-center text-white text-base font-semibold font-['Inter'] leading-relaxed">
                    1
                  </div>
                </div>
                <div className="px-3 py-2.5 rounded-lg justify-center items-center gap-2 flex">
                  <div className="w-[22px] text-center text-slate-600 text-base font-semibold font-['Inter'] leading-relaxed">
                    2
                  </div>
                </div>
                <div className="px-3 py-2.5 rounded-lg justify-center items-center gap-2 flex">
                  <div className="w-[22px] text-center text-slate-600 text-base font-semibold font-['Inter'] leading-relaxed">
                    3
                  </div>
                </div>
                <div className="px-3 py-2.5 rounded-lg justify-center items-center gap-2 flex">
                  <div className="w-[22px] text-center text-slate-600 text-base font-semibold font-['Inter'] leading-relaxed">
                    4
                  </div>
                </div>
                <div className="px-3 py-2.5 rounded-lg justify-center items-center gap-2 flex">
                  <div className="w-[22px] text-center text-slate-600 text-base font-semibold font-['Inter'] leading-relaxed">
                    5
                  </div>
                </div>
                <div className="px-3 py-2.5 rounded-lg justify-center items-center gap-2 flex">
                  <div className="w-[22px] text-center text-slate-600 text-base font-semibold font-['Inter'] leading-relaxed">
                    ...
                  </div>
                </div>
                <div className="px-3 py-2.5 rounded-lg justify-center items-center gap-2 flex">
                  <div className="w-[22px] text-center text-slate-600 text-base font-semibold font-['Inter'] leading-relaxed">
                    33
                  </div>
                </div>
              </div>
              <div className="w-[25px] h-6 relative" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default History;
