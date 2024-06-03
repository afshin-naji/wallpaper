import LOVE from "../../assets/LOVE.svg";

function HomeHeader({ search }) {
  return (
    <>
      <div className="flex gap-3 flex-col items-center justify-center p-12 mb-5">
        {search === "" ? (
          <>
            <p className="text-3xl md:text-4xl text-teal-700 font-serif text-center">
              Welcome to <span className="text-teal-500 font-bold">Wallps</span>{" "}
              Website
            </p>
          </>
        ) : (
          <p className="text-3xl text-teal-700 font-serif text-center">
            results for <span className="text-teal-500">{search}...</span>
          </p>
        )}
      </div>
    </>
  );
}

export default HomeHeader;
