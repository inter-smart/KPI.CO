"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { Heading, Text } from "@/components/utils/typography";
import { cn } from "@/lib/utils";
import type { InsightItem } from "@/app/page";
import parse from "html-react-parser";
import BlogFilter from "./BlogFilter";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
type BlogListProps = {
    data: {
        title: string;
        items: InsightItem[];
    };
};

type BlogCardProps = {
    data: InsightItem;
};
const formSchema = z.object({
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
})

export default function BlogList({ data }: BlogListProps) {
    const [activeFilters, setActiveFilters] = useState(["Audit", "Advisory", "Tax"]);
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8; // 5 items + CTA + 3 items = 9 slots (3x3 grid)
    const topRef = useRef<HTMLElement>(null);

    const removeFilter = (filter: string) => {
        setActiveFilters(activeFilters.filter((f) => f !== filter));
    };

    const clearAll = () => {
        setActiveFilters([]);
    };
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Handle form submission
        console.log("Form submitted:", values)
    }

    // Filter items based on search query and active filters
    const filteredItems = data.items.filter((item) => {
        const query = searchQuery.toLowerCase();
        const matchesSearch = (
            item.title.toLowerCase().includes(query) ||
            item.description.toLowerCase().includes(query)
        );

        const matchesFilter = activeFilters.length === 0 || (item.category && activeFilters.includes(item.category));

        return matchesSearch && matchesFilter;
    });

    // Calculate pagination
    const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
    const currentItems = filteredItems.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    // Reset to page 1 when search changes
    if (currentPage > totalPages && totalPages > 0) {
        setCurrentPage(1);
    }

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
            topRef.current?.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section ref={topRef} className="w-full py-[30px] md:py-[40px] xl:py-[50px] 2xl:py-[70px] 3xl:py-[85px] bg-white">
            <div className="container">
                {/* Section Header */}
                <Heading as="h1" size="h1" className="text-[#1C5396] mb-[25px] xl:mb-[30px] 2xl:mb-[40px] 3xl:mb-[50px] font-semibold">
                    {data.title}
                </Heading>

                {/* Filter and Search Bar */}
                <div className="flex flex-row  gap-2 2xl:gap-3 3xl:gap-4 mb-6 max-w-[500px] xl:max-w-[620px] 2xl:max-w-[745px] 3xl:max-w-[940px] h-[38px] xl:h-[42px] 2xl:h-[50px] 3xl:h-[65px]">
                    <BlogFilter
                        activeFilters={activeFilters}
                        onFilterChange={setActiveFilters}
                        onApply={() => { }}
                        onClear={() => setActiveFilters([])}

                    />

                    <div className="relative flex-1 h-full rounded-[8px] xl:rounded-[10px] 3xl:rounded-[13px]  shadow-[0_0_26px_rgba(0,0,0,0.05)] ">
                        <input
                            type="text"
                            placeholder="Search Blogs"
                            value={searchQuery}
                            onChange={(e) => {
                                setSearchQuery(e.target.value);
                                setCurrentPage(1);
                            }}
                            className="text-[14px] md:text-[12px] xl:text-[16px] 2xl:text-[17px] 3xl:text-[21px]  w-full h-full px-[20px] 2xl:px-[25px] 3xl:px-[35px] rounded-[8px] xl:rounded-[10px]
                             3xl:rounded-[13px] focus:outline-none focus:ring-2 focus:ring-[#C7C5CE]/20 transition-all placeholder:text-[#C7C5CE]
                             placeholder:text-[14px] md:placeholder:text-[12px] xl:placeholder:text-[16px] 2xl:placeholder:text-[17px] 3xl:placeholder:text-[21px] "
                        />
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.7293 14.9599L16.8893 13.0755C16.4935 12.6993 15.9943 12.45 15.4557 12.3597C14.9172 12.2694 14.3639 12.3423 13.8671 12.5688L13.0671 11.7688C14.0098 10.5092 14.4403 8.93922 14.272 7.37491C14.1037 5.81061 13.349 4.36815 12.1599 3.3379C10.9708 2.30766 9.43557 1.76613 7.86324 1.82233C6.29091 1.87854 4.79825 2.52829 3.68573 3.64081C2.57322 4.75332 1.92346 6.24599 1.86726 7.81832C1.81105 9.39065 2.35258 10.9259 3.38283 12.115C4.41307 13.3041 5.85553 14.0588 7.41984 14.2271C8.98414 14.3954 10.5541 13.9649 11.8138 13.0222L12.6049 13.8133C12.3516 14.3107 12.2609 14.8751 12.3454 15.4269C12.4299 15.9787 12.6854 16.49 13.076 16.8888L14.9604 18.7733C15.4604 19.2727 16.1382 19.5532 16.8449 19.5532C17.5515 19.5532 18.2293 19.2727 18.7293 18.7733C18.9833 18.5249 19.1851 18.2283 19.3229 17.9009C19.4607 17.5735 19.5317 17.2218 19.5317 16.8666C19.5317 16.5114 19.4607 16.1597 19.3229 15.8323C19.1851 15.5049 18.9833 15.2083 18.7293 14.9599V14.9599ZM11.1915 11.1911C10.5695 11.8115 9.77758 12.2337 8.91575 12.4043C8.05392 12.5748 7.16087 12.4862 6.34941 12.1494C5.53794 11.8127 4.84448 11.2431 4.35661 10.5124C3.86875 9.78178 3.60837 8.92294 3.60837 8.04439C3.60837 7.16584 3.86875 6.307 4.35661 5.57636C4.84448 4.84572 5.53794 4.27606 6.34941 3.93934C7.16087 3.60262 8.05392 3.51395 8.91575 3.68453C9.77758 3.85511 10.5695 4.27728 11.1915 4.89773C11.6054 5.31058 11.9338 5.80103 12.1579 6.34098C12.3819 6.88094 12.4973 7.45979 12.4973 8.04439C12.4973 8.62899 12.3819 9.20785 12.1579 9.7478C11.9338 10.2878 11.6054 10.7782 11.1915 11.1911V11.1911ZM17.476 17.4755C17.3933 17.5588 17.295 17.6249 17.1867 17.6701C17.0784 17.7152 16.9622 17.7384 16.8449 17.7384C16.7275 17.7384 16.6113 17.7152 16.503 17.6701C16.3947 17.6249 16.2964 17.5588 16.2138 17.4755L14.3293 15.5911C14.246 15.5084 14.1799 15.4101 14.1347 15.3018C14.0896 15.1935 14.0664 15.0773 14.0664 14.9599C14.0664 14.8426 14.0896 14.7264 14.1347 14.6181C14.1799 14.5098 14.246 14.4115 14.3293 14.3288C14.412 14.2455 14.5103 14.1794 14.6186 14.1343C14.7269 14.0891 14.8431 14.0659 14.9604 14.0659C15.0778 14.0659 15.194 14.0891 15.3023 14.1343C15.4106 14.1794 15.5089 14.2455 15.5915 14.3288L17.476 16.2133C17.5593 16.2959 17.6254 16.3942 17.6706 16.5025C17.7157 16.6109 17.7389 16.727 17.7389 16.8444C17.7389 16.9617 17.7157 17.0779 17.6706 17.1862C17.6254 17.2946 17.5593 17.3929 17.476 17.4755V17.4755Z" fill="#4E4E4E" />
                            </svg>

                        </div>
                    </div>
                </div>

                {/* Active Filters */}
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-8 md:mb-12">
                    {activeFilters.map((filter) => (
                        <div
                            key={filter}
                            className="text-[14px] md:text-[12px] xl:text-[16px] 2xl:text-[17px] 3xl:text-[21px] flex items-center gap-1 sm:gap-2 px-3 py-1.5 bg-[rgba(143,216,254,0.15)] border border-[#d6e5f5] rounded-md text-[#4E4E4E] text-sm font-medium"
                        >
                            {filter}
                            <button onClick={() => removeFilter(filter)} className="transition-colors cursor-pointer hover:scale-115">
                                <X size={14} />
                            </button>
                        </div>
                    ))}
                    {activeFilters.length > 0 && (
                        <button
                            onClick={clearAll}
                            className="text-[14px] md:text-[12px] xl:text-[16px] 2xl:text-[17px] 3xl:text-[21px] text-[#212121] text-sm font-medium rounded-[8px] xl:rounded-[10px] 3xl:rounded-[13px] border border-[#DDDCDE] px-3 py-1.5 cursor-pointer hover:scale-105 transition-colors "
                        >
                            Clear All
                        </button>
                    )}
                </div>

                {/* Blog Grid */}
                {filteredItems.length === 0 ? (
                    <div className="text-center py-20 text-gray-500">
                        No blogs found matching your search.
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 2xl:gap-6 3xl:gap-8">
                        {currentItems.slice(0, 5).map((item, index) => (
                            <BlogCard key={item.id} data={item} />
                        ))}

                        {/* Special CTA Card (Position 6) */}
                        <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-[#1c5396] to-[#4a84c4] max-md:min-h-[410px] p-[30px] xl:p-[40px] 2xl:p-[50px] 3xl:p-[60px] flex flex-col justify-center  text-white shadow-lg">
                            <div className="position absolute top-0 left-0 w-full h-full">
                                <Image src="/images/blogBg.jpg" className="w-full h-full object-cover" width="375" height="235" alt="bannerBg" />
                            </div>

                            <div className="relative z-10">
                                <h3 className="text-[16px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[26px] font-semibold mb-4 leading-relaxed">
                                    Strong Decisions Start with Clear Insight
                                </h3>
                                <p className="text-[14px] md:text-[12px] xl:text-[16px] 2xl:text-[17px] 3xl:text-[21px] text-white mb-8 leading-relaxed">
                                    Our audit and business advisory services help you identify risks, improve performance, and plan for sustainable growth at every stage of your business.
                                </p>

                                <div className="relative">
                                    <Form {...form}>
                                        <form onSubmit={form.handleSubmit(onSubmit)} className="relative group ">
                                            <div className="bg-white rounded-[10px] 3xl:rounded-[13px] p-[5_10px] 3xl:p-[5px_15px] overflow-hidden flex items-center w-full h-[42px] xl:h-[50px] 3xl:h-[55px] shadow-sm focus-within:ring-1 focus-within:ring-white/20 transition-all">
                                                <div className="flex-1 overflow-hidden">
                                                    <FormField
                                                        control={form.control}
                                                        name="email"
                                                        render={({ field }) => (
                                                            <FormItem className="space-y-0">
                                                                <FormControl>
                                                                    <Input
                                                                        placeholder='Subscribe Today'
                                                                        className='text-[17px] 2xl:text-[19px] 3xl:text-[21px] text-[rgba(0,0,0)] font-medium px-[5px] w-full h-full border-0 focus-visible:ring-0 focus-visible:ring-offset-0 !bg-transparent  shadow-none placeholder:text-black'
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
                                                    className='!w-[34px] xl:!w-[42px] h-full  3xl:rounded-[10px] bg-gradient-to-b from-[#6A9FE0] to-[#053269] !h-full flex items-center justify-center !p-0 cursor-pointer  hover:opacity-90 transition-all active:scale-95'
                                                >
                                                    <svg width="23" height="19" viewBox="0 0 23 19" fill="none"  >
                                                        <path d="M1.11119 9.43131L19.9983 9.17188" stroke="white" strokeWidth="2.22222" strokeLinecap="round" />
                                                        <path d="M12.8395 1.11109L21.1099 9.15732L13.0959 17.3945" stroke="white" strokeWidth="2.22222" strokeLinecap="round" strokeLinejoin="round" />
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
                            </div>
                        </div>

                        {/* Remaining items */}
                        {currentItems.slice(5).map((item) => (
                            <BlogCard key={item.id} data={item} />
                        ))}
                    </div>
                )}

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex justify-center items-center gap-2 mt-16 h-[42px] [&>button]:h-full [&>button]:w-[42px] [&>button]:flex [&>button]:items-center [&>button]:justify-center ">
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="p-2 border rounded-md hover:bg-gray-50 transition whitespace-nowrap disabled:opacity-50 disabled:bg-[#E5E5E5] disabled:cursor-not-allowed"
                        >
                            <div className="w-[10px] h-[16px]">
                                <svg viewBox="0 0 10 16" fill="none" className="w-full h-full object-cover">
                                    <path d="M9.87988 1.88L3.77322 8L9.87988 14.12L7.99988 16L-0.000117278 8L7.99988 0L9.87988 1.88Z" fill="#C4CDD5" />
                                </svg>
                            </div>
                        </button>

                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                            <button
                                key={page}
                                onClick={() => handlePageChange(page)}
                                className={cn(
                                    "w-10 h-10 rounded-md font-medium transition",
                                    currentPage === page
                                        ? "border border-[#1c5396] text-[#1c5396] bg-[#f0f5fa] font-semibold"
                                        : "border border-transparent hover:border-gray-200 text-gray-500 hover:bg-gray-50"
                                )}
                            >
                                {page}
                            </button>
                        ))}

                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="p-2 border rounded-md hover:bg-gray-50 transition whitespace-nowrap disabled:opacity-50 disabled:bg-[#E5E5E5] disabled:cursor-not-allowed"
                        >
                            <div className="w-[10px] h-[16px]">
                                <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 1.88L6.10667 8L0 14.12L1.88 16L9.88 8L1.88 0L0 1.88Z" fill="#C4CDD5" />
                                </svg>
                            </div>
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}

function BlogCard({ data }: BlogCardProps) {
    return (
        <div className="group flex flex-col bg-white rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 border hover:border-[#3EB0EA] border-gray-50">
            <div className="relative aspect-[440/268] overflow-hidden">
                <Image
                    src={data.media.path || "/images/placeholder-image.png"}
                    alt={data.media.alt || data.title}
                    fill
                    className="object-cover scale-110 group-hover:translate-y-2 transition-transform duration-500"
                />
            </div>
            <div className="p-6 md:p-7 2xl:p-[25px_45px] 3xl:p-[34px_64px] flex flex-col flex-1">
                <div className="text-[13px] font-medium text-[#5280ca] mb-3 uppercase tracking-wide">
                    {data.date} • {data.readTime}
                </div>
                <h3 className="text-[18px] md:text-[20px] 2xl:text-[22px] 3xl:text-[26px] font-semibold text-black group-hover:text-[#1C5396] mb-3 line-clamp-2 leading-tight transition-colors">
                    {parse(data.title)}
                </h3>
                <div className="text-[14px] md:text-[15px] 2xl:text-[16px] 3xl:text-[21px] text-[#4e4e4e] leading-relaxed mb-6">
                    {parse(data.description)}
                </div>
                <Link
                    href={data.slug ?? "#"}
                    className="text-[12px] xl:text-[16px] 2xl:text-[17px]  3xl:text-[21px] leading-relaxed font-medium text-[#1c5396] inline-flex items-center gap-2 mt-auto   transition-colors duration-300"
                >
                    Read More <span>→</span>
                </Link>
            </div>
        </div>
    );
}
