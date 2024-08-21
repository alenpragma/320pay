import { toast } from "react-toastify";

export const copyToClipboard = (textToCopy: any) => {
  console.log(textToCopy);
  navigator.clipboard
    .writeText(textToCopy)
    .then(() => {
      toast("Text copied to clipboard");
    })
    .catch((err) => {
      console.error("Failed to copy text: ", err);
    });
};
