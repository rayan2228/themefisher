// components/SkillBar.tsx
'use client';

import { useEffect, useRef, useState } from 'react';

interface SkillBarProps {
    skill: string;
    percentage: number;
}

export default function SkillBar({ skill, percentage }: SkillBarProps) {
    const [inView, setInView] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                }
            },
            { threshold: 0.4 }
        );

        const element = ref.current;

        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, []);
    return (
        <div ref={ref} className="my-6 ">
            <div className="flex justify-between mb-1">
                <span className="text-2xl font-medium">{skill}</span>
                <span className="text-xl font-medium gradient-text">{percentage}%</span>
            </div>
            <div className=" gradient-bg-two rounded-full h-4 ">
                <div
                    className="gradient-bg h-4 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: inView ? `${percentage}%` : '0%' }}
                ></div>
            </div>
        </div>
    );
}
