// "use client";

// import { Heading } from "@/components/utils/typography";
// import parse from "html-react-parser";
// import { cn } from "@/lib/utils";
// import { RiskAdvisoryDta } from "@/app/risk-services-uae/page";

// type Variant = "default" | "difc" | "center" | "audit";

// /* ✅ EXTEND the original type (MAIN FIX) */
// type ExtendedRiskAdvisoryDta = RiskAdvisoryDta & {
//   structure_list?: {
//     id: number;
//     title: string;
//     description: string;
//   }[];
// };

// export type CriticalOrganizationProps = {
//   variant?: Variant | Variant[];
//   data: ExtendedRiskAdvisoryDta;
// };

// const hasVariant = (
//   variant: Variant | Variant[] | undefined,
//   target: Variant,
// ) => {
//   if (Array.isArray(variant)) return variant.includes(target);
//   return variant === target;
// };

// export default function CriticalOrganization({
//   data,
//   variant,
// }: CriticalOrganizationProps) {
//   const formatNo = (num: number) => String(num).padStart(2, "0");

//   const advisoryItems = (data?.advisoryItems ?? [])
//     .filter((item) => item?.description?.trim())
//     .filter((item, index, arr) =>
//       item?.id ? arr.findIndex((x) => x.id === item.id) === index : true,
//     );

//   return (
//     <section className="w-full bg-white py-[40px_30px] md:py-[40px_60px] 2xl:py-[80px_100px] 3xl:py-[100px_150px]">
//       <div className="container">
//         <div
//           className={cn(
//             "flex flex-col lg:flex-row gap-[20px] lg:gap-[40px] xl:gap-[60px] 2xl:gap-[80px] 3xl:gap-[80px]",
//             hasVariant(variant, "center") && "items-center",
//           )}
//         >
//           <div className="w-full lg:w-[49%] 2xl:w-[45%] 3xl:w-[51%]">
//             <Heading
//               as="h3"
//               size="h3"
//               className="lg:text-[27px] xl:text-[33px] 2xl:text-[40px] 3xl:text-[50px] font-semibold text-[#1C5396] !mb-[20px] xl:!mb-[25px] 2xl:!mb-[30px] 3xl:!mb-[35px]"
//             >
//               {parse(data?.title || "")}
//             </Heading>

//             <div className="text-[16px] lg:text-[12px] xl:text-[16px] 2xl:text-[19px] 3xl:text-[24px] text-[#4E4E4E] mb-[20px] max-md:[&_br]:hidden [&_p]:mb-3 xl:[&_p]:mb-5">
//               {parse(
//                 (data?.description || "").replace(
//                   /<\/p>\s*$/,
//                   ' <span class="text-[#5280CA] text-[18px] font-bold">→</span></p>',
//                 ),
//               )}
//             </div>

//             <div className="flex flex-row gap-3">
//               <div className="text-[16px] lg:text-[14px] xl:text-[16px] 2xl:text-[19px] 3xl:text-[24px] font-normal text-[#4E4E4E] mb-[20px]">
//                 {parse(data?.highlightsText || "")}
//               </div>
//             </div>
//           </div>

//           <div className="w-full lg:w-[51%] 2xl:w-[55%] 3xl:w-[49%]">
//             <div className="h-full flex items-center justify-center bg-[rgba(143,216,254,10%)] rounded-[20px] p-[30px_15px] md:p-[30px_20px] xl:p-[35px_20px] 2xl:p-[40px_20px] 3xl:p-[60px_30px]">
//               <div className="overflow-hidden">
//                 <div className="flex flex-wrap m-[-11px_-11px_-11px_-21px] md:m-[-11px_-11px_-11px_-31px] xl:m-[-11px_-11px_-21px_-41px] 3xl:m-[-11px_-11px_-31px_-41px]">
//                   {advisoryItems.map((item, index) => (
//                     <div
//                       key={`item-${item?.id ?? index}`}
//                       className={cn(
//                         "p-[10px_10px_10px_20px] md:p-[10px_10px_15px_30px] xl:p-[10px_20px_20px_40px] 3xl:p-[10px_20px_30px_40px]",
//                         hasVariant(variant, "difc")
//                           ? cn(
//                               "border-[#DEDEDE]",
//                               index === advisoryItems.length - 1
//                                 ? "w-full border-b-0 border-r-0"
//                                 : cn(
//                                     "w-1/2 border-b",
//                                     index % 2 === 0
//                                       ? "border-r"
//                                       : "border-r-0",
//                                   ),
//                             )
//                           : "w-1/2 border-b border-r border-[#DEDEDE]",
//                       )}
//                     >
//                       <div className="w-full text-[16px] md:text-[18px] xl:text-[23px] 2xl:text-[28px] 3xl:text-[34px] font-bold mb-[10px] text-[#5280CA]">
//                         {`${formatNo(item?.slNo ?? index + 1)}.`}
//                       </div>

//                       <div className="text-[14px] lg:text-[13px] xl:text-[14px] 2xl:text-[18px] 3xl:text-[21px] text-[#4E4E4E] max-md:[&_br]:hidden">
//                         {parse(item?.description || "")}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {data?.structure_list?.length > 0 && (
//           <div className="w-full h-auto xl:space-y-[15px] 2xl:space-y-[25px]">
//             {data.structure_list.map((item) => (
//               <div key={item.id} className="w-full h-auto">
//                 <div className="w-full h-full p-[20px_35px] sm:p-[25px] xl:p-[30px] 2xl:p-[35px_40px] 3xl:p-[40px_50px] rounded-[15px] sm:rounded-[10px] 3xl:rounded-[14px] overflow-hidden block relative z-0 before:content-[''] before:w-[15px] before:h-full before:bg-linear-to-t before:from-[#6A9FE0] before:to-[#053269] before:absolute before:-z-2 before:inset-0 after:content-[''] after:w-full after:h-full after:bg-[#F8F8F8] after:rounded-[13px] sm:after:rounded-[10px] after:absolute after:-z-1 after:inset-0 after:translate-x-[3px] after:3xl:translate-x-[5px]">
//                   <div
//                     className={cn(
//                       "leading-normal font-medium text-[#003268] mb-[30px] text-[24px] sm:text-[18px] xl:text-[21px] 2xl:text-[25px] 3xl:text-[32px]",
//                       variant === "difc" &&
//                         "text-[26px] sm:text-[28px] lg:text-[32px] xl:text-[33px] 2xl:text-[40px] 3xl:text-[50px] text-[#1C5396] font-semibold",
//                       variant === "audit" && "text-[#1C5396]",
//                     )}
//                   >
//                     {item?.title}
//                   </div>

//                   <div className="text-[14px] xl:text-[15px] 2xl:text-[18px] 3xl:text-[22px] leading-normal font-normal text-[#364153] [&_p]:mb-[20px] lg:[&_p]:mb-[30px] 3xl:[&_p]:mb-[40px]">
//                     {parse(item?.description || "")}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }