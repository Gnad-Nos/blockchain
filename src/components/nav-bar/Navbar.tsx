import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <div>
      <div className="navbar bg-base-100 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
          </div>
          <NavLink to="/" className="btn btn-ghost text-xl">
            JobFinder
          </NavLink>
        </div>

        <NavLink
          to="/find-job"
          className="w-[200px] text-slate-50 text-base font-medium font-['Epilogue'] leading-relaxed"
        >
          Find Jobs
        </NavLink>

        <a className="w-[300px] text-slate-50 text-base font-medium font-['Epilogue'] leading-relaxed">
          Browse Companies
        </a>

        <a className="text-zinc-800 text-base font-bold font-['Inter'] leading-tight">
          Search Jobs
        </a>
        <a className="text-zinc-800 text-base font-bold font-['Inter'] leading-tight">
          Job Alerts
        </a>

        <a className="navbar-end space-x-3">
          <a className="btn-secondary">
            <button
              className="btn"
              onClick={() => document.getElementById("my_modal_5")?.showModal()}
            >
              Add Employee
            </button>
            <dialog id="my_modal_5" className="modal">
              <div className="modal-box place-items-start bg-white max-w-[640px]">
                <div className="w-[580px] h-[1592px] flex-col justify-start items-start gap-8 inline-flex">
                  {/* <div className="justify-start items-center gap-6 inline-flex">
                    <div className="w-20 h-20 relative">
                      <div className="w-20 h-20 left-0 top-0 absolute rounded-full" />
                      <div className="w-[60.75px] h-[72px] left-[10px] top-[4px] absolute">
                        <div className="w-[60.75px] h-[71.78px] left-0 top-[0.01px] absolute"></div>
                      </div>
                    </div>
                    <div className="flex-col justify-start items-start gap-2 inline-flex">
                      <div className="text-slate-800 text-2xl font-semibold font-['Clash Display Variable'] leading-[28.80px]">
                        Tam
                      </div>
                      <div className="h-[27px] justify-start items-center gap-4 inline-flex">
                        <div className="text-slate-600 text-lg font-normal font-['Epilogue'] leading-[28.80px]">
                          Full Stack
                        </div>
                        <div className="w-1 h-1 bg-slate-600 rounded-full" />
                        <div className="text-slate-600 text-lg font-normal font-['Epilogue'] leading-[28.80px]">
                          Binh Duong, Viet Nam
                        </div>
                        <div className="w-1 h-1 bg-slate-600 rounded-full" />
                        <div className="text-slate-600 text-lg font-normal font-['Epilogue'] leading-[28.80px]">
                          Full-Time
                        </div>
                      </div>
                    </div>
                  </div> */}
                  <div className="w-[580px] h-[0px] border border-zinc-200"></div>
                  <div className="flex-col justify-start items-start gap-4 flex">
                    <div className="text-slate-800 text-2xl font-semibold font-['Clash Display Variable'] leading-[28.80px]">
                      Everyone can see your information in this part
                    </div>
                    <div className="text-slate-500 text-base font-normal font-['Epilogue'] leading-relaxed">
                      The following is required
                    </div>
                  </div>
                  <div className="self-stretch h-20 flex-col justify-start items-start gap-1 flex">
                    <div className="text-slate-600 text-base font-semibold font-['Epilogue'] leading-relaxed">
                      Full name
                    </div>
                    <div className="self-stretch px-4 py-3 bg-white border border-zinc-200 justify-start items-center gap-2.5 inline-flex">
                      <div className="text-gray-400 text-base font-normal font-['Epilogue'] leading-relaxed">
                        Enter your fullname
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-20 flex-col justify-start items-start gap-1 flex">
                    <div className="text-slate-600 text-base font-semibold font-['Epilogue'] leading-relaxed">
                      Location
                    </div>
                    <div className="self-stretch px-4 py-3 bg-white border border-zinc-200 justify-start items-center gap-2.5 inline-flex">
                      <div className="text-gray-400 text-base font-normal font-['Epilogue'] leading-relaxed">
                        Enter your City, Country
                      </div>
                    </div>
                  </div>

                  <div className="self-stretch h-20 flex-col justify-start items-start gap-1 flex">
                    <div className="text-slate-600 text-base font-semibold font-['Epilogue'] leading-relaxed">
                      Experience
                    </div>
                    <div className="self-stretch px-4 py-3 bg-white border border-zinc-200 justify-start items-center gap-2.5 inline-flex">
                      <div className="text-gray-400 text-base font-normal font-['Epilogue'] leading-relaxed">
                        Enter your experience
                      </div>
                    </div>
                  </div>
                  <div className="w-[580px] h-[0px] border border-zinc-200"></div>
                  <div className="text-slate-800 text-lg font-bold font-['Epilogue'] leading-[28.80px]">
                    CONTACT (hidden)
                  </div>
                  <div className="self-stretch h-20 flex-col justify-start items-start gap-1 flex">
                    <div className="text-slate-600 text-base font-semibold font-['Epilogue'] leading-relaxed">
                      Email address
                    </div>
                    <div className="self-stretch px-4 py-3 bg-white border border-zinc-200 justify-start items-center gap-2.5 inline-flex">
                      <div className="text-gray-400 text-base font-normal font-['Epilogue'] leading-relaxed">
                        Enter your email address
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-20 flex-col justify-start items-start gap-1 flex">
                    <div className="text-slate-600 text-base font-semibold font-['Epilogue'] leading-relaxed">
                      Phone number
                    </div>
                    <div className="self-stretch px-4 py-3 bg-white border border-zinc-200 justify-start items-center gap-2.5 inline-flex">
                      <div className="text-gray-400 text-base font-normal font-['Epilogue'] leading-relaxed">
                        Enter your phone number
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-20 flex-col justify-start items-start gap-1 flex">
                    <div className="text-slate-600 text-base font-semibold font-['Epilogue'] leading-relaxed">
                      LinkedIn URL
                    </div>
                    <div className="self-stretch px-4 py-3 bg-white border border-zinc-200 justify-start items-center gap-2.5 inline-flex">
                      <div className="text-gray-400 text-base font-normal font-['Epilogue'] leading-relaxed">
                        Link to your LinkedIn URL
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-20 flex-col justify-start items-start gap-1 flex">
                    <div className="text-slate-600 text-base font-semibold font-['Epilogue'] leading-relaxed">
                      Portfolio URL
                    </div>
                    <div className="self-stretch px-4 py-3 bg-white border border-zinc-200 justify-start items-center gap-2.5 inline-flex">
                      <div className="text-gray-400 text-base font-normal font-['Epilogue'] leading-relaxed">
                        Link to your portfolio URL
                      </div>
                    </div>
                  </div>
                  <div className="w-[580px] h-[0px] border border-zinc-200"></div>
                  <div className="self-stretch h-[260px] flex-col justify-start items-start gap-1 flex">
                    <div className="text-slate-600 text-base font-semibold font-['Epilogue'] leading-relaxed">
                      Additional information
                    </div>
                    <div className="self-stretch h-[230px] flex-col justify-start items-start flex">
                      <div className="self-stretch h-[152px] p-4 bg-white border border-zinc-200 justify-start items-start gap-2.5 inline-flex">
                        <div className="text-gray-400 text-base font-normal font-['Epilogue'] leading-relaxed">
                          Add a cover letter or anything else you want to share
                        </div>
                      </div>
                      <div className="self-stretch pl-4 py-3 bg-white border border-zinc-200 justify-start items-center gap-3 inline-flex">
                        <div className="w-6 h-6 relative" />
                        <div className="w-6 h-6 relative" />
                        <div className="w-6 h-6 relative" />
                        <div className="w-6 h-6 relative" />
                        <div className="w-6 h-6 relative" />
                        <div className="w-6 h-6 relative" />
                      </div>
                      <div className="self-stretch pt-1 justify-between items-start inline-flex">
                        <div className="text-gray-400 text-base font-normal font-['Epilogue'] leading-relaxed">
                          Maximum 500 characters
                        </div>
                        <div className="text-right text-slate-600 text-base font-normal font-['Epilogue'] leading-relaxed">
                          0 / 500
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="justify-start items-center gap-[197px] inline-flex">
                    <div className="text-gray-800 text-base font-semibold font-['Epilogue'] leading-relaxed">
                      Attach your resume
                    </div>
                    <div className="p-4 bg-slate-50 rounded border border-indigo-600 justify-center items-center gap-4 flex">
                      <div className="w-6 h-6 relative" />
                      <div className="text-slate-600 text-base font-medium font-['Epilogue'] leading-relaxed">
                        Attach Resume/CV
                      </div>
                    </div>
                  </div>
                  <div className="w-[580px] h-[0px] border border-zinc-200"></div>
                  <div className="self-stretch px-6 py-3 bg-indigo-600 justify-center items-center gap-2.5 inline-flex">
                    <div className="text-center text-white text-base font-bold font-['Epilogue'] leading-relaxed">
                      Submit Application
                    </div>
                  </div>
                  <div className="w-[580px]">
                    <span className="text-slate-600 text-base font-normal font-['Epilogue'] leading-relaxed">
                      By sending the request you can confirm that you accept our{" "}
                    </span>
                    <span className="text-indigo-600 text-base font-normal font-['Epilogue'] leading-relaxed">
                      Terms of Service
                    </span>
                    <span className="text-slate-600 text-base font-normal font-['Epilogue'] leading-relaxed">
                      {" "}
                      and{" "}
                    </span>
                    <span className="text-indigo-600 text-base font-normal font-['Epilogue'] leading-relaxed">
                      Privacy Policy
                    </span>
                  </div>
                </div>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </a>
          <a href="/login" className="btn btn-secondary">
            Login
          </a>
          <a href="/register" className="btn btn-secondary">
            Signup
          </a>
        </a>
      </div>
    </div>
  );
}
