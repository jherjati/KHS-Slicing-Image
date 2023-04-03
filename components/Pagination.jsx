import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/20/solid";

function paginate(page, maxPage) {
  if (maxPage <= 7) {
    return Array.from({ length: maxPage }).map((_, i) => i + 1);
  } else if ([1, 2, maxPage - 1, maxPage].includes(page))
    return [1, 2, 3, 0, maxPage - 2, maxPage - 1, maxPage];
  else if ([3, 4].includes(page)) return [1, 0, 3, 4, 5, 0, maxPage];
  else if ([maxPage - 3, maxPage - 2].includes(page))
    return [1, 0, maxPage - 4, maxPage - 3, maxPage - 2, 0, maxPage];
  else return [1, 0, page - 1, page, page + 1, 0, maxPage];
}

export default function Pagination({ page, maxPage, setPage }) {
  const myPagination = paginate(page, maxPage);
  const isReachMin = page === 1;
  const isReachMax = page === maxPage;

  return (
    <nav className='flex items-center justify-between border-t border-gray-200 px-4 sm:px-0'>
      <div className='-mt-px flex w-0 flex-1'>
        <button
          disabled={isReachMin}
          onClick={() => setPage(page - 1)}
          className='inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700'
        >
          <ArrowLongLeftIcon
            className='mr-3 h-5 w-5 text-gray-400'
            aria-hidden='true'
          />
          Previous
        </button>
      </div>
      <div className='hidden md:-mt-px md:flex'>
        {myPagination.map((pageNumber, index) => (
          <button
            onClick={() => setPage(pageNumber)}
            disabled={!pageNumber}
            key={index}
            className={
              !pageNumber
                ? "inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500"
                : pageNumber === page
                ? "inline-flex items-center border-t-2 border-indigo-500 px-4 pt-4 text-sm font-medium text-indigo-600"
                : "inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
            }
          >
            {pageNumber ? pageNumber : "..."}
          </button>
        ))}
      </div>
      <div className='-mt-px flex w-0 flex-1 justify-end'>
        <button
          disabled={isReachMax}
          onClick={() => setPage(page + 1)}
          className='inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700'
        >
          Next
          <ArrowLongRightIcon
            className='ml-3 h-5 w-5 text-gray-400'
            aria-hidden='true'
          />
        </button>
      </div>
    </nav>
  );
}
