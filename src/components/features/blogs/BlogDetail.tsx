"use client";

import { Heading, Text } from "@/components/utils/typography";
import parse from "html-react-parser";

type BlogDetailProps = {
  data: {
    sidebar_title?: string;
    title?: string;
    description?: string;
    date?: string;
    item?: {
      id: number | string;
      text: string;
    }[];
  };
};

export default function BlogDetail({ data }: BlogDetailProps) {
  return (
    <section className="w-full pt-[40px] xl:pt-[90px] bg-white">
      <div className="container">
        <div className="flex gap-[40px]">
          <div className="w-3/12 sticky top-[120px] self-start h-max">
            <Heading
              as="h5"
              size="h5"
              className="font-normal text-[#1C5396] mb-6"
            >
              {data.sidebar_title}
            </Heading>

            <ul>
              {data?.item?.map((item) => (
                <li key={item.id}>
                  <a href="#!" className="block border-l-[3px] p-[10px]">
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-9/12">
            <div className="typography [&_h1,&_h2,&_h3,&_h4,&_h5,&_h6]:text-[#1C5396] [&_h1,&_h2,&_h3,&_h4,&_h5,&_h6]:font-semibold [&_img]:w-full [&_img]:h-auto">
              {data?.description &&
                parse(data.description, {
                  replace: (node: any) => {
                    if (node.name === "img") {
                      return (
                        <span className="image-overlay">
                          <img {...node.attribs} />
                        </span>
                      );
                    }
                  },
                })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
