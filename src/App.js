import React, { useState } from "react";
import data from "./data/interviewRequests.json";
import TableComponent from "./components/TableComponent";
import HeaderComponent from "./components/HeaderComponent";
import SubHeaderComponent from "./components/SubHeaderComponent";

const App = () => {

  const [searchString, setSearchString] = useState("");
  const [tableData, setTableData] = useState(data);
  const [showArchive, setShowArchive] = useState(true)

  const headings = [
    "Candidate",
    "Role",
    "Last Communication",
    "Salary",
    "Sent by"
  ];

  // console.log(data)
  console.log("searchString", searchString);

  const archiveBtnHandler = (candidate, isArchived) => {
    const newTableData = tableData.map((row, idx) => {
      if (candidate === row.candidate) {
        return {
          ...row,
          last_comms: { ...row.last_comms },
          archived: !isArchived,
        };
      } else {
        return { ...row, last_comms: { ...row.last_comms } };
      }
    });
    setTableData(newTableData);
  };

  console.log(tableData);

  return (
    <>
      <HeaderComponent />
      <SubHeaderComponent
        searchString={searchString}
        changeHandler={(e) => setSearchString(e.target.value)}
        showArchive={showArchive}
        checkHandler={e => setShowArchive(e.target.checked)}
      />
      <TableComponent
        headings={headings}
        data={tableData}
        searchString={searchString}
        archiveBtnHandler={archiveBtnHandler}
        showArchive={showArchive}
      />
    </>
  );
};

export default App;
