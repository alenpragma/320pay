import React, { useState, useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"
import { images } from "../.."

const SlideButton = () => {
  const [position, setPosition] = useState(0) // Initial position of the slider
  const [isSliding, setIsSliding] = useState(false)
  const [maxPosition, setMaxPosition] = useState(1)

  const containerRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()

  // Calculate the max position dynamically based on container width
  useEffect(() => {
    const updateMaxPosition = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth
        const buttonWidth = 48 // Width of the sliding button (adjust as needed)
        setMaxPosition(containerWidth - buttonWidth - 10) // Adjust for padding/margins if necessary
      }
    }

    updateMaxPosition()
    window.addEventListener("resize", updateMaxPosition)

    console.log("maxPosition", maxPosition)

    return () => window.removeEventListener("resize", updateMaxPosition)
  }, [])

  useEffect(() => {
    if (position === maxPosition) {
      setIsSliding(false) // Stop sliding when reaching the max position
      // Set a delay to navigate to the new route, allowing the transition to finish
      setTimeout(() => {
        navigate("/withdraw/preview") // Replace "/your-route" with your actual route
      }, 300) // Match this duration with the CSS transition duration
    }
  }, [position, maxPosition, navigate])

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const initialX = e.clientX

    const handleMouseMove = (e: MouseEvent) => {
      const newPosition = Math.min(
        maxPosition,
        Math.max(0, e.clientX - initialX + position)
      )
      setPosition(newPosition)
    }

    const handleMouseUp = () => {
      if (position < maxPosition) {
        setIsSliding(true)
        setPosition(0) // Reset position to 0 with a smooth transition
      }
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseup", handleMouseUp)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseup", handleMouseUp)
  }

  return (
    <div
      ref={containerRef}
      className="relative h-14 bg-primary rounded-lg flex items-center w-full"
    >
      <div
        className={`absolute left-1 flex items-center justify-center size-12 bg-white rounded-lg cursor-pointer ${
          isSliding ? "transition-transform duration-300 ease-out" : ""
        }`}
        style={{ transform: `translateX(${position}px)` }}
        onMouseDown={handleMouseDown}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.4 5.8L19 11.4L13.4 17M5 5.8L10.6 11.4L5 17"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div className="text-center w-full text-secondary">Slide This Arrow</div>
    </div>
  )
}

export default SlideButton
