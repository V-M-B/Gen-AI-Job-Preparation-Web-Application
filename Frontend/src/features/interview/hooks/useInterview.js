import { useState } from 'react'

// ── Mock data (replace with real API call) ────────────────────────────────────
const MOCK_REPORT = {
    matchScore: 82,
    technicalQuestions: [
        {
            question: 'Explain the difference between useMemo and useCallback in React.',
            intention: 'Tests your understanding of React performance hooks and when to apply each.',
            answer: 'useMemo memoizes a computed value, re-running only when deps change. useCallback memoizes a function reference, preventing unnecessary re-renders of child components that receive it as a prop.',
        },
        {
            question: 'How does the JavaScript event loop work?',
            intention: 'Assesses your knowledge of JS concurrency model and async execution.',
            answer: 'The event loop continuously checks the call stack and the task/microtask queues. Async callbacks (setTimeout, fetch) are pushed to the task queue; Promises resolve via the microtask queue, which is always drained before the next task.',
        },
        {
            question: 'What are the key differences between CSS Grid and Flexbox?',
            intention: 'Evaluates practical layout knowledge for building complex UIs.',
            answer: 'Flexbox is one-dimensional (row OR column). Grid is two-dimensional (rows AND columns). Use Flexbox for component-level alignment; Grid for overall page layout.',
        },
        {
            question: 'Describe how you would optimise a slow React application.',
            intention: 'Checks systematic debugging and performance tuning skills.',
            answer: 'Profile with React DevTools Profiler, identify unnecessary re-renders, apply React.memo / useMemo / useCallback where appropriate, code-split with lazy(), and limit state at the right level.',
        },
    ],
    behavioralQuestions: [
        {
            question: 'Tell me about a time you had to meet a tight deadline.',
            intention: 'Evaluates time management, prioritisation, and resilience under pressure.',
            answer: 'Use the STAR method: describe the Situation, your Task, the Actions you took (e.g., broke work into milestones, communicated early on blockers), and the Result (shipped on time, lessons learned).',
        },
        {
            question: 'Describe a conflict with a team member and how you resolved it.',
            intention: 'Assesses interpersonal skills, empathy, and conflict resolution approach.',
            answer: 'Focus on listening actively, finding common ground on shared goals, and reaching a mutually agreed solution. Emphasise what you learned and how it improved your collaboration.',
        },
        {
            question: 'How do you handle receiving critical feedback on your code?',
            intention: 'Tests growth mindset and professional maturity.',
            answer: 'Acknowledge the feedback openly, ask clarifying questions to fully understand the concern, iterate quickly, and thank the reviewer — treating every review as a learning opportunity.',
        },
    ],
    preparationPlan: [
        {
            day: 1,
            focus: 'React Core Concepts',
            tasks: [
                'Revise hooks: useState, useEffect, useMemo, useCallback',
                'Build a small component using context + reducer',
                'Read React docs on reconciliation & fiber',
            ],
        },
        {
            day: 2,
            focus: 'JavaScript Fundamentals',
            tasks: [
                'Event loop, microtask vs task queue',
                'Closures, prototypes, and this binding',
                'Practice 3 LeetCode easy/medium JS problems',
            ],
        },
        {
            day: 3,
            focus: 'System Design & CSS',
            tasks: [
                'Study frontend system design patterns (component library, state management)',
                'Deep dive: CSS Grid vs Flexbox layout exercises',
                'Mock a responsive dashboard layout from scratch',
            ],
        },
        {
            day: 4,
            focus: 'Behavioral & Mock Interview',
            tasks: [
                'Prepare 5 STAR stories covering leadership, conflict, deadlines',
                'Do one full mock interview (record yourself)',
                'Review company culture & recent news',
            ],
        },
    ],
    skillGaps: [
        { skill: 'TypeScript', severity: 'high' },
        { skill: 'GraphQL', severity: 'medium' },
        { skill: 'Web Performance', severity: 'medium' },
        { skill: 'Testing (Jest)', severity: 'low' },
        { skill: 'Docker', severity: 'low' },
    ],
}

/**
 * useInterview – Hook layer for the Interview feature.
 * TODO: wire up real API calls via the API layer.
 */
export const useInterview = () => {
    const [report, setReport] = useState(MOCK_REPORT)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const getReportById = async (interviewId) => {
        setLoading(true)
        setError(null)
        try {
            // TODO: replace with real API call
            // const data = await interviewApi.getById(interviewId)
            // setReport(data)
        } catch (err) {
            setError(err)
        } finally {
            setLoading(false)
        }
    }

    const getResumePdf = async (interviewId) => {
        // TODO: trigger PDF download via API layer
    }

    return { report, loading, error, getReportById, getResumePdf }
}