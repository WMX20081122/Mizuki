// 设备数据配置文件

export interface Device {
	name: string;
	image: string;
	specs: string;
	description: string;
	link: string;
}

export type DeviceCategory = Record<string, Device[]> & {
	自定义?: Device[];
};

export const devicesData: DeviceCategory = {
	"手机": [
		{
			name: "OPPO Reno5 K 5G",
			image: "/images/device/oppo-reno5k.webp",
			specs: "骁龙750G | 8GB RAM | 60GB 存储",
			description: "日常主力机，用于通讯、社交、轻度游戏",
			link: "https://www.oppo.com/cn/"
		}
	]
};
