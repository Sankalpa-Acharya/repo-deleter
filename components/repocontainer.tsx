import React, { useState } from 'react';
import RepoCard from './repocard';
import { MdDelete } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';

interface Repo {
    id: number;
    full_name: string;
    description: string | null;
    stargazers_count: number;
    forks_count: number;
    private: boolean;
}

interface RepoContainerProps {
    reposInfo: Repo[];
    token: string;
}

const repoRemover = async (repos: string[], token: string) => {
    for (const repo of repos) {
        const [user, reponame] = repo.split("/");
        try {
            const response = await fetch(`https://api.github.com/repos/${user}/${reponame}`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/vnd.github+json',
                    'Authorization': `Bearer ${token}`,
                    'X-GitHub-Api-Version': '2022-11-28'
                }
            });

            if (response.ok) {
                toast.success(`${reponame} deleted successfully!`);

            } else {
                const errorData = await response.json();
                toast.error(`Failed to delete ${reponame}: ${errorData.message}`);
            }
        } catch (error) {
            toast.error(`Error deleting ${reponame}: ${error}`);
        }
    }
};

const RepoContainer: React.FC<RepoContainerProps> = ({ reposInfo, token }) => {
    const [selectedRepos, setSelectedRepos] = useState<string[]>([]);
    const [repos, setRepos] = useState(reposInfo);
    const { mutate: deleteRepos } = useMutation({
        mutationFn: () => repoRemover(selectedRepos, token),
        onSuccess: () => {
            setSelectedRepos([]);
            setRepos((prev) => prev.filter((repo) => !selectedRepos.includes(repo.full_name)));
        },
        onError: (error: Error) => {
            toast.error(`Error: ${error.message}`);
        }
    });

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
            <Button
                className="glass-effect sticky top-0 text-white hover:bg-red-900 w-full"
                onClick={() => {
                    if (selectedRepos.length > 0) {
                        deleteRepos();
                    } else {
                        toast.error('No repositories selected.');
                    }
                }}
            >
                <MdDelete size={20} />
                Delete Selected Repos
            </Button>
            <div className="grid gap-5 grid-cols-1 md:grid-cols-2 mt-10">
                {repos && repos.map((repo) => (
                    <RepoCard
                        onClick={() => handleSelectedRepos(repo.full_name)}
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
