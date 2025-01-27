import Chart from "@/components/Charts/page";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React from "react";

export const metadata = {
  title: "Chart",
  description:
    "Chart page",
};

const BasicChartPage = () => {
  return (
    <DefaultLayout>
      <Chart />
    </DefaultLayout>
  );
};

export default BasicChartPage;
