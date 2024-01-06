import { FooterNav } from "../../components/footer-nav/FooterNav";
import { Navbar } from "../../components/nav-bar/Navbar";

function DetailPage() {
  return (
    <div>
      {/* Navbar */}
      <div>
        <Navbar />

        {/* Content */}
        <div className="">
          <div className="mt-10 mx-18 w-full flex items-start justify-center flex-col">
            <div className="ml-24">
              <span className="text-white text-opacity-50 text-base font-normal font-['Epilogue'] leading-relaxed">
                Home / Companies / Nomad /{" "}
              </span>
              <span className="text-white text-base font-normal font-['Epilogue'] leading-relaxed">
                Social Media Assistant
              </span>
            </div>
          </div>

          {/*  Search bar */}
          <div className="flex flex-col items-center justify-center mt-[0px]">
            <div className="w-[1187px] h-[139.24px] p-6 bg-white border border-zinc-200 justify-between items-center inline-flex">
              <div className="justify-center items-center gap-6 flex">
                <div className="w-[88px] h-[91.24px] relative">
                  <div className="w-[88px] h-[91.24px] left-0 top-0 absolute rounded-full" />
                  <img
                    className="w-20 h-[82.94px] left-[4px] top-[4.15px] absolute"
                    src="https://via.placeholder.com/80x83"
                  />
                </div>
                <div className="flex-col justify-center items-start gap-2 inline-flex">
                  <div className="text-slate-800 text-[32px] font-semibold font-['Clash Display Variable'] leading-[38.40px]">
                    Social Media Assistant
                  </div>
                  <div className="justify-center items-center gap-2 inline-flex">
                    <div className="text-slate-600 text-xl font-normal font-['Epilogue'] leading-loose">
                      Stripe
                    </div>
                    <div className="w-1 h-1 bg-slate-600 rounded-full" />
                    <div className="text-slate-600 text-xl font-normal font-['Epilogue'] leading-loose">
                      Paris, France
                    </div>
                    <div className="w-1 h-1 bg-slate-600 rounded-full" />
                    <div className="text-slate-600 text-xl font-normal font-['Epilogue'] leading-loose">
                      Full-Time
                    </div>
                  </div>
                </div>
              </div>
              <div className="justify-center items-center gap-[30px] flex">
                <div className="w-8 h-[33.18px] relative" />
                <div className="w-[58.06px] h-[0px] origin-top-left rotate-90 border border-zinc-200"></div>
                <div className="px-14 py-3.5 bg-sky-400 justify-center items-center gap-2.5 flex">
                  <div className="text-center text-white text-lg font-bold font-['Epilogue'] leading-[28.80px]">
                    Apply
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* COntent */}
          <div className="mt-[50px] w-[1440px] h-[1002px] px-[124px] py-[72px] bg-white justify-center items-start gap-16 inline-flex">
            <div className="w-[752px] flex-col justify-start items-start gap-10 inline-flex">
              <div className="self-stretch h-[132px] flex-col justify-start items-start gap-4 flex">
                <div className="text-slate-800 text-[32px] font-semibold font-['Clash Display Variable'] leading-[38.40px]">
                  Description
                </div>
                <div className="self-stretch text-slate-600 text-base font-normal font-['Epilogue'] leading-relaxed">
                  Stripe is looking for Social Media Marketing expert to help
                  manage our online networks. You will be responsible for
                  monitoring our social media channels, creating content,
                  finding effective ways to engage the community and incentivize
                  others to engage on our channels.
                </div>
              </div>
              <div className="self-stretch h-[242px] flex-col justify-start items-start gap-4 flex">
                <div className="text-slate-800 text-[32px] font-semibold font-['Clash Display Variable'] leading-[38.40px]">
                  Responsibilities
                </div>
                <div className="self-stretch h-[188px] flex-col justify-start items-start gap-2 flex">
                  <div className="self-stretch justify-start items-start gap-2 inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="w-[682px] text-slate-600 text-base font-normal font-['Epilogue'] leading-relaxed">
                      Community engagement to ensure that is supported and
                      actively represented online
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-start gap-2 inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="w-[682px] text-slate-600 text-base font-normal font-['Epilogue'] leading-relaxed">
                      Focus on social media content development and publication
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-start gap-2 inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="w-[682px] text-slate-600 text-base font-normal font-['Epilogue'] leading-relaxed">
                      Marketing and strategy support
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-start gap-2 inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="w-[682px] text-slate-600 text-base font-normal font-['Epilogue'] leading-relaxed">
                      Stay on top of trends on social media platforms, and
                      suggest content ideas to the team
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-start gap-2 inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="w-[682px] text-slate-600 text-base font-normal font-['Epilogue'] leading-relaxed">
                      Engage with online communities
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[216px] flex-col justify-start items-start gap-4 flex">
                <div className="text-slate-800 text-[32px] font-semibold font-['Clash Display Variable'] leading-[38.40px]">
                  Who You Are
                </div>
                <div className="self-stretch h-[162px] flex-col justify-start items-start gap-2 flex">
                  <div className="justify-start items-start gap-2 inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="w-[682px] text-slate-600 text-base font-normal font-['Epilogue'] leading-relaxed">
                      You get energy from people and building the ideal work
                      environment
                    </div>
                  </div>
                  <div className="justify-start items-start gap-2 inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="w-[682px] text-slate-600 text-base font-normal font-['Epilogue'] leading-relaxed">
                      You have a sense for beautiful spaces and office
                      experiences
                    </div>
                  </div>
                  <div className="justify-start items-start gap-2 inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="w-[682px] text-slate-600 text-base font-normal font-['Epilogue'] leading-relaxed">
                      You are a confident office manager, ready for added
                      responsibilities
                    </div>
                  </div>
                  <div className="justify-start items-start gap-2 inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="w-[682px] text-slate-600 text-base font-normal font-['Epilogue'] leading-relaxed">
                      You're detail-oriented and creative
                    </div>
                  </div>
                  <div className="justify-start items-start gap-2 inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="w-[682px] text-slate-600 text-base font-normal font-['Epilogue'] leading-relaxed">
                      You're a growth marketer and know how to run campaigns
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[148px] flex-col justify-start items-start gap-4 flex">
                <div className="text-slate-800 text-[32px] font-semibold font-['Clash Display Variable'] leading-[38.40px]">
                  Nice-To-Haves
                </div>
                <div className="self-stretch h-[94px] flex-col justify-start items-start gap-2 flex">
                  <div className="justify-start items-start gap-2 inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="w-[682px] text-slate-600 text-base font-normal font-['Epilogue'] leading-relaxed">
                      Fluent in English
                    </div>
                  </div>
                  <div className="justify-start items-start gap-2 inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="w-[682px] text-slate-600 text-base font-normal font-['Epilogue'] leading-relaxed">
                      Project management skills
                    </div>
                  </div>
                  <div className="justify-start items-start gap-2 inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="w-[682px] text-slate-600 text-base font-normal font-['Epilogue'] leading-relaxed">
                      Copy editing skills
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-10 inline-flex">
              <div className="self-stretch h-[331px] flex-col justify-start items-start gap-[23px] flex">
                <div className="self-stretch text-slate-800 text-[32px] font-semibold font-['Clash Display Variable'] leading-[38.40px]">
                  About this role
                </div>
                <div className="self-stretch h-[74px] p-4 bg-slate-50 flex-col justify-start items-start gap-2 flex">
                  <div className="text-center">
                    <span className="text-slate-800 text-base font-semibold font-['Epilogue'] leading-relaxed">
                      5 applied
                    </span>
                    <span className="text-slate-800 text-base font-semibold font-['Epilogue'] leading-relaxed">
                      {" "}
                    </span>
                    <span className="text-slate-500 text-base font-normal font-['Epilogue'] leading-relaxed">
                      of 10 capacity
                    </span>
                  </div>
                  <div className="self-stretch h-2 justify-start items-start inline-flex">
                    <div className="grow shrink basis-0 self-stretch bg-emerald-300" />
                    <div className="grow shrink basis-0 self-stretch bg-emerald-300" />
                    <div className="grow shrink basis-0 self-stretch bg-zinc-200" />
                    <div className="grow shrink basis-0 self-stretch bg-zinc-200" />
                    <div className="grow shrink basis-0 self-stretch bg-zinc-200" />
                  </div>
                </div>
                <div className="self-stretch justify-between items-start inline-flex">
                  <div className="text-slate-600 text-base font-normal font-['Epilogue'] leading-relaxed">
                    Apply Before
                  </div>
                  <div className="text-slate-800 text-base font-semibold font-['Epilogue'] leading-relaxed">
                    July 31, 2021
                  </div>
                </div>
                <div className="self-stretch justify-between items-start inline-flex">
                  <div className="text-slate-600 text-base font-normal font-['Epilogue'] leading-relaxed">
                    Job Posted On
                  </div>
                  <div className="text-slate-800 text-base font-semibold font-['Epilogue'] leading-relaxed">
                    July 1, 2021
                  </div>
                </div>
                <div className="self-stretch justify-between items-start inline-flex">
                  <div className="text-slate-600 text-base font-normal font-['Epilogue'] leading-relaxed">
                    Job Type
                  </div>
                  <div className="text-slate-800 text-base font-semibold font-['Epilogue'] leading-relaxed">
                    Full-Time
                  </div>
                </div>
                <div className="self-stretch justify-between items-start inline-flex">
                  <div className="text-slate-600 text-base font-normal font-['Epilogue'] leading-relaxed">
                    Salary
                  </div>
                  <div className="text-gray-800 text-base font-semibold font-['Epilogue'] leading-relaxed">
                    $75k-$85k USD
                  </div>
                </div>
              </div>
              <div className="w-[376px] h-[0px] border border-zinc-200"></div>
              <div className="flex-col justify-start items-start gap-6 flex">
                <div className="text-slate-800 text-[32px] font-semibold font-['Clash Display Variable'] leading-[38.40px]">
                  Categories
                </div>
                <div className="justify-start items-start gap-2 inline-flex">
                  <div className="px-2.5 py-1.5 bg-orange-400 bg-opacity-10 rounded-[80px] justify-start items-center gap-2 flex">
                    <div className="text-amber-400 text-sm font-semibold font-['Epilogue'] leading-snug">
                      Marketing
                    </div>
                  </div>
                  <div className="px-2.5 py-1.5 bg-emerald-300 bg-opacity-10 rounded-[80px] justify-center items-center gap-2 flex">
                    <div className="text-emerald-300 text-sm font-semibold font-['Epilogue'] leading-snug">
                      Design
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[376px] h-[0px] border border-zinc-200"></div>
              <div className="w-[316px] h-[175px] relative">
                <div className="left-[3px] top-0 absolute text-slate-800 text-[32px] font-semibold font-['Clash Display Variable'] leading-[38.40px]">
                  Required Skills
                </div>
                <div className="w-[205px] h-[34px] px-3 py-1 left-0 top-[97px] absolute bg-slate-50 justify-center items-center gap-4 inline-flex">
                  <div className="text-sky-400 text-base font-normal font-['Epilogue'] leading-relaxed">
                    Social Media Marketing
                  </div>
                </div>
                <div className="w-[120px] h-[34px] px-3 py-1 left-0 top-[141px] absolute bg-slate-50 justify-center items-center gap-4 inline-flex">
                  <div className="text-sky-400 text-base font-normal font-['Epilogue'] leading-relaxed">
                    Copy Editing
                  </div>
                </div>
                <div className="w-[189px] h-[34px] px-3 py-1 left-0 top-[53px] absolute bg-slate-50 justify-center items-center gap-4 inline-flex">
                  <div className="text-sky-400 text-base font-normal font-['Epilogue'] leading-relaxed">
                    Project Management
                  </div>
                </div>
                <div className="w-[117px] h-[34px] px-3 py-1 left-[199px] top-[53px] absolute bg-slate-50 justify-center items-center gap-4 inline-flex">
                  <div className="text-sky-400 text-base font-normal font-['Epilogue'] leading-relaxed">
                    Copywriting
                  </div>
                </div>
                <div className="w-[79px] h-[34px] px-3 py-1 left-[215px] top-[97px] absolute bg-slate-50 justify-center items-center gap-4 inline-flex">
                  <div className="text-sky-400 text-base font-normal font-['Epilogue'] leading-relaxed">
                    English
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[1440px] h-[714px] px-[124px] py-[72px] bg-white flex-col justify-start items-start gap-6 inline-flex">
            <div className="flex-col justify-start items-start gap-2 flex">
              <div className="w-[296.48px] text-slate-800 text-[32px] font-semibold font-['Clash Display Variable'] leading-[38.40px]">
                Perks & Benefits
              </div>
              <div className="w-[1036.92px] text-slate-600 text-base font-normal font-['Epilogue'] leading-relaxed">
                This job comes with several perks and benefits
              </div>
            </div>
            <div className="self-stretch h-[474px] flex-col justify-start items-start gap-6 flex">
              <div className="self-stretch justify-start items-start gap-8 inline-flex">
                <div className="grow shrink basis-0 rounded flex-col justify-center items-start gap-6 inline-flex">
                  <div className="w-12 h-12 relative" />
                  <div className="self-stretch h-[114px] flex-col justify-center items-start gap-3 flex">
                    <div className="w-[174px] text-slate-800 text-xl font-semibold font-['Clash Display Variable'] leading-normal">
                      Full Healthcare
                    </div>
                    <div className="self-stretch text-slate-600 text-base font-normal font-['Epilogue'] leading-relaxed">
                      We believe in thriving communities and that starts with
                      our team being happy and healthy.
                    </div>
                  </div>
                </div>
                <div className="grow shrink basis-0 rounded flex-col justify-center items-start gap-6 inline-flex">
                  <div className="w-12 h-12 relative" />
                  <div className="self-stretch h-[140px] flex-col justify-center items-start gap-3 flex">
                    <div className="self-stretch text-slate-800 text-xl font-semibold font-['Clash Display Variable'] leading-normal">
                      Unlimited Vacation
                    </div>
                    <div className="self-stretch text-slate-600 text-base font-normal font-['Epilogue'] leading-relaxed">
                      We believe you should have a flexible schedule that makes
                      space for family, wellness, and fun.
                    </div>
                  </div>
                </div>
                <div className="grow shrink basis-0 rounded flex-col justify-center items-start gap-6 inline-flex">
                  <div className="w-12 h-12 relative" />
                  <div className="self-stretch h-[114px] flex-col justify-center items-start gap-3 flex">
                    <div className="self-stretch text-slate-800 text-xl font-semibold font-['Clash Display Variable'] leading-normal">
                      Skill Development
                    </div>
                    <div className="self-stretch text-slate-600 text-base font-normal font-['Epilogue'] leading-relaxed">
                      We believe in always learning and leveling up our skills.
                      Whether it's a conference or online course.
                    </div>
                  </div>
                </div>
                <div className="grow shrink basis-0 rounded flex-col justify-center items-start gap-6 inline-flex">
                  <div className="w-12 h-12 relative" />
                  <div className="self-stretch h-[140px] flex-col justify-center items-start gap-3 flex">
                    <div className="w-[174px] text-slate-800 text-xl font-semibold font-['Clash Display Variable'] leading-normal">
                      Team Summits
                    </div>
                    <div className="self-stretch text-slate-600 text-base font-normal font-['Epilogue'] leading-relaxed">
                      Every 6 months we have a full team summit where we have
                      fun, reflect, and plan for the upcoming quarter.
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[886px] justify-start items-start gap-8 inline-flex">
                <div className="grow shrink basis-0 rounded flex-col justify-center items-start gap-6 inline-flex">
                  <div className="w-12 h-12 relative" />
                  <div className="self-stretch h-[140px] flex-col justify-center items-start gap-3 flex">
                    <div className="w-[174px] text-slate-800 text-xl font-semibold font-['Clash Display Variable'] leading-normal">
                      Remote Working
                    </div>
                    <div className="self-stretch text-slate-600 text-base font-normal font-['Epilogue'] leading-relaxed">
                      You know how you perform your best. Work from home, coffee
                      shop or anywhere when you feel like it.
                    </div>
                  </div>
                </div>
                <div className="grow shrink basis-0 rounded flex-col justify-center items-start gap-6 inline-flex">
                  <div className="w-12 h-12 relative" />
                  <div className="self-stretch h-[114px] flex-col justify-center items-start gap-3 flex">
                    <div className="self-stretch text-slate-800 text-xl font-semibold font-['Clash Display Variable'] leading-normal">
                      Commuter Benefits
                    </div>
                    <div className="self-stretch text-slate-600 text-base font-normal font-['Epilogue'] leading-relaxed">
                      We’re grateful for all the time and energy each team
                      member puts into getting to work every day.
                    </div>
                  </div>
                </div>
                <div className="grow shrink basis-0 rounded flex-col justify-center items-start gap-6 inline-flex">
                  <div className="w-12 h-12 p-1 justify-center items-center inline-flex">
                    <div className="w-10 h-10 relative"></div>
                  </div>
                  <div className="self-stretch h-[166px] flex-col justify-center items-start gap-3 flex">
                    <div className="w-[174px] text-slate-800 text-xl font-semibold font-['Clash Display Variable'] leading-normal">
                      We give back.
                    </div>
                    <div className="self-stretch text-slate-600 text-base font-normal font-['Epilogue'] leading-relaxed">
                      We anonymously match any donation our employees make (up
                      to $/€ 600) so they can support the organizations they
                      care about most—times two.{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <FooterNav />
      </div>
    </div>
  );
}

export default DetailPage;
