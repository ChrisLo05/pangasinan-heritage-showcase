import React, { useState } from 'react';
import Button from '../atoms/Button';
import Icon from '../atoms/Icon';

export interface SearchFormProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

const SearchForm: React.FC<SearchFormProps> = ({ 
  onSearch, 
  placeholder = 'Search heritage sites...' 
}) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="w-full max-w-2xl mx-auto"
      role="search"
      aria-label="Heritage site search"
    >
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
        <div className="relative flex-grow">
          <label htmlFor="search-input" className="sr-only">
            Search for heritage sites
          </label>
          <Icon 
            name="search" 
            size="md" 
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" 
            ariaLabel="Search icon"
          />
          <input
            id="search-input"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={placeholder}
            className="w-full pl-12 pr-4 py-3 sm:py-3.5 border-2 border-slate-200 rounded-lg sm:rounded-l-lg sm:rounded-r-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all text-base"
            aria-describedby="search-description"
          />
          <span id="search-description" className="sr-only">
            Enter keywords to search for heritage sites in Pangasinan
          </span>
        </div>
        <Button 
          type="submit" 
          variant="primary" 
          size="lg" 
          className="w-full sm:w-auto sm:rounded-l-none whitespace-nowrap"
          aria-label="Submit search"
        >
          Search
        </Button>
      </div>
    </form>
  );
};

export default SearchForm;
