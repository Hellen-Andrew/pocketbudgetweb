import React from "react";

const Body = () => {
  return (
    <div className="p-6 pt-6 md:p-10 relative h-full overflow-x-hidden">
      {/* SECTION ONE */}
      <div className="mb-12 md:flex md:gap-8 md:flex-row-reverse items-center relative">
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 bg-custom-gradient z-0 clip-path-ellipse-vertical"></div>
        <div className="flex items-center justify-center mb-4 md:w-[70%] z-10 ">
          <img src={require("../assets/imgs/phone1.png")} alt="phone" />
        </div>
        <div className="z-10">
          <div className="text-[40px] mb-3 md:px-16 text-black">
            A Taste of financial freedom.
          </div>
          <div className="text-[20px] leading-7 text-black">
            We are a fintech that aims to create a society of people with
            financial freedom, equipped with financial literacy that can make
            their money grow. <br />
            We focus on providing money management tools for personal budgeting
            and a marketplace for services that create opportunities for
            talented and skilled people.
          </div>

          <div className="flex flex-col items-center gap-2 mt-5 md:gap-12 md:px-16">
            <div className="text-center">
              <div className="text-[29px] text-black leading-8 mb-3">
                Click your Platform to download the app
              </div>
            </div>
            <div className="flex flex-row items-center justify-center gap-4">
              <a
                href="https://play.google.com/store/apps/details?id=co.tz.pocket_app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={require("../assets/imgs/playstore.png")}
                  width="120px"
                  alt="playstore img"
                />
              </a>

              <a
                href="https://play.google.com/store/apps/details?id=co.tz.pocket_app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={require("../assets/imgs/apple.png")}
                  width="120px"
                  alt="appstore img"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION TWO */}
      <div className="text-[39px] text-black my-5 md:flex md:justify-center leading-10 relative">
        What you can do with pocket!
      </div>

      <div className="mb-12 md:flex md:gap-8 md:flex-row items-center md:justify-center relative">
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 bg-custom-gradient z-0 clip-path-ellipse-vertical"></div>
        <div className="flex items-center justify-center mb-4 z-10">
          <img src={require("../assets/imgs/phone2.png")} alt="phone" />
        </div>
        <div className="z-10">
          <div className="text-[29px] mb-3 leading-10">
            Control your spendings.
          </div>
          <div className="text-[20px]">
            Set the amount of money you should spend on yourself or on family
            and friends, <br />
            be comfortable and at ease when spending your money.
          </div>
        </div>
      </div>

      {/* SECTION THREE */}
      <div className="mb-12 md:flex md:gap-8 md:flex-row-reverse items-center md:justify-center relative">
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 bg-custom-gradient z-0 clip-path-ellipse-vertical"></div>
        <div className="flex items-center justify-center mb-4 z-10">
          <img src={require("../assets/imgs/phone3.png")} alt="phone" />
        </div>
        <div className="z-10">
          <div className="text-[29px] mb-3">Keep track of your debts.</div>
          <div className="text-[20px] leading-10">
            Never lose track of all your debtors and creditors. <br />
            Track the progress as you pay back your debts and as you get paid.
          </div>
        </div>
      </div>

      {/* SECTION FOUR */}
      <div className="mb-12 md:flex md:gap-8 md:flex-row items-center md:justify-center relative">
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 bg-custom-gradient z-0 clip-path-ellipse-vertical"></div>
        <div className="flex items-center justify-center mb-4 z-10">
          <img
            src={require("../assets/imgs/phone4.png")}
            width="300px"
            alt="phone"
          />
        </div>
        <div className="z-10">
          <div className="text-[29px] mb-3">
            Stay current with your cashflow.
          </div>
          <div className="text-[20px]">
            Keep your cashflow crystal clear, organize and track
            <br /> your transactions from anywhere.
          </div>
        </div>
      </div>

      {/* SECTION FIVE */}
      <div className="mb-20 md:flex md:gap-8 md:flex-row-reverse items-center md:justify-center relative">
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 bg-custom-gradient z-0 clip-path-ellipse-vertical"></div>
        <div className="flex items-center justify-center mb-4 z-10">
          <img src={require("../assets/imgs/phone6.png")} alt="phone" />
        </div>
        <div className="z-10">
          <div className="text-[29px] mb-3">
            Think and Grow Rich in our Market place.
          </div>
          <div className="text-[20px] leading-10">
            Pocket market is a place where twice a month you can buy
            non-perishable goods for your household at the wholesale price.{" "}
            <br />
            And If you have skills put them into good use with Mchongo, remember{" "}
            <br />
            "If you are good at something never do it for free"
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
