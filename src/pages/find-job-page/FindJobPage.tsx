import { FooterNav } from "../../components/footer-nav/FooterNav";
import { Navbar } from "../../components/nav-bar/Navbar";

function FindJobPage() {
  return (
    <div>
      {/* Navbar */}
      <div>
        <Navbar />

        {/* Content */}
        <div className="">
          <div className="mt-10 mx-18 w-full flex items-center justify-center flex-col">
            {/* braning */}
            <div className="text-7xl font-semibold font-['Outfit'] leading-[70px] tracking-wide">
              Find your <span className="text-sky-400"> dream jobs</span>
            </div>

            <div className="mb-8 text-center text-white/80 text-lg font-normal font-['Epilogue'] mt-[20px] leading-[28.80px]">
              Find your next career at companies like HubSpot, Nike, and Dropbox
            </div>
          </div>

          {/*  Search bar */}
          <div className="flex flex-col items-center justify-center mt-[0px]">
            <div className="w-[1192px] h-[104px] p-6 bg-white shadow justify-start items-start gap-5 inline-flex">
              <div className="grow shrink basis-0 self-stretch px-4 justify-start items-center gap-4 flex">
                <div className="w-6 h-6 pl-[2.78px] pr-[2.46px] pt-[2.78px] pb-0.5 justify-center items-center flex">
                  <div className="w-[18.76px] h-[19.22px] relative">
                    <div className="w-[17.98px] h-[17.98px] left-0 top-0 absolute rounded-full border-2 border-slate-800" />
                  </div>
                </div>
                <div className="grow shrink basis-0 pt-2.5 flex-col justify-start items-start gap-2.5 inline-flex">
                  <div className="text-slate-500 text-base font-normal font-['Epilogue'] leading-relaxed">
                    Job title or keyword
                  </div>
                  <div className="self-stretch h-px bg-zinc-200" />
                </div>
              </div>
              <div className="w-14 h-[0px] origin-top-left rotate-90 opacity-10 border border-gray-800"></div>
              <div className="grow shrink basis-0 self-stretch pl-2 pr-6 justify-start items-center gap-4 flex">
                <div className="w-6 h-6 px-[4.50px] py-[3px] justify-center items-center flex">
                  <div className="w-[15px] h-[18px] relative"></div>
                </div>
                <div className="grow shrink basis-0 pt-2.5 flex-col justify-start items-start gap-2.5 inline-flex">
                  <div className="self-stretch justify-between items-center inline-flex">
                    <div className="opacity-90 text-gray-800 text-base font-normal font-['Epilogue'] leading-relaxed">
                      Florence, Italy
                    </div>
                    <div className="w-4 h-4 px-[3.33px] opacity-50 justify-center items-center flex" />
                  </div>
                  <div className="self-stretch h-px bg-zinc-200" />
                </div>
              </div>
              <div className="h-[50px] px-6 py-3 bg-sky-400 justify-center items-center gap-2.5 flex">
                <div className="text-center text-white text-base font-bold font-['Epilogue'] leading-relaxed">
                  Search
                </div>
              </div>
            </div>
          </div>

          {/* Content filter list */}
          <div className="w-[1440px] h-[1461px] pl-[124px] pr-[123px] py-[72px] justify-start items-start gap-10 inline-flex mb-[60px]">
            <div className="w-[234px] flex-col justify-start items-start gap-10 inline-flex">
              <div className="self-stretch h-[254px] flex-col justify-start items-start gap-5 flex">
                <div className="self-stretch justify-between items-center inline-flex">
                  <div className="text-white text-base font-bold font-['Epilogue'] leading-normal">
                    Type of Employment
                  </div>
                  <div className="w-5 h-5 px-[4.17px] origin-top-left rotate-180 justify-center items-center flex" />
                </div>
                <div className="justify-start items-center gap-4 inline-flex">
                  <div className="p-2.5 rounded border-2 border-zinc-200" />
                  <div className="text-white/80 text-base font-normal font-['Epilogue'] leading-relaxed">
                    Full-time (3)
                  </div>
                </div>
                <div className="justify-start items-center gap-4 inline-flex">
                  <div className="p-2.5 rounded border-2 border-zinc-200" />
                  <div className="text-white/80 text-base font-normal font-['Epilogue'] leading-relaxed">
                    Part-Time (5)
                  </div>
                </div>
                <div className="justify-start items-center gap-4 inline-flex">
                  <div className="p-2.5 rounded border-2 border-zinc-200" />
                  <div className="text-white/80 text-base font-normal font-['Epilogue'] leading-relaxed">
                    Remote (2)
                  </div>
                </div>
                <div className="justify-start items-center gap-4 inline-flex">
                  <div className="p-2.5 rounded border-2 border-zinc-200" />
                  <div className="text-white/80 text-base font-normal font-['Epilogue'] leading-relaxed">
                    Internship (24)
                  </div>
                </div>
                <div className="justify-start items-center gap-4 inline-flex">
                  <div className="p-2.5 rounded border-2 border-zinc-200" />
                  <div className="text-white/80 text-base font-normal font-['Epilogue'] leading-relaxed">
                    Contract (3)
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[392px] flex-col justify-start items-start gap-5 flex">
                <div className="self-stretch justify-between items-center inline-flex">
                  <div className="text-white text-base font-bold font-['Epilogue'] leading-normal">
                    Categories
                  </div>
                  <div className="w-5 h-5 px-[4.17px] origin-top-left rotate-180 justify-center items-center flex" />
                </div>
                <div className="justify-start items-center gap-4 inline-flex">
                  <div className="p-2.5 rounded border-2 border-zinc-200" />
                  <div className="text-white/80 text-base font-normal font-['Epilogue'] leading-relaxed">
                    Design (24)
                  </div>
                </div>
                <div className="justify-start items-center gap-4 inline-flex">
                  <div className="p-2.5 rounded border-2 border-zinc-200" />
                  <div className="text-white/80 text-base font-normal font-['Epilogue'] leading-relaxed">
                    Sales (3)
                  </div>
                </div>
                <div className="justify-start items-center gap-4 inline-flex">
                  <div className="p-2.5 rounded border-2 border-zinc-200" />
                  <div className="text-white/80 text-base font-normal font-['Epilogue'] leading-relaxed">
                    Marketing (3)
                  </div>
                </div>
                <div className="justify-start items-center gap-4 inline-flex">
                  <div className="w-6 h-6 p-1 bg-sky-400 rounded border border-sky-400 justify-center items-center flex">
                    <div className="w-4 h-4 relative flex-col justify-start items-start flex" />
                  </div>
                  <div className="text-white/80 text-base font-normal font-['Epilogue'] leading-relaxed">
                    Business (3)
                  </div>
                </div>
                <div className="justify-start items-center gap-4 inline-flex">
                  <div className="p-2.5 rounded border-2 border-zinc-200" />
                  <div className="text-white/80 text-base font-normal font-['Epilogue'] leading-relaxed">
                    Human Resource (6)
                  </div>
                </div>
                <div className="justify-start items-center gap-4 inline-flex">
                  <div className="p-2.5 rounded border-2 border-zinc-200" />
                  <div className="text-white/80 text-base font-normal font-['Epilogue'] leading-relaxed">
                    Finance (4)
                  </div>
                </div>
                <div className="justify-start items-center gap-4 inline-flex">
                  <div className="p-2.5 rounded border-2 border-zinc-200" />
                  <div className="text-white/80 text-base font-normal font-['Epilogue'] leading-relaxed">
                    Engineering (4)
                  </div>
                </div>
                <div className="justify-start items-center gap-4 inline-flex">
                  <div className="w-6 h-6 p-1 bg-sky-400 rounded border border-sky-400 justify-center items-center flex">
                    <div className="w-4 h-4 relative flex-col justify-start items-start flex" />
                  </div>
                  <div className="text-white/80 text-base font-normal font-['Epilogue'] leading-relaxed">
                    Technology (5)
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[254px] flex-col justify-start items-start gap-5 flex">
                <div className="self-stretch justify-between items-center inline-flex">
                  <div className="text-white text-base font-bold font-['Epilogue'] leading-normal">
                    Job Level
                  </div>
                  <div className="w-5 h-5 px-[4.17px] origin-top-left rotate-180 justify-center items-center flex" />
                </div>
                <div className="justify-start items-center gap-4 inline-flex">
                  <div className="p-2.5 rounded border-2 border-zinc-200" />
                  <div className="text-white/80 text-base font-normal font-['Epilogue'] leading-relaxed">
                    Entry Level (57)
                  </div>
                </div>
                <div className="justify-start items-center gap-4 inline-flex">
                  <div className="p-2.5 rounded border-2 border-zinc-200" />
                  <div className="text-white/80 text-base font-normal font-['Epilogue'] leading-relaxed">
                    Mid Level (3)
                  </div>
                </div>
                <div className="justify-start items-center gap-4 inline-flex">
                  <div className="p-2.5 rounded border-2 border-zinc-200" />
                  <div className="text-white/80 text-base font-normal font-['Epilogue'] leading-relaxed">
                    Senior Level (5)
                  </div>
                </div>
                <div className="justify-start items-center gap-4 inline-flex">
                  <div className="w-6 h-6 p-1 bg-sky-400 rounded border border-sky-400 justify-center items-center flex">
                    <div className="w-4 h-4 relative flex-col justify-start items-start flex" />
                  </div>
                  <div className="text-white/80 text-base font-normal font-['Epilogue'] leading-relaxed">
                    Director (12)
                  </div>
                </div>
                <div className="justify-start items-center gap-4 inline-flex">
                  <div className="p-2.5 rounded border-2 border-zinc-200" />
                  <div className="text-white/80 text-base font-normal font-['Epilogue'] leading-relaxed">
                    VP or Above (8)
                  </div>
                </div>
              </div>
              <div className="self-stretch h-52 flex-col justify-start items-start gap-5 flex">
                <div className="self-stretch justify-between items-center inline-flex">
                  <div className="text-white text-base font-bold font-['Epilogue'] leading-normal">
                    Salary Range
                  </div>
                  <div className="w-5 h-5 px-[4.17px] origin-top-left rotate-180 justify-center items-center flex" />
                </div>
                <div className="justify-start items-center gap-4 inline-flex">
                  <div className="p-2.5 rounded border-2 border-zinc-200" />
                  <div className="text-white/80 text-base font-normal font-['Epilogue'] leading-relaxed">
                    $700 - $1000 (4)
                  </div>
                </div>
                <div className="justify-start items-center gap-4 inline-flex">
                  <div className="p-2.5 rounded border-2 border-zinc-200" />
                  <div className="text-white/80 text-base font-normal font-['Epilogue'] leading-relaxed">
                    $100 - $1500 (6)
                  </div>
                </div>
                <div className="justify-start items-center gap-4 inline-flex">
                  <div className="p-2.5 rounded border-2 border-zinc-200" />
                  <div className="text-white/80 text-base font-normal font-['Epilogue'] leading-relaxed">
                    $1500 - $2000 (10)
                  </div>
                </div>
                <div className="justify-start items-center gap-4 inline-flex">
                  <div className="w-6 h-6 p-1 bg-sky-400 rounded border border-sky-400 justify-center items-center flex">
                    <div className="w-4 h-4 relative flex-col justify-start items-start flex" />
                  </div>
                  <div className="text-white/80 text-base font-normal font-['Epilogue'] leading-relaxed">
                    $3000 or above (4)
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-col justify-center items-center gap-8 inline-flex">
              <div className="w-[919px] justify-between items-center inline-flex">
                <div className="flex-col justify-start items-start gap-1 inline-flex">
                  <div className="text-white text-[32px] font-semibold font-['Clash Display Variable'] leading-[38.40px]">
                    All Jobs
                  </div>
                  <div className="text-slate-500 text-base font-normal font-['Epilogue'] leading-relaxed">
                    Showing 73 results
                  </div>
                </div>
                <div className="justify-center items-center gap-[22px] flex">
                  <div className="justify-start items-center gap-3 flex">
                    <div className="text-right text-slate-500 text-base font-normal font-['Epilogue'] leading-relaxed">
                      Sort by:
                    </div>
                    <div className="justify-start items-center gap-2 flex">
                      <div className="text-white text-base font-medium font-['Epilogue'] leading-relaxed">
                        Most relevant
                      </div>
                      <div className="w-4 h-4 justify-center items-center flex">
                        <div className="w-4 h-4 px-[3.33px] justify-center items-center inline-flex" />
                      </div>
                    </div>
                  </div>
                  <div className="w-8 h-[0px] origin-top-left rotate-90 opacity-10 border border-gray-800"></div>
                  <div className="justify-start items-start gap-4 flex">
                    <div className="w-10 h-10 relative">
                      <div className="w-10 h-10 left-0 top-0 absolute rounded" />
                      <div className="w-6 h-6 left-[8px] top-[8px] absolute opacity-50" />
                    </div>
                    <div className="w-10 h-10 relative">
                      <div className="w-10 h-10 left-0 top-0 absolute opacity-5 bg-sky-400 rounded" />
                      <div className="w-6 h-6 left-[8px] top-[8px] absolute" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-4 flex">
                <div className="w-[919px] p-6 bg-white border border-zinc-200 justify-between items-center inline-flex">
                  <div className="justify-start items-start gap-6 flex">
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
                        <div className="text-slate-500 text-base font-normal font-['Epilogue'] leading-relaxed">
                          Nomad
                        </div>
                        <div className="w-1 h-1 bg-slate-500 rounded-full" />
                        <div className="text-slate-500 text-base font-normal font-['Epilogue'] leading-relaxed">
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
                        <div className="px-2.5 py-1.5 rounded-[80px] border border-sky-400 justify-center items-center gap-2 flex">
                          <div className="text-sky-400 text-sm font-semibold font-['Epilogue'] leading-snug">
                            Design
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[164px] self-stretch flex-col justify-between items-start inline-flex">
                    <div className="self-stretch px-6 py-3 bg-sky-400 justify-center items-center gap-2.5 inline-flex">
                      <div className="text-center text-white text-base font-bold font-['Epilogue'] leading-relaxed">
                        Apply
                      </div>
                    </div>
                    <div className="flex-col justify-start items-start gap-2 flex">
                      <div className="self-stretch justify-start items-start inline-flex">
                        <div className="grow shrink basis-0 h-1.5 bg-emerald-300" />
                        <div className="grow shrink basis-0 h-1.5 bg-emerald-300" />
                        <div className="grow shrink basis-0 h-1.5 bg-zinc-200" />
                        <div className="grow shrink basis-0 h-1.5 bg-zinc-200" />
                        <div className="grow shrink basis-0 h-1.5 bg-zinc-200" />
                      </div>
                      <div className="text-center">
                        <span className="text-slate-800 text-sm font-semibold font-['Epilogue'] leading-snug">
                          5 applied
                        </span>
                        <span className="text-black text-sm font-normal font-['Epilogue'] leading-snug">
                          {" "}
                        </span>
                        <span className="text-slate-500 text-sm font-normal font-['Epilogue'] leading-snug">
                          of 10 capacity
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[919px] p-6 bg-white border border-zinc-200 justify-between items-center inline-flex">
                  <div className="justify-start items-start gap-6 flex">
                    <div className="w-16 h-16 relative">
                      <div className="w-16 h-16 left-0 top-0 absolute rounded-full" />
                      <div className="w-[51.20px] h-12 left-[6.40px] top-[8px] absolute" />
                    </div>
                    <div className="flex-col justify-start items-start gap-2 inline-flex">
                      <div className="text-slate-800 text-xl font-semibold font-['Epilogue'] leading-normal">
                        Brand Designer
                      </div>
                      <div className="h-[27px] justify-center items-center gap-2 inline-flex">
                        <div className="text-slate-500 text-base font-normal font-['Epilogue'] leading-relaxed">
                          Dropbox
                        </div>
                        <div className="w-1 h-1 bg-slate-500 rounded-full" />
                        <div className="text-slate-500 text-base font-normal font-['Epilogue'] leading-relaxed">
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
                        <div className="px-2.5 py-1.5 rounded-[80px] border border-sky-400 justify-center items-center gap-2 flex">
                          <div className="text-sky-400 text-sm font-semibold font-['Epilogue'] leading-snug">
                            Design
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[164px] self-stretch flex-col justify-between items-start inline-flex">
                    <div className="self-stretch px-6 py-3 bg-sky-400 justify-center items-center gap-2.5 inline-flex">
                      <div className="text-center text-white text-base font-bold font-['Epilogue'] leading-relaxed">
                        Apply
                      </div>
                    </div>
                    <div className="flex-col justify-start items-start gap-2 flex">
                      <div className="self-stretch justify-start items-start inline-flex">
                        <div className="grow shrink basis-0 h-1.5 bg-emerald-300" />
                        <div className="grow shrink basis-0 h-1.5 bg-zinc-200" />
                        <div className="grow shrink basis-0 h-1.5 bg-zinc-200" />
                        <div className="grow shrink basis-0 h-1.5 bg-zinc-200" />
                        <div className="grow shrink basis-0 h-1.5 bg-zinc-200" />
                      </div>
                      <div className="text-center">
                        <span className="text-slate-800 text-sm font-semibold font-['Epilogue'] leading-snug">
                          2 applied
                        </span>
                        <span className="text-black text-sm font-normal font-['Epilogue'] leading-snug">
                          {" "}
                        </span>
                        <span className="text-slate-500 text-sm font-normal font-['Epilogue'] leading-snug">
                          of 10 capacity
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[919px] p-6 bg-white border border-zinc-200 justify-between items-center inline-flex">
                  <div className="justify-start items-start gap-6 flex">
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
                        <div className="text-slate-500 text-base font-normal font-['Epilogue'] leading-relaxed">
                          Terraform
                        </div>
                        <div className="w-1 h-1 bg-slate-500 rounded-full" />
                        <div className="text-slate-500 text-base font-normal font-['Epilogue'] leading-relaxed">
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
                        <div className="px-2.5 py-1.5 rounded-[80px] border border-sky-400 justify-center items-center gap-2 flex">
                          <div className="text-sky-400 text-sm font-semibold font-['Epilogue'] leading-snug">
                            Design
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[164px] self-stretch flex-col justify-between items-start inline-flex">
                    <div className="self-stretch px-6 py-3 bg-sky-400 justify-center items-center gap-2.5 inline-flex">
                      <div className="text-center text-white text-base font-bold font-['Epilogue'] leading-relaxed">
                        Apply
                      </div>
                    </div>
                    <div className="flex-col justify-start items-start gap-2 flex">
                      <div className="self-stretch justify-start items-start inline-flex">
                        <div className="grow shrink basis-0 h-1.5 bg-emerald-300" />
                        <div className="grow shrink basis-0 h-1.5 bg-emerald-300" />
                        <div className="grow shrink basis-0 h-1.5 bg-emerald-300" />
                        <div className="grow shrink basis-0 h-1.5 bg-emerald-300" />
                        <div className="grow shrink basis-0 h-1.5 bg-zinc-200" />
                      </div>
                      <div className="text-center">
                        <span className="text-slate-800 text-sm font-semibold font-['Epilogue'] leading-snug">
                          8 applied
                        </span>
                        <span className="text-black text-sm font-normal font-['Epilogue'] leading-snug">
                          {" "}
                        </span>
                        <span className="text-slate-500 text-sm font-normal font-['Epilogue'] leading-snug">
                          of 12 capacity
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[919px] p-6 bg-white border border-zinc-200 justify-between items-center inline-flex">
                  <div className="justify-start items-start gap-6 flex">
                    <div className="w-16 h-16 relative">
                      <div className="w-16 h-16 left-0 top-0 absolute bg-stone-300 rounded-full" />
                      <img
                        className="w-16 h-16 left-0 top-0 absolute"
                        src="https://via.placeholder.com/64x64"
                      />
                    </div>
                    <div className="flex-col justify-start items-start gap-2 inline-flex">
                      <div className="text-slate-800 text-xl font-semibold font-['Epilogue'] leading-normal">
                        Email Marketing
                      </div>
                      <div className="h-[27px] justify-center items-center gap-2 inline-flex">
                        <div className="text-slate-500 text-base font-normal font-['Epilogue'] leading-relaxed">
                          Revolut
                        </div>
                        <div className="w-1 h-1 bg-slate-500 rounded-full" />
                        <div className="text-slate-500 text-base font-normal font-['Epilogue'] leading-relaxed">
                          Madrid, Spain
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
                        <div className="px-2.5 py-1.5 rounded-[80px] border border-sky-400 justify-center items-center gap-2 flex">
                          <div className="text-sky-400 text-sm font-semibold font-['Epilogue'] leading-snug">
                            Design
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[164px] self-stretch flex-col justify-between items-start inline-flex">
                    <div className="self-stretch px-6 py-3 bg-sky-400 justify-center items-center gap-2.5 inline-flex">
                      <div className="text-center text-white text-base font-bold font-['Epilogue'] leading-relaxed">
                        Apply
                      </div>
                    </div>
                    <div className="flex-col justify-start items-start gap-2 flex">
                      <div className="self-stretch justify-start items-start inline-flex">
                        <div className="grow shrink basis-0 h-1.5 bg-zinc-200" />
                        <div className="grow shrink basis-0 h-1.5 bg-zinc-200" />
                        <div className="grow shrink basis-0 h-1.5 bg-zinc-200" />
                        <div className="grow shrink basis-0 h-1.5 bg-zinc-200" />
                        <div className="grow shrink basis-0 h-1.5 bg-zinc-200" />
                      </div>
                      <div className="text-center">
                        <span className="text-slate-800 text-sm font-semibold font-['Epilogue'] leading-snug">
                          0 applied
                        </span>
                        <span className="text-black text-sm font-normal font-['Epilogue'] leading-snug">
                          {" "}
                        </span>
                        <span className="text-slate-500 text-sm font-normal font-['Epilogue'] leading-snug">
                          of 10 capacity
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[919px] p-6 bg-white border border-zinc-200 justify-between items-center inline-flex">
                  <div className="justify-start items-start gap-6 flex">
                    <div className="w-16 h-16 relative">
                      <div className="w-16 h-16 left-0 top-0 absolute rounded-full" />
                      <img
                        className="w-16 h-16 left-0 top-0 absolute"
                        src="https://via.placeholder.com/64x64"
                      />
                    </div>
                    <div className="flex-col justify-start items-start gap-2 inline-flex">
                      <div className="text-slate-800 text-xl font-semibold font-['Epilogue'] leading-normal">
                        Lead Engineer
                      </div>
                      <div className="h-[27px] justify-center items-center gap-2 inline-flex">
                        <div className="text-slate-500 text-base font-normal font-['Epilogue'] leading-relaxed">
                          Canva
                        </div>
                        <div className="w-1 h-1 bg-slate-500 rounded-full" />
                        <div className="text-slate-500 text-base font-normal font-['Epilogue'] leading-relaxed">
                          Ankara, Turkey
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
                        <div className="px-2.5 py-1.5 rounded-[80px] border border-sky-400 justify-center items-center gap-2 flex">
                          <div className="text-sky-400 text-sm font-semibold font-['Epilogue'] leading-snug">
                            Design
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[164px] self-stretch flex-col justify-between items-start inline-flex">
                    <div className="self-stretch px-6 py-3 bg-sky-400 justify-center items-center gap-2.5 inline-flex">
                      <div className="text-center text-white text-base font-bold font-['Epilogue'] leading-relaxed">
                        Apply
                      </div>
                    </div>
                    <div className="flex-col justify-start items-start gap-2 flex">
                      <div className="self-stretch justify-start items-start inline-flex">
                        <div className="grow shrink basis-0 h-1.5 bg-emerald-300" />
                        <div className="grow shrink basis-0 h-1.5 bg-emerald-300" />
                        <div className="grow shrink basis-0 h-1.5 bg-zinc-200" />
                        <div className="grow shrink basis-0 h-1.5 bg-zinc-200" />
                        <div className="grow shrink basis-0 h-1.5 bg-zinc-200" />
                      </div>
                      <div className="text-center">
                        <span className="text-slate-800 text-sm font-semibold font-['Epilogue'] leading-snug">
                          5 applied
                        </span>
                        <span className="text-black text-sm font-normal font-['Epilogue'] leading-snug">
                          {" "}
                        </span>
                        <span className="text-slate-500 text-sm font-normal font-['Epilogue'] leading-snug">
                          of 10 capacity
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[919px] p-6 bg-white border border-zinc-200 justify-between items-center inline-flex">
                  <div className="justify-start items-start gap-6 flex">
                    <div className="w-16 h-16 relative">
                      <div className="w-16 h-16 left-0 top-0 absolute bg-stone-300 rounded-full" />
                      <img
                        className="w-16 h-16 left-0 top-0 absolute"
                        src="https://via.placeholder.com/64x64"
                      />
                    </div>
                    <div className="flex-col justify-start items-start gap-2 inline-flex">
                      <div className="text-slate-800 text-xl font-semibold font-['Epilogue'] leading-normal">
                        Product Designer
                      </div>
                      <div className="h-[27px] justify-center items-center gap-2 inline-flex">
                        <div className="text-slate-500 text-base font-normal font-['Epilogue'] leading-relaxed">
                          ClassPass
                        </div>
                        <div className="w-1 h-1 bg-slate-500 rounded-full" />
                        <div className="text-slate-500 text-base font-normal font-['Epilogue'] leading-relaxed">
                          Berlin, Germany
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
                        <div className="px-2.5 py-1.5 rounded-[80px] border border-sky-400 justify-center items-center gap-2 flex">
                          <div className="text-sky-400 text-sm font-semibold font-['Epilogue'] leading-snug">
                            Design
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[164px] self-stretch flex-col justify-between items-start inline-flex">
                    <div className="self-stretch px-6 py-3 bg-sky-400 justify-center items-center gap-2.5 inline-flex">
                      <div className="text-center text-white text-base font-bold font-['Epilogue'] leading-relaxed">
                        Apply
                      </div>
                    </div>
                    <div className="flex-col justify-start items-start gap-2 flex">
                      <div className="self-stretch justify-start items-start inline-flex">
                        <div className="grow shrink basis-0 h-1.5 bg-emerald-300" />
                        <div className="grow shrink basis-0 h-1.5 bg-emerald-300" />
                        <div className="grow shrink basis-0 h-1.5 bg-zinc-200" />
                        <div className="grow shrink basis-0 h-1.5 bg-zinc-200" />
                        <div className="grow shrink basis-0 h-1.5 bg-zinc-200" />
                      </div>
                      <div className="text-center">
                        <span className="text-slate-800 text-sm font-semibold font-['Epilogue'] leading-snug">
                          5 applied
                        </span>
                        <span className="text-black text-sm font-normal font-['Epilogue'] leading-snug">
                          {" "}
                        </span>
                        <span className="text-slate-500 text-sm font-normal font-['Epilogue'] leading-snug">
                          of 10 capacity
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[919px] p-6 bg-white border border-zinc-200 justify-between items-center inline-flex">
                  <div className="justify-start items-start gap-6 flex">
                    <div className="w-16 h-16 relative">
                      <div className="w-16 h-16 left-0 top-0 absolute bg-stone-300 rounded-full" />
                      <img
                        className="w-16 h-16 left-0 top-0 absolute"
                        src="https://via.placeholder.com/64x64"
                      />
                    </div>
                    <div className="flex-col justify-start items-start gap-2 inline-flex">
                      <div className="text-slate-800 text-xl font-semibold font-['Epilogue'] leading-normal">
                        Customer Manager
                      </div>
                      <div className="h-[27px] justify-center items-center gap-2 inline-flex">
                        <div className="text-slate-500 text-base font-normal font-['Epilogue'] leading-relaxed">
                          Pitch
                        </div>
                        <div className="w-1 h-1 bg-slate-500 rounded-full" />
                        <div className="text-slate-500 text-base font-normal font-['Epilogue'] leading-relaxed">
                          Berlin, Germany
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
                        <div className="px-2.5 py-1.5 rounded-[80px] border border-sky-400 justify-center items-center gap-2 flex">
                          <div className="text-sky-400 text-sm font-semibold font-['Epilogue'] leading-snug">
                            Design
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[164px] self-stretch flex-col justify-between items-start inline-flex">
                    <div className="self-stretch px-6 py-3 bg-sky-400 justify-center items-center gap-2.5 inline-flex">
                      <div className="text-center text-white text-base font-bold font-['Epilogue'] leading-relaxed">
                        Apply
                      </div>
                    </div>
                    <div className="flex-col justify-start items-start gap-2 flex">
                      <div className="self-stretch justify-start items-start inline-flex">
                        <div className="grow shrink basis-0 h-1.5 bg-emerald-300" />
                        <div className="grow shrink basis-0 h-1.5 bg-emerald-300" />
                        <div className="grow shrink basis-0 h-1.5 bg-zinc-200" />
                        <div className="grow shrink basis-0 h-1.5 bg-zinc-200" />
                        <div className="grow shrink basis-0 h-1.5 bg-zinc-200" />
                      </div>
                      <div className="text-center">
                        <span className="text-slate-800 text-sm font-semibold font-['Epilogue'] leading-snug">
                          5 applied
                        </span>
                        <span className="text-black text-sm font-normal font-['Epilogue'] leading-snug">
                          {" "}
                        </span>
                        <span className="text-slate-500 text-sm font-normal font-['Epilogue'] leading-snug">
                          of 10 capacity
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch justify-center items-center gap-2 inline-flex">
                <div className="w-6 h-6 relative" />
                <div className="justify-start items-start flex">
                  <div className="px-3 py-2.5 bg-sky-400 rounded-lg justify-center items-center gap-2 flex">
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

        <FooterNav />
      </div>
    </div>
  );
}

export default FindJobPage;
