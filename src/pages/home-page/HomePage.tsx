import { FooterNav } from "../../components/footer-nav/FooterNav";
import { Navbar } from "../../components/nav-bar/Navbar";

function HomePage() {
  return (
    <div>
      {/* Navbar */}
      <div>
        <Navbar />

        {/* Content */}
        <div className="">
          <div className="mt-20 ml-32 ">
            {/* braning */}
            <div className="text-7xl font-semibold font-['Outfit'] leading-[70px] tracking-wide">
              Discover <br />
              more than <br />
              <span className="text-sky-400">5000+ Jobs</span>
            </div>
            <div className="mt-10 w-[521px] opacity-70 text-white text-xl font-normal font-['Epilogue'] leading-loose">
              Great platform for the job seeker that searching for new career
              heights and passionate about startups.
            </div>
            {/* Search bar */}
            <div className="mt-[20px] w-[852px] h-[89px] p-4 bg-white shadow justify-center items-center flex">
              <div className="grow shrink basis-0 self-stretch px-4 justify-start items-center gap-4 flex">
                <div className="w-6 h-6 relative">
                  <div className="w-[18.76px] h-[19.22px] left-[2.78px] top-[2.78px] absolute">
                    <div className="w-[17.98px] h-[17.98px] left-0 top-0 absolute rounded-full border-2 border-slate-800" />
                  </div>
                </div>
                <div className="grow shrink basis-0 self-stretch pt-5 flex-col justify-between items-start inline-flex">
                  <div className="opacity-50 text-slate-500 text-base font-normal font-['Epilogue'] leading-relaxed">
                    Job title or keyword
                  </div>
                  <div className="self-stretch h-px bg-zinc-200" />
                </div>
              </div>
              <div className="grow shrink basis-0 self-stretch pl-2 pr-6 justify-start items-center gap-4 flex">
                <div className="w-6 h-6 relative">
                  <div className="w-[15px] h-[18px] left-[4.50px] top-[3px] absolute"></div>
                </div>
                <div className="grow shrink basis-0 self-stretch pt-5 flex-col justify-between items-start inline-flex">
                  <div className="self-stretch justify-between items-center inline-flex">
                    <div className="opacity-90 text-slate-800 text-base font-normal font-['Epilogue'] leading-relaxed">
                      Florence, Italy
                    </div>
                    <div className="w-4 h-4 relative" />
                  </div>
                  <div className="self-stretch h-px bg-zinc-200" />
                </div>
              </div>
              <div className="btn btn-secondary w-[209px] self-stretch justify-center items-center rounded-none flex">
                <div className="text-center  text-lg font-bold font-['Epilogue'] leading-[28.80px]">
                  Search my job
                </div>
              </div>
            </div>
            {/* Search bar */}
            <div className="mt-3 text-white text-base font-normal font-['Epilogue'] leading-relaxed">
              Popular : UI Designer, UX Researcher, Android, Admin
            </div>
            <div className="mt-20 opacity-50 text-white text-lg font-normal font-['Epilogue'] leading-[28.80px]">
              Companies we helped grow
            </div>
            <div className="flex w-full justify-between mt-8">
              <div className="w-[153.54px] h-10 relative opacity-30 text-5xl font-bold">
                Intel
              </div>

              <div className="w-[273.54px] h-10 relative opacity-30 text-5xl font-bold">
                長文チキン
              </div>

              <div className="w-[153.54px] h-10 relative opacity-30 text-5xl font-bold">
                있다GP
              </div>

              <div className="w-[153.54px] h-10 relative opacity-30 text-5xl font-bold">
                AMD
              </div>
            </div>

            {/* Search by categry  */}
            <div className="mt-32">
              <span className="text-slate-50 text-5xl font-semibold font-['Outfit'] leading-[52.80px]">
                Explore by{" "}
              </span>
              <span className="text-sky-400 text-5xl font-semibold font-['Outfit'] leading-[52.80px]">
                category
              </span>
            </div>
            {/* Search by category items */}
            <div>
              <div className="mt-8 h-[460px] flex-col justify-start items-start gap-8 inline-flex">
                <div className="justify-start items-start gap-8 inline-flex">
                  <div className="p-8 bg-white border border-zinc-200 flex-col justify-start items-start gap-8 inline-flex">
                    <div className="w-12 h-12 relative" />
                    <div className="flex-col justify-center items-start gap-3 flex">
                      <div className="w-[210px] text-slate-800 text-2xl font-semibold font-['Clash Display Variable'] leading-[28.80px]">
                        Design
                      </div>
                      <div className="justify-start items-center gap-4 inline-flex">
                        <div className="text-slate-500 text-lg font-normal font-['Epilogue'] leading-[28.80px]">
                          235 jobs available
                        </div>
                        <div className="w-6 h-6 pl-[4.75px] pr-[4.25px] pt-[5.70px] pb-[6.25px] justify-center items-center flex">
                          <div className="origin-top-left -rotate-90 w-3 h-[15px] relative"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-8 bg-white border border-zinc-200 flex-col justify-start items-start gap-8 inline-flex">
                    <div className="w-12 h-12 relative" />
                    <div className="flex-col justify-center items-start gap-3 flex">
                      <div className="w-[210px] text-slate-800 text-2xl font-semibold font-['Clash Display Variable'] leading-[28.80px]">
                        Sales
                      </div>
                      <div className="justify-start items-center gap-4 inline-flex">
                        <div className="text-slate-500 text-lg font-normal font-['Epilogue'] leading-[28.80px]">
                          756 jobs available
                        </div>
                        <div className="w-6 h-6 pl-[4.75px] pr-[4.25px] pt-[5.70px] pb-[6.25px] justify-center items-center flex">
                          <div className="origin-top-left -rotate-90 w-3 h-[15px] relative"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-8 bg-sky-400 flex-col justify-start items-start gap-8 inline-flex">
                    <div className="w-12 h-12 relative" />
                    <div className="flex-col justify-center items-start gap-3 flex">
                      <div className="w-[210px] text-white text-2xl font-semibold font-['Clash Display Variable'] leading-[28.80px]">
                        Marketing
                      </div>
                      <div className="justify-start items-center gap-4 inline-flex">
                        <div className="text-white text-lg font-normal font-['Epilogue'] leading-[28.80px]">
                          140 jobs available
                        </div>
                        <div className="w-6 h-6 pl-[4.75px] pr-[4.25px] pt-[5.70px] pb-[6.25px] justify-center items-center flex">
                          <div className="origin-top-left -rotate-90 w-3 h-[15px] relative"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-8 bg-white border border-zinc-200 flex-col justify-start items-start gap-8 inline-flex">
                    <div className="w-12 h-12 relative" />
                    <div className="flex-col justify-center items-start gap-3 flex">
                      <div className="w-[210px] text-slate-800 text-2xl font-semibold font-['Clash Display Variable'] leading-[28.80px]">
                        Finance
                      </div>
                      <div className="justify-start items-center gap-4 inline-flex">
                        <div className="text-slate-500 text-lg font-normal font-['Epilogue'] leading-[28.80px]">
                          325 jobs available
                        </div>
                        <div className="w-6 h-6 pl-[4.75px] pr-[4.25px] pt-[5.70px] pb-[6.25px] justify-center items-center flex">
                          <div className="origin-top-left -rotate-90 w-3 h-[15px] relative"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="justify-start items-start gap-8 inline-flex">
                  <div className="p-8 bg-white border border-zinc-200 flex-col justify-start items-start gap-8 inline-flex">
                    <div className="w-12 h-12 relative" />
                    <div className="flex-col justify-center items-start gap-3 flex">
                      <div className="w-[210px] text-slate-800 text-2xl font-semibold font-['Clash Display Variable'] leading-[28.80px]">
                        Technology
                      </div>
                      <div className="justify-start items-center gap-4 inline-flex">
                        <div className="text-slate-500 text-lg font-normal font-['Epilogue'] leading-[28.80px]">
                          436 jobs available
                        </div>
                        <div className="w-6 h-6 pl-[4.75px] pr-[4.25px] pt-[5.70px] pb-[6.25px] justify-center items-center flex">
                          <div className="origin-top-left -rotate-90 w-3 h-[15px] relative"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-8 bg-white border border-zinc-200 flex-col justify-start items-start gap-8 inline-flex">
                    <div className="w-12 h-12 relative" />
                    <div className="flex-col justify-center items-start gap-3 flex">
                      <div className="w-[210px] text-slate-800 text-2xl font-semibold font-['Clash Display Variable'] leading-[28.80px]">
                        Engineering
                      </div>
                      <div className="justify-start items-center gap-4 inline-flex">
                        <div className="text-slate-500 text-lg font-normal font-['Epilogue'] leading-[28.80px]">
                          542 jobs available
                        </div>
                        <div className="w-6 h-6 pl-[4.75px] pr-[4.25px] pt-[5.70px] pb-[6.25px] justify-center items-center flex">
                          <div className="origin-top-left -rotate-90 w-3 h-[15px] relative"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-8 bg-white border border-zinc-200 flex-col justify-start items-start gap-8 inline-flex">
                    <div className="w-12 h-12 relative" />
                    <div className="flex-col justify-center items-start gap-3 flex">
                      <div className="w-[210px] text-slate-800 text-2xl font-semibold font-['Clash Display Variable'] leading-[28.80px]">
                        Business
                      </div>
                      <div className="justify-start items-center gap-4 inline-flex">
                        <div className="text-slate-500 text-lg font-normal font-['Epilogue'] leading-[28.80px]">
                          211 jobs available
                        </div>
                        <div className="w-6 h-6 pl-[4.75px] pr-[4.25px] pt-[5.70px] pb-[6.25px] justify-center items-center flex">
                          <div className="origin-top-left -rotate-90 w-3 h-[15px] relative"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-8 bg-white border border-zinc-200 flex-col justify-start items-start gap-8 inline-flex">
                    <div className="w-12 h-12 relative" />
                    <div className="flex-col justify-center items-start gap-3 flex">
                      <div className="w-[210px] text-slate-800 text-2xl font-semibold font-['Clash Display Variable'] leading-[28.80px]">
                        Human Resource
                      </div>
                      <div className="justify-start items-center gap-4 inline-flex">
                        <div className="text-slate-500 text-lg font-normal font-['Epilogue'] leading-[28.80px]">
                          346 jobs available
                        </div>
                        <div className="w-6 h-6 pl-[4.75px] pr-[4.25px] pt-[5.70px] pb-[6.25px] justify-center items-center flex">
                          <div className="origin-top-left -rotate-90 w-3 h-[15px] relative"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Start posting jobs today  */}
                <div className="block relative  mt-10 w-full h-[500px] bg-red-400">
                  <img src="rect.svg" className="absolute top-0 left-0" />

                  <div className="absolute top-24 left-24  w-[364px] text-white text-5xl font-semibold font-['Clash Display Variable'] leading-[52.80px]">
                    Start posting jobs today
                  </div>
                  <div className="top-60 left-24 absolute  w-[364px] text-white text-base font-medium font-['Epilogue'] leading-relaxed">
                    Start posting jobs for only $10.
                  </div>

                  <div className="absolute top-72 left-24 w-[179px] h-[50px] px-6 py-3 bg-white justify-center items-center gap-2.5 inline-flex">
                    <div className="text-center text-black text-base font-bold font-['Epilogue'] leading-relaxed">
                      Sign Up For Free
                    </div>
                  </div>

                  <div className="absolute top-[120px] left-[500px] bg-red-300 ">
                    <img src="bg.png" className="w-[500px]  object-cover" />
                  </div>
                </div>

                {/* Search by categry  */}
                <div className="mt-[500px]">
                  <span className="text-slate-50 text-5xl font-semibold font-['Outfit'] leading-[52.80px]">
                    Latest{" "}
                  </span>
                  <span className="text-sky-400 text-5xl font-semibold font-['Outfit'] leading-[52.80px]">
                    jobs open
                  </span>
                </div>

                <div className="w-[1192px] h-[644px] bg-gray-800 justify-start items-start gap-8 inline-flex">
                  <div className="w-[580px] flex-col justify-start items-start gap-4 inline-flex">
                    <div className="self-stretch px-10 py-6 bg-white justify-start items-start gap-6 inline-flex">
                      <div className="w-16 h-16 relative">
                        <div className="w-16 h-16 left-0 top-0 absolute rounded-full" />
                        <div className="w-[48.60px] h-[57.60px] left-[8px] top-[3.20px] absolute">
                          <div className="w-[48.60px] h-[57.42px] left-0 top-0 absolute"></div>
                        </div>
                      </div>
                      <div className="flex-col justify-start items-start gap-2 inline-flex">
                        <div className="text-slate-800 text-xl font-semibold font-['Epilogue'] leading-normal">
                          Social Media Assistant
                        </div>
                        <div className="h-[27px] justify-center items-center gap-2 inline-flex">
                          <div className="text-slate-600 text-base font-normal font-['Epilogue'] leading-relaxed">
                            Nomad
                          </div>
                          <div className="w-1 h-1 bg-slate-600 rounded-full" />
                          <div className="text-slate-600 text-base font-normal font-['Epilogue'] leading-relaxed">
                            Paris, France
                          </div>
                        </div>
                        <div className="justify-start items-start gap-2 inline-flex">
                          <div className="px-2.5 py-1.5 bg-emerald-300 bg-opacity-10 rounded-[80px] justify-center items-center gap-2 flex">
                            <div className="text-emerald-300 text-sm font-semibold font-['Epilogue'] leading-snug">
                              Full-Time
                            </div>
                          </div>
                          <div className="w-px self-stretch bg-zinc-200" />
                          <div className="px-2.5 py-1.5 rounded-[80px] border border-amber-400 justify-center items-center gap-2 flex">
                            <div className="text-amber-400 text-sm font-semibold font-['Epilogue'] leading-snug">
                              Marketing
                            </div>
                          </div>
                          <div className="px-2.5 py-1.5 rounded-[80px] border border-indigo-600 justify-center items-center gap-2 flex">
                            <div className="text-indigo-600 text-sm font-semibold font-['Epilogue'] leading-snug">
                              Design
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch px-10 py-6 bg-white justify-start items-start gap-6 inline-flex">
                      <div className="w-16 h-16 relative">
                        <div className="w-16 h-16 left-0 top-0 absolute rounded-full" />
                        <div className="w-[51.20px] h-12 left-[6.40px] top-[8px] absolute" />
                      </div>
                      <div className="flex-col justify-start items-start gap-2 inline-flex">
                        <div className="text-slate-800 text-xl font-semibold font-['Epilogue'] leading-normal">
                          Brand Designer
                        </div>
                        <div className="h-[27px] justify-center items-center gap-2 inline-flex">
                          <div className="text-slate-600 text-base font-normal font-['Epilogue'] leading-relaxed">
                            Dropbox
                          </div>
                          <div className="w-1 h-1 bg-slate-600 rounded-full" />
                          <div className="text-slate-600 text-base font-normal font-['Epilogue'] leading-relaxed">
                            San Fransisco, USA
                          </div>
                        </div>
                        <div className="justify-start items-start gap-2 inline-flex">
                          <div className="px-2.5 py-1.5 bg-emerald-300 bg-opacity-10 rounded-[80px] justify-center items-center gap-2 flex">
                            <div className="text-emerald-300 text-sm font-semibold font-['Epilogue'] leading-snug">
                              Full-Time
                            </div>
                          </div>
                          <div className="w-px self-stretch bg-zinc-200" />
                          <div className="px-2.5 py-1.5 rounded-[80px] border border-amber-400 justify-center items-center gap-2 flex">
                            <div className="text-amber-400 text-sm font-semibold font-['Epilogue'] leading-snug">
                              Marketing
                            </div>
                          </div>
                          <div className="px-2.5 py-1.5 rounded-[80px] border border-indigo-600 justify-center items-center gap-2 flex">
                            <div className="text-indigo-600 text-sm font-semibold font-['Epilogue'] leading-snug">
                              Design
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-[580px] px-10 py-6 bg-white justify-start items-start gap-6 inline-flex">
                      <div className="w-16 h-16 relative">
                        <div className="w-16 h-16 left-0 top-0 absolute rounded-full" />
                        <div className="w-[45.60px] h-[51.20px] left-[9.60px] top-[6.40px] absolute">
                          <div className="w-[45.59px] h-[51.20px] left-0 top-0 absolute"></div>
                        </div>
                      </div>
                      <div className="flex-col justify-start items-start gap-2 inline-flex">
                        <div className="text-slate-800 text-xl font-semibold font-['Epilogue'] leading-normal">
                          Interactive Developer
                        </div>
                        <div className="h-[27px] justify-center items-center gap-2 inline-flex">
                          <div className="text-slate-600 text-base font-normal font-['Epilogue'] leading-relaxed">
                            Terraform
                          </div>
                          <div className="w-1 h-1 bg-slate-600 rounded-full" />
                          <div className="text-slate-600 text-base font-normal font-['Epilogue'] leading-relaxed">
                            Hamburg, Germany
                          </div>
                        </div>
                        <div className="justify-start items-start gap-2 inline-flex">
                          <div className="px-2.5 py-1.5 bg-emerald-300 bg-opacity-10 rounded-[80px] justify-center items-center gap-2 flex">
                            <div className="text-emerald-300 text-sm font-semibold font-['Epilogue'] leading-snug">
                              Full-Time
                            </div>
                          </div>
                          <div className="w-px self-stretch bg-zinc-200" />
                          <div className="px-2.5 py-1.5 rounded-[80px] border border-amber-400 justify-center items-center gap-2 flex">
                            <div className="text-amber-400 text-sm font-semibold font-['Epilogue'] leading-snug">
                              Marketing
                            </div>
                          </div>
                          <div className="px-2.5 py-1.5 rounded-[80px] border border-indigo-600 justify-center items-center gap-2 flex">
                            <div className="text-indigo-600 text-sm font-semibold font-['Epilogue'] leading-snug">
                              Design
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-[580px] px-10 py-6 bg-white justify-start items-start gap-6 inline-flex">
                      <div className="w-16 h-16 relative">
                        <div className="w-16 h-16 left-0 top-0 absolute rounded-full" />
                        <div className="w-[33.60px] h-[51.20px] left-[15.20px] top-[6.40px] absolute" />
                      </div>
                      <div className="flex-col justify-start items-start gap-2 inline-flex">
                        <div className="text-slate-800 text-xl font-semibold font-['Epilogue'] leading-normal">
                          HR Manager
                        </div>
                        <div className="h-[27px] justify-center items-center gap-2 inline-flex">
                          <div className="text-slate-600 text-base font-normal font-['Epilogue'] leading-relaxed">
                            Packer
                          </div>
                          <div className="w-1 h-1 bg-slate-600 rounded-full" />
                          <div className="text-slate-600 text-base font-normal font-['Epilogue'] leading-relaxed">
                            Lucern, Switzerland
                          </div>
                        </div>
                        <div className="justify-start items-start gap-2 inline-flex">
                          <div className="px-2.5 py-1.5 bg-emerald-300 bg-opacity-10 rounded-[80px] justify-center items-center gap-2 flex">
                            <div className="text-emerald-300 text-sm font-semibold font-['Epilogue'] leading-snug">
                              Full-Time
                            </div>
                          </div>
                          <div className="w-px self-stretch bg-zinc-200" />
                          <div className="px-2.5 py-1.5 rounded-[80px] border border-amber-400 justify-center items-center gap-2 flex">
                            <div className="text-amber-400 text-sm font-semibold font-['Epilogue'] leading-snug">
                              Marketing
                            </div>
                          </div>
                          <div className="px-2.5 py-1.5 rounded-[80px] border border-indigo-600 justify-center items-center gap-2 flex">
                            <div className="text-indigo-600 text-sm font-semibold font-['Epilogue'] leading-snug">
                              Design
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[580px] flex-col justify-start items-start gap-4 inline-flex">
                    <div className="self-stretch px-10 py-6 bg-white justify-start items-start gap-6 inline-flex">
                      <div className="w-16 h-16 relative">
                        <div className="w-16 h-16 left-0 top-0 absolute bg-stone-300 rounded-full" />
                        <div className="w-16 h-16 left-0 top-0 absolute bg-white" />
                        <img
                          className="w-[58.18px] h-[58.18px] left-[2.91px] top-[2.91px] absolute"
                          src="https://via.placeholder.com/58x58"
                        />
                      </div>
                      <div className="flex-col justify-start items-start gap-2 inline-flex">
                        <div className="text-slate-800 text-xl font-semibold font-['Epilogue'] leading-normal">
                          Social Media Assistant
                        </div>
                        <div className="h-[27px] justify-center items-center gap-2 inline-flex">
                          <div className="text-slate-600 text-base font-normal font-['Epilogue'] leading-relaxed">
                            Netlify
                          </div>
                          <div className="w-1 h-1 bg-slate-600 rounded-full" />
                          <div className="text-slate-600 text-base font-normal font-['Epilogue'] leading-relaxed">
                            Paris, France
                          </div>
                        </div>
                        <div className="justify-start items-start gap-2 inline-flex">
                          <div className="px-2.5 py-1.5 bg-emerald-300 bg-opacity-10 rounded-[80px] justify-center items-center gap-2 flex">
                            <div className="text-emerald-300 text-sm font-semibold font-['Epilogue'] leading-snug">
                              Full-Time
                            </div>
                          </div>
                          <div className="w-px self-stretch bg-zinc-200" />
                          <div className="px-2.5 py-1.5 rounded-[80px] border border-amber-400 justify-center items-center gap-2 flex">
                            <div className="text-amber-400 text-sm font-semibold font-['Epilogue'] leading-snug">
                              Marketing
                            </div>
                          </div>
                          <div className="px-2.5 py-1.5 rounded-[80px] border border-indigo-600 justify-center items-center gap-2 flex">
                            <div className="text-indigo-600 text-sm font-semibold font-['Epilogue'] leading-snug">
                              Design
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch px-10 py-6 bg-white justify-start items-start gap-6 inline-flex">
                      <div className="w-16 h-16 relative">
                        <div className="w-16 h-16 left-0 top-0 absolute bg-stone-300 rounded-full" />
                        <img
                          className="w-16 h-16 left-0 top-0 absolute"
                          src="https://via.placeholder.com/64x64"
                        />
                      </div>
                      <div className="flex-col justify-start items-start gap-2 inline-flex">
                        <div className="text-slate-800 text-xl font-semibold font-['Epilogue'] leading-normal">
                          Brand Designer
                        </div>
                        <div className="h-[27px] justify-center items-center gap-2 inline-flex">
                          <div className="text-slate-600 text-base font-normal font-['Epilogue'] leading-relaxed">
                            Maze
                          </div>
                          <div className="w-1 h-1 bg-slate-600 rounded-full" />
                          <div className="text-slate-600 text-base font-normal font-['Epilogue'] leading-relaxed">
                            San Fransisco, USA
                          </div>
                        </div>
                        <div className="justify-start items-start gap-2 inline-flex">
                          <div className="px-2.5 py-1.5 bg-emerald-300 bg-opacity-10 rounded-[80px] justify-center items-center gap-2 flex">
                            <div className="text-emerald-300 text-sm font-semibold font-['Epilogue'] leading-snug">
                              Full-Time
                            </div>
                          </div>
                          <div className="w-px self-stretch bg-zinc-200" />
                          <div className="px-2.5 py-1.5 rounded-[80px] border border-amber-400 justify-center items-center gap-2 flex">
                            <div className="text-amber-400 text-sm font-semibold font-['Epilogue'] leading-snug">
                              Marketing
                            </div>
                          </div>
                          <div className="px-2.5 py-1.5 rounded-[80px] border border-indigo-600 justify-center items-center gap-2 flex">
                            <div className="text-indigo-600 text-sm font-semibold font-['Epilogue'] leading-snug">
                              Design
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-[580px] px-10 py-6 bg-white justify-start items-start gap-6 inline-flex">
                      <div className="w-16 h-16 relative">
                        <div className="w-16 h-16 left-0 top-0 absolute bg-stone-300 rounded-full" />
                        <img
                          className="w-16 h-16 left-0 top-0 absolute"
                          src="https://via.placeholder.com/64x64"
                        />
                      </div>
                      <div className="flex-col justify-start items-start gap-2 inline-flex">
                        <div className="text-slate-800 text-xl font-semibold font-['Epilogue'] leading-normal">
                          Interactive Developer
                        </div>
                        <div className="h-[27px] justify-center items-center gap-2 inline-flex">
                          <div className="text-slate-600 text-base font-normal font-['Epilogue'] leading-relaxed">
                            Udacity
                          </div>
                          <div className="w-1 h-1 bg-slate-600 rounded-full" />
                          <div className="text-slate-600 text-base font-normal font-['Epilogue'] leading-relaxed">
                            Hamburg, Germany
                          </div>
                        </div>
                        <div className="justify-start items-start gap-2 inline-flex">
                          <div className="px-2.5 py-1.5 bg-emerald-300 bg-opacity-10 rounded-[80px] justify-center items-center gap-2 flex">
                            <div className="text-emerald-300 text-sm font-semibold font-['Epilogue'] leading-snug">
                              Full-Time
                            </div>
                          </div>
                          <div className="w-px self-stretch bg-zinc-200" />
                          <div className="px-2.5 py-1.5 rounded-[80px] border border-amber-400 justify-center items-center gap-2 flex">
                            <div className="text-amber-400 text-sm font-semibold font-['Epilogue'] leading-snug">
                              Marketing
                            </div>
                          </div>
                          <div className="px-2.5 py-1.5 rounded-[80px] border border-indigo-600 justify-center items-center gap-2 flex">
                            <div className="text-indigo-600 text-sm font-semibold font-['Epilogue'] leading-snug">
                              Design
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-[580px] px-10 py-6 bg-white justify-start items-start gap-6 inline-flex">
                      <div className="w-16 h-16 justify-center items-center flex">
                        <div className="w-16 h-16 relative">
                          <div className="w-16 h-16 left-0 top-0 absolute bg-stone-300" />
                          <img
                            className="w-[57.60px] h-[57.60px] left-[3.20px] top-[3.20px] absolute"
                            src="https://via.placeholder.com/58x58"
                          />
                        </div>
                      </div>
                      <div className="flex-col justify-start items-start gap-2 inline-flex">
                        <div className="text-slate-800 text-xl font-semibold font-['Epilogue'] leading-normal">
                          HR Manager
                        </div>
                        <div className="h-[27px] justify-center items-center gap-2 inline-flex">
                          <div className="text-slate-600 text-base font-normal font-['Epilogue'] leading-relaxed">
                            Webflow
                          </div>
                          <div className="w-1 h-1 bg-slate-600 rounded-full" />
                          <div className="text-slate-600 text-base font-normal font-['Epilogue'] leading-relaxed">
                            Lucern, Switzerland
                          </div>
                        </div>
                        <div className="justify-start items-start gap-2 inline-flex">
                          <div className="px-2.5 py-1.5 bg-emerald-300 bg-opacity-10 rounded-[80px] justify-center items-center gap-2 flex">
                            <div className="text-emerald-300 text-sm font-semibold font-['Epilogue'] leading-snug">
                              Full-Time
                            </div>
                          </div>
                          <div className="w-px self-stretch bg-zinc-200" />
                          <div className="px-2.5 py-1.5 rounded-[80px] border border-amber-400 justify-center items-center gap-2 flex">
                            <div className="text-amber-400 text-sm font-semibold font-['Epilogue'] leading-snug">
                              Marketing
                            </div>
                          </div>
                          <div className="px-2.5 py-1.5 rounded-[80px] border border-indigo-600 justify-center items-center gap-2 flex">
                            <div className="text-indigo-600 text-sm font-semibold font-['Epilogue'] leading-snug">
                              Design
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[1600px]">
          <FooterNav />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
