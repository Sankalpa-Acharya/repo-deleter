"use client"
import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaKey } from "react-icons/fa6";
import { BsCursorFill } from "react-icons/bs";
import RepoContainer from "@/components/repocontainer";
import RepoCardSkeleton from '@/components/repocardskeleton';
import { Button } from '@/components/ui/button';

interface Repo {
  id: number;
  full_name: string;
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
  return response.json();
};



export default function Home() {
  const [token, setToken] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedToken = localStorage.getItem("token") || "";
      setToken(savedToken);
    }
  }, []);

  const { data: repos, isLoading, error, refetch } = useQuery<Repo[], Error>({
    queryKey: ['repos', token],
    queryFn: () => fetchRepos(token),
    enabled: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToken(e.target.value);
    localStorage.setItem("token", e.target.value)
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (token) refetch();
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filteredRepos = repos?.filter((repo) =>
    repo.full_name.toLowerCase().includes(searchQuery)
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
          <RepoContainer token={token} repos={filteredRepos ?? []} />
        </div>
      )}
      {repos && repos.length === 0 && (
        <p className="mt-4">No repositories found for this user.</p>
      )}
    </div>
  );
}
