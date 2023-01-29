function Banner() {
  return (
    <div className="bg-gray-100 flex flex-col lg:flex-row lg::space-x-5 justify-between items-center font-bold px-10 py-5 mb-10">
      <div>
        <h1 className="text-3xl text-gray-400">Peoples' Stories</h1>
      </div>
      <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
        Everyone has a{" "}
        <span className="underline decoration-blue-300 decoration-4">
          story worth telling.
        </span>{" "}
        If you want your story featured, email: wholenotes@protonemail.com
      </p>
    </div>
  );
}

export default Banner;
