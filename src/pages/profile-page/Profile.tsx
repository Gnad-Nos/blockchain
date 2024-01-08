function Profile() {
  return (
    <div className="flex bg-white">
      {/* Left */}
      <div className="w-1/6">
        <div className="h-[1514px] py-8 bg-slate-50 shadow flex-col justify-between items-start inline-flex">
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
                <div className="w-[272px] pl-8 pr-4 py-3 justify-start items-center gap-4 inline-flex">
                  <a
                    href="/history"
                    className="grow shrink basis-0 h-6 text-slate-500 text-base font-medium font-['Inter'] leading-relaxed"
                  >
                    History
                  </a>
                </div>

                <div className="w-full justify-center items-center gap-3 inline-flex">
                  <div className="w-full h-12 pl-8 py-3 bg-violet-100 justify-start items-start gap-4 flex">
                    <div className="grow shrink basis-0 h-6 text-indigo-600 text-base font-medium font-['Inter'] leading-relaxed">
                      My Public Profile
                    </div>
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
      {/* Right */}
      <div className="w-5/6">
        <div className="h-[114px] relative bg-white shadow-inner">
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
        {/* Info */}
        <div className="w-full h-[2415.25px] p-8 justify-start items-start gap-6 inline-flex">
          <div className="w-full flex-col justify-start items-start gap-6 inline-flex">
            <div className="pb-6 bg-white border border-zinc-200 flex-col justify-center items-end gap-6 flex">
              <div className="min-w-[728px] max-w-[1000px] pr-6 mt-4 justify-between items-start inline-flex">
                <div className="m-4 w-[140px] h-[140px] bg-sky-400 rounded-full border-8 border-white" />
                <div className=" w- flex-col justify-start items-start gap-2 inline-flex">
                  <div className="text-slate-800 text-2xl font-semibold font-['Clash Display Variable'] leading-[28.80px]">
                    Jake Gyll
                  </div>
                  <div>
                    <span className="text-slate-500 text-lg font-normal font-['Epilogue'] leading-[28.80px]">
                      Product Designer at
                    </span>
                    <span className="text-gray-800 text-lg font-normal font-['Epilogue'] leading-[28.80px]">
                      {" "}
                    </span>
                    <span className="text-slate-800 text-lg font-medium font-['Epilogue'] leading-[28.80px]">
                      Twitter
                    </span>
                  </div>
                  <div className="justify-start items-center gap-2 inline-flex">
                    <div className="w-6 h-6 relative">
                      <div className="w-[15px] h-[18px] left-[4.50px] top-[3px] absolute"></div>
                    </div>
                    <div className="text-slate-500 text-lg font-normal font-['Epilogue'] leading-[28.80px]">
                      Manchester, UK
                    </div>
                  </div>
                  <div className="px-6 py-3 bg-emerald-300 bg-opacity-10 rounded-lg justify-center items-center gap-2.5 inline-flex">
                    <div className="w-6 h-6 relative" />
                    <div className="w-[214px] h-6 text-center text-emerald-300 text-base font-semibold font-['Epilogue'] leading-relaxed">
                      OPEN FOR OPPORTUNITIES
                    </div>
                  </div>
                </div>
                <div className="px-6 py-3 border border-indigo-200 justify-center items-center gap-2.5 flex">
                  <div className="text-center text-indigo-600 text-base font-bold font-['Epilogue'] leading-relaxed">
                    Edit Profile
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-[1000px] min-w-[728px] p-6 bg-white border border-zinc-200 flex-col justify-start items-start gap-4 flex">
              <div className="self-stretch justify-between items-center inline-flex">
                <div className="text-slate-800 text-xl font-semibold font-['Epilogue'] leading-normal">
                  About Me
                </div>
                <div className="p-2.5 border border-zinc-200 justify-center items-center gap-2.5 flex">
                  <div className="w-5 h-5 relative" />
                </div>
              </div>
              <div className="w-[680px] text-slate-600 text-base font-normal font-['Epilogue'] leading-relaxed">
                I’m a product designer + filmmaker currently working remotely at
                Twitter from beautiful Manchester, United Kingdom. I’m
                passionate about designing digital products that have a positive
                impact on the world.
              </div>
              <div className="w-[680px] text-slate-600 text-base font-normal font-['Epilogue'] leading-relaxed">
                For 10 years, I’ve specialised in interface, experience &
                interaction design as well as working in user research and
                product strategy for product agencies, big tech companies &
                start-ups.
              </div>
            </div>
            <div className=" min-w-[728px] max-w-[1000px] h-[573px] px-px py-6 bg-white border border-zinc-200 flex-col justify-start items-center flex">
              <div className="self-stretch px-6 justify-between items-center inline-flex">
                <div className="text-slate-800 text-xl font-semibold font-['Epilogue'] leading-normal">
                  Experiences
                </div>
                <div className="p-2 border border-zinc-200 justify-start items-start gap-2.5 flex">
                  <div className="w-6 h-6 relative" />
                </div>
              </div>
              <div className="self-stretch p-6 bg-white justify-start items-start gap-6 inline-flex">
                <div className="w-20 h-20 relative">
                  <div className="w-20 h-20 left-0 top-0 absolute bg-stone-300 rounded-lg" />
                  <img
                    className="w-20 h-20 left-0 top-0 absolute rounded-[100px]"
                    src="https://via.placeholder.com/80x80"
                  />
                </div>
                <div className="flex-col justify-start items-start gap-[11px] inline-flex">
                  <div className="self-stretch h-[105px] flex-col justify-start items-start gap-1.5 flex">
                    <div className="self-stretch justify-between items-center inline-flex">
                      <div className="text-slate-800 text-lg font-semibold font-['Epilogue'] leading-[28.80px]">
                        Product Designer
                      </div>
                      <div className="p-2.5 border border-zinc-200 justify-center items-center gap-2.5 flex">
                        <div className="w-5 h-5 relative" />
                      </div>
                    </div>
                    <div className="self-stretch h-[27px] justify-start items-center gap-px inline-flex">
                      <div className="justify-center items-center gap-2 flex">
                        <div className="text-slate-800 text-base font-medium font-['Epilogue'] leading-relaxed">
                          Twitter
                        </div>
                        <div className="w-1 h-1 bg-gray-400 rounded-full" />
                        <div className="text-slate-600 text-base font-normal font-['Epilogue'] leading-relaxed">
                          Full-Time
                        </div>
                        <div className="w-1 h-1 bg-gray-400 rounded-full" />
                        <div className="text-slate-600 text-base font-normal font-['Epilogue'] leading-relaxed">
                          Jun 2019 - Present (1y 1m)
                        </div>
                      </div>
                    </div>
                    <div className="text-slate-500 text-base font-normal font-['Epilogue'] leading-relaxed">
                      Manchester, UK
                    </div>
                  </div>
                  <div className="w-[576px] text-slate-800 text-base font-normal font-['Epilogue'] leading-relaxed">
                    Created and executed social media plan for 10 brands
                    utilizing multiple features and content types to increase
                    brand outreach, engagement, and leads.
                  </div>
                </div>
              </div>
              <div className="w-[680px] h-px bg-zinc-200" />
              <div className="self-stretch p-6 bg-white justify-start items-start gap-6 inline-flex">
                <div className="w-20 h-20 relative">
                  <div className="w-20 h-20 left-0 top-0 absolute bg-stone-300 rounded-full" />
                  <img
                    className="w-20 h-20 left-0 top-[-0px] absolute"
                    src="https://via.placeholder.com/80x80"
                  />
                </div>
                <div className="flex-col justify-start items-start gap-[11px] inline-flex">
                  <div className="self-stretch h-[105px] flex-col justify-start items-start gap-1.5 flex">
                    <div className="self-stretch justify-between items-center inline-flex">
                      <div className="text-slate-800 text-lg font-semibold font-['Epilogue'] leading-[28.80px]">
                        Growth Marketing Designer
                      </div>
                      <div className="p-2.5 border border-zinc-200 justify-center items-center gap-2.5 flex">
                        <div className="w-5 h-5 relative" />
                      </div>
                    </div>
                    <div className="self-stretch h-[27px] justify-start items-center gap-px inline-flex">
                      <div className="justify-center items-center gap-2 flex">
                        <div className="text-slate-800 text-base font-medium font-['Epilogue'] leading-relaxed">
                          GoDaddy
                        </div>
                        <div className="w-1 h-1 bg-gray-400 rounded-full" />
                        <div className="text-slate-600 text-base font-normal font-['Epilogue'] leading-relaxed">
                          Full-Time
                        </div>
                        <div className="w-1 h-1 bg-gray-400 rounded-full" />
                        <div className="text-slate-600 text-base font-normal font-['Epilogue'] leading-relaxed">
                          Jun 2011 - May 2019 (8y)
                        </div>
                      </div>
                    </div>
                    <div className="text-slate-500 text-base font-normal font-['Epilogue'] leading-relaxed">
                      Manchester, UK
                    </div>
                  </div>
                  <div className="w-[576px] text-slate-600 text-base font-normal font-['Epilogue'] leading-relaxed">
                    Developed digital marketing strategies, activation plans,
                    proposals, contests and promotions for client initiatives
                  </div>
                </div>
              </div>
              <div className="justify-end items-center gap-4 inline-flex">
                <div className="text-center text-indigo-600 text-base font-semibold font-['Epilogue'] leading-relaxed">
                  Show 3 more experiences
                </div>
              </div>
            </div>
            <div className="min-w-[728px] max-w-[1000px] h-[508px] px-px py-6 bg-white border border-zinc-200 flex-col justify-start items-center flex">
              <div className="self-stretch px-6 justify-between items-center inline-flex">
                <div className="text-slate-800 text-xl font-semibold font-['Epilogue'] leading-normal">
                  Educations
                </div>
                <div className="p-2 border border-zinc-200 justify-start items-start gap-2.5 flex">
                  <div className="w-6 h-6 relative" />
                </div>
              </div>
              <div className="self-stretch p-6 bg-white justify-start items-start gap-6 inline-flex">
                <div className="w-20 h-20 relative">
                  <img
                    className="w-20 h-20 left-0 top-0 absolute"
                    src="https://via.placeholder.com/80x80"
                  />
                </div>
                <div className="flex-col justify-start items-start gap-[11px] inline-flex">
                  <div className="self-stretch h-[104px] flex-col justify-start items-start gap-1.5 flex">
                    <div className="self-stretch justify-between items-center inline-flex">
                      <div className="text-slate-800 text-lg font-semibold font-['Epilogue'] leading-[28.80px]">
                        Harvard University
                      </div>
                      <div className="p-2.5 border border-zinc-200 justify-center items-center gap-2.5 flex">
                        <div className="w-5 h-5 relative" />
                      </div>
                    </div>
                    <div className="text-slate-500 text-base font-normal font-['Epilogue'] leading-relaxed">
                      Postgraduate degree, Applied Psychology
                    </div>
                    <div className="text-slate-500 text-base font-normal font-['Epilogue'] leading-relaxed">
                      2010 - 2012
                    </div>
                  </div>
                  <div className="w-[576px] text-slate-800 text-base font-normal font-['Epilogue'] leading-relaxed">
                    As an Applied Psychologist in the field of Consumer and
                    Society, I am specialized in creating business opportunities
                    by observing, analysing, researching and changing behaviour.
                  </div>
                </div>
              </div>
              <div className="w-[680px] h-px bg-zinc-200" />
              <div className="self-stretch p-6 bg-white justify-start items-start gap-6 inline-flex">
                <div className="w-20 h-20 relative">
                  <img
                    className="w-20 h-20 left-0 top-0 absolute"
                    src="https://via.placeholder.com/80x80"
                  />
                </div>
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-[11px] inline-flex">
                  <div className="self-stretch h-[104px] flex-col justify-start items-start gap-1.5 flex">
                    <div className="self-stretch justify-between items-center inline-flex">
                      <div className="text-slate-800 text-lg font-semibold font-['Epilogue'] leading-[28.80px]">
                        University of Toronto
                      </div>
                      <div className="p-2.5 border border-zinc-200 justify-center items-center gap-2.5 flex">
                        <div className="w-5 h-5 relative" />
                      </div>
                    </div>
                    <div className="text-slate-500 text-base font-normal font-['Epilogue'] leading-relaxed">
                      Bachelor of Arts, Visual Communication
                    </div>
                    <div className="text-slate-500 text-base font-normal font-['Epilogue'] leading-relaxed">
                      2005 - 2009
                    </div>
                  </div>
                </div>
              </div>
              <div className="justify-end items-center gap-4 inline-flex">
                <div className="text-center text-indigo-600 text-base font-semibold font-['Epilogue'] leading-relaxed">
                  Show 2 more educations
                </div>
              </div>
            </div>
            <div className="min-w-[728px] max-w-[1000px] h-[188px] p-6 bg-white border border-zinc-200 flex-col justify-start items-start gap-4 flex">
              <div className="self-stretch justify-between items-center inline-flex">
                <div className="text-slate-800 text-xl font-semibold font-['Epilogue'] leading-normal">
                  Skills
                </div>
                <div className="justify-start items-center gap-2 flex">
                  <div className="p-2.5 border border-zinc-200 justify-center items-center gap-2.5 flex">
                    <div className="w-5 h-5 relative" />
                  </div>
                  <div className="p-2.5 border border-zinc-200 justify-center items-center gap-2.5 flex">
                    <div className="w-5 h-5 relative" />
                  </div>
                </div>
              </div>
              <div className="justify-start items-start gap-4 inline-flex">
                <div className="px-3 py-1 bg-slate-50 justify-center items-center gap-4 flex">
                  <div className="text-indigo-600 text-base font-normal font-['Epilogue'] leading-relaxed">
                    Communication
                  </div>
                </div>
                <div className="px-3 py-1 bg-slate-50 justify-center items-center gap-4 flex">
                  <div className="text-indigo-600 text-base font-normal font-['Epilogue'] leading-relaxed">
                    Analytics
                  </div>
                </div>
                <div className="px-3 py-1 bg-slate-50 justify-center items-center gap-4 flex">
                  <div className="text-indigo-600 text-base font-normal font-['Epilogue'] leading-relaxed">
                    Facebook Ads
                  </div>
                </div>
                <div className="px-3 py-1 bg-slate-50 justify-center items-center gap-4 flex">
                  <div className="text-indigo-600 text-base font-normal font-['Epilogue'] leading-relaxed">
                    Content Planning
                  </div>
                </div>
              </div>
              <div className="px-3 py-1 bg-slate-50 justify-center items-center gap-4 inline-flex">
                <div className="text-indigo-600 text-base font-normal font-['Epilogue'] leading-relaxed">
                  Community Manager
                </div>
              </div>
            </div>
            <div className="h-[339.25px] p-6 bg-white border border-zinc-200 flex-col justify-start items-start gap-4 flex">
              <div className="self-stretch justify-between items-center inline-flex">
                <div className="text-slate-800 text-xl font-semibold font-['Epilogue'] leading-normal">
                  Portfolios
                </div>
                <div className="p-2.5 border border-zinc-200 justify-center items-center gap-2.5 flex">
                  <div className="w-5 h-5 relative" />
                </div>
              </div>
              <div className="w-[706px] justify-start items-start gap-4 inline-flex">
                <div className="flex-col justify-start items-start gap-2.5 inline-flex">
                  <img
                    className="w-[203px] h-[152.25px]"
                    src="https://via.placeholder.com/203x152"
                  />
                  <div className="w-[203px] text-slate-800 text-base font-medium font-['Epilogue'] leading-relaxed">
                    Clinically - clinic & health care website
                  </div>
                </div>
                <div className="flex-col justify-start items-start gap-2.5 inline-flex">
                  <img
                    className="w-[203px] h-[152.25px]"
                    src="https://via.placeholder.com/203x152"
                  />
                  <div className="w-[203px] text-slate-800 text-base font-medium font-['Epilogue'] leading-relaxed">
                    Growthly - SaaS Analytics & Sales Website
                  </div>
                </div>
                <div className="flex-col justify-start items-start gap-2.5 inline-flex">
                  <img
                    className="w-[203px] h-[152.25px]"
                    src="https://via.placeholder.com/203x152"
                  />
                  <div className="w-[203px] text-slate-800 text-base font-medium font-['Epilogue'] leading-relaxed">
                    Planna - Project Management App
                  </div>
                </div>
              </div>
              <div className="w-[682px] h-[5px] relative">
                <div className="w-[682px] h-1 left-0 top-[0.50px] absolute bg-violet-100" />
                <div className="w-[74px] h-[5px] left-0 top-0 absolute bg-indigo-600" />
              </div>
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-6 inline-flex">
            <div className="p-6 bg-white border border-zinc-200 flex-col justify-start items-start gap-4 flex">
              <div className="w-[304px] justify-between items-center inline-flex">
                <div className="text-slate-800 text-xl font-semibold font-['Epilogue'] leading-normal">
                  Additional Details
                </div>
                <div className="p-2.5 border border-zinc-200 justify-center items-center gap-2.5 flex">
                  <div className="w-5 h-5 relative" />
                </div>
              </div>
              <div className="justify-start items-start gap-4 inline-flex">
                <div className="w-6 h-6 relative" />
                <div className="flex-col justify-start items-start inline-flex">
                  <div className="text-slate-500 text-base font-normal font-['Epilogue'] leading-relaxed">
                    Email
                  </div>
                  <div className="text-slate-800 text-base font-normal font-['Epilogue'] leading-relaxed">
                    jakegyll@email.com
                  </div>
                </div>
              </div>
              <div className="justify-start items-start gap-4 inline-flex">
                <div className="w-6 h-6 relative" />
                <div className="flex-col justify-start items-start inline-flex">
                  <div className="text-slate-500 text-base font-normal font-['Epilogue'] leading-relaxed">
                    Phone
                  </div>
                  <div className="text-slate-800 text-base font-normal font-['Epilogue'] leading-relaxed">
                    +44 1245 572 135
                  </div>
                </div>
              </div>
              <div className="justify-start items-start gap-4 inline-flex">
                <div className="w-6 h-6 relative" />
                <div className="flex-col justify-start items-start inline-flex">
                  <div className="text-slate-500 text-base font-normal font-['Epilogue'] leading-relaxed">
                    Languages
                  </div>
                  <div className="text-slate-800 text-base font-normal font-['Epilogue'] leading-relaxed">
                    English, French
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 bg-white border border-zinc-200 flex-col justify-start items-start gap-4 flex">
              <div className="w-[304px] justify-between items-center inline-flex">
                <div className="text-slate-800 text-xl font-semibold font-['Epilogue'] leading-normal">
                  Social Links
                </div>
                <div className="p-2.5 border border-zinc-200 justify-center items-center gap-2.5 flex">
                  <div className="w-5 h-5 relative" />
                </div>
              </div>
              <div className="justify-start items-start gap-4 inline-flex">
                <div className="w-6 h-6 relative" />
                <div className="flex-col justify-start items-start inline-flex">
                  <div className="text-slate-500 text-base font-normal font-['Epilogue'] leading-relaxed">
                    Instagram
                  </div>
                  <div className="text-indigo-600 text-base font-normal font-['Epilogue'] leading-relaxed">
                    instagram.com/jakegyll
                  </div>
                </div>
              </div>
              <div className="justify-start items-start gap-4 inline-flex">
                <div className="w-6 h-6 relative" />
                <div className="flex-col justify-start items-start inline-flex">
                  <div className="text-slate-500 text-base font-normal font-['Epilogue'] leading-relaxed">
                    Twitter
                  </div>
                  <div className="text-indigo-600 text-base font-normal font-['Epilogue'] leading-relaxed">
                    twitter.com/jakegyll
                  </div>
                </div>
              </div>
              <div className="justify-start items-start gap-4 inline-flex">
                <div className="w-6 h-6 relative" />
                <div className="flex-col justify-start items-start inline-flex">
                  <div className="text-slate-500 text-base font-normal font-['Epilogue'] leading-relaxed">
                    Website
                  </div>
                  <div className="text-indigo-600 text-base font-normal font-['Epilogue'] leading-relaxed">
                    www.jakegyll.com
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
