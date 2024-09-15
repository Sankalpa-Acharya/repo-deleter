"use client"
import React from 'react'
import RepoCard from './repocard'

interface Repo {
    id: number;
    name: string;
    description: string | null;
    stargazers_count: number;
    forks_count: number;
    private: boolean
}
interface RepoContainerProps {
    repos: Repo[]
}

const RepoContainer: React.FC<RepoContainerProps> = ({ repos }) => {

    return (
        <div className="grid gap-5 grid-cols-2 mt-10">
            {repos && repos.map(repo => (
                <RepoCard
                    selected={false}
                    key={repo.id}
                    isPrivate={repo.private}
                    name={repo.name}
                    description={repo.description || ""}
                    stars={repo.stargazers_count}
                    forks={repo.forks_count}
                />
            ))}
        </div>
    )
}

export default RepoContainer