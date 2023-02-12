function WorkShopBanner() {
  return (
    <div className="bg-gray-100 flex flex-col lg:flex-row lg::space-x-5 justify-between items-center font-bold px-10 py-5 mb-10">
      <div>
        <h1 className="text-3xl text-gray-400">Workshops</h1>
      </div>
      <div className="flex flex-col justify-center items-center lg:items-start">
        <p className="text-gray-600">For Upcoming Events</p>
        <span className="underline decoration-blue-300 decoration-4 text-gray-600">
          Check Your Calendar
        </span>
      </div>
    </div>
  );
}

export default WorkShopBanner;
