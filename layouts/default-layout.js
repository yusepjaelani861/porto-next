import Head from "next/head";
import DefaultHeader from "@/components/headers/default-header";
import DefaultFooter from "@/components/footers/default-footer";

export default function Defaultlayout({ children }) {
  return (
    <>
      <Head>
        <title>Yusep Jaelani</title>
        <meta name="description" content="Yusep Jaelani" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DefaultHeader />

      <main>{children}</main>

      <DefaultFooter />
    </>
  );
}
