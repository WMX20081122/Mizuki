// 日记数据配置

export interface DiaryItem {
	id: number;
	content: string;
	date: string;
	images?: string[];
	location?: string;
	mood?: string;
	tags?: string[];
}

const diaryData: DiaryItem[] = [];

export const getDiaryList = (limit?: number) => {
	return [];
};

export default diaryData;
