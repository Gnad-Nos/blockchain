function HistoryHire() {
  return (
    <div className="bg-white flex">
      {/* left */}
      <div className="w-1/6">
        <div className="w-[272px] h-screen py-8 bg-slate-50 shadow flex-col justify-between items-start inline-flex">
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
                <div className="w-64 pl-8 pr-4 py-3 justify-start items-center gap-4 inline-flex">
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
                </div>
                <div className="w-[272px] pl-8 pr-4 py-3 justify-start items-center gap-4 inline-flex">
                  <div className="w-6 h-6 relative" />
                  <div className="grow shrink basis-0 h-6 text-slate-500 text-base font-medium font-['Inter'] leading-relaxed">
                    Company Profile
                  </div>
                </div>
                <div className="w-full justify-center items-center gap-3 inline-flex">
                  <div className="h-12 pl-4 py-3 w-full bg-violet-100 justify-start items-start gap-4 flex">
                    <div className="w-6 h-6 relative" />
                    <div className="grow shrink basis-0 h-6 text-indigo-600 text-base font-medium font-['Inter'] leading-relaxed">
                      All Applicants
                    </div>
                  </div>
                </div>
                <div className="w-[272px] pl-8 pr-4 py-3 justify-start items-center gap-4 inline-flex">
                  <div className="w-6 h-6 relative" />
                  <div className="grow shrink basis-0 h-6 text-slate-500 text-base font-medium font-['Inter'] leading-relaxed">
                    Job Listing
                  </div>
                </div>
                <div className="w-[272px] pl-8 pr-4 py-3 justify-start items-center gap-4 inline-flex">
                  <div className="w-6 h-6 relative" />
                  <div className="grow shrink basis-0 h-6 text-slate-500 text-base font-medium font-['Inter'] leading-relaxed">
                    My Schedule
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
                  <div className="w-64 pl-8 pr-4 py-3 justify-start items-center gap-4 inline-flex">
                    <div className="w-6 h-6 relative" />
                    <div className="grow shrink basis-0 h-6 text-slate-500 text-base font-medium font-['Inter'] leading-relaxed">
                      Settings
                    </div>
                  </div>
                  <div className="self-stretch pl-8 pr-4 py-3 justify-start items-center gap-4 inline-flex">
                    <div className="w-6 h-6 relative" />
                    <div className="grow shrink basis-0 h-6 text-slate-500 text-base font-medium font-['Inter'] leading-relaxed">
                      Help Center
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[272px] h-[72px] relative">
            <div className="left-[32px] top-[21px] absolute justify-start items-center gap-4 inline-flex">
              <div className="w-12 h-12 relative">
                <img
                  className="w-12 h-12 left-0 top-0 absolute rounded-full"
                  src="https://via.placeholder.com/48x48"
                />
              </div>
              <div className="flex-col justify-start items-start inline-flex">
                <div className="text-slate-800 text-lg font-semibold font-['Epilogue'] leading-[28.80px]">
                  Maria Kelly
                </div>
                <div className="opacity-50 text-slate-600 text-sm font-normal font-['Epilogue'] leading-snug">
                  MariaKlly@email.com
                </div>
              </div>
            </div>
            <div className="w-[272px] h-[0px] left-0 top-0 absolute"></div>
          </div>
        </div>
      </div>
      {/* right */}
      <div className="w-5/6">
        <div className="w-[1168px] h-screen pb-10 flex-col justify-start items-center inline-flex">
          <div className="w-[1168px] px-8 py-6 bg-white justify-between items-center inline-flex">
            <div className="text-slate-800 text-2xl font-semibold font-['Clash Display Variable'] leading-[28.80px]">
              Total Applicants : 19
            </div>
            <div className="justify-center items-center gap-4 flex">
              <div className="justify-start items-start gap-2 flex">
                <div className="h-[50px] px-4 py-3 bg-white border border-zinc-200 justify-start items-center gap-4 flex">
                  <div className="w-6 h-6 relative">
                    <div className="w-[18.76px] h-[19.22px] left-[2.78px] top-[2.78px] absolute">
                      <div className="w-[17.98px] h-[17.98px] left-0 top-0 absolute rounded-full border-2 border-gray-400" />
                    </div>
                  </div>
                  <div className="text-gray-400 text-base font-normal font-['Epilogue'] leading-relaxed">
                    Search Applicants
                  </div>
                </div>
                <div className="px-4 py-3 bg-white border border-zinc-200 justify-center items-center gap-2 flex">
                  <div className="w-6 h-6 relative" />
                  <div className="text-slate-800 text-base font-medium font-['Inter'] leading-relaxed">
                    Filter
                  </div>
                </div>
              </div>
              <div className="w-8 h-[0px] origin-top-left rotate-90 opacity-10 border border-gray-800"></div>
              <div className="p-1 bg-violet-100 justify-start items-start flex">
                <div className="px-3 py-[7px] bg-violet-100 justify-center items-center gap-2.5 flex">
                  <div className="text-indigo-600 text-base font-semibold font-['Epilogue'] leading-relaxed">
                    Pipeline View
                  </div>
                </div>
                <div className="px-3 py-[7px] bg-white justify-center items-center gap-2.5 flex">
                  <div className="text-indigo-600 text-base font-semibold font-['Epilogue'] leading-relaxed">
                    Table View
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-4 flex">
            <div className="w-[1104px] p-4 bg-white border border-zinc-200 justify-start items-start inline-flex">
              <div className="h-[26px] justify-start items-center gap-6 flex">
                <div className="justify-start items-center gap-4 flex">
                  <div className="p-2.5 rounded border-2 border-zinc-200" />
                </div>
                <div className="w-[200px] justify-start items-center gap-2 flex">
                  <div className="text-slate-500 text-base font-normal font-['Epilogue'] leading-relaxed">
                    Full Name
                  </div>
                  <div className="w-5 h-5 relative" />
                </div>
              </div>
              <div className="w-[100px]  h-[26px] justify-start items-center gap-2 flex">
                <div className="text-slate-500 text-base font-normal font-['Epilogue'] leading-relaxed">
                  Score
                </div>
                <div className="w-5 h-5 relative" />
              </div>
              <div className="w-[140px] h-[26px] justify-start items-center gap-2 flex">
                <div className="text-slate-500 text-base font-normal font-['Epilogue'] leading-relaxed">
                  Hiring Stage
                </div>
                <div className="w-5 h-5 relative" />
              </div>
              <div className="w-[180px]  h-[26px] justify-start items-center gap-2 flex">
                <div className="text-slate-500 text-base font-normal font-['Epilogue'] leading-relaxed">
                  Applied Date
                </div>
                <div className="w-5 h-5 relative" />
              </div>
              <div className="w-[210px]  h-[26px] justify-start items-center gap-2 flex">
                <div className="text-slate-500 text-base font-normal font-['Epilogue'] leading-relaxed">
                  Job Role
                </div>
                <div className="w-5 h-5 relative" />
              </div>
              <div className="justify-start items-center gap-2 flex">
                <div className="text-slate-500 text-base font-normal font-['Epilogue'] leading-relaxed">
                  Action
                </div>
                <div className="w-5 h-5 relative" />
              </div>
            </div>
            <div className="border border-zinc-200 flex-col justify-start items-start flex">
              <div className="w-[1104px] p-4 bg-slate-50 justify-between items-center inline-flex">
                <div className="w-[220px] h-10 justify-start items-center gap-6 flex">
                  <div className="justify-start items-center gap-4 flex">
                    <div className="p-2.5 rounded border-2 border-zinc-200" />
                  </div>
                  <div className="justify-start items-center gap-4 flex">
                    <div className="w-10 h-10 relative">
                      <img
                        className="w-10 h-10 left-0 top-0 absolute rounded-full"
                        src="https://via.placeholder.com/40x40"
                      />
                    </div>
                    <div className="text-slate-800 text-base font-medium font-['Epilogue'] leading-relaxed">
                      Jake Gyll
                    </div>
                  </div>
                </div>
                <div className="w-[120px] h-[26px] justify-start items-center gap-2 flex">
                  <div className="w-6 h-6 relative" />
                  <div className="text-slate-800 text-base font-medium font-['Epilogue'] leading-relaxed">
                    0.0
                  </div>
                </div>
                <div className="w-[183px] flex-col justify-start items-start gap-2.5 inline-flex">
                  <div className="px-2.5 py-1.5 rounded-[80px] border border-amber-400 justify-center items-center gap-2 inline-flex">
                    <div className="text-amber-400 text-sm font-semibold font-['Epilogue'] leading-snug">
                      Inreview
                    </div>
                  </div>
                </div>
                <div className="w-[200px] self-stretch text-slate-800 text-base font-medium font-['Epilogue'] leading-relaxed">
                  13 July, 2021
                </div>
                <div className="w-[205px] self-stretch text-slate-800 text-base font-medium font-['Epilogue'] leading-relaxed">
                  Designer
                </div>
                <div className="justify-center items-center gap-4 flex">
                  <div className="px-[21px] py-3 bg-violet-100 border border-indigo-600 justify-center items-center gap-2.5 flex">
                    <div className="text-center text-indigo-600 text-sm font-bold font-['Epilogue'] leading-snug">
                      See Application
                    </div>
                  </div>
                  <div className="w-6 h-6 relative" />
                </div>
              </div>
              <div className="w-[1104px] p-4 bg-white justify-between items-center inline-flex">
                <div className="w-[220px] h-10 justify-start items-center gap-6 flex">
                  <div className="justify-start items-center gap-4 flex">
                    <div className="p-2.5 rounded border-2 border-zinc-200" />
                  </div>
                  <div className="justify-start items-center gap-4 flex">
                    <div className="w-10 h-10 relative">
                      <img
                        className="w-10 h-10 left-0 top-0 absolute rounded-full"
                        src="https://via.placeholder.com/40x40"
                      />
                    </div>
                    <div className="text-slate-800 text-base font-medium font-['Epilogue'] leading-relaxed">
                      Guy Hawkins
                    </div>
                  </div>
                </div>
                <div className="w-[120px] h-[26px] justify-start items-center gap-2 flex">
                  <div className="w-6 h-6 relative" />
                  <div className="text-slate-800 text-base font-medium font-['Epilogue'] leading-relaxed">
                    0.0
                  </div>
                </div>
                <div className="w-[183px] flex-col justify-start items-start gap-2.5 inline-flex">
                  <div className="px-2.5 py-1.5 rounded-[80px] border border-amber-400 justify-center items-center gap-2 inline-flex">
                    <div className="text-amber-400 text-sm font-semibold font-['Epilogue'] leading-snug">
                      Inreview
                    </div>
                  </div>
                </div>
                <div className="w-[200px] self-stretch text-slate-800 text-base font-medium font-['Epilogue'] leading-relaxed">
                  13 July, 2021
                </div>
                <div className="w-[205px] self-stretch text-slate-800 text-base font-medium font-['Epilogue'] leading-relaxed">
                  JavaScript Dev
                </div>
                <div className="justify-center items-center gap-4 flex">
                  <div className="px-[21px] py-3 bg-violet-100 border border-indigo-600 justify-center items-center gap-2.5 flex">
                    <div className="text-center text-indigo-600 text-sm font-bold font-['Epilogue'] leading-snug">
                      See Application
                    </div>
                  </div>
                  <div className="w-6 h-6 relative" />
                </div>
              </div>
              <div className="w-[1104px] p-4 bg-slate-50 justify-between items-center inline-flex">
                <div className="w-[220px] h-10 justify-start items-center gap-6 flex">
                  <div className="justify-start items-center gap-4 flex">
                    <div className="p-2.5 rounded border-2 border-zinc-200" />
                  </div>
                  <div className="justify-start items-center gap-4 flex">
                    <div className="w-10 h-10 relative">
                      <img
                        className="w-10 h-10 left-0 top-0 absolute rounded-full"
                        src="https://via.placeholder.com/40x40"
                      />
                    </div>
                    <div className="text-slate-800 text-base font-medium font-['Epilogue'] leading-relaxed">
                      Cyndy Lillibridge
                    </div>
                  </div>
                </div>
                <div className="w-[120px] h-[26px] justify-start items-center gap-2 flex">
                  <div className="w-6 h-6 relative" />
                  <div className="text-slate-800 text-base font-medium font-['Epilogue'] leading-relaxed">
                    4.5
                  </div>
                </div>
                <div className="w-[183px] flex-col justify-start items-start gap-2.5 inline-flex">
                  <div className="px-2.5 py-1.5 rounded-[80px] border border-indigo-600 justify-center items-center gap-2 inline-flex">
                    <div className="text-indigo-600 text-sm font-semibold font-['Epilogue'] leading-snug">
                      Shortlisted
                    </div>
                  </div>
                </div>
                <div className="w-[200px] self-stretch text-slate-800 text-base font-medium font-['Epilogue'] leading-relaxed">
                  12 July, 2021
                </div>
                <div className="w-[205px] self-stretch text-slate-800 text-base font-medium font-['Epilogue'] leading-relaxed">
                  Golang Dev
                </div>
                <div className="justify-center items-center gap-4 flex">
                  <div className="px-[21px] py-3 bg-violet-100 border border-indigo-600 justify-center items-center gap-2.5 flex">
                    <div className="text-center text-indigo-600 text-sm font-bold font-['Epilogue'] leading-snug">
                      See Application
                    </div>
                  </div>
                  <div className="w-6 h-6 relative" />
                </div>
              </div>
              <div className="w-[1104px] p-4 bg-white justify-between items-center inline-flex">
                <div className="w-[220px] h-10 justify-start items-center gap-6 flex">
                  <div className="justify-start items-center gap-4 flex">
                    <div className="p-2.5 rounded border-2 border-zinc-200" />
                  </div>
                  <div className="justify-start items-center gap-4 flex">
                    <div className="w-10 h-10 relative">
                      <img
                        className="w-10 h-10 left-0 top-0 absolute rounded-full"
                        src="https://via.placeholder.com/40x40"
                      />
                      
                    </div>
                    <div className="text-slate-800 text-base font-medium font-['Epilogue'] leading-relaxed">
                      Rodolfo Goode
                    </div>
                  </div>
                </div>
                <div className="w-[120px] h-[26px] justify-start items-center gap-2 flex">
                  <div className="w-6 h-6 relative" />
                  <div className="text-slate-800 text-base font-medium font-['Epilogue'] leading-relaxed">
                    3.75
                  </div>
                </div>
                <div className="w-[183px] flex-col justify-start items-start gap-2.5 inline-flex">
                  <div className="px-2.5 py-1.5 rounded-[80px] border border-red-400 justify-center items-center gap-2 inline-flex">
                    <div className="text-red-400 text-sm font-semibold font-['Epilogue'] leading-snug">
                      Declined
                    </div>
                  </div>
                </div>
                <div className="w-[200px] self-stretch text-slate-800 text-base font-medium font-['Epilogue'] leading-relaxed">
                  11 July, 2021
                </div>
                <div className="w-[205px] self-stretch text-slate-800 text-base font-medium font-['Epilogue'] leading-relaxed">
                  NET Dev
                </div>
                <div className="justify-center items-center gap-4 flex">
                  <div className="px-[21px] py-3 bg-violet-100 border border-indigo-600 justify-center items-center gap-2.5 flex">
                    <div className="text-center text-indigo-600 text-sm font-bold font-['Epilogue'] leading-snug">
                      See Application
                    </div>
                  </div>
                  <div className="w-6 h-6 relative" />
                </div>
              </div>
              <div className="w-[1104px] p-4 bg-slate-50 justify-between items-center inline-flex">
                <div className="w-[220px] h-10 justify-start items-center gap-6 flex">
                  <div className="justify-start items-center gap-4 flex">
                    <div className="p-2.5 rounded border-2 border-zinc-200" />
                  </div>
                  <div className="justify-start items-center gap-4 flex">
                    <div className="w-10 h-10 relative">
                      <img
                        className="w-10 h-10 left-0 top-0 absolute rounded-full"
                        src="https://via.placeholder.com/40x40"
                      />
                    </div>
                    <div className="text-slate-800 text-base font-medium font-['Epilogue'] leading-relaxed">
                      Leif Floyd
                    </div>
                  </div>
                </div>
                <div className="w-[120px] h-[26px] justify-start items-center gap-2 flex">
                  <div className="w-6 h-6 relative" />
                  <div className="text-slate-800 text-base font-medium font-['Epilogue'] leading-relaxed">
                    4.8
                  </div>
                </div>
                <div className="w-[183px] flex-col justify-start items-start gap-2.5 inline-flex">
                  <div className="px-4 py-1.5 rounded-[80px] border border-emerald-300 justify-center items-center gap-2 inline-flex">
                    <div className="text-emerald-300 text-sm font-semibold font-['Epilogue'] leading-snug">
                      Hired
                    </div>
                  </div>
                </div>
                <div className="w-[200px] self-stretch text-slate-800 text-base font-medium font-['Epilogue'] leading-relaxed">
                  11 July, 2021
                </div>
                <div className="w-[205px] self-stretch text-slate-800 text-base font-medium font-['Epilogue'] leading-relaxed">
                  Graphic Design
                </div>
                <div className="justify-center items-center gap-4 flex">
                  <div className="px-[21px] py-3 bg-violet-100 border border-indigo-600 justify-center items-center gap-2.5 flex">
                    <div className="text-center text-indigo-600 text-sm font-bold font-['Epilogue'] leading-snug">
                      See Application
                    </div>
                  </div>
                  <div className="w-6 h-6 relative" />
                </div>
              </div>
              <div className="w-[1104px] p-4 bg-white justify-between items-center inline-flex">
                <div className="w-[220px] h-10 justify-start items-center gap-6 flex">
                  <div className="justify-start items-center gap-4 flex">
                    <div className="p-2.5 rounded border-2 border-zinc-200" />
                  </div>
                  <div className="justify-start items-center gap-4 flex">
                    <div className="w-10 h-10 relative">
                      <img
                        className="w-10 h-10 left-0 top-0 absolute rounded-full"
                        src="https://via.placeholder.com/40x40"
                      />
                    </div>
                    <div className="text-slate-800 text-base font-medium font-['Epilogue'] leading-relaxed">
                      Jenny Wilson
                    </div>
                  </div>
                </div>
                <div className="w-[120px] h-[26px] justify-start items-center gap-2 flex">
                  <div className="w-6 h-6 relative" />
                  <div className="text-slate-800 text-base font-medium font-['Epilogue'] leading-relaxed">
                    4.6
                  </div>
                </div>
                <div className="w-[183px] flex-col justify-start items-start gap-2.5 inline-flex">
                  <div className="px-4 py-1.5 rounded-[80px] border border-emerald-300 justify-center items-center gap-2 inline-flex">
                    <div className="text-emerald-300 text-sm font-semibold font-['Epilogue'] leading-snug">
                      Hired
                    </div>
                  </div>
                </div>
                <div className="w-[200px] self-stretch text-slate-800 text-base font-medium font-['Epilogue'] leading-relaxed">
                  9 July, 2021
                </div>
                <div className="w-[205px] self-stretch text-slate-800 text-base font-medium font-['Epilogue'] leading-relaxed">
                  Designer
                </div>
                <div className="justify-center items-center gap-4 flex">
                  <div className="px-[21px] py-3 bg-violet-100 border border-indigo-600 justify-center items-center gap-2.5 flex">
                    <div className="text-center text-indigo-600 text-sm font-bold font-['Epilogue'] leading-snug">
                      See Application
                    </div>
                  </div>
                  <div className="w-6 h-6 relative" />
                </div>
              </div>
              <div className="w-[1104px] p-4 bg-slate-50 justify-between items-center inline-flex">
                <div className="w-[220px] h-10 justify-start items-center gap-6 flex">
                  <div className="justify-start items-center gap-4 flex">
                    <div className="p-2.5 rounded border-2 border-zinc-200" />
                  </div>
                  <div className="justify-start items-center gap-4 flex">
                    <div className="w-10 h-10 relative">
                      <img
                        className="w-10 h-10 left-0 top-0 absolute rounded-full"
                        src="https://via.placeholder.com/40x40"
                      />
                    </div>
                    <div className="text-slate-800 text-base font-medium font-['Epilogue'] leading-relaxed">
                      Jerome Bell
                    </div>
                  </div>
                </div>
                <div className="w-[120px] h-[26px] justify-start items-center gap-2 flex">
                  <div className="w-6 h-6 relative" />
                  <div className="text-slate-800 text-base font-medium font-['Epilogue'] leading-relaxed">
                    4.0
                  </div>
                </div>
                <div className="w-[183px] flex-col justify-start items-start gap-2.5 inline-flex">
                  <div className="px-2.5 py-1.5 rounded-[80px] border border-sky-400 justify-center items-center gap-2 inline-flex">
                    <div className="text-sky-400 text-sm font-semibold font-['Epilogue'] leading-snug">
                      Interviewed
                    </div>
                  </div>
                </div>
                <div className="w-[200px] self-stretch text-slate-800 text-base font-medium font-['Epilogue'] leading-relaxed">
                  5 July, 2021
                </div>
                <div className="w-[205px] self-stretch text-slate-800 text-base font-medium font-['Epilogue'] leading-relaxed">
                  Designer
                </div>
                <div className="justify-center items-center gap-4 flex">
                  <div className="px-[21px] py-3 bg-violet-100 border border-indigo-600 justify-center items-center gap-2.5 flex">
                    <div className="text-center text-indigo-600 text-sm font-bold font-['Epilogue'] leading-snug">
                      See Application
                    </div>
                  </div>
                  <div className="w-6 h-6 relative" />
                </div>
              </div>
            </div>
            <div className="self-stretch bg-white justify-between items-center inline-flex">
              <div className="justify-start items-center gap-4 flex">
                <div className="text-slate-500 text-base font-medium font-['Inter'] leading-relaxed">
                  View
                </div>
                <div className="px-4 py-3 bg-white border border-zinc-200 justify-center items-center gap-2 flex">
                  <div className="w-6 h-6 relative" />
                  <div className="text-slate-800 text-base font-medium font-['Inter'] leading-relaxed">
                    10
                  </div>
                </div>
                <div className="text-slate-500 text-base font-medium font-['Inter'] leading-relaxed">
                  Applicants per page
                </div>
              </div>
              <div className="justify-center items-center gap-2 flex">
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
                </div>
                <div className="w-[25px] h-6 relative" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HistoryHire;
