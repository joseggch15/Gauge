import React from "react";

interface Props {
  content: string;
}

const CardTooltip = ({ content }: Props) => {
  const [showContent, setShowContent] = React.useState(false);
  return (
    <div className="relative">
      <svg
        viewBox="0 0 32 32"
        width="16"
        height="16"
        fill="currentcolor"
        data-tooltip-target="tooltip-hover"
        onMouseOver={() => setShowContent(true)}
        onMouseOut={() => setShowContent(false)}
        className="text-gray-400 cursor-pointer transition duration-150 ease-in-out"
      >
        <path d="M16 0 A16 16 0 0 1 16 32 A16 16 0 0 1 16 0 M19 15 L13 15 L13 26 L19 26 z M16 6 A3 3 0 0 0 16 12 A3 3 0 0 0 16 6" />
      </svg>
      <div
        id="tooltip-hover"
        role="tooltip"
        className={`inline-block absolute left-2 w-56 ${
          showContent ? "visible opacity-100" : "invisible opacity-0"
        } z-10 mt-4 py-2 px-3 text-xs text-white font-medium bg-gray-900 rounded-lg shadow-sm -translate-x-1/2`}
      >
        {content}
        <div id="tooltip-arrow" className="absolute -top-1 inset-x-0 h-2 w-2 mx-auto bg-gray-900 rotate-45" />
      </div>
    </div>
  );
};

export default CardTooltip;
