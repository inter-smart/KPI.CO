import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import parse from "html-react-parser";
import { Heading } from "@/components/utils/typography";
import { Button } from "@/components/ui/button";
import type { CtaData } from "@/app/corporate-services-uae/page";

type CorporateServicesUaeCtaProps = {
  data: CtaData;
  variant?: "default" | "mainland" | "saifz";
};

export default function CorporateServicesUaeCta({
  data,
  variant = "default",
}: CorporateServicesUaeCtaProps) {
  return (
    <section
      className={cn(
        "w-full h-auto block",
        variant === "mainland"
          ? "py-[45px] lg:py-[65px_45px] xl:py-[80px_55px] 2xl:py-[100px_70px] 3xl:py-[125px_85px]"
          : "py-10 lg:py-13 2xl:py-17 3xl:py-22",
      )}
    >
      <div className="container">
        <div
          className={cn(
            "w-full lg:max-w-237.5 2xl:max-w-285 3xl:max-w-356.25 h-auto mx-auto rounded-[20px] lg:rounded-[17px] 2xl:rounded-[25px] relative z-0 flex flex-wrap items-center",
            variant === "mainland"
              ? "p-[50px_30px] sm:p-[35px] xl:p-[45px] 2xl:p-[55px] 3xl:p-[70px] bg-gradient-to-t from-[#053269] via-[#5596CA] to-[#3EB0EA]"
              : "p-[50px_30px] lg:p-[60px_45px] 2xl:p-[70px_50px] 3xl:p-[90px_70px] bg-linear-to-t from-[#6A9FE0] to-[#053269]",
            variant === "saifz" &&
              "p-[50px_30px] sm:p-[35px] xl:p-[45px] 2xl:p-[55px] 3xl:p-[70px] bg-gradient-to-b from-[#053269] via-[#5596CA]/50% to-[#3EB0EA]",
          )}
        >
          <div
            className={cn(
              "aspect-square max-md:mt-auto pointer-events-none absolute -z-1 inset-[0_0_0_auto]",
              variant === "mainland"
                ? "w-full md:w-[46%] h-full md:h-auto"
                : "w-[160px] md:w-[82%] h-[120px] md:h-auto",
            )}
          >
            <Image
              src={data?.images?.overlay || ""}
              alt="overlay"
              width={500}
              height={500}
              className="w-full h-full object-cover max-md:hidden block"
            />
            <Image
              src={data?.images?.overlayMobile || ""}
              alt="overlay"
              width={500}
              height={500}
              className={cn(
                "w-full h-full object-cover scale-[1.2] max-md:block hidden",
                variant === "mainland" && "translate-x-[-25px]",
              )}
            />
          </div>
          <div
            className={cn(
              "w-full max-lg:mb-3.75",
              variant === "mainland" ? "lg:w-[60%]" : "lg:w-[67%]",
            )}
          >
            <Heading
              as="h2"
              size="h2"
              className="max-sm:text-[20px] lg:text-[25px] xl:text-[32px] 2xl:text-[38px] 3xl:text-[48px] text-white mb-3.75 lg:mb-2.5"
            >
              {data?.title}
            </Heading>
            <div className="text-[14px] lg:text-[15px] 2xl:text-[18px] 3xl:text-[22px] [&_p]:leading-[1.6] max-sm:font-normal [&_p]:font-notmal text-white">
              {parse(data?.description)}
            </div>
          </div>
          <div
            className={cn(
              "w-full lg:w-[33%] flex lg:justify-end",
              variant === "mainland" ? "lg:w-[40%]" : "lg:w-[33%]",
            )}
          >
            <Button
              className={cn(
                "text-[13px] sm:text-[14px] lg:text-[16px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[26px] leading-none !font-medium text-black min-w-[150px] xl:min-w-[160px] 2xl:min-w-[190px] h-[40px] sm:h-[45px] 2xl:h-[50px] 3xl:h-[60px] bg-[#FFC916]",
                variant === "mainland" &&
                  "px-[20px] xl:px-[25px] 2xl:px-[30px] 3xl:px-[35px]",
              )}
              asChild
            >
              <Link href={data.button.link}>{data.button.label}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

// import Link from "next/link";
// import Image from "next/image";
// import { cn } from "@/lib/utils";
// import parse from "html-react-parser";
// import { Heading } from "@/components/utils/typography";
// import { Button } from "@/components/ui/button";
// import type { CtaData } from "@/app/corporate-services-uae/page";

// type CorporateServicesUaeCtaProps = {
//   data: CtaData;
//   variant?: "default" | "mainland";
// };

// export default function CorporateServicesUaeCta({
//   data,
//   variant = "default",
// }: CorporateServicesUaeCtaProps) {
//   return (
//     <section
//       className={cn(
//         "w-full h-auto block",
//         variant === "mainland"
//           ? "py-[45px] lg:py-[65px_45px] xl:py-[80px_55px] 2xl:py-[100px_70px] 3xl:py-[125px_85px]"
//           : "py-10 lg:py-13 2xl:py-17 3xl:py-22",
//       )}
//     >
//       <div className="container">
//         <div
//           className={cn(
//             "w-full lg:max-w-237.5 2xl:max-w-285 3xl:max-w-356.25 h-auto mx-auto rounded-[20px] lg:rounded-[17px] 2xl:rounded-[25px] relative z-0 flex flex-wrap items-center",
//             variant === "mainland"
//               ? "p-[50px_30px] sm:p-[35px] xl:p-[45px] 2xl:p-[55px] 3xl:p-[70px] bg-gradient-to-t from-[#053269] via-[#5596CA] to-[#3EB0EA]"
//               : "p-[50px_30px] lg:p-[60px_45px] 2xl:p-[70px_50px] 3xl:p-[90px_70px] bg-linear-to-t from-[#6A9FE0] to-[#053269]",
//           )}
//         >
//           <div
//             className={cn(
//               "aspect-square max-md:mt-auto pointer-events-none absolute -z-1 inset-[0_0_0_auto]",
//               variant === "mainland"
//                 ? "w-full md:w-[46%] h-full md:h-auto"
//                 : "w-[160px] md:w-[82%] h-[120px] md:h-auto",
//             )}
//           >
//             <Image
//               src={
//                 variant === "mainland"
//                   ? "/images/mainland-cta-overlay.png"
//                   : "/images/corporate-cta-overlay.svg"
//               }
//               alt="overlay"
//               width={500}
//               height={500}
//               className="w-full h-full object-cover max-md:hidden block"
//             />
//             <Image
//               src={
//                 variant === "mainland"
//                   ? "/images/mainland-cta-overlay-mobile.svg"
//                   : "/images/corporate-cta-overlay-mobile.svg"
//               }
//               alt="overlay"
//               width={500}
//               height={500}
//               className={cn(
//                 "w-full h-full object-cover scale-[1.2] max-md:block hidden",
//                 variant === "mainland" && "translate-x-[-25px]",
//               )}
//             />
//           </div>
//           <div
//             className={cn(
//               "w-full max-lg:mb-3.75",
//               variant === "mainland" ? "lg:w-[60%]" : "lg:w-[67%]",
//             )}
//           >
//             <Heading
//               as="h2"
//               size="h2"
//               className="max-sm:text-[20px] lg:text-[25px] xl:text-[32px] 2xl:text-[38px] 3xl:text-[48px] text-white mb-3.75 lg:mb-2.5"
//             >
//               {data?.title}
//             </Heading>
//             <div className="text-[14px] lg:text-[15px] 2xl:text-[18px] 3xl:text-[22px] [&_p]:leading-[1.6] max-sm:font-normal [&_p]:font-notmal text-white">
//               {parse(data?.description)}
//             </div>
//           </div>
//           <div
//             className={cn(
//               "w-full lg:w-[33%] flex lg:justify-end",
//               variant === "mainland" ? "lg:w-[40%]" : "lg:w-[33%]",
//             )}
//           >
//             <Button
//               className={cn(
//                 "text-[13px] sm:text-[14px] lg:text-[16px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[26px] leading-none !font-medium text-black min-w-[150px] xl:min-w-[160px] 2xl:min-w-[190px] h-[40px] sm:h-[45px] 2xl:h-[50px] 3xl:h-[60px] bg-[#FFC916]",
//                 variant === "mainland" &&
//                   "px-[20px] xl:px-[25px] 2xl:px-[30px] 3xl:px-[35px]",
//               )}
//               asChild
//             >
//               <Link href={data.button.link}>{data.button.label}</Link>
//             </Button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
