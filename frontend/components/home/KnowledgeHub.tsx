'use client';

import { encyclopediaArticles } from '../../data/siteData';
import { AnimateOnScroll, StaggerContainer, StaggerItem } from '../ui/Animations';
import { ArrowRight, Search, BookOpen, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

export default function KnowledgeHub() {
    const [searchQuery, setSearchQuery] = useState('');
    const categories = [...new Set(encyclopediaArticles.map(a => a.category))];

    const filtered = searchQuery
        ? encyclopediaArticles.filter(a => a.question.toLowerCase().includes(searchQuery.toLowerCase()))
        : encyclopediaArticles;

    return (
        <section className="section-padding bg-surface-offwhite" id="knowledge-hub">
            <div className="container-default">
                <AnimateOnScroll className="text-center mb-10">
                    <p className="section-label">Spine Knowledge Hub</p>
                    <h2 className="section-title">Your Questions, <span className="gradient-text">Answered</span></h2>
                    <p className="section-subtitle mx-auto mt-3">
                        Expert answers to the most common spine and chiropractic questions.
                    </p>
                </AnimateOnScroll>

                {/* Search Bar */}
                <AnimateOnScroll delay={0.1} className="max-w-xl mx-auto mb-10">
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-navy-400" />
                        <input
                            type="text"
                            placeholder="Ask about your spine pain..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white border border-navy-100 text-navy-800 placeholder-navy-400 focus:outline-none focus:ring-2 focus:ring-spine-200 focus:border-spine-300 shadow-card transition-all font-body"
                        />
                    </div>
                </AnimateOnScroll>

                {/* Category pills */}
                <AnimateOnScroll delay={0.15} className="flex flex-wrap justify-center gap-2 mb-8">
                    {categories.map((cat) => (
                        <button key={cat} className="px-4 py-1.5 rounded-full bg-white border border-navy-100 text-xs font-heading font-medium text-navy-600 hover:border-spine-200 hover:text-spine-700 transition-all shadow-sm">
                            {cat}
                        </button>
                    ))}
                </AnimateOnScroll>

                <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" staggerDelay={0.06}>
                    {filtered.slice(0, 6).map((article) => (
                        <StaggerItem key={article.slug}>
                            <a href={`/encyclopedia/${article.slug}`} className="group premium-card p-5 flex items-start gap-3 h-full">
                                <div className="w-9 h-9 rounded-xl bg-spine-50 flex items-center justify-center flex-shrink-0 group-hover:bg-spine-100 transition-colors">
                                    <BookOpen className="w-4 h-4 text-spine-600" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-sm font-heading font-semibold text-navy-800 group-hover:text-spine-700 transition-colors leading-snug">
                                        {article.question}
                                    </h3>
                                    <span className="inline-block mt-2 text-[10px] px-2 py-0.5 rounded-full bg-navy-50 text-navy-500 font-medium">{article.category}</span>
                                </div>
                                <ArrowUpRight className="w-4 h-4 text-navy-300 group-hover:text-spine-500 transition-colors flex-shrink-0" />
                            </a>
                        </StaggerItem>
                    ))}
                </StaggerContainer>

                <AnimateOnScroll className="text-center mt-8" delay={0.3}>
                    <a href="/encyclopedia" className="btn-secondary">
                        Browse All Articles <ArrowRight className="w-4 h-4" />
                    </a>
                </AnimateOnScroll>
            </div>
        </section>
    );
}
