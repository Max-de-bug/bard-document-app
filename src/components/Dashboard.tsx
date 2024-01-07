import { useContext } from "react";
import { FileContext } from "./context/FileContext";

// interface DashboardProps {
//   presignedURL: string | null;
// }

const Dashboard = () => {
  const fileContext = useContext(FileContext);
  const { presignedURL } = fileContext;
  return (
    <div className="flex w-full p-2">
      This is Dashboard
      <p>PresignedURL: {presignedURL}</p>
    </div>
  );
};

export default Dashboard;
