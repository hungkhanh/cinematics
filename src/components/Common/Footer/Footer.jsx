import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
function Footer() {
  return (
    <div className="text-[#ccc] px-[15rem] pt-[5rem] pb-[2rem] leading-[2.25rem]">
      <div className="flex gap-2 items-center mb-3">
        <FacebookIcon sx={{ fontSize: "2.5rem" }} />
        <InstagramIcon sx={{ fontSize: "2.5rem" }} />
        <TwitterIcon sx={{ fontSize: "2.5rem" }} />
        <YouTubeIcon sx={{ fontSize: "2.5rem" }} />
      </div>
      <div className="flex justify-between gap-20 ">
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
