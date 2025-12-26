import type { PageLoad } from './$types';

const dbData: Record<string, string> = {
  profile: '5G用户规模持续扩大。截至11月末，三家基础电信企业及中国广电的移动电话用户总数达18.28亿户，比上年末净增3854万户。其中，5G移动电话用户达11.93亿户，比上年末净增1.79亿户，占移动电话用户的65.3%',
  notifications: '截至11月末，三家基础电信企业的固定互联网宽带接入用户总数达6.97亿户，比上年末净增2712万户；三家基础电信企业发展移动物联网终端用户29亿户，比上年末净增2.44亿户，互联网电视（IPTV、OTT）用户数达4.15亿户'
}

export const load: PageLoad = ({ params }) => {
  return {
    content: dbData[params.slug] || '暂无内容' // Promise.resolve(dbData[params.slug] || '暂无内容')
  };
};
