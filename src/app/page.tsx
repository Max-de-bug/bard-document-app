import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import UploadArea from "@/components/UploadArea";
import UploadButton from "@/components/UploadButton";

export default function Home() {
  return (
    <MaxWidthWrapper className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center">
      <UploadArea />
      <UploadButton />
    </MaxWidthWrapper>
  );
}
