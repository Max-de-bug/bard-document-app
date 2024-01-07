import Dashboard from "@/components/Dashboard";
import Description from "@/components/Description";
import Details from "@/components/Details";
import { FileContextProvider } from "@/components/context/FileContext";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import UploadArea from "@/components/UploadArea";
import UploadButton from "@/components/UploadButton";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <>
        <Description />
        <FileContextProvider>
          <UploadArea />
          <Dashboard />
        </FileContextProvider>
        {/* <div className="flex md:flex-col sm:flex-col lg:flex-row">
          <Details />
        </div> */}
      </>
    </MaxWidthWrapper>
  );
}
