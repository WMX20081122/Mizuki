// 本地番剧数据配置
export interface AnimeItem {
	title: string;
	status: "watching" | "completed" | "planned";
	rating: number;
	cover: string;
	description: string;
	episodes: string;
	year: string;
	genre: string[];
	studio: string;
	link: string;
	progress: number;
	totalEpisodes: number;
	startDate: string;
	endDate: string;
}

const localAnimeList: AnimeItem[] = [
	{
		title: "葬送的芙丽莲",
		status: "completed",
		rating: 10,
		cover: "/assets/anime/frieren.jpg",
		description: "勇者一行人打倒魔王之后的故事，跨越千年的精灵魔法使芙丽莲的旅途",
		episodes: "28集",
		year: "2023",
		genre: ["奇幻", "冒险", "日常"],
		studio: "MADHOUSE",
		link: "https://www.bilibili.com/bangumi/media/md28339499/",
		progress: 28,
		totalEpisodes: 28,
		startDate: "2024-01-01",
		endDate: "2024-03-01"
	}
];

export default localAnimeList;
