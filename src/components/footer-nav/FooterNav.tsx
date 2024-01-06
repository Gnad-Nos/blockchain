export function FooterNav() {
  return (
    <div>
      <div className="w-full  h-[497px] relative bg-gray-800">
        <div className="left-[120px] w-[300px] top-[427px] absolute text-white text-base font-medium font-['Epilogue'] leading-relaxed">
          2021 @ JobHuntly. All rights reserved.
        </div>

        {/* Email and subscribe */}
        <div className="w-full h-[0px] left-[0px] top-[385px] absolute opacity-10 border-2 border-white"></div>
        <div className="w-[362px] h-[189px] left-[1054px] top-[64px] absolute">
          <div className="w-[362px] h-[50px] left-0 top-[139px] absolute justify-start items-start gap-2 inline-flex">
            <div className="h-[50px] px-4 py-3 bg-white border border-zinc-200 justify-start items-center gap-2.5 flex">
              <div className="text-gray-400 text-base font-normal font-['Epilogue'] leading-relaxed">
                Email Address
              </div>
            </div>
            <div className="px-6 py-3 bg-sky-400 justify-center items-center gap-2.5 flex">
              <div className="text-center text-white text-base font-bold font-['Epilogue'] leading-relaxed">
                Subscribe
              </div>
            </div>
          </div>
          <div className="w-[306px] left-0 top-[47px] absolute text-zinc-200 text-base font-normal font-['Epilogue'] leading-relaxed">
            The latest job news, articles, sent to your inbox weekly.
          </div>
          <div className="left-0 top-0 absolute text-white text-lg font-semibold font-['Epilogue'] leading-[28.80px]">
            Get job notifications
          </div>
        </div>
        <div className="h-[241px] left-[688px] top-[64px] absolute">
          <div className="w-[97px] h-[220px] left-[198px] top-0 absolute">
            <div className="w-[88px] h-[173px] left-0 top-[47px] absolute">
              <div className="left-0 top-[147px] absolute text-zinc-200 text-base font-normal font-['Epilogue'] leading-relaxed">
                Contact Us
              </div>
              <div className="left-0 top-[98px] absolute text-zinc-200 text-base font-normal font-['Epilogue'] leading-relaxed">
                Updates
              </div>
              <div className="left-0 top-[49px] absolute text-zinc-200 text-base font-normal font-['Epilogue'] leading-relaxed">
                Guide
              </div>
              <div className="left-0 top-0 absolute text-zinc-200 text-base font-normal font-['Epilogue'] leading-relaxed">
                Help Docs
              </div>
            </div>
            <div className="left-0 top-0 absolute text-white text-lg font-semibold font-['Epilogue'] leading-[28.80px]">
              Resources
            </div>
          </div>
          <div className="w-[105px] h-[241px] left-0 top-0 absolute">
            <div className="w-[105px] h-[194px] left-0 top-[47px] absolute flex-col justify-start items-start gap-4 inline-flex">
              <div className="text-zinc-200 text-base font-normal font-['Epilogue'] leading-relaxed">
                Companies
              </div>
              <div className="text-zinc-200 text-base font-normal font-['Epilogue'] leading-relaxed">
                Pricing
              </div>
              <div className="text-zinc-200 text-base font-normal font-['Epilogue'] leading-relaxed">
                Terms
              </div>
              <div className="text-zinc-200 text-base font-normal font-['Epilogue'] leading-relaxed">
                Advice
              </div>
              <div className="text-zinc-200 text-base font-normal font-['Epilogue'] leading-relaxed">
                Privacy Policy
              </div>
            </div>
            <div className="left-[1px] top-0 absolute text-white text-lg font-semibold font-['Epilogue'] leading-[28.80px]">
              About
            </div>
          </div>
        </div>

        {/* JobFinder */}
        <div className="h-[146px] left-[120px] top-[64px] absolute">
          <div className="w-[376px] left-0 top-[68px] absolute text-zinc-200 text-base font-normal font-['Epilogue'] leading-relaxed">
            Great platform for the job seeker that passionate about startups.
            Find your dream job easier.
          </div>
          <div className="w-40 h-9 left-0 top-0 absolute">
            <div className="w-8 h-8 left-0 top-[2px] absolute flex-col justify-start items-start inline-flex">
              <div className="w-8 h-8 bg-sky-400 rounded-full" />
              <div className="w-5 h-5 relative origin-top-left -rotate-90" />
            </div>
            <div className="left-[40px] top-0 absolute text-white text-2xl font-bold font-['Red Hat Display'] leading-9">
              JobFinder
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
