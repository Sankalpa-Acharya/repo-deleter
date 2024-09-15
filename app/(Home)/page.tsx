"use client"
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaKey } from "react-icons/fa6";
import { BsCursorFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import RepoContainer from "@/components/repocontainer";
import RepoCardSkeleton from '@/components/repocardskeleton';

interface Repo {
  id: number;
  name: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  private: boolean;
}

const fetchRepos = async (token: string): Promise<Repo[]> => {
  const response = await fetch(`https://api.github.com/user/repos?visibility=all&per_page=100&affiliation=owner`, {
    headers: {
      'Authorization': `Bearer ${token}`,
    }
  });
  if (!response.ok) throw new Error('Failed to fetch repos');
  console.log('it is fetching')
  return response.json();
};

export default function Home() {
  const [token, setToken] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const { data: repos, isLoading, error, refetch } = useQuery<Repo[], Error>({
    queryKey: ['repos', token],
    queryFn: () => fetchRepos(token),
    enabled: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToken(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (token) refetch();
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filteredRepos = repos?.filter((repo) =>
    repo.name.toLowerCase().includes(searchQuery)
  );

  return (
    <div className="m-10">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div className="flex gap-5">
          <div className="grid w-full items-center gap-1.5">
            <Label className="flex gap-2" htmlFor="token"><FaKey size={16} /> Personal Access Token</Label>
            <Input
              type="password"
              id="token"
              name="token"
              placeholder="Personal Access Token"
              value={token}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <Button type="submit" className="w-full">Fetch Repos</Button>
      </form>
      {isLoading && <RepoCardSkeleton />}
      {error && <p className="text-red-500 mt-4">Error: {error.message}</p>}
      {repos && repos.length > 0 && (
        <div className="mt-10">
          <p className="font-bold flex gap-2 text-xl items-center">
            Select the Repositories <BsCursorFill />
          </p>
          <div>
            <Input
              className='mt-5'
              placeholder="Search Repo"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>

          <Button className="glass-effect sticky top-0 text-white hover:bg-red-900 w-full">
            <MdDelete size={20} />
          </Button>

          <RepoContainer repos={filteredRepos ?? []} />
        </div>
      )}
      {repos && repos.length === 0 && (
        <p className="mt-4">No repositories found for this user.</p>
      )}
    </div>
  );
}
