import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { FaCodeFork } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";

interface RepoCardProps {
    name: string;
    description: string;
    stars: number;
    forks: number;
    selected: boolean
}

const RepoCard: React.FC<RepoCardProps> = ({ name, description, stars, forks, selected }) => {
    return (
        <div>
            <Card className={`shadow-lg cursor-pointer ${selected ? 'border-indigo-400' : ''} `}>
                <CardHeader className='flex flex-row items-center justify-between'>
                    <CardTitle>{name}</CardTitle>
                    <p className='text-sm rounded-full border p-1 px-3'>Public</p>
                </CardHeader>
                <CardContent>
                    <p className='truncate'>{description || "No description provided"}</p>
                </CardContent>
                <CardFooter className='flex gap-3'>
                    <div className='flex items-center gap-1'>
                        <FaCodeFork />
                        <p>{forks}</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <FaStar className='text-yellow-500' />
                        <p>{stars}</p>
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}

export default RepoCard