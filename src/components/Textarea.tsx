import { HTMLAttributes } from 'react';

const Textarea = ({ id, label, rows = 4, ...props }: { id: string; label: string; rows?: number } & HTMLAttributes<HTMLTextAreaElement>) => {
    return (
        <div className='flex flex-col w-[742px] gap-2'>
            <label htmlFor={id} className='text-xl font-medium'>{label}*</label>
            <div className="gradient-input-wrapper gradient-border">
                <textarea
                    id={id}
                    rows={rows}
                    className="gradient-textarea"
                    {...props}
                />
            </div>
        </div>
    );
};

export default Textarea