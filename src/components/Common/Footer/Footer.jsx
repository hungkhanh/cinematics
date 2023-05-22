import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
function Footer() {
  return (
    <div
      className="sm:block text-[#ccc] 
    px-[2rem] sm:px-[3rem] lg:px-[7rem] xl:px-[10rem] pt-[2rem] lg:pt-[3rem] 
   pb-[1rem] sm:pb-[2rem]
     leading-[1.5rem] sm:leading-[1.9rem] lg:leading-[2.25rem]"
    >
      <div className="flex gap-2 items-center mb-3">
        <FacebookIcon sx={{ fontSize: "2.5rem" }} />
        <InstagramIcon sx={{ fontSize: "2.5rem" }} />
        <TwitterIcon sx={{ fontSize: "2.5rem" }} />
        <YouTubeIcon sx={{ fontSize: "2.5rem" }} />
      </div>
      <div
        className="flex justify-between gap-7 xl:gap-3 
      text-[0.78rem] sm:text-[0.9rem] md:text-[1.1rem]"
      >
        <div>
          <div>Audio and Subtities</div>
          <div>Press</div>
          <div>Privacy</div>
          <div>Contact Us</div>
          <button className="p-2 border border-[#ccc] my-2">
            Service Code
          </button>
          <div>1997 - 2021 Cinematics</div>
        </div>
        <div>
          <div>Descriptive Audio</div>
          <div>Relationship with investors</div>
          <div>Legal notices</div>
        </div>
        <div>
          <div>Help center</div>
          <div>Careers</div>
          <div>Cookies preferences</div>
        </div>
        <div>
          <div>Gift Cards</div>
          <div>Terms of use</div>
          <div>Corporate information</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
