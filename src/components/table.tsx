import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import Pagination from "./pagination";

const columnHelper = createColumnHelper();

const columns: any = [
  columnHelper.accessor("eventName", {
    id: "Event Name",
    cell: (info) => <p>{info.getValue()}</p>,
    header: () => (
      <p className="dark:text-white text-[#ABC2CF] text-[13px]">Event Name</p>
    ),
  }),
  columnHelper.accessor("date", {
    header: () => (
      <p className="dark:text-white text-[#ABC2CF] text-[13px]">Date</p>
    ),
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor("speakers", {
    header: () => (
      <p className="dark:text-white text-[#ABC2CF] text-[13px]">Speakers</p>
    ),
  }),
  columnHelper.accessor("status", {
    header: () => (
      <p className="dark:text-white text-[#ABC2CF] text-[13px]">Status</p>
    ),
    cell: (info) => {
      if (String(info.getValue()).toLowerCase() === "in progress") {
        return (
          <div className="w-[99px] h-[24px] bg-[#DBEAFE] rounded-full dark:bg-transparent dark:border dark:border-[#77B1FF] flex items-center justify-center gap-2">
            <div className="w-[6px] h-[6px] bg-[#3B82F6] rounded-full"></div>
            <p className="text-[#77B1FF] text-[12px]">{info.getValue()}</p>
          </div>
        );
      }

      return (
        <div className="w-[99px] h-[24px] dark:bg-transparent dark:border dark:border-[#65DDB5] bg-[#D1FAE5] rounded-full flex items-center justify-center gap-2">
          <div className="w-[6px] h-[6px] bg-[#10B981] rounded-full"></div>
          <p className="text-[#4CAF50] text-[12px]">{info.getValue()}</p>
        </div>
      );
    },
  }),
];

const Table = ({
  data,
  pageCount,
  pagination,
  setPagination,
  currentPage,
}: any) => {
  console.log(pagination, "pagination");

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    rowCount: pageCount, // new in v8.13.0 - alternatively, just pass in `pageCount` directly
    state: {
      pagination,
    },
    onPaginationChange: setPagination,
    manualPagination: true, //we're doing manual "server-side" pagination
    // getPaginationRowModel: getPaginationRowModel(), // If only doing manual pagination, you don't need this
    debugTable: true,
  });

  const handlePageClick = (event: any) => {
    console.log(event, "current page");
    const newOffset = event.selected;
    table.setPageIndex(newOffset);
  };

  return (
    <>
      <div className="w-full">
        <table className="w-full">
          <thead className="dark:bg-[#6A6676] bg-[#fafafa] p-2  ">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="w-auto p-[15px] text-left  text-[#64748B]"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="dark:bg-bgBlackPrimary bg-white text-[13px] dark:text-white text-[#395A6B]">
            {table.getRowModel().rows.map((row: any) => (
              <tr
                key={row.id}
                className=" dark:border-none border-y  h-[49px]"
                onClick={() => {}}
              >
                {row.getVisibleCells().map((cell: any) => (
                  <td key={cell.id} className="px-[15px] text-left">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="h-4" />
      </div>
      <Pagination
        totalCount={pageCount}
        dataPerPage={pagination.pageSize}
        handlePageClick={handlePageClick}
        currentPage={currentPage}
      />
    </>
  );
};

export default Table;
