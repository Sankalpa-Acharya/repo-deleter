import Providers from "@/components/provider";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex flex-col items-center">
            <div className="max-w-[60rem] px-5 lg:px-0 mt-5 w-full">
                <Providers>{children}</Providers>
            </div>
        </div>
    );
}
