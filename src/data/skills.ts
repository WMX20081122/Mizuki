// 技能数据配置文件

export interface Skill {
	id: string;
	name: string;
	description: string;
	icon: string;
	category: "frontend" | "backend" | "database" | "tools" | "other";
	level: "beginner" | "intermediate" | "advanced" | "expert";
	experience: {
		years: number;
		months: number;
	};
	projects?: string[];
	certifications?: string[];
	color?: string;
}

export const skillsData: Skill[] = [
	{
		id: "minecraft-dev",
		name: "Minecraft 基岩版开发",
		description: "LeviLamina 插件开发， BDS 服务器搭建与维护",
		icon: "mdi:minecraft",
		category: "other",
		level: "intermediate",
		experience: {
			years: 1,
			months: 6
		},
		projects: ["LeviLamina 插件", "基岩版服务器"],
		color: "#62B47A"
	},
	{
		id: "typescript",
		name: "TypeScript",
		description: "前端开发、Astro 博客、Cloudflare Workers",
		icon: "mdi:language-typescript",
		category: "frontend",
		level: "intermediate",
		experience: {
			years: 1,
			months: 0
		},
		projects: ["Mizuki", "NaviHive", "MCweb"],
		color: "#3178C6"
	},
	{
		id: "javascript",
		name: "JavaScript",
		description: "前端交互、Node.js 后端开发",
		icon: "mdi:language-javascript",
		category: "frontend",
		level: "intermediate",
		experience: {
			years: 2,
			months: 0
		},
		projects: ["GitHub File Manager"],
		color: "#F7DF1E"
	},
	{
		id: "python",
		name: "Python",
		description: "脚本开发、自动化工具、监控程序",
		icon: "mdi:language-python",
		category: "backend",
		level: "intermediate",
		experience: {
			years: 1,
			months: 0
		},
		projects: ["QQ Monitor"],
		color: "#3776AB"
	},
	{
		id: "astro",
		name: "Astro",
		description: "静态网站生成、博客主题开发",
		icon: "mdi:rocket-launch",
		category: "frontend",
		level: "intermediate",
		experience: {
			years: 0,
			months: 6
		},
		projects: ["Mizuki", "Wan's MCweb"],
		color: "#FF5D01"
	},
	{
		id: "git",
		name: "Git / GitHub",
		description: "版本控制、开源协作、CI/CD",
		icon: "mdi:git",
		category: "tools",
		level: "intermediate",
		experience: {
			years: 2,
			months: 0
		},
		color: "#F05032"
	},
	{
		id: "cloudflare",
		name: "Cloudflare",
		description: "Workers、Pages、D1 数据库、KV 存储",
		icon: "mdi:cloud",
		category: "backend",
		level: "intermediate",
		experience: {
			years: 0,
			months: 6
		},
		projects: ["NaviHive"],
		color: "#F38020"
	},
	{
		id: "html-css",
		name: "HTML / CSS",
		description: "网页布局、响应式设计、Material Design",
		icon: "mdi:language-html5",
		category: "frontend",
		level: "intermediate",
		experience: {
			years: 2,
			months: 0
		},
		color: "#E34F26"
	}
];
