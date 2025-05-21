import { HTMLProps } from "react";
const Input = ({ id, label, type = 'text', ...props }: { id: string; label: string; type?: string; } & HTMLProps<HTMLInputElement>) => {
    return (
        <div className='flex flex-col w-[360px] gap-2'>
            <label htmlFor={id} className='text-xl font-medium'>{label}*</label>
            <div className="gradient-input-wrapper gradient-border">
                <input
                    id={id}
                    type={type}
                    className="gradient-input "
                    {...props}
                />
            </div>
        </div>
    );
};

export default Input;