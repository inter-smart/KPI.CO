"use client";

import Link from "next/link";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
});
const FOOTER_MAINLINKS =
  "text-[20px] xl:text-[22px] 3xl:text-[26px] text-white font-semibold mb-[20px] 3xl:mb-[25px] max-md:border-b max-md:border-[rgba(255,255,255,0.2)]";
const FOOTER_LINK_STYLES =
  "text-[16px] md:text-[11px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[21px] text-white/80 font-normal hover:text-white transition-colors";
const SOCIAL_LINKS =
  "w-[32px] md:w-[24px] xl:w-[28px] h-[32px] md:h-[24px] xl:h-[28px] 2xl:w-[36px] 2xl:h-[36px] 3xl:w-[42px] 3xl:h-[42px] flex items-center hover:scale-110 transition-transform";

export default function Footer() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Handle form submission
    console.log("Form submitted:", values);
  }

  return (
    <footer id="contact" className="bg-[#053269]">
      <div className="container">
        <div className="pt-[40px] pb-[40px] xl:pb-[50px] 2xl:pb-[70px] 3xl:pb-[100px]">
          <div className="flex flex-wrap items-center lg:border-b lg:border-white/20 lg:pb-[30px] xl:pb-[50px] -m-[10px] mb-[30px] 3xl:mb-[40px]">
            <div className="w-full lg:w-3/12 mb-8 lg:mb-0 p-[10px]">
              <Link
                href="/"
                className="flex items-center w-full h-[70px] max-w-[180px] 2xl:max-w-[190px] 3xl:max-w-[240px]"
                aria-label="kpi_logo"
              >
                <Image
                  src="/images/KPI-logo-white.png"
                  width="240"
                  height="70"
                  className="w-full h-full object-contain"
                  alt="kpi_logo"
                />
              </Link>
            </div>
            <div className="w-full lg:w-5/12 mb-8 lg:mb-0 p-[10px] ">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="relative group lg:max-w-[90%] ml-auto "
                >
                  <div className="bg-white rounded-[5px] xl:rounded-[10px] 3xl:rounded-[13px] p-[5_10px] overflow-hidden flex items-center w-full h-[36px] lg:h-[30px] xl:h-[40px] 2xl:h-[42px] 3xl:h-[55px]  focus-within:ring-1 focus-within:ring-white/20 transition-all">
                    <div className="flex-1 overflow-hidden">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem className="space-y-0">
                            <FormControl>
                              <Input
                                placeholder="Subscribe for the Latest Insights"
                                className=" text-[16px] xl:text-[16px] 3xl:text-[21px] text-[rgba(33,33,33,0.6)] font-normal px-[5px] w-full h-full border-0 focus-visible:ring-0 focus-visible:ring-offset-0 !bg-transparent  shadow-none 
                                placeholder:text-[16px] xl:placeholder:text-[16px] 2xl:placeholder:text-[19px] 3xl:placeholder:text-[21px] placeholder:text-[#212121]/60"
                                {...field}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>
                    <Button
                      type="submit"
                      variant="ghost"
                      className="!w-[34px] 2xxl:!w-[34px] 3xxl:!w-[42px] h-full  rounded-[8px] bg-gradient-to-b from-[#6A9FE0] to-[#053269] !h-full flex items-center justify-center !p-0 cursor-pointer  hover:opacity-90 transition-all active:scale-95"
                    >
                      <svg
                        width="23"
                        height="19"
                        viewBox="0 0 23 19"
                        fill="none"
                      >
                        <path
                          d="M1.11119 9.43131L19.9983 9.17188"
                          stroke="white"
                          strokeWidth="2.22222"
                          strokeLinecap="round"
                        />
                        <path
                          d="M12.8395 1.11109L21.1099 9.15732L13.0959 17.3945"
                          stroke="white"
                          strokeWidth="2.22222"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Button>
                  </div>
                  <div className="absolute left-0 -bottom-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={() => (
                        <FormMessage className="text-red-500 text-xs font-medium" />
                      )}
                    />
                  </div>
                </form>
              </Form>
            </div>
            <div className="w-full lg:w-4/12  lg:p-[10px]">
              <ul className="flex items-center justify-baseline lg:justify-end w-full lg:w-fit -m-[10px] 2xl:-m-[15px] 3xl:-m-[20px] !ml-auto ">
                <li className="p-[10px] 2xl:p-[15px] 3xl:p-[20px]">
                  <Link
                    href="/"
                    className={SOCIAL_LINKS}
                    aria-label="linked_in"
                  >
                    <div className="w-full h-full flex">
                      <svg
                        width="43"
                        height="43"
                        viewBox="0 0 43 43"
                        fill="none"
                        className="w-full h-full object-contain"
                      >
                        <g clipPath="url(#clip0_2022_922)">
                          <path
                            d="M39.5083 0H3.15C1.40833 0 0 1.375 0 3.075V39.5833C0 41.2833 1.40833 42.6667 3.15 42.6667H39.5083C41.25 42.6667 42.6667 41.2833 42.6667 39.5917V3.075C42.6667 1.375 41.25 0 39.5083 0ZM12.6583 36.3583H6.325V15.9917H12.6583V36.3583ZM9.49167 13.2167C7.45833 13.2167 5.81667 11.575 5.81667 9.55C5.81667 7.525 7.45833 5.88333 9.49167 5.88333C11.5167 5.88333 13.1583 7.525 13.1583 9.55C13.1583 11.5667 11.5167 13.2167 9.49167 13.2167ZM36.3583 36.3583H30.0333V26.4583C30.0333 24.1 29.9917 21.0583 26.7417 21.0583C23.45 21.0583 22.95 23.6333 22.95 26.2917V36.3583H16.6333V15.9917H22.7V18.775H22.7833C23.625 17.175 25.6917 15.4833 28.7667 15.4833C35.175 15.4833 36.3583 19.7 36.3583 25.1833V36.3583Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_2022_922">
                            <rect
                              width="42.6667"
                              height="42.6667"
                              fill="white"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </Link>
                </li>
                <li className="p-[10px] 2xl:p-[15px] 3xl:p-[20px]">
                  <Link href="/" className={SOCIAL_LINKS} aria-label="twitter">
                    <div className="w-full h-full flex">
                      <svg
                        viewBox="0 0 40 36"
                        fill="none"
                        className="w-full h-full object-contain"
                      >
                        <path
                          d="M30.8023 0H36.7996L23.6973 14.9751L39.1111 35.3528H27.0422L17.5894 22.9938L6.77324 35.3528H0.772323L14.7866 19.3353L0 0H12.3753L20.9198 11.2966L30.8023 0ZM28.6974 31.7632H32.0206L10.5696 3.40112H7.00349L28.6974 31.7632Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </Link>
                </li>
                <li className="p-[10px] 2xl:p-[15px] 3xl:p-[20px]">
                  <Link
                    href="/"
                    className={SOCIAL_LINKS}
                    aria-label="instagram"
                  >
                    <div className="w-full h-full flex">
                      <svg
                        viewBox="0 0 43 43"
                        fill="none"
                        className="w-full h-full object-contain"
                      >
                        <g clipPath="url(#clip0_2022_926)">
                          <path
                            d="M21.3333 3.84167C27.0333 3.84167 27.7083 3.86667 29.95 3.96667C32.0333 4.05833 33.1583 4.40833 33.9083 4.7C34.9 5.08333 35.6167 5.55 36.3583 6.29167C37.1083 7.04167 37.5667 7.75 37.95 8.74167C38.2417 9.49167 38.5917 10.625 38.6833 12.7C38.7833 14.95 38.8083 15.625 38.8083 21.3167C38.8083 27.0167 38.7833 27.6917 38.6833 29.9333C38.5917 32.0167 38.2417 33.1417 37.95 33.8917C37.5667 34.8833 37.1 35.6 36.3583 36.3417C35.6083 37.0917 34.9 37.55 33.9083 37.9333C33.1583 38.225 32.025 38.575 29.95 38.6667C27.7 38.7667 27.025 38.7917 21.3333 38.7917C15.6333 38.7917 14.9583 38.7667 12.7167 38.6667C10.6333 38.575 9.50833 38.225 8.75833 37.9333C7.76667 37.55 7.05 37.0833 6.30833 36.3417C5.55833 35.5917 5.1 34.8833 4.71667 33.8917C4.425 33.1417 4.075 32.0083 3.98333 29.9333C3.88333 27.6833 3.85833 27.0083 3.85833 21.3167C3.85833 15.6167 3.88333 14.9417 3.98333 12.7C4.075 10.6167 4.425 9.49167 4.71667 8.74167C5.1 7.75 5.56667 7.03333 6.30833 6.29167C7.05833 5.54167 7.76667 5.08333 8.75833 4.7C9.50833 4.40833 10.6417 4.05833 12.7167 3.96667C14.9583 3.86667 15.6333 3.84167 21.3333 3.84167ZM21.3333 0C15.5417 0 14.8167 0.025 12.5417 0.125C10.275 0.225 8.71667 0.591667 7.36667 1.11667C5.95833 1.66667 4.76667 2.39167 3.58333 3.58333C2.39167 4.76667 1.66667 5.95833 1.11667 7.35833C0.591667 8.71667 0.225 10.2667 0.125 12.5333C0.025 14.8167 0 15.5417 0 21.3333C0 27.125 0.025 27.85 0.125 30.125C0.225 32.3917 0.591667 33.95 1.11667 35.3C1.66667 36.7083 2.39167 37.9 3.58333 39.0833C4.76667 40.2667 5.95833 41 7.35833 41.5417C8.71667 42.0667 10.2667 42.4333 12.5333 42.5333C14.8083 42.6333 15.5333 42.6583 21.325 42.6583C27.1167 42.6583 27.8417 42.6333 30.1167 42.5333C32.3833 42.4333 33.9417 42.0667 35.2917 41.5417C36.6917 41 37.8833 40.2667 39.0667 39.0833C40.25 37.9 40.9833 36.7083 41.525 35.3083C42.05 33.95 42.4167 32.4 42.5167 30.1333C42.6167 27.8583 42.6417 27.1333 42.6417 21.3417C42.6417 15.55 42.6167 14.825 42.5167 12.55C42.4167 10.2833 42.05 8.725 41.525 7.375C41 5.95833 40.275 4.76667 39.0833 3.58333C37.9 2.4 36.7083 1.66667 35.3083 1.125C33.95 0.6 32.4 0.233333 30.1333 0.133333C27.85 0.025 27.125 0 21.3333 0Z"
                            fill="white"
                          />
                          <path
                            d="M21.3333 10.375C15.2833 10.375 10.375 15.2833 10.375 21.3333C10.375 27.3833 15.2833 32.2917 21.3333 32.2917C27.3833 32.2917 32.2917 27.3833 32.2917 21.3333C32.2917 15.2833 27.3833 10.375 21.3333 10.375ZM21.3333 28.4417C17.4083 28.4417 14.225 25.2583 14.225 21.3333C14.225 17.4083 17.4083 14.225 21.3333 14.225C25.2583 14.225 28.4417 17.4083 28.4417 21.3333C28.4417 25.2583 25.2583 28.4417 21.3333 28.4417Z"
                            fill="white"
                          />
                          <path
                            d="M35.2832 9.94164C35.2832 11.3583 34.1332 12.5 32.7248 12.5C31.3082 12.5 30.1665 11.35 30.1665 9.94164C30.1665 8.52497 31.3165 7.3833 32.7248 7.3833C34.1332 7.3833 35.2832 8.5333 35.2832 9.94164Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_2022_926">
                            <rect
                              width="42.6667"
                              height="42.6667"
                              fill="white"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </Link>
                </li>
                <li className="p-[10px] 2xl:p-[15px] 3xl:p-[20px]">
                  <Link href="/" className={SOCIAL_LINKS} aria-label="facebook">
                    <div className="w-full h-full flex">
                      <svg
                        viewBox="0 0 43 43"
                        fill="none"
                        className="w-full h-full object-contain"
                      >
                        <g clipPath="url(#clip0_2022_930)">
                          <path
                            d="M40.32 0H2.34667C1.72429 0 1.12741 0.247238 0.687323 0.687323C0.247238 1.12741 0 1.72429 0 2.34667V40.32C0 40.9424 0.247238 41.5393 0.687323 41.9793C1.12741 42.4194 1.72429 42.6667 2.34667 42.6667H22.784V26.1333H17.2373V19.7333H22.784V14.9333C22.6691 13.8064 22.8021 12.668 23.1738 11.5979C23.5454 10.5279 24.1467 9.5521 24.9354 8.73901C25.7241 7.92592 26.6811 7.29523 27.7394 6.89117C28.7976 6.48711 29.9314 6.31947 31.0613 6.4C32.7218 6.38854 34.3815 6.47401 36.032 6.656V12.416H32.64C29.952 12.416 29.44 13.696 29.44 15.552V19.6693H35.84L35.008 26.0693H29.44V42.6667H40.32C40.6282 42.6667 40.9333 42.606 41.218 42.488C41.5027 42.3701 41.7614 42.1973 41.9793 41.9793C42.1973 41.7614 42.3701 41.5027 42.488 41.218C42.606 40.9333 42.6667 40.6282 42.6667 40.32V2.34667C42.6667 2.0385 42.606 1.73335 42.488 1.44864C42.3701 1.16393 42.1973 0.905231 41.9793 0.687323C41.7614 0.469415 41.5027 0.296561 41.218 0.17863C40.9333 0.0606985 40.6282 0 40.32 0Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_2022_930">
                            <rect
                              width="42.6667"
                              height="42.6667"
                              fill="white"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </Link>
                </li>
                <li className="p-[10px] 2xl:p-[15px] 3xl:p-[20px]">
                  <Link
                    href="/"
                    className={`${SOCIAL_LINKS} !w-[42px] md:!w-[28px] xl:!w-[38px] 2xl:!w-[45px] 3xl:!h-[45px] 3xl:!w-[60px]`}
                    aria-label="youtube"
                  >
                    <div className="w-full h-full">
                      <svg
                        viewBox="0 0 40 29"
                        fill="none"
                        className="w-full h-full object-cover"
                      >
                        <path
                          d="M38.2946 4.38726C37.83 2.6708 36.5439 1.3246 34.8873 0.848728C31.8369 4.05915e-05 19.5742 4.07798e-05 19.5742 4.07798e-05C19.5742 4.07798e-05 7.33481 -0.0203178 4.25264 0.848728C2.60458 1.32588 1.3123 2.6708 0.852601 4.38726C0.274313 7.64078 -0.0129974 10.9337 0.000451128 14.242C-0.00566186 17.5286 0.280426 20.8164 0.852601 24.0496C1.3123 25.7661 2.60458 27.1122 4.25264 27.5958C7.30302 28.4444 19.5742 28.4444 19.5742 28.4444C19.5742 28.4444 31.8063 28.4444 34.8873 27.5958C36.5439 27.1122 37.83 25.7673 38.2946 24.0496C38.8558 20.8164 39.1297 17.5286 39.1101 14.242C39.1297 10.9337 38.8619 7.64078 38.2946 4.38726ZM15.657 20.3329V8.12429L25.8645 14.242L15.657 20.3329Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Desktop Links View */}
          <div className="hidden lg:flex flex-wrap -m-[10px] lg:-m-[20px]">
            {/* Audit & Assurance */}
            <div className="w-4/12 p-[10px] lg:p-[20px] ">
              <div className={FOOTER_MAINLINKS}>Audit & Assurance</div>
              <ul className="space-y-[12px] xl:space-y-[15px]">
                <li>
                  <Link
                    href="/financial-statement-audit-uae"
                    className={FOOTER_LINK_STYLES}
                  >
                    Financial Statement Audit
                  </Link>
                </li>
                <li>
                  <Link
                    href="/agreed-upon-procedures-uae"
                    className={FOOTER_LINK_STYLES}
                  >
                    Agreed Upon Procedures
                  </Link>
                </li>
                <li>
                  <Link
                    href="/adgm-regulated-audit"
                    className={FOOTER_LINK_STYLES}
                  >
                    ADGM Regulated Audit
                  </Link>
                </li>
                <li>
                  <Link
                    href="/difc-dfsa-regulated-audit"
                    className={FOOTER_LINK_STYLES}
                  >
                    DIFC & DFSA Regulated Audit
                  </Link>
                </li>
              </ul>
            </div>

            {/* Advisory Services */}
            <div className="w-4/12 p-[10px] lg:p-[20px] lg:pl-[55px] 3xl:pl-[75px] ">
              <div className={FOOTER_MAINLINKS}>Advisory Services</div>
              <ul className="space-y-[12px] xl:space-y-[15px]">
                <li>
                  <Link
                    href="/corporate-services-uae"
                    className={FOOTER_LINK_STYLES}
                  >
                    Corporate Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/corporate-services-uae"
                    className={FOOTER_LINK_STYLES}
                  >
                    Tax Advisory
                  </Link>
                </li>
                <li>
                  <Link
                    href="/corporate-services-uae"
                    className={FOOTER_LINK_STYLES}
                  >
                    e-Invoicing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/corporate-services-uae"
                    className={FOOTER_LINK_STYLES}
                  >
                    Digital Transformation
                  </Link>
                </li>
              </ul>
            </div>

            {/* Risk & Compliance */}
            <div className="w-4/12 p-[10px] lg:p-[20px] lg:pl-[70px] 2xl:pl-[90px] 3xl:pl-[115px]">
              <div className={FOOTER_MAINLINKS}>Risk & Compliance</div>
              <ul className="space-y-[12px] xl:space-y-[15px]">
                <li>
                  <Link href="/risk-overview" className={FOOTER_LINK_STYLES}>
                    Enterprise Risk Management
                  </Link>
                </li>
                <li>
                  <Link href="/risk-overview" className={FOOTER_LINK_STYLES}>
                    Internal Audit Services
                  </Link>
                </li>
                <li>
                  <Link href="/risk-overview" className={FOOTER_LINK_STYLES}>
                    Standard Operating Procedures
                  </Link>
                </li>
                <li>
                  <Link href="/risk-overview" className={FOOTER_LINK_STYLES}>
                    Regulatory & Compliance Advisory
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div className="w-4/12 p-[10px] lg:p-[20px] ">
              <div className={FOOTER_MAINLINKS}>Resources</div>
              <ul className="space-y-[12px] xl:space-y-[15px]">
                <li>
                  <Link href="/blog" className={FOOTER_LINK_STYLES}>
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link href="/glossary" className={FOOTER_LINK_STYLES}>
                    Glossary
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className={FOOTER_LINK_STYLES}>
                    Newsroom
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className="w-4/12 p-[10px] lg:p-[20px] lg:pl-[55px] 3xl:pl-[75px] ">
              <div className={FOOTER_MAINLINKS}>Company</div>
              <ul className="space-y-[12px] xl:space-y-[15px]">
                <li>
                  <Link href="/#about" className={FOOTER_LINK_STYLES}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/#clients" className={FOOTER_LINK_STYLES}>
                    Our Clients
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className={FOOTER_LINK_STYLES}>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            {/* Contact Us */}
            <div className="lg:w-4/12 p-[10px] lg:p-[20px]  lg:pl-[70px] 2xl:pl-[90px] 3xl:pl-[115px]">
              <div className={FOOTER_MAINLINKS}>Contact Us</div>
              <ul className="space-y-[10px] 3xl:space-y-[15px]">
                <li className="flex items-center gap-3">
                  <div className="w-[23px] 2xl:w-[26px] 3xl:w-[35px] h-[23px] 2xl:h-[26px] 3xl:h-[35px]  rounded-[5px] bg-white/10 flex items-center justify-center p-[6.5px] 3xl:p-[10px]">
                    <svg viewBox="0 0 13 13" fill="none">
                      <path
                        d="M10.6689 6.69797C10.5344 6.69797 10.3939 6.65519 10.2594 6.62464C9.98718 6.56464 9.71962 6.48499 9.45888 6.38631C9.17538 6.28317 8.86375 6.28852 8.58396 6.40134C8.30417 6.51416 8.07599 6.72647 7.94332 6.99742L7.80888 7.27242C7.21366 6.9413 6.6667 6.53006 6.18332 6.05019C5.70346 5.56682 5.29222 5.01986 4.9611 4.42464L5.21777 4.25353C5.48871 4.12087 5.70102 3.89268 5.81384 3.61289C5.92666 3.3331 5.93202 3.02147 5.82888 2.73797C5.73185 2.47667 5.65223 2.20924 5.59055 1.93742C5.55999 1.80297 5.53555 1.66242 5.51721 1.52186C5.443 1.09141 5.21754 0.701592 4.88143 0.422618C4.54531 0.143644 4.12064 -0.00615624 3.68388 0.000193907H1.85055C1.58718 -0.00227898 1.32637 0.0520243 1.08587 0.159407C0.845372 0.26679 0.630836 0.42473 0.456865 0.622477C0.282894 0.820224 0.153573 1.05313 0.077706 1.30535C0.00183865 1.55757 -0.0187938 1.82317 0.0172133 2.08408C0.342776 4.64426 1.51201 7.02301 3.34022 8.84458C5.16844 10.6662 7.55142 11.8267 10.1128 12.143H10.345C10.7956 12.1436 11.2307 11.9783 11.5672 11.6785C11.7605 11.5056 11.915 11.2936 12.0203 11.0566C12.1257 10.8196 12.1795 10.5629 12.1783 10.3035V8.47019C12.1708 8.04571 12.0163 7.63698 11.741 7.31377C11.4657 6.99056 11.0868 6.77291 10.6689 6.69797ZM10.9744 10.3646C10.9743 10.4514 10.9557 10.5372 10.9199 10.6162C10.8841 10.6952 10.8318 10.7657 10.7667 10.823C10.6986 10.8823 10.6188 10.9265 10.5324 10.9528C10.4461 10.9792 10.3551 10.987 10.2655 10.9758C7.97687 10.6823 5.85102 9.63527 4.22332 7.99982C2.59561 6.36436 1.55869 4.23357 1.2761 1.94353C1.26638 1.85401 1.2749 1.76345 1.30116 1.67732C1.32742 1.59119 1.37087 1.51128 1.42888 1.44242C1.48615 1.37723 1.55664 1.32499 1.63567 1.28916C1.71469 1.25333 1.80044 1.23475 1.88721 1.23464H3.72055C3.86266 1.23148 4.00143 1.27795 4.11297 1.36607C4.22451 1.45419 4.30184 1.57843 4.33166 1.71742C4.3561 1.88445 4.38666 2.04945 4.42332 2.21242C4.49392 2.53456 4.58787 2.85114 4.70444 3.15964L3.84888 3.55686C3.77573 3.59042 3.70993 3.63811 3.65525 3.69717C3.60058 3.75623 3.55811 3.82551 3.53029 3.90104C3.50247 3.97656 3.48983 4.05683 3.49312 4.13725C3.49641 4.21766 3.51554 4.29664 3.54944 4.36964C4.42895 6.25354 5.94331 7.76791 7.82721 8.64742C7.976 8.70854 8.14288 8.70854 8.29166 8.64742C8.36787 8.62016 8.43791 8.57803 8.49771 8.52348C8.5575 8.46892 8.60587 8.40304 8.63999 8.32964L9.01888 7.47408C9.3348 7.58706 9.65724 7.68094 9.98444 7.75519C10.1474 7.79186 10.3124 7.82242 10.4794 7.84686C10.6184 7.87668 10.7427 7.95401 10.8308 8.06555C10.9189 8.17709 10.9654 8.31586 10.9622 8.45797L10.9744 10.3646Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <a href="tel:+97144551010" className={FOOTER_LINK_STYLES}>
                    +971 4 455 10 10
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-[23px] 2xl:w-[26px] 3xl:w-[35px] h-[23px] 2xl:h-[26px] 3xl:h-[35px] rounded-[5px] bg-white/10 flex items-center justify-center p-[6.5px] 3xl:p-[10px]">
                    <svg viewBox="0 0 13 13" fill="none">
                      <path
                        d="M11.6111 2.44434H3.0555C2.56927 2.44434 2.10296 2.63749 1.75914 2.98131C1.41532 3.32512 1.22217 3.79144 1.22217 4.27767V10.3888C1.22217 10.875 1.41532 11.3413 1.75914 11.6851C2.10296 12.029 2.56927 12.2221 3.0555 12.2221H11.6111C12.0973 12.2221 12.5636 12.029 12.9074 11.6851C13.2512 11.3413 13.4444 10.875 13.4444 10.3888V4.27767C13.4444 3.79144 13.2512 3.32512 12.9074 2.98131C12.5636 2.63749 12.0973 2.44434 11.6111 2.44434ZM3.0555 3.66656H11.6111C11.7731 3.66656 11.9286 3.73094 12.0432 3.84555C12.1578 3.96015 12.2222 4.11559 12.2222 4.27767L7.33328 7.25989L2.44439 4.27767C2.44439 4.11559 2.50878 3.96015 2.62338 3.84555C2.73799 3.73094 2.89342 3.66656 3.0555 3.66656ZM12.2222 10.3888C12.2222 10.5509 12.1578 10.7063 12.0432 10.8209C11.9286 10.9355 11.7731 10.9999 11.6111 10.9999H3.0555C2.89342 10.9999 2.73799 10.9355 2.62338 10.8209C2.50878 10.7063 2.44439 10.5509 2.44439 10.3888V5.671L7.0155 8.46378C7.1084 8.51742 7.21378 8.54565 7.32106 8.54565C7.42833 8.54565 7.53371 8.51742 7.62661 8.46378L12.2222 5.671V10.3888Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <a href="mailto:hello@kpi.co" className={FOOTER_LINK_STYLES}>
                    hello@kpi.co
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-[23px] 2xl:w-[26px] 3xl:w-[35px] h-[23px] 2xl:h-[26px] 3xl:h-[35px]  rounded-[5px] bg-white/10 flex items-center justify-center p-[6.5px] 3xl:p-[10px]">
                    <svg viewBox="0 0 13 13" fill="none">
                      <path
                        d="M7.33323 1.22217C6.03661 1.22217 4.7931 1.73725 3.87626 2.65409C2.95941 3.57094 2.44434 4.81444 2.44434 6.11106C2.44434 9.41106 6.75267 13.1388 6.936 13.2977C7.0467 13.3924 7.18757 13.4444 7.33323 13.4444C7.47889 13.4444 7.61976 13.3924 7.73045 13.2977C7.94434 13.1388 12.2221 9.41106 12.2221 6.11106C12.2221 4.81444 11.707 3.57094 10.7902 2.65409C9.87335 1.73725 8.62984 1.22217 7.33323 1.22217ZM7.33323 12.0083C6.03156 10.7861 3.66656 8.15217 3.66656 6.11106C3.66656 5.1386 4.05287 4.20597 4.7405 3.51833C5.42813 2.8307 6.36076 2.44439 7.33323 2.44439C8.30569 2.44439 9.23832 2.8307 9.92595 3.51833C10.6136 4.20597 10.9999 5.1386 10.9999 6.11106C10.9999 8.15217 8.63489 10.7922 7.33323 12.0083ZM7.33323 3.66661C6.84976 3.66661 6.37715 3.80998 5.97516 4.07858C5.57318 4.34717 5.25987 4.72894 5.07485 5.17561C4.88984 5.62227 4.84143 6.11377 4.93575 6.58794C5.03007 7.06212 5.26288 7.49768 5.60474 7.83954C5.9466 8.1814 6.38216 8.41421 6.85634 8.50853C7.33051 8.60285 7.82201 8.55444 8.26867 8.36943C8.71534 8.18442 9.09711 7.8711 9.36571 7.46912C9.63431 7.06713 9.77767 6.59452 9.77767 6.11106C9.77767 5.46275 9.52013 4.841 9.06171 4.38257C8.60329 3.92415 7.98153 3.66661 7.33323 3.66661ZM7.33323 7.33328C7.09149 7.33328 6.85519 7.2616 6.65419 7.1273C6.4532 6.993 6.29655 6.80211 6.20404 6.57878C6.11153 6.35545 6.08733 6.1097 6.13449 5.87261C6.18165 5.63553 6.29805 5.41775 6.46898 5.24682C6.63991 5.07589 6.85769 4.95948 7.09478 4.91232C7.33187 4.86516 7.57762 4.88936 7.80095 4.98187C8.02428 5.07438 8.21517 5.23103 8.34947 5.43203C8.48377 5.63302 8.55545 5.86932 8.55545 6.11106C8.55545 6.43521 8.42668 6.74609 8.19747 6.9753C7.96826 7.20451 7.65738 7.33328 7.33323 7.33328Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <span className={FOOTER_LINK_STYLES}>UAE, KSA, India</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Mobile Accordion View */}
          <div className="lg:hidden mb-10">
            <Accordion
              type="multiple"
              defaultValue={[
                "audit",
                "advisory",
                "risk",
                "resources",
                "company",
              ]}
              className="w-full "
            >
              <AccordionItem value="audit" className="border-none">
                <AccordionTrigger
                  className={`${FOOTER_MAINLINKS} !mb-0 py-[30px_12px]  hover:no-underline border-b rounded-none border-white/20`}
                >
                  Audit & Assurance
                </AccordionTrigger>
                <AccordionContent className="p-[15px_0]">
                  <ul className="space-y-4 ">
                    <li>
                      <Link
                        href="/financial-statement-audit-uae"
                        className={FOOTER_LINK_STYLES}
                      >
                        Financial Statement Audit
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/agreed-upon-procedures-uae"
                        className={FOOTER_LINK_STYLES}
                      >
                        Agreed Upon Procedures
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/adgm-regulated-audit"
                        className={FOOTER_LINK_STYLES}
                      >
                        ADGM Regulated Audit
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/difc-dfsa-regulated-audit"
                        className={FOOTER_LINK_STYLES}
                      >
                        DIFC & DFSA Regulated Audit
                      </Link>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="advisory" className="border-none">
                <AccordionTrigger
                  className={`${FOOTER_MAINLINKS} !mb-0 py-[30px_12px] hover:no-underline border-b rounded-none border-white/20`}
                >
                  Advisory Services
                </AccordionTrigger>
                <AccordionContent className="p-[15px_0]">
                  <ul className="space-y-4">
                    <li>
                      <Link
                        href="/corporate-services-uae"
                        className={FOOTER_LINK_STYLES}
                      >
                        Corporate Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/advisory-services-uae"
                        className={FOOTER_LINK_STYLES}
                      >
                        Advisory Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/mainland-company-formation-uae"
                        className={FOOTER_LINK_STYLES}
                      >
                        Mainland Company Formation
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/company-formation-dubai-silicon-oasis"
                        className={FOOTER_LINK_STYLES}
                      >
                        Dubai Silicon Oasis
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/business-setup-sharjah-airport-international-free-zone"
                        className={FOOTER_LINK_STYLES}
                      >
                        Sharjah Airport Free Zone
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/company-setup-hamriyah-free-zone"
                        className={FOOTER_LINK_STYLES}
                      >
                        Hamriyah Free Zone
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/business-setup-dubai-airport-free-zone"
                        className={FOOTER_LINK_STYLES}
                      >
                        Dubai Airport Free Zone
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/dmcc-freezone-business-setup-uae"
                        className={FOOTER_LINK_STYLES}
                      >
                        DMCC Free Zone
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/dwtc-freezone"
                        className={FOOTER_LINK_STYLES}
                      >
                        DWTC Free Zone
                      </Link>
                    </li>
                    <li>
                      <Link href="/ifza" className={FOOTER_LINK_STYLES}>
                        IFZA
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/meydan-freezone-business-setup-uae"
                        className={FOOTER_LINK_STYLES}
                      >
                        Meydan Free Zone
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/vat-advisory-services-uae"
                        className={FOOTER_LINK_STYLES}
                      >
                        VAT Advisory Services
                      </Link>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="risk" className="border-none">
                <AccordionTrigger
                  className={`${FOOTER_MAINLINKS} !mb-0 py-[30px_12px] hover:no-underline border-b rounded-none border-white/20`}
                >
                  Risk & Compliance
                </AccordionTrigger>
                <AccordionContent className="p-[15px_0]">
                  <ul className="space-y-4 ">
                    <li>
                      <Link
                        href="/risk-overview"
                        className={FOOTER_LINK_STYLES}
                      >
                        Enterprise Risk Management
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/risk-overview"
                        className={FOOTER_LINK_STYLES}
                      >
                        Internal Audit Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/risk-overview"
                        className={FOOTER_LINK_STYLES}
                      >
                        Standard Operating Procedures
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/risk-overview"
                        className={FOOTER_LINK_STYLES}
                      >
                        Regulatory & Compliance Advisory
                      </Link>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="resources" className="border-none">
                <AccordionTrigger
                  className={`${FOOTER_MAINLINKS} !mb-0 py-[30px_12px] hover:no-underline border-b rounded-none border-white/20`}
                >
                  Resources
                </AccordionTrigger>
                <AccordionContent className="p-[15px_0]">
                  <ul className="space-y-4 ">
                    <li>
                      <Link href="/blog" className={FOOTER_LINK_STYLES}>
                        Blogs
                      </Link>
                    </li>
                    <li>
                      <Link href="/glossary" className={FOOTER_LINK_STYLES}>
                        Glossary
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog" className={FOOTER_LINK_STYLES}>
                        Newsroom
                      </Link>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="company" className="border-none">
                <AccordionTrigger
                  className={`${FOOTER_MAINLINKS} !mb-0 py-[30px_12px] hover:no-underline border-b rounded-none border-white/20`}
                >
                  Company
                </AccordionTrigger>
                <AccordionContent className="p-[15px_0]">
                  <ul className="space-y-4 ">
                    <li>
                      <Link href="/#about" className={FOOTER_LINK_STYLES}>
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link href="/#clients" className={FOOTER_LINK_STYLES}>
                        Our Clients
                      </Link>
                    </li>
                    <li>
                      <Link href="/#contact" className={FOOTER_LINK_STYLES}>
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            {/* Contact Us */}
            <div className="w-full">
              <div
                className={`${FOOTER_MAINLINKS} py-[30px_12px] border-b rounded-none border-white/20`}
              >
                Contact Us
              </div>
              <ul className="space-y-[15px]">
                <li className="flex items-center gap-3">
                  <div className="w-[35px] h-[35px] rounded-lg bg-white/10 flex items-center justify-center p-[10px] ">
                    <svg viewBox="0 0 13 13" fill="none">
                      <path
                        d="M10.6689 6.69797C10.5344 6.69797 10.3939 6.65519 10.2594 6.62464C9.98718 6.56464 9.71962 6.48499 9.45888 6.38631C9.17538 6.28317 8.86375 6.28852 8.58396 6.40134C8.30417 6.51416 8.07599 6.72647 7.94332 6.99742L7.80888 7.27242C7.21366 6.9413 6.6667 6.53006 6.18332 6.05019C5.70346 5.56682 5.29222 5.01986 4.9611 4.42464L5.21777 4.25353C5.48871 4.12087 5.70102 3.89268 5.81384 3.61289C5.92666 3.3331 5.93202 3.02147 5.82888 2.73797C5.73185 2.47667 5.65223 2.20924 5.59055 1.93742C5.55999 1.80297 5.53555 1.66242 5.51721 1.52186C5.443 1.09141 5.21754 0.701592 4.88143 0.422618C4.54531 0.143644 4.12064 -0.00615624 3.68388 0.000193907H1.85055C1.58718 -0.00227898 1.32637 0.0520243 1.08587 0.159407C0.845372 0.26679 0.630836 0.42473 0.456865 0.622477C0.282894 0.820224 0.153573 1.05313 0.077706 1.30535C0.00183865 1.55757 -0.0187938 1.82317 0.0172133 2.08408C0.342776 4.64426 1.51201 7.02301 3.34022 8.84458C5.16844 10.6662 7.55142 11.8267 10.1128 12.143H10.345C10.7956 12.1436 11.2307 11.9783 11.5672 11.6785C11.7605 11.5056 11.915 11.2936 12.0203 11.0566C12.1257 10.8196 12.1795 10.5629 12.1783 10.3035V8.47019C12.1708 8.04571 12.0163 7.63698 11.741 7.31377C11.4657 6.99056 11.0868 6.77291 10.6689 6.69797ZM10.9744 10.3646C10.9743 10.4514 10.9557 10.5372 10.9199 10.6162C10.8841 10.6952 10.8318 10.7657 10.7667 10.823C10.6986 10.8823 10.6188 10.9265 10.5324 10.9528C10.4461 10.9792 10.3551 10.987 10.2655 10.9758C7.97687 10.6823 5.85102 9.63527 4.22332 7.99982C2.59561 6.36436 1.55869 4.23357 1.2761 1.94353C1.26638 1.85401 1.2749 1.76345 1.30116 1.67732C1.32742 1.59119 1.37087 1.51128 1.42888 1.44242C1.48615 1.37723 1.55664 1.32499 1.63567 1.28916C1.71469 1.25333 1.80044 1.23475 1.88721 1.23464H3.72055C3.86266 1.23148 4.00143 1.27795 4.11297 1.36607C4.22451 1.45419 4.30184 1.57843 4.33166 1.71742C4.3561 1.88445 4.38666 2.04945 4.42332 2.21242C4.49392 2.53456 4.58787 2.85114 4.70444 3.15964L3.84888 3.55686C3.77573 3.59042 3.70993 3.63811 3.65525 3.69717C3.60058 3.75623 3.55811 3.82551 3.53029 3.90104C3.50247 3.97656 3.48983 4.05683 3.49312 4.13725C3.49641 4.21766 3.51554 4.29664 3.54944 4.36964C4.42895 6.25354 5.94331 7.76791 7.82721 8.64742C7.976 8.70854 8.14288 8.70854 8.29166 8.64742C8.36787 8.62016 8.43791 8.57803 8.49771 8.52348C8.5575 8.46892 8.60587 8.40304 8.63999 8.32964L9.01888 7.47408C9.3348 7.58706 9.65724 7.68094 9.98444 7.75519C10.1474 7.79186 10.3124 7.82242 10.4794 7.84686C10.6184 7.87668 10.7427 7.95401 10.8308 8.06555C10.9189 8.17709 10.9654 8.31586 10.9622 8.45797L10.9744 10.3646Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <a href="tel:+97144551010" className={FOOTER_LINK_STYLES}>
                    +971 4 455 10 10
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-[35px] h-[35px] rounded-lg bg-white/10 flex items-center justify-center  p-[10px] ">
                    <svg viewBox="0 0 15 15" fill="none">
                      <path
                        d="M11.6111 2.44434H3.0555C2.56927 2.44434 2.10296 2.63749 1.75914 2.98131C1.41532 3.32512 1.22217 3.79144 1.22217 4.27767V10.3888C1.22217 10.875 1.41532 11.3413 1.75914 11.6851C2.10296 12.029 2.56927 12.2221 3.0555 12.2221H11.6111C12.0973 12.2221 12.5636 12.029 12.9074 11.6851C13.2512 11.3413 13.4444 10.875 13.4444 10.3888V4.27767C13.4444 3.79144 13.2512 3.32512 12.9074 2.98131C12.5636 2.63749 12.0973 2.44434 11.6111 2.44434ZM3.0555 3.66656H11.6111C11.7731 3.66656 11.9286 3.73094 12.0432 3.84555C12.1578 3.96015 12.2222 4.11559 12.2222 4.27767L7.33328 7.25989L2.44439 4.27767C2.44439 4.11559 2.50878 3.96015 2.62338 3.84555C2.73799 3.73094 2.89342 3.66656 3.0555 3.66656ZM12.2222 10.3888C12.2222 10.5509 12.1578 10.7063 12.0432 10.8209C11.9286 10.9355 11.7731 10.9999 11.6111 10.9999H3.0555C2.89342 10.9999 2.73799 10.9355 2.62338 10.8209C2.50878 10.7063 2.44439 10.5509 2.44439 10.3888V5.671L7.0155 8.46378C7.1084 8.51742 7.21378 8.54565 7.32106 8.54565C7.42833 8.54565 7.53371 8.51742 7.62661 8.46378L12.2222 5.671V10.3888Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <a href="mailto:hello@kpi.co" className={FOOTER_LINK_STYLES}>
                    hello@kpi.co
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-[35px] h-[35px] rounded-lg bg-white/10 flex items-center justify-center  p-[10px] ">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                      <path
                        d="M7.33323 1.22217C6.03661 1.22217 4.7931 1.73725 3.87626 2.65409C2.95941 3.57094 2.44434 4.81444 2.44434 6.11106C2.44434 9.41106 6.75267 13.1388 6.936 13.2977C7.0467 13.3924 7.18757 13.4444 7.33323 13.4444C7.47889 13.4444 7.61976 13.3924 7.73045 13.2977C7.94434 13.1388 12.2221 9.41106 12.2221 6.11106C12.2221 4.81444 11.707 3.57094 10.7902 2.65409C9.87335 1.73725 8.62984 1.22217 7.33323 1.22217ZM7.33323 12.0083C6.03156 10.7861 3.66656 8.15217 3.66656 6.11106C3.66656 5.1386 4.05287 4.20597 4.7405 3.51833C5.42813 2.8307 6.36076 2.44439 7.33323 2.44439C8.30569 2.44439 9.23832 2.8307 9.92595 3.51833C10.6136 4.20597 10.9999 5.1386 10.9999 6.11106C10.9999 8.15217 8.63489 10.7922 7.33323 12.0083ZM7.33323 3.66661C6.84976 3.66661 6.37715 3.80998 5.97516 4.07858C5.57318 4.34717 5.25987 4.72894 5.07485 5.17561C4.88984 5.62227 4.84143 6.11377 4.93575 6.58794C5.03007 7.06212 5.26288 7.49768 5.60474 7.83954C5.9466 8.1814 6.38216 8.41421 6.85634 8.50853C7.33051 8.60285 7.82201 8.55444 8.26867 8.36943C8.71534 8.18442 9.09711 7.8711 9.36571 7.46912C9.63431 7.06713 9.77767 6.59452 9.77767 6.11106C9.77767 5.46275 9.52013 4.841 9.06171 4.38257C8.60329 3.92415 7.98153 3.66661 7.33323 3.66661ZM7.33323 7.33328C7.09149 7.33328 6.85519 7.2616 6.65419 7.1273C6.4532 6.993 6.29655 6.80211 6.20404 6.57878C6.11153 6.35545 6.08733 6.1097 6.13449 5.87261C6.18165 5.63553 6.29805 5.41775 6.46898 5.24682C6.63991 5.07589 6.85769 4.95948 7.09478 4.91232C7.33187 4.86516 7.57762 4.88936 7.80095 4.98187C8.02428 5.07438 8.21517 5.23103 8.34947 5.43203C8.48377 5.63302 8.55545 5.86932 8.55545 6.11106C8.55545 6.43521 8.42668 6.74609 8.19747 6.9753C7.96826 7.20451 7.65738 7.33328 7.33323 7.33328Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <span className={FOOTER_LINK_STYLES}>UAE, KSA, India</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-[25px] max-sm:pb-[65px]">
        <div className="container">
          <div className="flex flex-wrap justify-center  max-sm:text-center  lg:justify-between items-center gap-4 max-md:flex-col-reverse">
            <div className={FOOTER_LINK_STYLES}>
              Copyright 2026 KPI.co. All Rights Reserved.
            </div>
            <div className="flex flex-wrap items-center max-sm:text-center max-sm:justify-center gap-y-2">
              <Link
                href="/"
                className={`${FOOTER_LINK_STYLES} flex items-center underline after:content-['|'] after:mx-2 after:text-white last:after:hidden`}
              >
                Privacy Policy
              </Link>
              <Link
                href="/"
                className={`${FOOTER_LINK_STYLES} flex items-center underline after:content-['|'] after:mx-2 after:text-white last:after:hidden`}
              >
                Terms & Conditions
              </Link>
              <Link
                href="/"
                className={`${FOOTER_LINK_STYLES} flex items-center underline after:content-['|'] after:mx-2 after:text-white last:after:hidden`}
              >
                AI Information
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}