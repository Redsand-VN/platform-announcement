import fetcher from "../utils/fetcher.js";
const API_URL =
  "https://isvconsole.lazada.com/handler/share/announcement/getAnnouncementList.json?pageSize=10&parentId=27&spm=a1zq7z.27196124.0.droot_normal_announcement.3ac47c73fb6jAr&page=1";

export const scrape = async () => {
  try {
    const resp = await fetcher(API_URL);
    const data = JSON.parse(resp);
    const announcements = data.data.list
      .sort((d1, d2) => d1.id - d2.id)
      .map((d) => ({
        id: d.id,
        platform: "lazada",
        title: d.enTitle,
        url: `https://open.lazada.com/announcement/index.htm?#/announcement/detail?id=${d.id}`,
      }));
    return announcements;
  } catch (error) {
    console.warn(error);
    return [];
  }
};
