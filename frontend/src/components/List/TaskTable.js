import { useState } from "react";
import { Box, Button, ButtonGroup, Icon, Text } from "@chakra-ui/react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import DATA from "./data";
import EditableCell from "./EditableCell";
import StatusCell from "./StatusCell";
import DateCell from "./DateCell";
import Filters from "./Filters";
import SortIcon from "./icons/SortIcon";
import { useDisplay, useDisplayUpdate } from "../Context/DisplayInfoContext";
import Info from "../FormsContent/Info";




const columns = [
  {
    accessorKey: "risk_id",
    header: "RUID",
    size:100,
    cell: EditableCell,
    enableColumnFilter: true,
    filterFn: "includesString",
  },
  {
    accessorKey: "risk_title",
    header: "Title",
    size:400 ,
    cell: EditableCell,
    enableColumnFilter: true,
    filterFn: "includesString",
  },
  {
    accessorKey: "probability",
    header: "Probability",
    size:400 ,
    cell: EditableCell,
    enableColumnFilter: true,
    filterFn: "includesString",
  },
  {
    accessorKey: "impact",
    header: "Impact",
    size:400 ,
    cell: EditableCell,
    enableColumnFilter: true,
    filterFn: "includesString",
  },
   {
    accessorKey: "priority",
    header: "Priority",
    size:400 ,
    cell: EditableCell,
    enableColumnFilter: true,
    filterFn: "includesString",
  },
  {
    accessorKey: "severity",
    header: "Severity",
    size:400 ,
    cell: EditableCell,
    enableColumnFilter: true,
    filterFn: "includesString",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: StatusCell,
    enableSorting: false,
    enableColumnFilter: true,
    filterFn: (row, columnId, filterStatuses) => {
      if (filterStatuses.length === 0) return true;
      const status = row.getValue(columnId);
      return filterStatuses.includes(status?.id);
    },
  },
  {
    accessorKey: "due",
    header: "Due",
    cell: DateCell,
  },
  {
    accessorKey: "notes",
    header: "Notes",
    size: 400,
    cell: EditableCell,
  },
];

const TaskTable = () => {
  const [data, setData] = useState(DATA);
  const [columnFilters, setColumnFilters] = useState([]);
  const openinfo = useDisplay();
  const updateInfo= useDisplayUpdate();
  // const [sideWindow,setSideWindow] = useState(true);



  const table = useReactTable({
    data,
    columns,
    state: {
      columnFilters,
    },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    // getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    columnResizeMode: "onChange",
    meta: {
      updateData: (rowIndex, columnId, value) =>
        setData((prev) =>
          prev.map((row, index) =>
            index === rowIndex
              ? {
                  ...prev[rowIndex],
                  [columnId]: value,
                }
              : row
          )
        ),
    },
  });

  return (
  <>
    
    <div className="relative">
    <Box>
      <Filters
        columnFilters={columnFilters}
        setColumnFilters={setColumnFilters}
      />
      <Box className="text-[#1e1f21] text-sm border-box border-[0.0625rem] border-l-0 border-solid border-[#edeae9]" w={table.getTotalSize()}>
        {table.getHeaderGroups().map((headerGroup) => (
          <Box className="flex w-fit-content" key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <Box className="text-[#1e1f21] hover\:opacity-100 shadow-inset border-box border-l-0 border-[0.0625rem] border-solid border-[#edeae9] relative flex justify-center items-center p-2 font-bold text-xs uppercase text-center" style={{ zIndex: 1 }} w={header.getSize()} key={header.id}>
                {header.column.columnDef.header}
                {header.column.getCanSort() && (
                  <Icon
                    as={SortIcon}
                    mx={3}
                    fontSize={14}
                    onClick={header.column.getToggleSortingHandler()}
                  />
                )}
                {
                  {
                    asc: " 🔼",
                    desc: " 🔽",
                  }[header.column.getIsSorted()]
                }
                <Box
                  onMouseDown={header.getResizeHandler()}
                  onTouchStart={header.getResizeHandler()}
                  className={`absolute opacity-0 top-0 right-0 h-full w-5 bg-blue-500 cursor-col-resize select-none touch-action-none rounded-full ${
                    header.column.getIsResizing() ? "bg-green-500 opacity-100" : ""
                  }`}
                />
              </Box>
            ))}
          </Box>
        ))}
        {table.getRowModel().rows.map((row) => (
          <Box onClick={updateInfo} className={`text-[#1e1f21] flex w-fit-content cursor-pointer`} key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <Box className="text-[#1e1f21] shadow-inset border-box border-[0.0625rem] border-solid border-[#edeae9]" w={cell.column.getSize()} key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </Box>
            ))}
          </Box>
        ))}
      </Box>
      <br />
      <div className="fixed bottom-5 right-3 font-bold rounded-md flex items-center flex-col p-2  bg-slate-50  ">
      <Text className="text-sm" mb={2}>
        Page {table.getState().pagination.pageIndex + 1} of{" "}
        {table.getPageCount()}
      </Text>
      <ButtonGroup size="sm" isAttached variant="outline" className="gap-4 text-sm">
        <Button
          onClick={() => table.previousPage()}
          isDisabled={!table.getCanPreviousPage()}
        >
          {"<"}
        </Button>
        <Button
          onClick={() => table.nextPage()}
          isDisabled={!table.getCanNextPage()}
        >
          {">"}
        </Button>
      </ButtonGroup>
      </div>
    </Box>
    </div>
   {!openinfo && 
     (<div className="fixed right-0 top-0 z-[10] bg-white duration-300 p-6 pr-9 overflow-y-visible">
       <button onClick={updateInfo}>
         <i class="fa-solid fa-right-to-bracket"></i>
       </button> 
       <Info/>
       {/* <button onClick={updateInfo} className="font-bold">Click here</button> */}
    </div>)}
   
    </>
  );
};
export default TaskTable;