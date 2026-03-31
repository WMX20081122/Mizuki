// 项目数据配置文件

export interface Project {
	id: string;
	title: string;
	description: string;
	image: string;
	category: "web" | "mobile" | "desktop" | "other";
	techStack: string[];
	status: "completed" | "in-progress" | "planned";
	liveDemo?: string;
	sourceCode?: string;
	visitUrl?: string;
	startDate: string;
	endDate?: string;
	featured?: boolean;
	tags?: string[];
	showImage?: boolean;
}

export const projectsData: Project[] = [
	{
		id: "mizuki",
		title: "Mizuki 博客",
		description: "下一代 Material Design 3 博客主题，由 Astro 驱动",
		image: "/assets/projects/mizuki.webp",
		category: "web",
		techStack: ["Astro", "TypeScript", "Material Design 3"],
		status: "in-progress",
		sourceCode: "https://github.com/WMX20081122/Mizuki",
		visitUrl: "https://mizuki-2gi.pages.dev",
		startDate: "2026-03-31",
		featured: true,
		tags: ["博客", "前端"],
		showImage: true
	},
	{
		id: "navihive",
		title: "NaviHive 导航系统",
		description: "精美的个人网站导航管理系统，支持分组管理、拖拽排序、暗色模式",
		image: "/assets/projects/navihive.webp",
		category: "web",
		techStack: ["TypeScript", "Cloudflare Workers", "D1"],
		status: "completed",
		sourceCode: "https://github.com/WMX20081122/Cloudflare-Navihive",
		startDate: "2026-03-01",
		featured: true,
		tags: ["导航", "工具"],
		showImage: true
	},
	{
		id: "mcweb",
		title: "Wan's MCweb",
		description: "基于 Astro 的高度自定义 Minecraft 服务器官网模板",
		image: "/assets/projects/mcweb.webp",
		category: "web",
		techStack: ["Astro", "TypeScript"],
		status: "completed",
		sourceCode: "https://github.com/WMX20081122/Wan-s-Mcweb",
		startDate: "2025-12-01",
		featured: true,
		tags: ["Minecraft", "官网"],
		showImage: true
	},
	{
		id: "qq-monitor",
		title: "QQ Monitor",
		description: "Napcat QQ账号掉线监测与邮件提醒工具",
		image: "/assets/projects/qq-monitor.webp",
		category: "other",
		techStack: ["Python"],
		status: "completed",
		sourceCode: "https://github.com/WMX20081122/qq-monitor",
		startDate: "2025-10-01",
		featured: false,
		tags: ["QQ", "监控", "Python"],
		showImage: true
	},
	{
		id: "github-file-manager",
		title: "GitHub File Manager",
		description: "网页管理 GitHub 仓库特定文件夹的项目",
		image: "/assets/projects/github-manager.webp",
		category: "web",
		techStack: ["JavaScript"],
		status: "completed",
		sourceCode: "https://github.com/WMX20081122/github-flie-manager",
		startDate: "2025-08-01",
		featured: false,
		tags: ["GitHub", "工具"],
		showImage: true
	}
];
