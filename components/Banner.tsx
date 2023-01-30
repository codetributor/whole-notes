function Banner() {
  return (
    <div className="bg-gray-100 flex flex-col justify-center items-center lg:flex-row lg::space-x-5 lg:justify-between font-bold px-10 py-5 mb-10">
      <div className="flex flex-col justify-center items-center lg:items-start">
        <h1 className="text-3xl text-gray-400">Peoples Stories</h1>
        <p className="text-gray-600">Share your story... </p>
        <span className="underline decoration-blue-300 decoration-4 text-gray-600">
          You never know who it might help!
        </span>{" "}
      </div>
      <div className="flex flex-col justify-center items-center lg:items-start">
        <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
          If you want your story featured, email: wholenotes@protonemail.com
        </p>
      </div>
    </div>
  );
}

export default Banner;
