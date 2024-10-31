import dynamic from "next/dynamic";

export default function Home() {
  const DynamicPage = dynamic(() => import("./_components/DynamicMainPage"), {
    ssr: false,
  });
  return (
    <>
      <DynamicPage />
    </>
  );
}
