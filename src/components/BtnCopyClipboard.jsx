import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaCopy, FaCheck } from "react-icons/fa";
import useCopiedCheckIcon from "../hooks/useCopiedCheckIcon";

const BtnCopyClipboard = ({ text }) => {
  const [showCheckIcon, onCopyHandler] = useCopiedCheckIcon(800);

  return (
    <CopyToClipboard text={text} onCopy={onCopyHandler}>
      {showCheckIcon ? <FaCheck /> : <FaCopy />}
    </CopyToClipboard>
  );
};

export default BtnCopyClipboard;
