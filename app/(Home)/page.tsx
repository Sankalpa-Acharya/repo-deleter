"use client"
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaKey, FaUser } from "react-icons/fa6";
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
}

interface APIReposne {
  items: Repo[]
}

interface FormData {
  username: string;
  token: string;
}

const fetchRepos = async ({ username, token }: FormData): Promise<APIReposne> => {
  const response = await fetch(`https://api.github.com/search/repositories?q=user:${username}`, {
    headers: {
      'Authorization': `Bearer ${token}`,
    }
  });
  if (!response.ok) throw new Error('Failed to fetch repos');
  return response.json();
};

export default function Home() {
  const [formData, setFormData] = useState<FormData>({ username: '', token: '' });

  const { data: repos, isLoading, error, refetch } = useQuery<APIReposne, Error>({
    queryKey: ['repos', formData.username],
    queryFn: () => fetchRepos(formData),
    enabled: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('first')
    if (formData.username) refetch();
  };

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
              value={formData.token}
              onChange={handleInputChange}
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label className="flex gap-2" htmlFor="username"><FaUser size={16} />Username</Label>
            <Input
              type="text"
              id="username"
              name="username"
              placeholder="Github Username"
              value={formData.username}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <Button type="submit" className="w-full">Fetch Repos</Button>
      </form>
      {isLoading && <RepoCardSkeleton />}
      {error && <p className="text-red-500 mt-4">Error: {error.message}</p>}

      {repos && repos.items.length > 0 && (
        <div className="mt-10">
          <p className="font-bold flex gap-2 text-xl items-center">
            Select the Repositories <BsCursorFill />
          </p>
          <Button className="glass-effect sticky top-0 text-white hover:bg-red-900 w-full">
            <MdDelete size={20} />
          </Button>
          <RepoContainer repos={repos.items} />
        </div>
      )}
      {repos && repos.items.length === 0 && (
        <p className="mt-4">No repositories found for this user.</p>
      )}
    </div>
  );
}