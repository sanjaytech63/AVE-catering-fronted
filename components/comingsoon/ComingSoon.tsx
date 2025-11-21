import { NextPage } from "next";
// import CountdownTimer from "./CountdownTimer";

const ComingSoon: NextPage = () => {
  // const launchDate = "2025-12-31T23:59:59";

  return (
    <>
      <div className="min-h-screen  relative overflow-hidden">
        <div className="relative z-10 container mx-auto px-4 py-16 min-h-screen flex flex-col justify-center items-center">
          <div className="text-center space-y-12 w-full max-w-6xl">
            <div className="animate-fade-in">
              <div className="w-20 h-20 mx-auto mb-6 bg-white rounded-2xl flex items-center justify-center border border-gray-200 shadow-lg">
                <span className="text-2xl">🚀</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
                Coming Soon
              </h1>
            </div>

            <div className="animate-slide-up">
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
                Something{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Amazing
                </span>{" "}
                Is On The Way
              </h2>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
                We are working hard to bring you an incredible experience. Stay
                tuned for our launch and be the first to know when we go live!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComingSoon;
