import React, { useState } from 'react';
import RepoCard from './repocard';

interface Repo {
    id: number;
    name: string;
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
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 mt-10">
            {repos && repos.map((repo) => (
                <RepoCard
                    onClick={handleSelectedRepos}
                    selected={selectedRepos.includes(repo.name)}
                    key={repo.id}
                    isPrivate={repo.private}
                    name={repo.name}
                    description={repo.description || ''}
                    stars={repo.stargazers_count}
                    forks={repo.forks_count}
                />
            ))}
        </div>
    );
};

export default RepoContainer;
