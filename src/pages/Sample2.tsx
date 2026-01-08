
import IconButton from '../components/IconButton';
import arrowRightIcon from '../assets/icons/arrow_right.svg';
import dollarIcon from '../assets/icons/dollar.svg';
import arrowLeftIcon from '../assets/icons/arrow_left.svg';
import stockIcon from '../assets/icons/stock.svg';
import likeIcon from '../assets/icons/like.svg';
import findIcon from '../assets/icons/find.svg';
import feedIcon from '../assets/icons/feed.svg';
import convertIcon from '../assets/icons/convert.svg';
import microsoftLogo from '../assets/images/micro.png';
import bankOfAmericaLogo from '../assets/images/bankof.png';
import visaLogo from '../assets/images/visa.png';
import alphabetLogo from '../assets/images/alpaa.png';
import teslaLogo from '../assets/images/tesla.png';
import palantirLogo from '../assets/images/palan.png';

export default function Sample2() {
  return (
    <div className="min-h-screen bg-[#1A1A1A] text-white pb-20">
      <div className="pt-12 px-5 pb-4">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-1">
            <div className="text-md font-semibold text-grey-100">다우존스</div>
            <div className="text-md text-red-500">48,977.18 <span className="text-red-500">+1.2%</span></div>
          </div>
          <div className="flex items-center gap-2">
            <IconButton src="https://static.toss.im/icons/svg/icon-search-bold-mono.svg" variant="clear" aria-label="검색하기" />
            <div className="relative">
              <IconButton src="https://static.toss.im/icons/svg/icon-line-three-mono.svg" variant="clear" aria-label="햄버거 메뉴 열기" />
              <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 mb-4">
        <div className="flex items-center  mb-2">
          <div className="text-lg font-medium text-white-50">내 종목보기</div>
          <img src={arrowRightIcon} alt="arrow" className="w-5 h-5" />
        </div>
        <div className="text-3xl font-bold mb-1 text-white-50">843,009원</div>
        <div className="text-red-500 text-lg">+137,404원 (19.4%)</div>
      </div>

      <div className="px-5 mb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center">
            <div className="text-sm text-grey-100">직접 설정한 순</div>
            <button className="p-1">
              <img src={convertIcon} alt="convert" className="w-4 h-4" />
            </button>
          </div>
          <div className="flex items-center gap-2">
          <div className="relative inline-flex rounded-md overflow-hidden bg-[#3A3A3C] p-[2px]">
  <button
    className="
      px-2 py-1 text-xs
      rounded-l-[8px]
      bg-transparent
      text-white-50
      z-10
    "
  >
    현재가
  </button>

  <button
    className="
      px-2 py-1 text-xs
        rounded-[8px]
      bg-grey-600
      text-white-50
      z-20
      -ml-[2px]
    "
  >
    평가금
  </button>
            </div>
            <div className="relative inline-flex rounded-md overflow-hidden bg-[#3A3A3C] p-[2px]">
              <button
                className="
                  px-2 py-1 text-xs
                  rounded-l-[8px]
                  bg-transparent
                  text-white-50
                  z-10
                  flex items-center gap-1
                "
              >
                <span>$</span>
              </button>

              <button
                className="
                  px-2 py-1 text-xs
                  rounded-md
                  bg-grey-600
                  text-white-50
                  z-20
                  -ml-[2px]
                  flex items-center
                "
              >
                <span>원</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 space-y-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-[60px] h-[60px]  rounded-full overflow-hidden flex items-center justify-center">
              <img src={microsoftLogo} alt="Microsoft" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="font-medium text-white-50">마이크로소프트</div>
              <div className="text-sm text-grey-100">0.109161주</div>
            </div>
          </div>
          <div className="text-right">
            <div className="font-medium text-white-50">74,833원</div>
            <div className="text-sm text-blue-50">-3,807 (4.8%)</div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-[60px] h-[60px]  rounded-full overflow-hidden flex items-center justify-center">
              <img src={bankOfAmericaLogo} alt="Bank of America" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="font-medium text-white-50">뱅크오브아메리카</div>
              <div className="text-sm text-grey-100">1.039359주</div>
            </div>
          </div>
          <div className="text-right">
            <div className="font-medium text-white-50">85,908원</div>
            <div className="text-sm text-red-500">+7,210 (9.1%)</div>
          </div>
        </div>

        {/* 비자 */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-[60px] h-[60px]  rounded-full overflow-hidden flex items-center justify-center">
              <img src={visaLogo} alt="Visa" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="font-medium text-white-50">비자</div>
              <div className="text-sm text-grey-100">0.160609주</div>
            </div>
          </div>
          <div className="text-right">
            <div className="font-medium text-white-50">82,258원</div>
            <div className="text-sm text-red-500">+3,575 (4.5%)</div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-[60px] h-[60px]  rounded-full overflow-hidden flex items-center justify-center">
              <img src={alphabetLogo} alt="Alphabet" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="font-medium text-white-50">알파벳 A</div>
              <div className="text-sm text-grey-100">0.501088주</div>
            </div>
          </div>
          <div className="text-right">
            <div className="font-medium text-white-50">230,041원</div>
            <div className="text-sm text-red-500">+73,518 (46.9%)</div>
          </div>
        </div>

        {/* 테슬라 */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-[60px] h-[60px]  rounded-full overflow-hidden flex items-center justify-center">
              <img src={teslaLogo} alt="Tesla" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="font-medium text-white-50">테슬라</div>
              <div className="text-sm text-grey-100">0.297743주</div>
            </div>
          </div>
          <div className="text-right">
            <div className="font-medium text-white-50">195,067원</div>
            <div className="text-sm text-red-500">+38,538 (24.6%)</div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-[60px] h-[60px]  rounded-full overflow-hidden flex items-center justify-center">
              <img src={palantirLogo} alt="Palantir" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="font-medium text-white-50">팔란티어</div>
              <div className="text-sm text-grey-100">0.690622주</div>
            </div>
          </div>
          <div className="text-right">
            <div className="font-medium text-white-50">174,898원</div>
            <div className="text-sm text-red-500">+18,367 (11.7%)</div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-[50px] left-1/2 transform -translate-x-1/2 w-[calc(390px-2rem)] h-[70px] bg-[#2C2C2E] rounded-[40px] px-[8px] shadow-lg flex items-center">
        <div className="flex items-center h-full w-full">
          <div className="w-[60px] h-[60px] rounded-full bg-grey-700 flex items-center justify-center">
            <img src={arrowLeftIcon} alt="back" className="w-[30px] h-[35px]" />
          </div>
          <div className="flex items-center justify-around flex-1 ml-[8px]">
            <div className="flex flex-col items-center gap-1">
              <img src={stockIcon} alt="stock" className="w-6 h-6" />
              <div className="text-xs text-white-50">증권</div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <img src={likeIcon} alt="like" className="w-6 h-6" />
              <div className="text-xs text-gray-400">관심</div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <img src={findIcon} alt="find" className="w-6 h-6" />
              <div className="text-xs text-gray-400">발견</div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <img src={feedIcon} alt="feed" className="w-6 h-6" />
              <div className="text-xs text-gray-400">피드</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

