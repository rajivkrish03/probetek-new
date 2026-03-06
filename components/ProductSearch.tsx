'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { productsData, type ProductItem, type ProductCategory } from '@/app/products/data';
import styles from './ProductSearch.module.css';

type SearchResultItem = {
    type: 'category' | 'product';
    name: string;
    link: string;
    icon?: string;
    categoryName?: string;
};

export default function ProductSearch() {
    const [query, setQuery] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [results, setResults] = useState<SearchResultItem[]>([]);
    const searchRef = useRef<HTMLDivElement>(null);

    // Handle click outside to close dropdown
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const searchTerm = e.target.value;
        setQuery(searchTerm);

        if (searchTerm.trim().length === 0) {
            setResults([]);
            setIsOpen(false);
            return;
        }

        const lowerQuery = searchTerm.toLowerCase();
        const newResults: SearchResultItem[] = [];

        // Search through categories and items
        productsData.forEach((category) => {
            // Check if category name matches
            if (category.category.toLowerCase().includes(lowerQuery)) {
                newResults.push({
                    type: 'category',
                    name: `All ${category.category}`,
                    link: `/products/${category.id}`,
                    icon: category.icon,
                });
            }

            // Check if individual products match
            category.items.forEach((item) => {
                if (item.name.toLowerCase().includes(lowerQuery)) {
                    newResults.push({
                        type: 'product',
                        name: item.name,
                        link: item.link,
                        categoryName: category.category,
                    });
                }
            });
        });

        setResults(newResults);
        setIsOpen(true);
    };

    return (
        <div className={styles.searchContainer} ref={searchRef}>
            <div className={styles.searchBox}>
                <svg className={styles.searchIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                </svg>
                <input
                    type="text"
                    className={styles.searchInput}
                    placeholder="Search for products, testers, or categories..."
                    value={query}
                    onChange={handleSearch}
                    onFocus={() => query.trim().length > 0 && setIsOpen(true)}
                    aria-label="Product Search"
                />
            </div>

            {isOpen && query.trim().length > 0 && (
                <div className={styles.dropdown}>
                    {results.length > 0 ? (
                        <>
                            {/* Group by category logic for cleaner display can be added here, currently a flat list */}
                            {results.map((result, index) => {
                                if (result.type === 'category') {
                                    return (
                                        <Link href={result.link} key={index} className={styles.dropdownItem} onClick={() => setIsOpen(false)}>
                                            <span className={styles.itemIcon}>{result.icon}</span>
                                            <span><strong>{result.name}</strong></span>
                                        </Link>
                                    );
                                } else {
                                    // It's a product (external link usually)
                                    return (
                                        <a href={result.link} target="_blank" rel="noopener noreferrer" key={index} className={styles.dropdownItem} onClick={() => setIsOpen(false)}>
                                            <span className={styles.itemIcon}>↳</span>
                                            <span>{result.name} <span style={{ fontSize: '0.8em', color: 'var(--text-muted)' }}>in {result.categoryName}</span></span>
                                        </a>
                                    );
                                }
                            })}
                        </>
                    ) : (
                        <div className={styles.noResults}>
                            No products found matching "{query}".
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
