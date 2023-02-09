function NotebookBanner() {
  return (
    <div className="bg-gray-100 flex flex-col lg:flex-row lg::space-x-5 justify-between items-center font-bold px-10 py-5 mb-10">
      <div>
        <h1 className="text-3xl text-gray-400">Notepads</h1>
      </div>
      <div className="flex flex-col justify-center items-center lg:items-start">
        <p className="text-gray-600">Buy one mini notepad and </p>
        <span className="underline decoration-blue-300 decoration-4 text-gray-600">
          we donate one mini notepad
        </span>{" "}
        <p className="text-gray-600 text-center">
          to someone living with a mental health condition
        </p>
      </div>
    </div>
  );
}

export default NotebookBanner;
