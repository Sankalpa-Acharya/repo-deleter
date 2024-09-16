import React, { useState } from 'react';
import RepoCard from './repocard';
import { MdDelete } from "react-icons/md";
import { Button } from "@/components/ui/button";

interface Repo {
    id: number;
    full_name: string;
    description: string | null;
    stargazers_count: number;
    forks_count: number;
    private: boolean;
}

interface RepoContainerProps {
    repos: Repo[];
}

const RepoContainer: React.FC<RepoContainerProps> = ({ repos }) => {
    const [selectedRepos, setSelectedRepos] = useState<string[]>([]);

    const handleSelectedRepos = (reponame: string) => {
        setSelectedRepos((prevSelectedRepos) => {
            if (prevSelectedRepos.includes(reponame)) {
                return prevSelectedRepos.filter((repo) => repo !== reponame);
            } else {
                return [...prevSelectedRepos, reponame];
            }
        });
    };
    return (
        <div>
            <Button className="glass-effect sticky top-0 text-white hover:bg-red-900 w-full">
                <MdDelete size={20} />
            </Button>
            <div className="grid gap-5 grid-cols-1 md:grid-cols-2 mt-10">
                {repos && repos.map((repo) => (
                    <RepoCard
                        onClick={handleSelectedRepos}
                        selected={selectedRepos.includes(repo.full_name)}
                        key={repo.id}
                        isPrivate={repo.private}
                        name={repo.full_name}
                        description={repo.description || ''}
                        stars={repo.stargazers_count}
                        forks={repo.forks_count}
                    />
                ))}
            </div>
        </div>
    );
};

export default RepoContainer;
