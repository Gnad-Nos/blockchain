function Login() {
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
            Welcome Back, Dude
          </div>
          <button className=" text-cyan-400 my-8 h-10 w-full border-[1px]">
            Login with Google
          </button>
          <div className="flex justify-center border-t-2">
            Or login with account
          </div>
          <form action="" className="mt-5 space-y-4">
            <div className="space-y-2">
              <div className="">Account</div>
              <input
                type="text"
                placeholder="Account"
                className="w-full py-1 bg-white px-2 text-black"
              />
            </div>
            <div className="space-y-2">
              <div className="">Password</div>
              <input
                type="text"
                placeholder="Password"
                className="w-full py-1 bg-white px-2 text-black"
              />
            </div>
          </form>
          <div className="text-xl space-x-2 my-7">
            <input type="checkbox" className="h-4 w-4" />
            <label htmlFor="">Remember me</label>
          </div>
          <button className=" bg-blue-700 h-10 w-full border-[1px]">
            Login
          </button>
          <div className="flex space-x-2 mt-4">
            <p>Don't have any account?</p>
            <button className="text-blue-700">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
