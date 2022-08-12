import path from "path";
import fs from "fs";
import matter from "gray-matter";

import { remark } from "remark";
import html from "remark-html";

const careersDirectory = path.join(process.cwd(), "resources");

export type Career = {
  id: number;
  count: string;
  companyName?: string;
  position?: string;
  startDate: Date | string;
  endDate: Date | string;
  description: string;
};

export async function getSortedCareersData() {
  // /posts配下のファイル名を取得
  const fileNames: string[] = fs.readdirSync(careersDirectory);
  var allCareersData: Array<Career> = [];
  fileNames.map(async (fileName) => {
    //マークダウンファイルを文字列として読み取る
    const fullPath = path.join(careersDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    //投稿のメタデータ部分を解析
    const matterResult = matter(fileContents);

    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);

    const contentHTML = processedContent.toString();
    const matterData = matterResult.data;

    const career: Career = {
      id: matterData.id,
      count: matterData.count,
      companyName: matterData.companyName,
      position: matterData.position,
      startDate: matterData.startDate,
      endDate: matterData.endDate,
      description: contentHTML,
    };

    allCareersData.push(career);
  });

  return allCareersData;
}
