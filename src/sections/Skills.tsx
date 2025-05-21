// pages/skills.tsx
import SkillBar from '@/components/SkillBar';
import Title from '@/components/Title';

export default function SkillsPage() {
    const skills = [
        { skill: 'UI/UX Design', percentage: 90 },
        { skill: 'Photography', percentage: 85 },
        { skill: 'Creativity', percentage: 70 },
        { skill: 'Team Work', percentage: 80 },
        { skill: 'Web Design', percentage: 95 },
    ];

    return (
        <section className="lg:mt-25 mt-10 w-auto lg:w-[742px]">
            <Title text='Skills' />
            {skills.map((item) => (
                <SkillBar key={item.skill} skill={item.skill} percentage={item.percentage} />
            ))}
        </section>
    );
}
