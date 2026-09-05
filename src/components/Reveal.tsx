import { useEffect, useRef, useState, type ReactNode } from "react"

export default function RevealEl ({
        children,
        delay = 0,
        scale = false,
        className = '',
    }: {
        children: ReactNode
        delay?: number
        scale?: boolean
        className?: string
    }) {

    const ref = useRef<HTMLDivElement>(null)
    const [vis, setVis] = useState(false)

    useEffect(() => {
        const el = ref.current
        if (!el) return
        const obs = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
            setVis(true)
            obs.disconnect()
            }
        },
        { threshold: 0.08 },
        )
        obs.observe(el)
        return () => obs.disconnect()
    }, [])

    return (
        <div
        ref={ref}
        className={`${scale ? 'reveal-scale' : 'reveal'}${vis ? ' visible' : ''} ${className}`}
        style={{ transitionDelay: `${delay}ms` }}
        >
        {children}
        </div>
    )
}