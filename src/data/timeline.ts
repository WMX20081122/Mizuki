import type { TimelineItem } from "../components/features/timeline/types";

export const timelineData: TimelineItem[] = [
	{
		id: "wmx-server-launch",
		date: "2024-11-06",
		title: "WMX 服务器开服",
		description: "Minecraft 基岩版服务器正式开服，开启新的冒险之旅",
		category: "milestone",
		icon: "mdi:minecraft",
		color: "#62B47A",
		links: [
			{
				label: "了解更多",
				url: "/about/"
			}
		]
	}
];
