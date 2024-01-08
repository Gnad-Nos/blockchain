function Setting() {
  return (
    <div className="bg-white flex">
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
                JobFinder
              </div>
            </div>
            <div className="self-stretch h-[350px] flex-col justify-center items-start gap-8 flex">
              <div className="flex-col justify-start items-start flex">
                {/* <div className="w-64 pl-8 pr-4 py-3 justify-start items-center gap-4 inline-flex">
                  <div className="w-6 h-6 relative" />
                  <div className="grow shrink basis-0 h-6 text-slate-500 text-base font-medium font-['Inter'] leading-relaxed">
                    Dashboard
                  </div>
                </div>
                <div className="w-[272px] px-8 py-3 justify-start items-center gap-4 inline-flex">
                  <div className="justify-start items-start gap-4 flex">
                    <div className="w-6 h-6 relative" />
                    <div className="w-32 h-6 text-slate-500 text-base font-medium font-['Inter'] leading-relaxed">
                      Messages
                    </div>
                  </div>
                  <div className="w-6 h-6 relative">
                    <div className="w-6 h-6 left-0 top-0 absolute bg-indigo-600 rounded-full" />
                    <div className="w-1.5 h-4 left-[9px] top-[5px] absolute text-white text-sm font-semibold font-['Epilogue'] leading-snug">
                      1
                    </div>
                  </div>
                </div> */}
                <div className="w-[272px] pl-8 pr-4 py-3  justify-start items-center gap-4 inline-flex">
                  <a href="/history" className="grow shrink basis-0 h-6 text-slate-500 text-base font-medium font-['Inter'] leading-relaxed">
                    History
                  </a>
                </div>
                {/* <div className="w-[272px] pl-8 pr-4 py-3 justify-start items-center gap-4 inline-flex">
                  <div className="w-6 h-6 relative">
                    <div className="w-[18.76px] h-[19.22px] left-[2.78px] top-[2.78px] absolute">
                      <div className="w-[17.98px] h-[17.98px] left-0 top-0 absolute rounded-full border-2 border-slate-500" />
                    </div>
                  </div>
                  <div className="grow shrink basis-0 h-6 text-slate-500 text-base font-medium font-['Inter'] leading-relaxed">
                    Find Jobs
                  </div>
                </div>
                <div className="w-[272px] pl-8 pr-4 py-3 justify-start items-center gap-4 inline-flex">
                  <div className="w-6 h-6 relative" />
                  <div className="grow shrink basis-0 h-6 text-slate-500 text-base font-medium font-['Inter'] leading-relaxed">
                    Browse Companies
                  </div>
                </div> */}
                <div className="justify-center items-center gap-3 inline-flex">
                  <div className="h-12 pl-8 py-3 justify-start items-start gap-4 flex">
                    <a href="/profile" className="grow shrink basis-0 h-6 text-slate-500 text-base font-medium font-['Inter'] leading-relaxed">
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
                  <div className="self-stretch pl-8 pr-4 py-3 bg-violet-100 justify-start items-center gap-4 inline-flex">
                    <div className="grow shrink basis-0 h-6 text-indigo-600 text-base font-medium font-['Inter'] leading-relaxed">
                      Settings
                    </div>
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
                  Dang Son
                </div>
                <div className="left-0 top-[26px] absolute opacity-50 text-gray-800 text-sm font-normal font-['Epilogue'] leading-snug">
                  Son123@email.com
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

        {/* info */}
        <div className="w-[1168px] h-[916px] px-8 pt-6 pb-8 bg-white flex-col justify-start items-end gap-6 inline-flex">
          <div className="self-stretch h-[58px] flex-col justify-start items-start gap-1 flex">
            <div className="w-[228px] h-7 text-gray-800 text-lg font-semibold font-['Epilogue'] leading-[28.80px]">
              Basic Information
            </div>
            <div className="text-slate-600 text-base font-normal font-['Epilogue'] leading-relaxed">
              This is your personal information that you can update anytime.
            </div>
          </div>
          <div className="w-[1104px] h-[0px] border border-zinc-200"></div>
          <div className="self-stretch justify-start items-start gap-[117px] inline-flex">
            <div className="flex-col justify-start items-start gap-[5px] inline-flex">
              <div className="text-slate-800 text-base font-semibold font-['Epilogue'] leading-relaxed">
                Profile Photo
              </div>
              <div className="w-[259px] text-slate-600 text-base font-normal font-['Epilogue'] leading-relaxed">
                This image will be shown publicly as your profile picture, it
                will help recruiters recognize you!
              </div>
            </div>
            <div className="justify-start items-start gap-8 flex">
              <div className="w-[124px] h-[124px] relative">
                <img
                  className="w-[124px] h-[124px] left-0 top-0 absolute rounded-full"
                  src="https://via.placeholder.com/124x124"
                />
                <img
                  className="w-[129.17px] h-[129.17px] left-[-2.58px] top-[-2.58px] absolute"
                  src="https://via.placeholder.com/129x129"
                />
              </div>
              <div className="px-[42px] py-6 bg-slate-50 rounded-lg border-2 border-indigo-600 flex-col justify-start items-start gap-2.5 inline-flex">
                <div className="flex-col justify-start items-center gap-2 flex">
                  <div className="w-8 h-8 relative" />
                  <div className="flex-col justify-start items-center gap-1 flex">
                    <div>
                      <span className="text-indigo-600 text-base font-medium font-['Epilogue'] leading-relaxed">
                        Click to replace
                      </span>
                      <span className="text-slate-800 text-base font-normal font-['Epilogue'] leading-relaxed">
                        {" "}
                      </span>
                      <span className="text-slate-600 text-base font-normal font-['Epilogue'] leading-relaxed">
                        or drag and drop
                      </span>
                    </div>
                    <div className="text-slate-500 text-base font-normal font-['Epilogue'] leading-relaxed">
                      SVG, PNG, JPG or GIF (max. 400 x 400px)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[1104px] h-[0px] border border-zinc-200"></div>
          <div className="self-stretch justify-start items-start gap-[246px] inline-flex">
            <div className="text-slate-800 text-base font-semibold font-['Epilogue'] leading-relaxed">
              Personal Details
            </div>
            <div className="flex-col justify-start items-start gap-6 inline-flex">
              <div className="h-20 flex-col justify-start items-start gap-1 flex">
                <div>
                  <span className="text-slate-600 text-base font-semibold font-['Epilogue'] leading-relaxed">
                    Full Name{" "}
                  </span>
                  <span className="text-red-400 text-base font-semibold font-['Epilogue'] leading-relaxed">
                    *
                  </span>
                </div>
                <div className="self-stretch px-4 py-3 bg-white border border-zinc-200 justify-start items-center gap-2.5 inline-flex">
                  <div className="text-slate-600 text-base font-normal font-['Epilogue'] leading-relaxed">
                    Dang Son
                  </div>
                </div>
              </div>
              <div className="justify-start items-start gap-6 inline-flex">
                <div className="w-[258px] flex-col justify-start items-start gap-1 inline-flex">
                  <div>
                    <span className="text-slate-600 text-base font-semibold font-['Epilogue'] leading-relaxed">
                      Phone Number{" "}
                    </span>
                    <span className="text-red-400 text-base font-semibold font-['Epilogue'] leading-relaxed">
                      *
                    </span>
                  </div>
                  <div className="self-stretch px-4 py-3 bg-white border border-zinc-200 justify-start items-center gap-2.5 inline-flex">
                    <div className="text-slate-600 text-base font-normal font-['Epilogue'] leading-relaxed">
                      +44 1245 572 135
                    </div>
                  </div>
                </div>
                <div className="w-[258px] flex-col justify-start items-start gap-1 inline-flex">
                  <div>
                    <span className="text-slate-600 text-base font-semibold font-['Epilogue'] leading-relaxed">
                      Email{" "}
                    </span>
                    <span className="text-red-400 text-base font-semibold font-['Epilogue'] leading-relaxed">
                      *
                    </span>
                  </div>
                  <div className="self-stretch px-4 py-3 bg-white border border-zinc-200 justify-start items-center gap-2.5 inline-flex">
                    <div className="text-slate-600 text-base font-normal font-['Epilogue'] leading-relaxed">
                      Son123@gmail.com
                    </div>
                  </div>
                </div>
              </div>
              <div className="justify-start items-start gap-6 inline-flex">
                <div className="w-[258px] flex-col justify-start items-start gap-1 inline-flex">
                  <div>
                    <span className="text-slate-600 text-base font-semibold font-['Epilogue'] leading-relaxed">
                      Date of Birth{" "}
                    </span>
                    <span className="text-red-400 text-base font-semibold font-['Epilogue'] leading-relaxed">
                      *
                    </span>
                  </div>
                  <div className="self-stretch px-4 py-3 bg-white border border-zinc-200 justify-between items-center inline-flex">
                    <div className="text-slate-600 text-base font-normal font-['Epilogue'] leading-relaxed">
                      01/01/2001
                    </div>
                    <div className="w-5 h-5 relative" />
                  </div>
                </div>
                <div className="w-[258px] flex-col justify-start items-start gap-1 inline-flex">
                  <div>
                    <span className="text-slate-600 text-base font-semibold font-['Epilogue'] leading-relaxed">
                      Gender{" "}
                    </span>
                    <span className="text-red-400 text-base font-semibold font-['Epilogue'] leading-relaxed">
                      *
                    </span>
                  </div>
                  <div className="self-stretch px-4 py-3 bg-white border border-zinc-200 justify-between items-center inline-flex">
                    <div className="text-slate-600 text-base font-normal font-['Epilogue'] leading-relaxed">
                      Male
                    </div>
                    <div className="w-5 h-5 relative" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[1104px] h-[0px] border border-zinc-200"></div>
          <div className="self-stretch justify-start items-start gap-[103px] inline-flex">
            <div className="flex-col justify-start items-start gap-1 inline-flex">
              <div className="w-[228px] h-7 text-slate-800 text-base font-semibold font-['Epilogue'] leading-relaxed">
                Account Type
              </div>
              <div className="text-slate-600 text-base font-normal font-['Epilogue'] leading-relaxed">
                You can update your account type
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-6 inline-flex">
              <div className="justify-start items-start gap-4 inline-flex">
                <div className="w-6 h-6 relative">
                  <div className="w-5 h-5 left-[2px] top-[2px] absolute rounded-full border border-indigo-600" />
                  <div className="w-3 h-3 left-[6px] top-[6px] absolute bg-indigo-600 rounded-full" />
                </div>
                <div className="flex-col justify-start items-start inline-flex">
                  <div className="text-slate-800 text-base font-medium font-['Epilogue'] leading-relaxed">
                    Headhunter
                  </div>
                  <div className="w-[259px] text-slate-600 text-base font-normal font-['Epilogue'] leading-relaxed">
                    Supply of labour
                  </div>
                </div>
              </div>
              <div className="justify-start items-start gap-4 inline-flex">
                <div className="w-6 h-6 relative">
                  <div className="w-5 h-5 left-[2px] top-[2px] absolute rounded-full border-2 border-zinc-200" />
                </div>
                <div className="flex-col justify-start items-start inline-flex">
                  <div className="text-slate-800 text-base font-medium font-['Epilogue'] leading-relaxed">
                    Employer
                  </div>
                  <div className="text-gray-800 text-base font-normal font-['Epilogue'] leading-relaxed">
                    Looking for employyee
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[1104px] h-[0px] border border-zinc-200"></div>
          <div className="px-6 py-3 bg-indigo-600 justify-center items-center gap-2.5 inline-flex">
            <div className="text-center text-white text-base font-bold font-['Epilogue'] leading-relaxed">
              Save Profile
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Setting;
