import Providers from "@/components/provider";
import { Toaster } from 'react-hot-toast';
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex flex-col items-center">
            <div className="md:max-w-[60rem] md:px-5 lg:px-0 mt-5 w-full">
                <Toaster
                    position="top-right"
                    reverseOrder={false}
                />
                <Providers>{children}</Providers>
            </div>
        </div>
    );
}
