import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { BookOpen, Book, BookCopy, BookMarked, MessageSquare, Mail, Phone, } from 'lucide-react';

// Placeholder image URLs (replace with your actual image URLs)
const IMAGE_URLS = {
    hero: "https://placehold.co/1200x400/EEE/31343C", // Example: Replace with a relevant image
    whyAmIFeelingThisWay: "https://placehold.co/400x300/EEE/31343C",
    overthinking: "https://placehold.co/400x300/EEE/31343C",
    growingUpOnline: "https://placehold.co/400x300/EEE/31343C",
    innerVoice: "https://placehold.co/400x300/EEE/31343C",
    yourMindExplained: "https://placehold.co/100x100/EEE/31343C",
    dealingWithExamAnxiety: "https://placehold.co/100x100/EEE/31343C",
    journalingForClarity: "https://placehold.co/100x100/EEE/31343C",
    buildingHealthyHabits: "https://placehold.co/100x100/EEE/31343C"
};

const KlarzoWebsite = () => {
    return (
        <div className="bg-background text-foreground">
            {/* Header Section */}
            <header className="py-6 px-4 md:px-8 lg:px-12 border-b border-border">
                <div className="container mx-auto flex items-center justify-between">
                    <div className="flex items-center">
                        {/* Logo */}
                        <img
                            src="https://placehold.co/40x40/4CAF50/FFFFFF"  // Replace with actual logo
                            alt="Klarzo Logo"
                            className="mr-2 rounded-full"
                        />
                        <h1 className="text-xl font-bold">Klarzo</h1>
                    </div>
                    <nav className="hidden md:block">
                        <ul className="flex space-x-6">
                            <li><a href="#" className="hover:text-primary">Home</a></li>
                            <li><a href="#" className="hover:text-primary">About Klarzo AI</a></li>
                            <li><a href="#" className="hover:text-primary">Mental Health Tips</a></li>
                            <li><a href="#" className="hover:text-primary">Journaling</a></li>
                            <li><a href="#" className="hover:text-primary">Mood Tracker</a></li>
                            <li>
                                <Button variant="outline" size="sm">
                                    Start Talking
                                </Button>
                            </li>
                        </ul>
                    </nav>
                    {/* Mobile Menu (simplified) */}
                    <div className="md:hidden">
                        {/* Mobile menu icon or button */}
                        <Button variant="ghost" size="icon">
                            {/* Mobile menu icon */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </Button>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="py-16 md:py-24 px-4 md:px-8 lg:px-12 bg-muted">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-700 mb-6">
                        Klarzo helped me understand my anxiety patterns when I needed it most.
                    </h2>
                    <p className="text-gray-700 text-lg md:text-xl mb-8">
                        For the first time, I felt truly heard without judgment. The guidance Klarzo provided helped me develop practical coping strategies I use every day.
                    </p>
                    <p className="text-gray-600 font-medium">Sarah T.</p>
                </div>
            </section>

            {/* AI-Powered Support Section */}
            <section className="py-16 md:py-24 px-4 md:px-8 lg:px-12">
                <div className="container mx-auto text-center">
                    <h3 className="text-2xl md:text-3xl font-semibold mb-4">Klarzo.</h3>
                    <p className="text-gray-600 text-lg mb-8">
                        AI-powered mental health support that's affordable, private, and always available.
                    </p>
                    <p className="text-gray-600 text-lg">
                        <Mail className="inline-block mr-2" />
                        hello@klarzo.com
                    </p>
                </div>
            </section>

            {/* Free Mental Health Guides */}
            <section className="py-16 md:py-24 px-4 md:px-8 lg:px-12">
                <div className="container mx-auto">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">Free Mental Health Guides</h2>
                    <p className="text-gray-600 text-lg text-center mb-8">
                        Explore our professionally crafted resources to support your wellbeing journey.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <Card>
                            <CardHeader>
                                <img src={IMAGE_URLS.yourMindExplained} alt="Your Mind Explained" className="w-16 h-16 rounded-full mb-4" />
                                <CardTitle>Your Mind, Explained</CardTitle>
                                <CardDescription>A comprehensive guide to understanding your thoughts and emotions.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Button variant="outline" className="w-full">
                                    <BookOpen className="mr-2" /> Read Now
                                </Button>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <img src={IMAGE_URLS.dealingWithExamAnxiety} alt="Dealing with Exam Anxiety" className="w-16 h-16 rounded-full mb-4" />
                                <CardTitle>Dealing with Exam Anxiety</CardTitle>
                                <CardDescription>Practical strategies to manage stress before and during exams.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Button variant="outline" className="w-full">
                                    <Book className="mr-2" /> Read Now
                                </Button>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <img src={IMAGE_URLS.journalingForClarity} alt="Journaling for Mental Clarity" className="w-16 h-16 rounded-full mb-4" />
                                <CardTitle>Journaling for Mental Clarity</CardTitle>
                                <CardDescription>How to use journaling as a tool for self-reflection and growth.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Button variant="outline" className="w-full">
                                    <BookCopy className="mr-2" /> Read Now
                                </Button>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <img src={IMAGE_URLS.buildingHealthyHabits} alt="Building Healthy Digital Habits" className="w-16 h-16 rounded-full mb-4" />
                                <CardTitle>Building Healthy Digital Habits</CardTitle>
                                <CardDescription>Creating a balanced relationship with technology and social media.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Button variant="outline" className="w-full">
                                    <BookMarked className="mr-2" /> Read Now
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="mt-8 text-center">
                        <Button variant="link" className="text-blue-500 hover:text-blue-700">
                            View all guides
                        </Button>
                    </div>
                </div>
            </section>

            {/* Ready to Start Your Journey Section */}
            <section className="py-16 md:py-24 px-4 md:px-8 lg:px-12 bg-muted">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-semibold mb-6">Ready to Start Your Journey?</h2>
                    <p className="text-gray-700 text-lg md:text-xl mb-8">
                        Take the first step toward better mental wellbeing with Klarzo's supportive AI companion.
                    </p>
                    <Button variant="default" size="lg">
                        <MessageSquare className="mr-2" /> Start Talking to Klarzo
                    </Button>
                </div>
            </section>

            {/* What People Say Section (Duplicated Content - Consider Revising) */}
            <section className="py-16 md:py-24 px-4 md:px-8 lg:px-12">
                <div className="container mx-auto text-center">
                    <h3 className="text-2xl md:text-3xl font-semibold mb-4">What People Say</h3>
                    <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-6">
                        Klarzo helped me understand my anxiety patterns when I needed it most.
                    </h2>
                    <p className="text-gray-700 text-lg md:text-xl mb-8">
                        For the first time, I felt truly heard without judgment. The guidance Klarzo provided helped me develop practical coping strategies I use every day.
                    </p>
                    <p className="text-gray-600 font-medium">Sarah T.</p>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="py-12 px-4 md:px-8 lg:px-12 bg-gray-800 text-gray-300">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Klarzo.</h3>
                        <p className="text-gray-400 mb-4">
                            AI-powered mental health support that's affordable, private, and always available.
                        </p>
                        <p className="text-gray-400">
                            <Mail className="inline-block mr-2" />
                            hello@klarzo.com
                        </p>
                         <p className="text-gray-400">
                            <Phone className="inline-block mr-2" />
                            +123 456 7890
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Pages</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-white">Home</a></li>
                            <li><a href="#" className="hover:text-white">About Klarzo AI</a></li>
                            <li><a href="#" className="hover:text-white">Mental Health Tips</a></li>
                            <li><a href="#" className="hover:text-white">Free Guides</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Resources</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-white">Crisis Support</a></li>
                            <li><a href="#" className="hover:text-white">FAQ</a></li>
                            <li><a href="#" className="hover:text-white">Blog</a></li>
                            <li><a href="#" className="hover:text-white">Contact Us</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
                        <p className="text-gray-400 mb-4">Subscribe to our newsletter for mental health tips and updates.</p>
                        <div className="flex space-x-2">
                            <Input type="email" placeholder="Your email" className="bg-gray-700 border-gray-600 text-white" />
                            <Button variant="default" className="bg-green-500 hover:bg-green-600 text-white">Subscribe</Button>
                        </div>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
                    &copy; {new Date().getFullYear()} Klarzo. All rights reserved.
                    <div className="mt-4">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms of Service</a>
                        <a href="#" className="hover:text-white">Cookie Policy</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default KlarzoWebsite;
