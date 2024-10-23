import { ChangeEvent, useContext, useEffect, useState } from "react";
import { useTheme } from "../hooks/theme";
import ThemeContext from "../provider/ThemeProvider";
import ToggleSwitch from "./toggle-switch";

type ToggleThemeProps = {
  darkThemeTextColor?: string;
  lightThemeTextColor?: string;
};
const ToggleTheme = ({
  darkThemeTextColor,
  lightThemeTextColor,
}: ToggleThemeProps) => {
  const { selectedTheme, selectedThemeDispatch } = useContext(ThemeContext);
  const [isChecked, setIsChecked] = useState(false);
  useTheme();
  useEffect(() => {
    if (selectedTheme.theme) {
      let val = selectedTheme.theme === "light" ? false : true;
      setIsChecked(val);
    }
    console.log(selectedTheme, "selected theme");
  }, [selectedTheme]);

  const switchBetweenThemes = (checked: boolean) => {
    if (checked) {
      selectedThemeDispatch({ type: "SET_DARK_MODE", payload: "dark" });
      setIsChecked(true);
    } else {
      selectedThemeDispatch({ type: "SET_LIGHT_MODE", payload: "light" });
      setIsChecked(false);
    }
  };
  return (
    <div className="flex ml-4">
      <ToggleSwitch
        className=""
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          switchBetweenThemes(event.target.checked);
        }}
        checked={isChecked}
        width={24}
        height={16}
        sliderWidth={12}
        sliderHeight={12}
        translate={6}
      />
      <span className="w-[100px]">
        <p
          className={`${
            selectedTheme.theme === "light"
              ? lightThemeTextColor || "text-white"
              : darkThemeTextColor || "text-white"
          } pl-[5px] text-sm`}
        >
          {selectedTheme.theme === "light" ? "Light mode" : "Dark mode"}
        </p>
      </span>
    </div>
  );
};

export default ToggleTheme;
