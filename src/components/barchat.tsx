import { useContext } from "react";
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";
import ThemeContext from "../provider/ThemeProvider";

type BarchatProps = {
  data: { [key: string]: string | number }[];
};

const Barchat = ({ data }: BarchatProps) => {
  const { selectedTheme } = useContext(ThemeContext);
  return (
    <>
      <div className="hidden lg:block w-auto">
        <BarChart width={500} height={250} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            color={selectedTheme?.theme === "dark" ? "white" : ""}
          />
          <YAxis tickCount={6} axisLine={false} tickLine={false} />
          <Tooltip />
          <Bar dataKey="numberOfRegistration" fill="#8884d8" />
        </BarChart>
      </div>
      <div className="block lg:hidden w-auto">
        <BarChart width={331} height={260} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            color={selectedTheme?.theme === "dark" ? "white" : ""}
          />
          <YAxis tickCount={6} axisLine={false} tickLine={false} />
          <Tooltip />
          <Bar dataKey="numberOfRegistration" fill="#8884d8" />
        </BarChart>
      </div>
    </>
  );
};

export default Barchat;
