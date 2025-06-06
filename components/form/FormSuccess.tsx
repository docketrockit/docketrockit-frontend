import { CheckCircledIcon } from '@radix-ui/react-icons';

interface FormSuccessProps {
    message?: string;
}

export const FormSuccess = ({ message }: FormSuccessProps) => {
    if (!message) return null;

    return (
        <div className="flex items-center gap-x-2 rounded-md bg-emerald-500/15 p-3 text-sm text-emerald-500">
            <CheckCircledIcon className="h-4 w-4" />
            <p>{message}</p>
        </div>
    );
};

export const FormSuccessSubscribe = ({ message }: FormSuccessProps) => {
    if (!message) return null;

    return (
        <div className="flex items-center gap-x-2 rounded-md p-3 text-sm text-emerald-500">
            <CheckCircledIcon className="h-4 w-4" />
            <p>{message}</p>
        </div>
    );
};

export const FormSuccessSubscribeConsumer = ({ message }: FormSuccessProps) => {
    if (!message) return null;

    return (
        <div className="flex items-center gap-x-2 rounded-md p-3 text-sm text-[#008236]">
            <CheckCircledIcon className="h-4 w-4 mt-1" />
            <div>{message}</div>
        </div>
    );
};

export default FormSuccess;
