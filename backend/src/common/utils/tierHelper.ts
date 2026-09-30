const rankFile = [
  {
    subject: 'iron',
    subject_kr: '아이언',
    division: '4',
    min_rp: 0,
    max_rp: 149,
  },
  {
    subject: 'iron',
    subject_kr: '아이언',
    division: '3',
    min_rp: 150,
    max_rp: 299,
  },
  {
    subject: 'iron',
    subject_kr: '아이언',
    division: '2',
    min_rp: 300,
    max_rp: 449,
  },
  {
    subject: 'iron',
    subject_kr: '아이언',
    division: '1',
    min_rp: 450,
    max_rp: 599,
  },
  {
    subject: 'bronze',
    subject_kr: '브론즈',
    division: '4',
    min_rp: 600,
    max_rp: 799,
  },
  {
    subject: 'bronze',
    subject_kr: '브론즈',
    division: '3',
    min_rp: 800,
    max_rp: 999,
  },
  {
    subject: 'bronze',
    subject_kr: '브론즈',
    division: '2',
    min_rp: 1000,
    max_rp: 1199,
  },
  {
    subject: 'bronze',
    subject_kr: '브론즈',
    division: '1',
    min_rp: 1200,
    max_rp: 1399,
  },
  {
    subject: 'silver',
    subject_kr: '실버',
    division: '4',
    min_rp: 1400,
    max_rp: 1649,
  },
  {
    subject: 'silver',
    subject_kr: '실버',
    division: '3',
    min_rp: 1650,
    max_rp: 1899,
  },
  {
    subject: 'silver',
    subject_kr: '실버',
    division: '2',
    min_rp: 1900,
    max_rp: 2149,
  },
  {
    subject: 'silver',
    subject_kr: '실버',
    division: '1',
    min_rp: 2150,
    max_rp: 2399,
  },
  {
    subject: 'gold',
    subject_kr: '골드',
    division: '4',
    min_rp: 2400,
    max_rp: 2699,
  },
  {
    subject: 'gold',
    subject_kr: '골드',
    division: '3',
    min_rp: 2700,
    max_rp: 2999,
  },
  {
    subject: 'gold',
    subject_kr: '골드',
    division: '2',
    min_rp: 3000,
    max_rp: 3299,
  },
  {
    subject: 'gold',
    subject_kr: '골드',
    division: '1',
    min_rp: 3300,
    max_rp: 3599,
  },
  {
    subject: 'platinum',
    subject_kr: '플래티넘',
    division: '4',
    min_rp: 3600,
    max_rp: 3949,
  },
  {
    subject: 'platinum',
    subject_kr: '플래티넘',
    division: '3',
    min_rp: 3950,
    max_rp: 4299,
  },
  {
    subject: 'platinum',
    subject_kr: '플래티넘',
    division: '2',
    min_rp: 4300,
    max_rp: 4649,
  },
  {
    subject: 'platinum',
    subject_kr: '플래티넘',
    division: '1',
    min_rp: 4650,
    max_rp: 4999,
  },
  {
    subject: 'diamond',
    subject_kr: '다이아몬드',
    division: '4',
    min_rp: 5000,
    max_rp: 5349,
  },
  {
    subject: 'diamond',
    subject_kr: '다이아몬드',
    division: '3',
    min_rp: 5350,
    max_rp: 5699,
  },
  {
    subject: 'diamond',
    subject_kr: '다이아몬드',
    division: '2',
    min_rp: 5700,
    max_rp: 6049,
  },
  {
    subject: 'diamond',
    subject_kr: '다이아몬드',
    division: '1',
    min_rp: 6050,
    max_rp: 6399,
  },
  {
    subject: 'meteorite',
    subject_kr: '메테오라이트',
    division: '4',
    min_rp: 6400,
    max_rp: 6699,
  },
  {
    subject: 'meteorite',
    subject_kr: '메테오라이트',
    division: '3',
    min_rp: 6700,
    max_rp: 6999,
  },
  {
    subject: 'meteorite',
    subject_kr: '메테오라이트',
    division: '2',
    min_rp: 7000,
    max_rp: 7299,
  },
  {
    subject: 'meteorite',
    subject_kr: '메테오라이트',
    division: '1',
    min_rp: 7300,
    max_rp: 7599,
  },
]

interface IGetTier {
  subject: string
  subject_kr: string
  division: string
  min_rp: number
}

/**
 * 랭크 티어와 구간을 반환합니다.
 * 미스릴 이상 구간을 판별하기 위해 전체 서버 대상 순위를 입력해야합니다.
 * 입력하지 않을경우 1001로 가정하고 미스릴로 표기됩니다.
 */
export function getTier(rp: number, rank: number = 1001): IGetTier {
  // 미스릴
  if (rp >= 7600) {
    // 데미,이터
    if (rp >= 8300) {
      // 이터
      if (rank <= 300) {
        return {
          subject: 'immortal',
          subject_kr: '이터니티',
          division: '',
          min_rp: 8300,
        }
      }
      // 데미
      if (rank <= 1000) {
        return {
          subject: 'titan',
          subject_kr: '데미갓',
          division: '',
          min_rp: 8300,
        }
      }
    }
    return {
      subject: 'mythril',
      subject_kr: '미스릴',
      division: '',
      min_rp: 7600,
    }
  }
  // RP 구간 찾기
  const tier = rankFile.find((i) => rp >= i.min_rp && rp <= i.max_rp)

  return {
    subject: tier!.subject,
    subject_kr: tier!.subject_kr,
    division: tier!.division,
    min_rp: tier!.min_rp,
  }
}
