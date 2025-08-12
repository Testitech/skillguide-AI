import { title, subtitle } from "@/components/primitives";
import { Button } from "@heroui/button";
import Link from "next/link";
// import img from "@/public/images/AI-guide.png.jpg"
import {
  UserCircleIcon,
  LightBulbIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";
// import { useAuth } from "@/components/AuthProvider";
// import { useState } from "react";
// import LoginModal from "@/components/LoginModal";

export default function Home() {
  // const { isLoggedIn } = useAuth();

  // const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  return (
    <div className="flex flex-col">
      <section className="flex flex-col items-center justify-center gap-4 py-8 px-6 md:py-10">
        <div className="inline-block max-w-xl text-center justify-center">
          <span className={title()}>Make&nbsp;</span>
          <span className={title({ color: "blue" })}>Better&nbsp;</span>
          <br />
          <span className={title()}>Decisions with AI Guidance.</span>
          <div className={subtitle({ class: "mt-6" })}>
            Get personalized advice based on your skills and goals. Let AI help
            you navigate complex decisions and unlock your potential.
          </div>
        </div>

        <div className="flex space-x-5 mt-6">
          <Button
            radius="full"
            variant="shadow"
            color="primary"
            href="/guidance"
            as={Link}
          >
            Start AI Guidance
          </Button>

          <Button
            className="px-8"
            radius="full"
            variant="shadow"
            color="primary"
            href="/guidance"
            as={Link}
          >
            Get Started
          </Button>
        </div>
      </section>

      {/* Features Section */}

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col text-center space-y-4">
            <h2 className="text-4xl font-semibold">
              Why choose SkillGuide AI?
            </h2>
            <p className="text-lg text-gray-600 mx-auto">
              Our AI-powered platform provides personalized guidance tailored to
              your unique skills and aspirations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4 py-20 max-w-7xl mx-auto">
            {/* CARD 1 */}
            <div className="bg-[#eff6ff] py-5 px-6 xl:px-12 text-center flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105 opacity-0 animate-fade-in-up rounded-xl shadow-md shadow-blue-200">
              <div className="bg-primary-600 h-16 w-16 rounded-full flex items-center justify-center">
                <LightBulbIcon className="h-8 w-8 text-white" />
              </div>
              <div className="flex flex-col space-y-4 mt-4">
                <h3 className="font-semibold text-xl">AI-Powered Insights</h3>
                <p className="text-gray-600">
                  Advanced AI analyzes your skills and provides intelligent
                  recommendations for your career growth.
                </p>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="bg-[#f0fdf4] py-5 px-6 xl:px-12 text-center flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105 opacity-0 animate-fade-in-up rounded-xl shadow-md shadow-green-200">
              <div className="bg-success-600 h-16 w-16 rounded-full flex items-center justify-center">
                <UserCircleIcon className="h-8 w-8 text-white" />
              </div>
              <div className="flex flex-col space-y-4 mt-4">
                <h3 className="font-semibold text-xl">Personalized Guidance</h3>
                <p className="text-gray-600">
                  Get tailored advice based on your specific skills, experience,
                  and career objectives.
                </p>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="bg-[#faf5ff] py-5 px-6 xl:px-12 text-center flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105 opacity-0 animate-fade-in-up rounded-xl shadow-md shadow-violet-200">
              <div className="bg-primary-600 h-16 w-16 rounded-full flex items-center justify-center">
                <ChartBarIcon className="h-8 w-8 text-white" />
              </div>
              <div className="flex flex-col space-y-4 mt-4">
                <h3 className="font-semibold text-xl">Track Progress</h3>
                <p className="text-gray-600">
                  Monitor your skill development and decision-making
                  improvements over time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}

      <section className="bg-gray-50 py-20">
        <div className="flex flex-col text-center space-y-4">
          <h2 className="text-4xl font-semibold">How it works</h2>
          <p className="text-lg text-gray-600 mx-auto">
            Simple steps to get personalised AI guidance
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 px-32 py-20 max-w-7xl mx-auto">
          {/* step 1 */}
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
              1
            </div>
            <h3 className="text-xl font-semibold mb-4">Create Your Profile</h3>
            <p className="text-gray-600">
              Tell us about your skills, experience, and goals to get started.
            </p>
          </div>
          {/* step 2 */}
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
              2
            </div>
            <h3 className="text-xl font-semibold mb-4">Ask AI for Guidance</h3>
            <p className="text-gray-600">
              Submit your questions and challenges to get personalized advice.
            </p>
          </div>

          {/* step 3 */}
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
              3
            </div>
            <h3 className="text-xl font-semibold mb-4">Implement & Grow</h3>
            <p className="text-gray-600">
              Follow AI recommendations and track your progress over time.
            </p>
          </div>
        </div>
      </section>

      {/* CTA section */}

      <section className="bg-primary py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Transform Your Decision Making?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Join thousands of professionals who are making better decisions with
            AI guidance.
          </p>
          {isLoggedIn ? (
            <Link
              href="/guidance"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer"
            >
              Start Your Journey
            </Link>
          ) : (
            <button
              onClick={() => setIsLoginModalOpen(true)}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer"
            >
              Get Started Today
            </button>
          )}
        </div>
      </section>

      {/* <LoginModal
        isModalOpen={isLoginModalOpen}
        onModalClose={setIsLoginModalOpen(true)}
      /> */}
    </div>
  );
}
