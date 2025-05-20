"use client"
import portfolio1 from '@/app/assets/images/portfolio1.png';
import portfolio2 from '@/app/assets/images/portfolio2.png';
import portfolio3 from '@/app/assets/images/portfolio3.png';
import portfolio4 from '@/app/assets/images/portfolio4.png';
import portfolio5 from '@/app/assets/images/portfolio5.png';
import portfolio6 from '@/app/assets/images/portfolio6.png';
import portfolio7 from '@/app/assets/images/portfolio7.png';
import Image from 'next/image';
import { useState } from 'react';

export default function Tabs() {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        {
            title: 'All',
            content: [
                portfolio1,
                portfolio2,
                portfolio3,
                portfolio4,
                portfolio5,
                portfolio6,
                portfolio7
            ]
        },
        {
            title: 'Graphic Design',
            content: [
                portfolio4,
                portfolio5,
                portfolio6,
                portfolio7
            ]
        },
        {
            title: 'Mobile App',
            content: [
                portfolio5,
                portfolio6,
                portfolio7
            ]
        },
        {
            title: 'Photography',
            content: [
                portfolio1,
                portfolio2,
                portfolio6,
                portfolio7
            ]
        },
        {
            title: 'UI/UX Design',
            content: [
                portfolio1,
                portfolio5,
                portfolio6,
                portfolio7
            ]
        }
    ];

    return (
        <div className="w-full max-w-[742px] mt-10">
            {/* Tabs Navigation */}
            <div className="flex flex-wrap py-5.5 bg-bg-two px-10 rounded-md gap-10 shadow-one">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={`text-sm focus:outline-none cursor-pointer relative ${activeTab === index
                            ? 'gradient-text before:content-[""] before:absolute before:-bottom-5.5 before:left-0 before:w-full before:h-[2px] before:gradient-bg'
                            : 'text-white'
                            }`}
                        onClick={() => setActiveTab(index)}
                    >
                        {tab.title}
                    </button>
                ))}
            </div>

            {/* Masonry Grid */}
            <div className="p-6">
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        className={`${activeTab === index ? 'block' : 'hidden'}`}
                    >
                        <div className="columns-2  space-y-4">
                            {tab.content.map((content, i) => (
                                <div key={i} className="break-inside-avoid">
                                    <Image
                                        src={content}
                                        alt={`Image ${i}`}
                                        className="w-full h-auto rounded-lg"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
