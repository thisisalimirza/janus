'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'

interface Scenario {
  name: string
  visitors: number
  conversionRate: number
  dealSize: number
  description: string
}

const presetScenarios: Scenario[] = [
  {
    name: "Early-Stage SaaS",
    visitors: 3000,
    conversionRate: 0.8,
    dealSize: 1500,
    description: "Pre-seed startup building initial traction"
  },
  {
    name: "Funded Startup (Seed)",
    visitors: 7000,
    conversionRate: 1.5,
    dealSize: 2000,
    description: "Post-seed startup scaling growth"
  },
  {
    name: "Growth-Stage B2B SaaS",
    visitors: 15000,
    conversionRate: 2.0,
    dealSize: 4000,
    description: "Series A+ with established market fit"
  }
]

export default function ROICalculator() {
  const [visitors, setVisitors] = useState(5000)
  const [conversionRate, setConversionRate] = useState(1.0)
  const [dealSize, setDealSize] = useState(2000)
  const [uplift, setUplift] = useState(30)
  const [showResults, setShowResults] = useState(false)

  const calculations = useMemo(() => {
    const currentDemos = Math.round((visitors * conversionRate) / 100)
    const newConversionRate = conversionRate * (1 + uplift / 100)
    const newDemos = Math.round((visitors * newConversionRate) / 100)
    const extraDemos = newDemos - currentDemos
    const addedRevenue = extraDemos * dealSize
    const janusInvestment = 5000 // Core Engine price
    const breakEvenMonths = janusInvestment / addedRevenue
    const breakEvenWeeks = breakEvenMonths * 4.33

    return {
      currentDemos,
      newDemos,
      extraDemos,
      addedRevenue,
      breakEvenWeeks: Math.max(0.1, breakEvenWeeks),
      breakEvenMonths: Math.max(0.1, breakEvenMonths)
    }
  }, [visitors, conversionRate, dealSize, uplift])

  const loadScenario = (scenario: Scenario) => {
    setVisitors(scenario.visitors)
    setConversionRate(scenario.conversionRate)
    setDealSize(scenario.dealSize)
    setShowResults(false) // Hide results when changing scenario
  }

  const calculateROI = () => {
    setShowResults(true)
  }

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US').format(Math.round(num))
  }

  const formatCurrency = (num: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(num)
  }

  const formatTimeToBreakEven = () => {
    if (calculations.breakEvenWeeks < 1) {
      return "less than 1 week"
    } else if (calculations.breakEvenWeeks <= 4) {
      return `${Math.ceil(calculations.breakEvenWeeks)} week${Math.ceil(calculations.breakEvenWeeks) !== 1 ? 's' : ''}`
    } else {
      return `${Math.ceil(calculations.breakEvenMonths)} month${Math.ceil(calculations.breakEvenMonths) !== 1 ? 's' : ''}`
    }
  }

  return (
    <div className="bg-white rounded-2xl p-8 lg:p-12 janus-shadow-xl border border-gray-100">
      <div className="text-center mb-12">
        <h3 className="font-display text-3xl lg:text-4xl font-bold text-black mb-4">
          ROI Calculator
        </h3>
        <p className="text-lg text-gray-600">
          See how much clarity could be worth to your business
        </p>
      </div>

      {/* Preset Scenarios */}
      <div className="mb-10">
        <p className="text-sm font-semibold text-black mb-4">Quick scenarios:</p>
        <div className="grid md:grid-cols-3 gap-4">
          {presetScenarios.map((scenario, index) => (
            <button
              key={index}
              onClick={() => loadScenario(scenario)}
              className="text-left p-4 bg-gray-50 hover:bg-gray-100 transition-all duration-200 rounded-lg border border-gray-200 hover:border-janus-blue group"
            >
              <div className="font-semibold text-sm mb-1 text-black group-hover:text-janus-blue">
                {scenario.name}
              </div>
              <div className="text-xs text-gray-600 group-hover:text-gray-700">
                {scenario.description}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Input Fields */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div>
          <label className="block text-sm font-semibold text-black mb-3">
            Monthly Website Visitors
          </label>
          <input
            type="number"
            value={visitors}
            onChange={(e) => setVisitors(Number(e.target.value))}
            className="w-full px-4 py-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-0 focus:border-janus-blue text-black bg-white placeholder-gray-400 font-medium"
            min="100"
            step="100"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-black mb-3">
            Current Conversion Rate (%)
          </label>
          <input
            type="number"
            value={conversionRate}
            onChange={(e) => setConversionRate(Number(e.target.value))}
            className="w-full px-4 py-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-0 focus:border-janus-blue text-black bg-white placeholder-gray-400 font-medium"
            min="0.1"
            max="10"
            step="0.1"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-black mb-3">
            Average Deal Size / LTV ($)
          </label>
          <input
            type="number"
            value={dealSize}
            onChange={(e) => setDealSize(Number(e.target.value))}
            className="w-full px-4 py-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-0 focus:border-janus-blue text-black bg-white placeholder-gray-400 font-medium"
            min="100"
            step="100"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-black mb-3">
            Expected Uplift from JANUS
          </label>
          <select
            value={uplift}
            onChange={(e) => setUplift(Number(e.target.value))}
            className="w-full px-4 py-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-0 focus:border-janus-blue text-black bg-white font-medium"
          >
            <option value={15}>+15% (Conservative)</option>
            <option value={30}>+30% (Typical)</option>
            <option value={50}>+50% (Optimistic)</option>
          </select>
        </div>
      </div>

      {/* Calculate Button */}
      <div className="text-center mb-10">
        <button
          onClick={calculateROI}
          className="bg-janus-blue text-white px-10 py-4 text-lg font-bold hover:bg-blue-700 transition-all duration-300 rounded-sm hover-rise janus-shadow"
        >
          Calculate ROI
        </button>
      </div>

      {/* Results - Only show when showResults is true */}
      {showResults && (
        <div className="bg-gray-50 rounded-xl p-8 lg:p-10 mb-8 border border-gray-100">
          <h4 className="font-display text-xl lg:text-2xl font-bold mb-6 text-center text-black">
            Your Potential ROI
          </h4>
          
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-black mb-2">
                {formatNumber(calculations.currentDemos)}
              </div>
              <div className="text-xs text-gray-600 font-medium">
                Current Monthly Demos
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-janus-blue mb-2">
                +{formatNumber(calculations.extraDemos)}
              </div>
              <div className="text-xs text-gray-600 font-medium">
                Extra Demos per Month
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-janus-blue mb-2">
                {formatCurrency(calculations.addedRevenue)}
              </div>
              <div className="text-xs text-gray-600 font-medium">
                Additional Monthly Revenue
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <div className="text-center">
              <p className="text-sm mb-3 leading-relaxed text-gray-700">
                With <strong className="text-black">{formatNumber(visitors)}</strong> monthly visitors converting at <strong className="text-black">{conversionRate}%</strong>, 
                you currently get <strong className="text-black">{formatNumber(calculations.currentDemos)} demos/month</strong>.
              </p>
              <p className="text-sm mb-4 leading-relaxed text-gray-700">
                With a <strong className="text-janus-blue">{uplift}% uplift</strong>, JANUS could add <strong className="text-janus-blue">{formatNumber(calculations.extraDemos)} extra demos</strong>, 
                worth <strong className="text-janus-blue">{formatCurrency(calculations.addedRevenue)}</strong> in added revenue.
              </p>
              <p className="text-lg lg:text-xl font-bold text-black font-display">
                Break even in {formatTimeToBreakEven()}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* CTA - Only show when results are visible */}
      {showResults && (
        <div className="text-center">
          <Link
            href="#contact"
            className="inline-block bg-janus-blue text-white px-10 py-5 text-xl font-bold hover:bg-blue-700 transition-all duration-300 rounded-sm hover-rise janus-shadow-xl"
          >
            Book Your Clarity Call
          </Link>
          <p className="text-sm text-gray-500 mt-4">
            Conservative estimates based on real client results
          </p>
        </div>
      )}
    </div>
  )
}