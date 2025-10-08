
export default function Register() {
    
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b0014] to-[#14002b] text-white flex flex-col items-center px-4 py-10">
      {/* Navbar */}
      <div className="w-full max-w-5xl flex justify-between items-center mb-12">
        <div className="flex items-center gap-2">
          <img width={"50px"} src="./TALKA-Favicon.png" alt="talka" />
          <div className="text-gray-300 hover:text-white transition">Takla</div>
        </div>

        <div className="flex gap-6 text-sm">
          <button className="text-gray-300 hover:text-white transition">
            Login
          </button>
          <button className="text-gray-300 hover:text-white transition">
            Register
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="w-full max-w-lg text-center">
        {/* Buttons */}
        <div className="flex justify-center gap-4 mb-10">
          <button className="px-6 py-2 border border-purple-500 rounded-full text-sm hover:bg-purple-700 transition">
            Create work space
          </button>
          <button className="px-6 py-2 border border-purple-500 rounded-full text-sm hover:bg-purple-700 transition">
            Join with link
          </button>
        </div>

        {/* Title */}
        <div className="mb-8 text-sm text-gray-300">
          Tell us more about your business
        </div>

        {/* Form */}
        <form className="space-y-5">
          <div className="text-left text-sm">
            <div className="block mb-1 text-gray-300">Organization name</div>
            <input
              type="text"
              placeholder="Talka"
              className="w-full bg-transparent border border-purple-800 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-purple-400"
            />
          </div>

          <div className="text-left text-sm">
            <label className="block mb-1 text-gray-300">Website</label>
            <input
              type="text"
              placeholder="www.Talka"
              className="w-full bg-transparent border border-purple-800 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-purple-400"
            />
          </div>

          <div className="text-left text-sm">
            <label className="block mb-1 text-gray-300">Industry</label>
            <input
              type="text"
              placeholder="Null"
              className="w-full bg-transparent border border-purple-800 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-purple-400"
            />
          </div>

          {/* Next button */}
          <div className="flex justify-end pt-4">
            <button
              type="button"
              className="flex items-center gap-2 px-5 py-2 bg-purple-700 rounded-full text-sm hover:bg-purple-800 transition"
            >
              Next &rarr;
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
