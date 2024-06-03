import NEXT from "../../assets/NEXTBTN.svg";

function ArrowBtn({ direction, pageNum, setPageNum, totalPages }) {
  const onPageNum = () => {
    if (direction === "left") {
      pageNum > 1 && setPageNum((p) => p - 1);
    } else if (direction === "right") {
      pageNum < totalPages && setPageNum((p) => p + 1);
    }
  };
  return (
    <button
      onClick={onPageNum}
      disabled={
        direction === "left"
          ? pageNum === 1 && true
          : pageNum >= totalPages && true
      }
      className={`bg-teal-600 rounded-md text-white p-2
       disabled:bg-gray-400 dark:disabled:bg-gray-700 hover:bg-teal-500  ${
         direction === "left" && "rotate-180"
       }`}
    >
      <img src={NEXT} alt="next" className="w-6 h-6" />
    </button>
  );
}

export default ArrowBtn;
