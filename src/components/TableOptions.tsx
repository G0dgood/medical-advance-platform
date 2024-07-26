
import { MdOutlineErrorOutline } from "react-icons/md";
import { VscCloudDownload } from "react-icons/vsc";




const TableProgressBar = () => (
  <div id="container-progressbar">
    <div id="bar"></div>
  </div>
);


// TableFetch
const TableFetch = ({ colSpan }: any) => (
  <tr>
    <td colSpan={colSpan} className="table-loader">
      <VscCloudDownload size={75} />
      <p className="mt-3">Fetching request...</p>
    </td>
  </tr>
);
// NoRecordFound
const NoRecordFound = ({ colSpan }: any) => (
  <tr>
    <td colSpan={colSpan} className="table-loader">
      <MdOutlineErrorOutline size={75} />
      <p className="mt-3">No record found</p>
    </td>
  </tr>
);






const customId = "custom-id-yes";








const customStyles = {
  option: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: state.isFocused ? '#6F47EB' : null,
    color: state.isFocused ? 'white' : null,
  }),
  menu: (provided: any) => ({
    ...provided,
    boxShadow: '0 4px 8px #7047eb7e',
  }),
};




export {
  TableFetch,
  NoRecordFound,
  TableProgressBar,
  customId,
  customStyles
};
