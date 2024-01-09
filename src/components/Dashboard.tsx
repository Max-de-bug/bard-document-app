"use client";
import { useContext } from "react";
import { FileContext } from "./context/FileContext";

// interface DashboardProps {
//   presignedURL: string | null;
// }

const Dashboard = () => {
  const fileContext = useContext(FileContext);
  const { presignedURL } = fileContext;
  return (
    <div className="w-full  ml-5  p-2 border-2  border-solid border-slate-400">
      This is Dashboard
      <p>PresignedURL: {presignedURL}</p>
    </div>
  );
};

export default Dashboard;
