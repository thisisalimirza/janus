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
      <div className="text-center mb-8">
        <h3 className="font-display text-3xl lg:text-4xl font-bold text-black mb-4">
          ROI Calculator
        </h3>
        <p className="text-lg text-gray-600">
          See how much clarity could be worth to your business
        </p>
      </div>

      {/* Preset Scenarios */}
      <div className="mb-8">
        <p className="text-sm font-semibold text-gray-700 mb-4">Quick scenarios:</p>
        <div className="grid md:grid-cols-3 gap-3">
          {presetScenarios.map((scenario, index) => (
            <button
              key={index}
              onClick={() => loadScenario(scenario)}
              className="text-left p-4 bg-gray-50 hover:bg-janus-blue hover:text-white transition-all duration-200 rounded-lg group"
            >
              <div className="font-semibold text-sm mb-1 group-hover:text-white">
                {scenario.name}
              </div>
              <div className="text-xs text-gray-500 group-hover:text-blue-100">
                {scenario.description}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Input Fields */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Monthly Website Visitors
          </label>
          <input
            type="number"
            value={visitors}
            onChange={(e) => setVisitors(Number(e.target.value))}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-janus-blue focus:border-transparent"
            min="100"
            step="100"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Current Conversion Rate (%)
          </label>
          <input
            type="number"
            value={conversionRate}
            onChange={(e) => setConversionRate(Number(e.target.value))}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-janus-blue focus:border-transparent"
            min="0.1"
            max="10"
            step="0.1"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Average Deal Size / LTV ($)
          </label>
          <input
            type="number"
            value={dealSize}
            onChange={(e) => setDealSize(Number(e.target.value))}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-janus-blue focus:border-transparent"
            min="100"
            step="100"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Expected Uplift from JANUS
          </label>
          <select
            value={uplift}
            onChange={(e) => setUplift(Number(e.target.value))}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-janus-blue focus:border-transparent"
          >
            <option value={15}>+15% (Conservative)</option>
            <option value={30}>+30% (Typical)</option>
            <option value={50}>+50% (Optimistic)</option>
          </select>
        </div>
      </div>

      {/* Results */}
      <div className="bg-janus-blue rounded-xl p-6 lg:p-8 text-white mb-8">
        <h4 className="font-display text-2xl font-bold mb-6 text-center">
          Your Potential ROI
        </h4>
        
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-blue-100 mb-2">
              {formatNumber(calculations.currentDemos)}
            </div>
            <div className="text-sm text-blue-200">
              Current Monthly Demos
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-yellow-300 mb-2">
              +{formatNumber(calculations.extraDemos)}
            </div>
            <div className="text-sm text-blue-200">
              Extra Demos per Month
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-green-300 mb-2">
              {formatCurrency(calculations.addedRevenue)}
            </div>
            <div className="text-sm text-blue-200">
              Additional Monthly Revenue
            </div>
          </div>
        </div>

        <div className="border-t border-blue-400 pt-6">
          <div className="text-center">
            <p className="text-lg lg:text-xl mb-4 leading-relaxed">
              With <strong>{formatNumber(visitors)}</strong> monthly visitors converting at <strong>{conversionRate}%</strong>, 
              you currently get <strong>{formatNumber(calculations.currentDemos)} demos/month</strong>.
            </p>
            <p className="text-lg lg:text-xl mb-4 leading-relaxed">
              With a <strong>{uplift}% uplift</strong>, JANUS could add <strong>{formatNumber(calculations.extraDemos)} extra demos</strong>, 
              worth <strong>{formatCurrency(calculations.addedRevenue)}</strong> in added revenue.
            </p>
            <p className="text-xl lg:text-2xl font-bold text-yellow-300">
              You'd break even on your $5,000 investment in {formatTimeToBreakEven()}.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <Link
          href="#contact"
          className="inline-block bg-black text-white px-8 py-4 text-lg font-bold hover:bg-gray-900 transition-all duration-300 rounded-sm hover-rise janus-shadow"
        >
          Book Your Clarity Call
        </Link>
        <p className="text-sm text-gray-500 mt-3">
          Conservative estimates based on real client results
        </p>
      </div>
    </div>
  )
}