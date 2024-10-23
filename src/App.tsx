import { useReducer, useState } from "react";
import CollapsibleSidebar from "./components/sidebar";
import ThemeContext, {
  selectedTheme,
  selectedThemeReducer,
} from "./provider/ThemeProvider";
import CardList from "./components/card-list";
import { barchatData, cardData, tableData } from "./dummy-data";
import Barchat from "./components/barchat";
import Slider from "./components/slider";
import sliderImage1 from "./assets/images/slider-image-1.png";
import sliderImage2 from "./assets/images/slider-image-2.png";
import sliderImage3 from "./assets/images/slider-image-3.png";
import { SwiperSlide } from "swiper/react";
import BaseInput from "./components/base-input";
import searchIcon from "./assets/icons/search-icon.svg";
import caretDownIcon from "./assets/icons/caret-down-icon.svg";
import elipsis from "./assets/icons/dots-vertical.svg";
import downloadIcon from "./assets/icons/download-icon.svg";
import Table from "./components/table";
import { PaginationState } from "@tanstack/react-table";
import downloadIconWhite from "./assets/icons/download-icon-white.svg";
import caretDownIconWhite from "./assets/icons/caret-down-white.svg";
import elipsisWhite from "./assets/icons/elipsis-white.svg";

function App() {
  const [theme, themeDispatch] = useReducer(
    selectedThemeReducer,
    selectedTheme
  );
  const [pagination, _setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  console.log(theme, "theme");

  return (
    <ThemeContext.Provider
      value={{ selectedTheme: theme, selectedThemeDispatch: themeDispatch }}
    >
      <main className="flex dark:bg-bgBlackSecondary bg-white">
        <CollapsibleSidebar />
        <div className="mx-auto w-[95%] lg:mx-0 lg:w-[78%]">
          <section className="ml-[20px] lg:ml-[28px] mt-[40px]">
            <h2 className="text-[22px] dark:text-white">
              Welcome! here's your summary
            </h2>
            <div>
              <CardList cardData={cardData} />
            </div>
          </section>

          <section className="ml-[0px] lg:ml-[28px] mt-[24px]">
            <h3 className="pl-[20px] font-[500] text-[18px] dark:text-white">
              Event Registrations per month
            </h3>
            <div className=" mt-[14px] block lg:flex justify-between">
              <div className="ml-[20px] dark:border-none dark:bg-bgBlackPrimary border border-[#F2F2F7] rounded-[5px] px-0 lg:px-[30px] pt-[30px] w-[92%] lg:w-auto">
                <Barchat data={barchatData} />
              </div>
              <div className="w-full lg:w-[47%] relative mt-[16px] lg:mt-0">
                <Slider>
                  <SwiperSlide>
                    <img
                      src={sliderImage1}
                      alt=""
                      className="rounded-[10px] max-w-auto"
                    />
                    <div className="absolute top-[52%] lg:top-[67%] pl-[34px] lg:pl-[16px] w-[371px] lg:w-[523px] text-[12px] font-[600] text-white">
                      <p>Latest News & Updates</p>
                      <p className=" text-[12px] font-[400] pr-[28px] pt-[8px] ">
                        Turpis interdum nunc varius ornare dignissim pretium.
                        Massa ornare quis aliquet sed vitae. Sed velit nisi,
                        fermentum erat. Fringilla purus, erat fringilla
                        tincidunt quisque non. Pellentesque in ut tellus.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={sliderImage2} alt="" className="rounded-[10px]" />
                    <div className="absolute top-[67%] pl-[16px] w-[523px] text-[12px] font-[600] text-white">
                      <p>Latest News & Updates</p>
                      <p className=" text-[12px] font-[400] pr-[28px] pt-[8px]">
                        Turpis interdum nunc varius ornare dignissim pretium.
                        Massa ornare quis aliquet sed vitae. Sed velit nisi,
                        fermentum erat. Fringilla purus, erat fringilla
                        tincidunt quisque non. Pellentesque in ut tellus.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={sliderImage3} alt="" className="rounded-[10px]" />
                    <div className="absolute top-[67%] w-[523px] pl-[16px]  ">
                      <p className="text-[12px] font-[600] text-white">
                        Latest News & Updates
                      </p>
                      <p className="text-[12px] font-[400] text-white pr-[28px] pt-[8px]">
                        Turpis interdum nunc varius ornare dignissim pretium.
                        Massa ornare quis aliquet sed vitae. Sed velit nisi,
                        fermentum erat. Fringilla purus, erat fringilla
                        tincidunt quisque non. Pellentesque in ut tellus.
                      </p>
                    </div>
                  </SwiperSlide>
                </Slider>
              </div>
            </div>
          </section>

          <section className="ml-[28px] mt-[24px]">
            <h3 className="font-[500] text-[18px] dark:text-white">
              Events History
            </h3>
            <div className="block lg:flex justify-between">
              <div className="block lg:flex gap-2 w-[70%] items-center">
                <BaseInput customStyle="dark:border-none dark:bg-bgBlackPrimary dark:text-white p-[8px] w-[200px] h-[36px] gap-2">
                  <img src={searchIcon} alt="" />
                  <input
                    type="search"
                    className="outline-none dark:bg-bgBlackPrimary w-full"
                    placeholder="Search..."
                  />
                </BaseInput>
                <BaseInput customStyle="dark:border-none dark:bg-bgBlackPrimary dark:text-white p-[8px] w-[90px] h-[36px] items-center justify-between">
                  <p className="text-[14px]">Date</p>
                  {theme?.theme === "dark" ? (
                    <img
                      src={caretDownIconWhite}
                      className="w-[15px] h-[7px]"
                      alt=""
                    />
                  ) : (
                    <img
                      src={caretDownIcon}
                      className="w-[15px] h-[7px]"
                      alt=""
                    />
                  )}
                </BaseInput>
                <BaseInput customStyle="dark:border-none dark:bg-bgBlackPrimary dark:text-white p-[8px] w-[90px] h-[36px] items-center justify-between">
                  <p className="text-[14px]">Status</p>
                  {theme?.theme === "dark" ? (
                    <img
                      src={caretDownIconWhite}
                      className="w-[15px] h-[7px]"
                      alt=""
                    />
                  ) : (
                    <img
                      src={caretDownIcon}
                      className="w-[15px] h-[7px]"
                      alt=""
                    />
                  )}
                </BaseInput>
                <BaseInput customStyle="dark:border-none dark:bg-bgBlackPrimary dark:text-white p-[8px] w-[90px] h-[36px] items-center justify-between">
                  <p className="text-[14px]">Name</p>
                  {theme?.theme === "dark" ? (
                    <img
                      src={caretDownIconWhite}
                      className="w-[15px] h-[7px]"
                      alt=""
                    />
                  ) : (
                    <img
                      src={caretDownIcon}
                      className="w-[15px] h-[7px]"
                      alt=""
                    />
                  )}
                </BaseInput>
                <p className="dark:text-white text-[14px] font-bold">
                  Displaying 100 results
                </p>
              </div>
              <div className="w-[30%] flex justify-between items-center">
                <p className="dark:text-white text-[14px]">Sort:</p>
                <BaseInput customStyle="dark:border-none dark:bg-bgBlackPrimary dark:text-white p-[5px] w-[139px] h-[36px] items-center justify-between">
                  <p className="text-[14px]">Most Recent</p>
                  {theme?.theme === "dark" ? (
                    <img
                      src={caretDownIconWhite}
                      className="w-[15px] h-[7px]"
                      alt=""
                    />
                  ) : (
                    <img
                      src={caretDownIcon}
                      className="w-[15px] h-[7px]"
                      alt=""
                    />
                  )}
                </BaseInput>
                <div className="dark:border-none dark:bg-bgBlackPrimary dark:text-white w-[36px] h-[36px] rounded-[5px] border border-[#E2E8F0] flex items-center justify-center">
                  {theme?.theme === "dark" ? (
                    <img src={elipsisWhite} alt="" />
                  ) : (
                    <img src={elipsis} alt="" />
                  )}
                </div>
                <div className="dark:border-none dark:bg-bgBlackPrimary dark:text-white w-[100px] h-[36px] rounded-[5px] border border-[#E2E8F0] flex items-center justify-center gap-[5px]">
                  {theme?.theme === "dark" ? (
                    <img src={downloadIconWhite} alt="" />
                  ) : (
                    <img src={downloadIcon} alt="" />
                  )}
                  <p className="text-[14px]">Export</p>
                </div>
              </div>
            </div>
            <div className="mt-[16px]">
              {tableData?.length ? (
                <Table
                  data={tableData}
                  currentPage={pagination.pageSize}
                  pagination={pagination}
                />
              ) : null}
            </div>
          </section>
        </div>
      </main>
    </ThemeContext.Provider>
  );
}

export default App;
