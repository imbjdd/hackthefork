"use client"

import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts"

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A radial chart with stacked sections"

const chartConfig = {
  desktop: {
    label: "Other",
    color: "black",
  },
  mobile: {
    label: "Livestock",
    color: "#000091",
  },
} satisfies ChartConfig

export default function ChartRadialStacked({ progress = 0 }: { progress?: number }) {
  // Valeur max arbitraire pour l'affichage (ex: 1000 visiteurs)
  const max = 1000;
  const value = Math.round(progress * max);
  // On répartit la valeur sur desktop/mobile (ex: 70% desktop, 30% mobile)
  const chartData = [{ month: "progress", mobile: Math.round(value * 0.145), desktop: Math.round(max-value * 0.145) }];

  return (
    <ChartContainer
      config={chartConfig}
      className="w-full aspect-square max-w-[300px] h-fit mt-24 items-center justify-center flex"
    >
      <RadialBarChart
        data={chartData}
        endAngle={180}
        innerRadius={80}
        outerRadius={130}
      >
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
          <Label
            className="text-[#000091] bg-[#000091]"
            content={({ viewBox }) => {
              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                return (
                  <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                    <tspan
                      x={viewBox.cx}
                      y={(viewBox.cy || 0) - 16}
                      className="text-[#000091] bg-[#000091] fill-[#000091] text-2xl font-bold"
                    >
                      {(value * 0.145/max*100).toFixed(2).toLocaleString()}%
                    </tspan>
                    <tspan
                      x={viewBox.cx}
                      y={(viewBox.cy || 0) + 4}
                      className="text-[#000091] bg-[#000091] fill-[#000]"
                    >
                      of global emissions
                    </tspan>
                  </text>
                )
              }
            }}
          />
        </PolarRadiusAxis>
        <RadialBar
          dataKey="desktop"
          stackId="a"
          cornerRadius={5}
          fill="var(--color-desktop)"
          className="stroke-transparent stroke-2"
        />
        <RadialBar
          dataKey="mobile"
          fill="var(--color-mobile)"
          stackId="a"
          cornerRadius={5}
          className="stroke-transparent stroke-2"
        />
      </RadialBarChart>
    </ChartContainer>
  )
}
