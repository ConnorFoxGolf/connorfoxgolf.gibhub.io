import React from 'react';
import './table.css';

// function useCustomAlignment(): [number, React.MutableRefObject<HTMLElement[]>] {
//   // const RESET_TIMEOUT = 100;

//   const [maxWidth, setMaxWidth] = useState(0);
//   const dataRowRefs = useRef<HTMLElement[]>([]) as React.MutableRefObject<HTMLElement[]>;
//   // let movementTimer: NodeJS.Timeout;

//   const findMaxColWidths = () => {
//     if (dataRowRefs.current) {
//       setMaxWidth(Math.max(...dataRowRefs.current.map(dataRow => dataRow.offsetWidth)));
//     }
//   }

//   console.log(maxWidth);

//   useLayoutEffect(() => {
//     findMaxColWidths();
//   }, []);
//   // window.addEventListener('resize', () => {
//   //   clearInterval(movementTimer);
//   //   movementTimer = setTimeout(findMaxRowWidth, RESET_TIMEOUT);
//   // });

//   return [
//     maxWidth,
//     dataRowRefs
//   ] 
// }

interface Props {
  headers?: (JSX.Element | string)[];
  data: {
    key: string,
    columnValues: (JSX.Element | string)[]
  }[];
}

export default function Table(props:Props):JSX.Element {
  const { headers, data } = props;

  const headerRow = !headers ? <></> :
    <thead className="table-head">
      <tr>
        {headers.map((header, index) => <th key={index}>{header}</th>)}
      </tr>
    </thead>;


  const rows = data.map(row => (
    <tr key={row.key}>
      {row.columnValues.map((colValue, colIndex) => (
        <td key={colIndex}>{colValue}</td>
      ))}
    </tr>
  ));

  return (
    <div className="table-container">
      <table className="table-content">
        {headerRow}
        <tbody>
          {rows}
        </tbody>
      </table>
    </div>
  );
}
