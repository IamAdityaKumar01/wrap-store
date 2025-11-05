const FAQAcc = ({ title, body, showData, setIndex }) => {
  return (
    <div className="bg-gray-50 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div
        className="flex justify-between items-center p-4 cursor-pointer font-medium text-gray-700 hover:text-indigo-600 transition-colors"
        onClick={setIndex}
      >
        <h4 className="text-base md:text-lg">{title}</h4>
        <span className="text-xl">{showData ? "−" : "+"}</span>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          showData ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="px-4 pb-4 text-gray-600 text-sm md:text-base leading-relaxed">
          {body}
        </p>
      </div>
    </div>
  );
};

export default FAQAcc;
