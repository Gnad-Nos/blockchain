function Register() {
  return (
    <div className="flex w-full h-screen">
      <div className="w-3/5">
        <img
          src="https://cdn.aarp.net/content/dam/aarp/work/job-search/2020/08/1140-new-job-keyboard.jpg"
          alt=""
          className="h-full w-full"
        />
      </div>
      <div className="w-2/5 flex justify-center items-center">
        <div className=" h-[602px] w-[408px]">
          <div className="text flex justify-center text-4xl">
            Get more opportunities
          </div>
          <button className=" text-cyan-400 my-8 h-10 w-full border-[1px]">
            Sign Up with Google
          </button>
          <div className="flex justify-center border-t-2">
            Or sign up with email
          </div>
          <form action="" className="mt-5 space-y-4">
            <div className="space-y-2">
              <div className="">Full name</div>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full py-1 bg-white px-2 text-black"
              />
            </div>
            <div className="space-y-2">
              <div className="">Email Address</div>
              <input
                type="text"
                placeholder="Enter email address"
                className="w-full py-1 bg-white px-2 text-black"
              />
            </div>
            <div className="space-y-2">
              <div className="">Password</div>
              <input
                type="text"
                placeholder="Enter Password"
                className="w-full py-1 bg-white px-2 text-black"
              />
            </div>
          </form>         
          <button className="mt-10 bg-blue-700 h-10 w-full border-[1px]">
            Continue
          </button>
          <div className="flex space-x-2 mt-4">
            <p>Already have an account?</p>
            <button className="text-blue-700">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
