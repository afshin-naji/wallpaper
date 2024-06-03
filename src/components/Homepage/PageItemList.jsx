import PageItem from "./PageItem";
import ArrowBtn from "./ArrowBtn";

function PageItemList({ pageNum, setPageNum, totalPages }) {
  return (
    <div className="flex items-center justify-center mt-4 gap-1">
      <ArrowBtn
        direction={"left"}
        setPageNum={setPageNum}
        pageNum={pageNum}
        totalPages={totalPages}
      />
      {pageNum >= 2 && (
        <PageItem
          number={pageNum - 1}
          setPageNum={setPageNum}
          currPage={pageNum}
        />
      )}
      <PageItem number={pageNum} setPageNum={setPageNum} currPage={pageNum} />
      {pageNum < totalPages && (
        <PageItem
          number={pageNum + 1}
          setPageNum={setPageNum}
          currPage={pageNum}
        />
      )}
      <ArrowBtn
        direction={"right"}
        setPageNum={setPageNum}
        pageNum={pageNum}
        totalPages={totalPages}
      />
    </div>
  );
}

export default PageItemList;
