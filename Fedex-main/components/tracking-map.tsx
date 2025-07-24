"use client"

import { useEffect, useRef } from "react"
import { MapPin } from "lucide-react"

interface TrackingMapProps {
  origin: { lat: number; lng: number; name: string }
  destination: { lat: number; lng: number; name: string }
  currentLocation: { lat: number; lng: number; name: string }
}

export function TrackingMap({ origin, destination, currentLocation }: TrackingMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)

  // Since we can't use actual Google Maps, we'll create a styled representation
  useEffect(() => {
    if (mapRef.current) {
      // This would typically initialize a real map
      console.log("Map initialized with:", { origin, destination, currentLocation })
    }
  }, [origin, destination, currentLocation])

  return (
    <div className="space-y-4">
      <div
        ref={mapRef}
        className="w-full h-96 bg-blue-50 rounded-lg relative overflow-hidden border-2 border-blue-200"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, #e0f2fe 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, #e1f5fe 0%, transparent 50%),
            linear-gradient(45deg, #f0f9ff 0%, #e0f2fe 100%)
          `,
        }}
      >
        {/* Origin */}
        <div className="absolute flex flex-col items-center" style={{ left: "15%", top: "70%" }}>
          <MapPin className="h-6 w-6 text-green-600 fill-green-600" />
          <div className="bg-white px-2 py-1 rounded text-xs font-medium shadow-md mt-1">{origin.name}</div>
        </div>

        {/* Current Location */}
        <div className="absolute flex flex-col items-center" style={{ left: "60%", top: "40%" }}>
          <div className="relative">
            <MapPin className="h-8 w-8 text-purple-600 fill-purple-600 animate-pulse" />
            <div className="absolute inset-0 h-8 w-8 bg-purple-600 rounded-full animate-ping opacity-25"></div>
          </div>
          <div className="bg-purple-600 text-white px-2 py-1 rounded text-xs font-medium shadow-md mt-1">
            {currentLocation.name}
          </div>
        </div>

        {/* Destination */}
        <div className="absolute flex flex-col items-center" style={{ left: "85%", top: "75%" }}>
          <MapPin className="h-6 w-6 text-red-600 fill-red-600" />
          <div className="bg-white px-2 py-1 rounded text-xs font-medium shadow-md mt-1">{destination.name}</div>
        </div>

        {/* Route line */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <defs>
            <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="60%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#ef4444" />
            </linearGradient>
          </defs>
          <path
            d="M 15% 70% Q 45% 30% 60% 40% T 85% 75%"
            stroke="url(#routeGradient)"
            strokeWidth="3"
            fill="none"
            strokeDasharray="10,5"
            className="animate-pulse"
          />
        </svg>

        {/* Map overlay info */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-md">
          <h3 className="font-semibold text-sm">Tracking Route</h3>
          <p className="text-xs text-gray-600">Real-time package location</p>
        </div>
      </div>

      {/* Location details */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="flex items-center space-x-2">
            <MapPin className="h-5 w-5 text-green-600" />
            <span className="font-medium text-green-800">Origin</span>
          </div>
          <p className="text-sm text-green-700 mt-1">{origin.name}</p>
        </div>

        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <MapPin className="h-5 w-5 text-purple-600" />
              <div className="absolute inset-0 h-5 w-5 bg-purple-600 rounded-full animate-ping opacity-20"></div>
            </div>
            <span className="font-medium text-purple-800">Current Location</span>
          </div>
          <p className="text-sm text-purple-700 mt-1">{currentLocation.name}</p>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <div className="flex items-center space-x-2">
            <MapPin className="h-5 w-5 text-red-600" />
            <span className="font-medium text-red-800">Destination</span>
          </div>
          <p className="text-sm text-red-700 mt-1">{destination.name}</p>
        </div>
      </div>
    </div>
  )
}
