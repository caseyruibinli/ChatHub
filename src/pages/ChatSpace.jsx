import React from "react";
import CBox from "../elements/CBox";
import SendMsg from "../elements/SendMsg";

const ChatSpace = () => {
  return (
    <div>
      <div data-testid="cbox">
        <CBox />
      </div>
      <div data-testid="send-msg">
        <SendMsg />
      </div>
    </div>
  );
};

export default ChatSpace;
