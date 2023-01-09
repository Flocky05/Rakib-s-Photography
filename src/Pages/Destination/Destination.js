import React from "react";

export const Destination = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-base-100 ">
      <h2 className="text-3xl font-semibold text-center p-4">
        {" "}
        Let's Share you plan with us
      </h2>
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400"></div>
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Let us handle
              <br className="hidden md:block" />
              your next{" "}
              <span className="inline-block text-deep-purple-accent-400">
                destination
              </span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae. explicabo.
            </p>
          </div>
          <div>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 bg-blue-600 text-white p-2 rounded-md hover:text-deep-purple-800"
            >
              Learn more
              <svg
                className="inline-block w-3 ml-2"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center -mx-4 lg:pl-8">
          <div className="flex flex-col items-end px-3">
            <img
              className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
              src="https://img.freepik.com/free-photo/diverse-people-working-office_53876-104681.jpg?w=1060&t=st=1673270291~exp=1673270891~hmac=2aab590a6b999edbdd675e3c4351dc6c53f44cf5a674fcaed4aeda114adc0b6f"
              alt=""
            />
            <img
              className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
              src="https://img.freepik.com/free-photo/office-chair-meeting-room-asian_1262-2280.jpg?t=st=1673241664~exp=1673242264~hmac=5e3479d25027e676d224ceaa811b6ee6f09531c5624728b1db72ce94f1b0e33e"
              alt=""
            />
          </div>
          <div className="px-3">
            <img
              className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
              src="https://img.freepik.com/free-photo/divers-group-people-is-working-office_53876-47122.jpg?t=st=1673241664~exp=1673242264~hmac=5ebf72e2ca27d292c23e6ada972547c00cdea90ee73d818539ac93fb0b2bb3d7"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
