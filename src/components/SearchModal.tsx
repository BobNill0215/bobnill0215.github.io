'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { search, type SearchItem } from '@/data/search';
import { Search, X, ArrowRight } from 'lucide-react';

export default function SearchModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchItem[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    setSelectedIndex(0);
    if (query.trim()) {
      const searchResults = search(query);
      setResults(searchResults);
    } else {
      setResults([]);
    }
  }, [query]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : 0));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : results.length - 1));
      } else if (e.key === 'Enter' && results[selectedIndex]) {
        e.preventDefault();
        window.location.href = results[selectedIndex].href;
        handleResultClick();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, results, selectedIndex]);

  const handleResultClick = () => {
    setIsOpen(false);
    setQuery('');
    setResults([]);
  };

  const highlightText = (text: string, query: string) => {
    if (!query.trim()) return text;
    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return parts.map((part, i) => 
      part.toLowerCase() === query.toLowerCase() 
        ? <mark key={i} className="bg-yellow-200 font-medium">{part}</mark>
        : part
    );
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case '数码相机':
        return '📷';
      case '手机相机':
        return '📱';
      case '运动相机':
        return '🎥';
      case '监控相机':
        return '🔒';
      case '配件':
        return '🎒';
      case '选购指南':
        return '📋';
      case '数据库':
        return '📊';
      case '工具':
        return '🔧';
      case '新品速递':
        return '✨';
      case '镜头评测':
        return '🔭';
      default:
        return '📄';
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
      >
        <Search className="w-4 h-4" />
        <span className="hidden sm:inline">搜索...</span>
        <kbd className="hidden sm:inline text-xs bg-gray-200 px-1.5 py-0.5 rounded">⌘K</kbd>
      </button>

      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-20 px-4"
          onClick={() => setIsOpen(false)}
        >
          <div 
            className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[70vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b">
              <div className="flex items-center gap-3">
                <Search className="w-5 h-5 text-gray-400" />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="搜索相机、手机、配件..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="flex-1 text-lg outline-none placeholder:text-gray-400"
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-gray-100 rounded"
                >
                  <X className="w-5 h-5 text-gray-400" />
                </button>
              </div>
            </div>

            <div className="overflow-y-auto max-h-[calc(70vh-80px)]">
              {query && results.length === 0 && (
                <div className="p-8 text-center text-gray-500">
                  <div className="text-4xl mb-2">🔍</div>
                  <p>未找到与 "{query}" 相关的内容</p>
                  <p className="text-sm mt-1">尝试搜索相机品牌、型号或产品类别</p>
                </div>
              )}

              {!query && (
                <div className="p-6 text-center text-gray-500">
                  <div className="text-4xl mb-2">🔍</div>
                  <p>输入关键词搜索...</p>
                  <div className="mt-4 flex flex-wrap justify-center gap-2">
                    <span className="text-sm bg-gray-100 px-3 py-1 rounded-full">数码相机</span>
                    <span className="text-sm bg-gray-100 px-3 py-1 rounded-full">手机相机</span>
                    <span className="text-sm bg-gray-100 px-3 py-1 rounded-full">运动相机</span>
                    <span className="text-sm bg-gray-100 px-3 py-1 rounded-full">配件</span>
                  </div>
                </div>
              )}

              {results.length > 0 && (
                <div className="p-2" ref={listRef}>
                  <div className="px-3 py-2 text-xs text-gray-500 font-medium">
                    找到 {results.length} 个结果
                  </div>
                  {results.map((result, index) => (
                    <Link
                      key={result.id}
                      href={result.href}
                      onClick={handleResultClick}
                      className={`flex items-center gap-3 p-3 rounded-lg transition-colors group ${
                        index === selectedIndex ? 'bg-blue-50 ring-1 ring-blue-200' : 'hover:bg-gray-50'
                      }`}
                    >
                      <span className="text-2xl">{getCategoryIcon(result.category)}</span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded">
                            {result.category}
                          </span>
                          <h4 className="font-medium text-gray-900 truncate group-hover:text-blue-600">
                            {highlightText(result.title, query)}
                          </h4>
                        </div>
                        <p className="text-sm text-gray-500 truncate mt-0.5">{highlightText(result.excerpt, query)}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-blue-500 transition-colors" />
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="p-3 border-t bg-gray-50 flex items-center justify-between text-xs text-gray-500">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <kbd className="bg-gray-200 px-1.5 py-0.5 rounded">↑</kbd>
                  <kbd className="bg-gray-200 px-1.5 py-0.5 rounded">↓</kbd>
                  <span className="ml-1">导航</span>
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="bg-gray-200 px-1.5 py-0.5 rounded">Enter</kbd>
                  <span className="ml-1">选择</span>
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="bg-gray-200 px-1.5 py-0.5 rounded">Esc</kbd>
                  <span className="ml-1">关闭</span>
                </span>
              </div>
              <span>共 {results.length} 个结果</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}