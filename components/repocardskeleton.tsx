import React from 'react'
import { Skeleton } from "@/components/ui/skeleton"
import { Button } from './ui/button'
import { MdDelete } from 'react-icons/md'
import { BsCursorFill } from 'react-icons/bs'
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
export default function RepoCardSkeleton() {
    return (
        <div>
            <p className="font-bold mt-10 flex gap-2 text-xl items-center">
                Select the Repositories
                <BsCursorFill />
            </p>
            <Button className="glass-effect sticky top-0 text-white hover:bg-red-900 w-full">
                <MdDelete size={20} />
            </Button>
            <div className="grid gap-5 grid-cols-2 mt-10">
                <Card className="shadow-lg cursor-pointer ">
                    <CardHeader className='flex flex-row items-center justify-between'>
                        <CardTitle> <Skeleton className="w-[100px] h-[20px] rounded-full" /></CardTitle>
                        <div className='text-sm rounded-full p-1 px-3'><Skeleton className="w-[100px] h-[20px] rounded-full" /></div>
                    </CardHeader>
                    <CardContent>
                        <Skeleton className="w-full h-[20px] rounded-full" />
                    </CardContent>
                    <CardFooter className='flex gap-3'>
                        <div className='flex items-center gap-1'>
                            <Skeleton className="w-[100px] h-[20px] rounded-full" />
                        </div>
                        <div className='flex items-center gap-1'>
                            <Skeleton className="w-[100px] h-[20px] rounded-full" />
                        </div>
                    </CardFooter>
                </Card>
                <Card className="shadow-lg cursor-pointer ">
                    <CardHeader className='flex flex-row items-center justify-between'>
                        <CardTitle> <Skeleton className="w-[100px] h-[20px] rounded-full" /></CardTitle>
                        <div className='text-sm rounded-full p-1 px-3'><Skeleton className="w-[100px] h-[20px] rounded-full" /></div>
                    </CardHeader>
                    <CardContent>
                        <Skeleton className="w-full h-[20px] rounded-full" />
                    </CardContent>
                    <CardFooter className='flex gap-3'>
                        <div className='flex items-center gap-1'>
                            <Skeleton className="w-[100px] h-[20px] rounded-full" />
                        </div>
                        <div className='flex items-center gap-1'>
                            <Skeleton className="w-[100px] h-[20px] rounded-full" />
                        </div>
                    </CardFooter>
                </Card>
                <Card className="shadow-lg cursor-pointer ">
                    <CardHeader className='flex flex-row items-center justify-between'>
                        <CardTitle> <Skeleton className="w-[100px] h-[20px] rounded-full" /></CardTitle>
                        <div className='text-sm rounded-full p-1 px-3'><Skeleton className="w-[100px] h-[20px] rounded-full" /></div>
                    </CardHeader>
                    <CardContent>
                        <Skeleton className="w-full h-[20px] rounded-full" />
                    </CardContent>
                    <CardFooter className='flex gap-3'>
                        <div className='flex items-center gap-1'>
                            <Skeleton className="w-[100px] h-[20px] rounded-full" />
                        </div>
                        <div className='flex items-center gap-1'>
                            <Skeleton className="w-[100px] h-[20px] rounded-full" />
                        </div>
                    </CardFooter>
                </Card>
                <Card className="shadow-lg cursor-pointer ">
                    <CardHeader className='flex flex-row items-center justify-between'>
                        <CardTitle> <Skeleton className="w-[100px] h-[20px] rounded-full" /></CardTitle>
                        <div className='text-sm rounded-full p-1 px-3'><Skeleton className="w-[100px] h-[20px] rounded-full" /></div>
                    </CardHeader>
                    <CardContent>
                        <Skeleton className="w-full h-[20px] rounded-full" />
                    </CardContent>
                    <CardFooter className='flex gap-3'>
                        <div className='flex items-center gap-1'>
                            <Skeleton className="w-[100px] h-[20px] rounded-full" />
                        </div>
                        <div className='flex items-center gap-1'>
                            <Skeleton className="w-[100px] h-[20px] rounded-full" />
                        </div>
                    </CardFooter>
                </Card>
                <Card className="shadow-lg cursor-pointer ">
                    <CardHeader className='flex flex-row items-center justify-between'>
                        <CardTitle> <Skeleton className="w-[100px] h-[20px] rounded-full" /></CardTitle>
                        <div className='text-sm rounded-full p-1 px-3'><Skeleton className="w-[100px] h-[20px] rounded-full" /></div>
                    </CardHeader>
                    <CardContent>
                        <Skeleton className="w-full h-[20px] rounded-full" />
                    </CardContent>
                    <CardFooter className='flex gap-3'>
                        <div className='flex items-center gap-1'>
                            <Skeleton className="w-[100px] h-[20px] rounded-full" />
                        </div>
                        <div className='flex items-center gap-1'>
                            <Skeleton className="w-[100px] h-[20px] rounded-full" />
                        </div>
                    </CardFooter>
                </Card>
                <Card className="shadow-lg cursor-pointer ">
                    <CardHeader className='flex flex-row items-center justify-between'>
                        <CardTitle> <Skeleton className="w-[100px] h-[20px] rounded-full" /></CardTitle>
                        <div className='text-sm rounded-full p-1 px-3'><Skeleton className="w-[100px] h-[20px] rounded-full" /></div>
                    </CardHeader>
                    <CardContent>
                        <Skeleton className="w-full h-[20px] rounded-full" />
                    </CardContent>
                    <CardFooter className='flex gap-3'>
                        <div className='flex items-center gap-1'>
                            <Skeleton className="w-[100px] h-[20px] rounded-full" />
                        </div>
                        <div className='flex items-center gap-1'>
                            <Skeleton className="w-[100px] h-[20px] rounded-full" />
                        </div>
                    </CardFooter>
                </Card>
                <Card className="shadow-lg cursor-pointer ">
                    <CardHeader className='flex flex-row items-center justify-between'>
                        <CardTitle> <Skeleton className="w-[100px] h-[20px] rounded-full" /></CardTitle>
                        <div className='text-sm rounded-full p-1 px-3'><Skeleton className="w-[100px] h-[20px] rounded-full" /></div>
                    </CardHeader>
                    <CardContent>
                        <Skeleton className="w-full h-[20px] rounded-full" />
                    </CardContent>
                    <CardFooter className='flex gap-3'>
                        <div className='flex items-center gap-1'>
                            <Skeleton className="w-[100px] h-[20px] rounded-full" />
                        </div>
                        <div className='flex items-center gap-1'>
                            <Skeleton className="w-[100px] h-[20px] rounded-full" />
                        </div>
                    </CardFooter>
                </Card>
                <Card className="shadow-lg cursor-pointer ">
                    <CardHeader className='flex flex-row items-center justify-between'>
                        <CardTitle> <Skeleton className="w-[100px] h-[20px] rounded-full" /></CardTitle>
                        <div className='text-sm rounded-full p-1 px-3'><Skeleton className="w-[100px] h-[20px] rounded-full" /></div>
                    </CardHeader>
                    <CardContent>
                        <Skeleton className="w-full h-[20px] rounded-full" />
                    </CardContent>
                    <CardFooter className='flex gap-3'>
                        <div className='flex items-center gap-1'>
                            <Skeleton className="w-[100px] h-[20px] rounded-full" />
                        </div>
                        <div className='flex items-center gap-1'>
                            <Skeleton className="w-[100px] h-[20px] rounded-full" />
                        </div>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}
