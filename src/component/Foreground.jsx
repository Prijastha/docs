import { useState } from "react";
import { useRef } from "react";
import Card from "./Card";

export default function Foreground() {
  const ref = useRef(null);
  const data = [
    {
      description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      filesize: ".10mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "blue" },
    },
    {
      description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      filesize: ".5mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Upload", tagColor: "green" },
    },
  ];
  useState();
  return (
    <div>
      <div
        ref={ref}
        className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flexwrap-wrap p-5"
      >
        {/* dynamic rendering */}
        {data.map((item, index) => (
          <Card key={index} data={item} reference={ref} />
        ))}
      </div>
    </div>
  );
}
