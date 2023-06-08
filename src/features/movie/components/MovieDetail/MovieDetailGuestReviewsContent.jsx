import moment from "moment";
import React, { useState } from "react";
import { checkCharsInString, truncateText } from "../../../../utils";
function MovieDetailGuestReviewsContent({ rev }) {
  const [toggleFullText, setToggleFullText] = useState(false);

  return (
    <div className="flex flex-col">
      <div className="mb-2 text-2xl font-semibold">
        {rev.author_details.username}
      </div>
      <div className="mb-3 text-sm">
        {moment(rev.updated_at).format("DD/MM/YYYY HH:mm")}
      </div>
      <div className="">
        {!toggleFullText && (
          <span>
            <span>{truncateText(rev.content, 400)}</span>
            {checkCharsInString(rev.content, 400) && (
              <span
                className="text-blue-500 font-semibold hover:cursor-pointer hover:text-blue-400"
                onClick={() => setToggleFullText(true)}
              >
                See more...
              </span>
            )}
          </span>
        )}
        {toggleFullText && <span>{rev.content}</span>}
      </div>
    </div>
  );
}

export default MovieDetailGuestReviewsContent;
