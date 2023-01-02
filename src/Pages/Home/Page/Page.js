import React from "react";

export const Page = () => {
  return (
    <div className="relative">
      <img
        src="https://img.freepik.com/free-photo/abstract-smoke-wallpaper-background-desktop_53876-128257.jpg?w=996&t=st=1672688370~exp=1672688970~hmac=b892a6e934429234bddedbe30ac86e3877ccb4964d826d4ecc8044e030db1c83"
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className="relative bg-gray-900 bg-opacity-60">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="content-center">
            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                The quick, brown fox <br className="hidden md:block" />
                jumps over a{" "}
                <span className="text-teal-accent-400">lazy dog</span>
              </h2>
              <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudan, totam rem aperiam, eaque ipsa
                quae.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
