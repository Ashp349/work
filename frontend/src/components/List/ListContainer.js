
import { Box, ChakraProvider, Heading, StackDivider } from "@chakra-ui/react";
import TaskTable from "./TaskTable";
function ListContainer() {
  return (
    <div>
    <Box className="ml-1" px={1} pt={35} fontSize="sm">
      {/* <Heading mb={10}>TanStack Table</Heading> */}
      <TaskTable />
    </Box>
    </div>
  );
}

export default ListContainer;






// import { property } from "lodash";
// import React,{useEffect,useState,useMemo} from "react";
// import { useTable } from 'react-table';
// import { Resizable } from 'react-resizable';

// const riskTemplateData=[
// {
//     RUID:"1",
//     Owner:"Ashutosh Pol",
//     Date:"19/11/2023",
//     Probability: 2,
//     Impact: 4,
//     Priority: 8,
//     Strategy: "Transfer"
// },
// {
//     RUID:"2",
//     Owner:"Rajnesh",
//     Date:"9/11/2023",
//     Probability: 4,
//     Impact: 5,
//     Priority: 20,
//     Strategy: "Transfer"
// },{
//     RUID:"3",
//     Owner:"Joel",
//     Date:"6/10/2023",
//     Probability: 2,
//     Impact: 1,
//     Priority: 2,
//     Strategy: "Avoid"
// },
// {
//     RUID:"3",
//     Owner:"Joel",
//     Date:"8/10/2023",
//     Probability: 2,
//     Impact: 2,
//     Priority: 4,
//     Strategy: "Transfer"
// },

// ];




// export default function ListContainer(){

//     const data = useMemo(
//         () => riskTemplateData,
//         []
//       );
    
//       // Define your table columns
//       const columns = useMemo(
//         () => [
//           { Header: 'RUID', accessor: 'RUID' },
//           { Header: 'Risk Owner', accessor: 'Owner' },
//           { Header: 'Date ', accessor: 'Date' },
//           { Header: 'Probabaility', accessor: 'Probability' },
//           { Header: 'Impact', accessor: 'Impact' },
//           { Header: 'Priority', accessor: 'Priority' },
//           { Header: 'Strategy', accessor: 'Strategy' },
//         //   { Header: 'Due Date ', accessor: 'Gender' },
//         //   { Header: 'Due Date ', accessor: 'Gender' },
//         ],
//         []
//       );
    
//       const ResizableHeaderCell = ({ column }) => (
//         <th {...column.getHeaderProps()} className="px-4">
//           <Resizable
//             width={column.width}
//             height={0}
//             minConstraints={[40, 0]}
//             maxConstraints={[400, 0]}
//             handle={<div className="resize-handle" />}
//             onResize={(e, { size }) => {
//               column.setWidth(size.width);
//             }}
//           >
//             <div>{column.render('Header')}</div>
//             <div className="resize-handle" />
//           </Resizable>
//         </th>
//       );




//       // Create an instance of the table
//       const {
//         getTableProps,
//         getTableBodyProps,
//         headerGroups,
//         rows,
//         prepareRow,
//       } = useTable({ columns, data });
    
//       // Render the table
//       return (
//         <table {...getTableProps()}>
//           <thead className="text-[#6d6e6f] text-sm text-left p-2">
//             {headerGroups.map((headerGroup) => (
//               <tr {...headerGroup.getHeaderGroupProps()}>
//                 {/* {headerGroup.headers.map((column) => (
//                   <th className="border-solid border-2" {...column.getHeaderProps()}>{column.render('Header')}</th>
                  
//                 ))} */}
        
//             {headerGroup.headers.map((column) => (
//               <ResizableHeaderCell column={column} key={column.id} />
//             ))}
       
//               </tr>
//             ))}
//           </thead>
//           <tbody {...getTableBodyProps()}>
//             {rows.map((row) => {
//               prepareRow(row);
//               return (
//                 <tr {...row.getRowProps()}>
//                   {row.cells.map((cell) => (
//                     <td className="border-solid border-1 hover:border-gray-400" {...cell.getCellProps()}>{cell.render('Cell')}</td>
//                   ))}
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       );
// }