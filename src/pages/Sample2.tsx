import searchIcon from '../assets/icons/search.svg';
import menuIcon from '../assets/icons/menu.svg';
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
      <div className="pt-12 px-4 pb-4">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="text-md font-semibold">다우존스</div>
            <div className="text-md text-red-500">48,977.18 <span className="text-red-500">+1.2%</span></div>
          </div>
          <div className="flex gap-4">
            <img src={searchIcon} alt="search" className="w-6 h-6" />
            <div className="relative">
              <img src={menuIcon} alt="menu" className="w-6 h-6" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 mb-4">
        <div className="flex items-center  mb-2">
          <div className="text-lg font-medium">내 종목보기</div>
          <img src={arrowRightIcon} alt="arrow" className="w-4 h-4" />
        </div>
        <div className="text-3xl font-bold mb-1">843,009원</div>
        <div className="text-red-500 text-lg">+137,404원 (19.4%)</div>
      </div>

      <div className="px-4 mb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center">
            <div className="text-sm text-gray-400">직접 설정한 순</div>
            <button className="p-1">
              <img src={convertIcon} alt="convert" className="w-4 h-4" />
            </button>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex relative">
              <button className="px-2 py-1 text-xs rounded-l-md bg-gray-800 text-gray-400 border border-gray-700">현재가</button>
              <button className="px-2 py-1 text-xs rounded-r-md bg-[#3A3A3C] text-white border border-gray-700 relative z-10">평가금</button>
            </div>
            <div className="flex relative">
              <button className="px-2 py-1 text-xs rounded-l-md bg-gray-800 text-gray-400 border border-gray-700 flex items-center gap-1">
                <img src={dollarIcon} alt="dollar" className="w-2.5 h-2.5" />
              </button>
              <button className="px-2 py-1 text-xs rounded-r-md bg-[#3A3A3C] text-white border border-gray-700 flex items-center relative z-10">
                <span>원</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 space-y-4">
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
              <img src={microsoftLogo} alt="Microsoft" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="font-medium">마이크로소프트</div>
              <div className="text-sm text-gray-400">0.109161주</div>
            </div>
          </div>
          <div className="text-right">
            <div className="font-medium">74,833원</div>
            <div className="text-sm text-blue-500">-3,807 (4.8%)</div>
          </div>
        </div>

        <div className="flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
              <img src={bankOfAmericaLogo} alt="Bank of America" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="font-medium">뱅크오브아메리카</div>
              <div className="text-sm text-gray-400">1.039359주</div>
            </div>
          </div>
          <div className="text-right">
            <div className="font-medium">85,908원</div>
            <div className="text-sm text-red-500">+7,210 (9.1%)</div>
          </div>
        </div>

        {/* 비자 */}
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
              <img src={visaLogo} alt="Visa" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="font-medium">비자</div>
              <div className="text-sm text-gray-400">0.160609주</div>
            </div>
          </div>
          <div className="text-right">
            <div className="font-medium">82,258원</div>
            <div className="text-sm text-red-500">+3,575 (4.5%)</div>
          </div>
        </div>

        <div className="flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
              <img src={alphabetLogo} alt="Alphabet" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="font-medium">알파벳 A</div>
              <div className="text-sm text-gray-400">0.501088주</div>
            </div>
          </div>
          <div className="text-right">
            <div className="font-medium">230,041원</div>
            <div className="text-sm text-red-500">+73,518 (46.9%)</div>
          </div>
        </div>

        {/* 테슬라 */}
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
              <img src={teslaLogo} alt="Tesla" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="font-medium">테슬라</div>
              <div className="text-sm text-gray-400">0.297743주</div>
            </div>
          </div>
          <div className="text-right">
            <div className="font-medium">195,067원</div>
            <div className="text-sm text-red-500">+38,538 (24.6%)</div>
          </div>
        </div>

        {/* 팔란티어 */}
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
              <img src={palantirLogo} alt="Palantir" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="font-medium">팔란티어</div>
              <div className="text-sm text-gray-400">0.690622주</div>
            </div>
          </div>
          <div className="text-right">
            <div className="font-medium">174,898원</div>
            <div className="text-sm text-red-500">+18,367 (11.7%)</div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[calc(390px-2rem)] bg-[#2C2C2E] rounded-3xl px-4 py-3 shadow-lg">
        <div className="flex items-center justify-around">
          <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
            <img src={arrowLeftIcon} alt="back" className="w-5 h-5" />
          </div>
          <div className="flex flex-col items-center gap-1">
            <img src={stockIcon} alt="stock" className="w-5 h-5" />
            <div className="text-xs text-white">증권</div>
          </div>
          <div className="flex flex-col items-center gap-1">
            <img src={likeIcon} alt="like" className="w-5 h-5" />
            <div className="text-xs text-gray-400">관심</div>
          </div>
          <div className="flex flex-col items-center gap-1">
            <img src={findIcon} alt="find" className="w-5 h-5" />
            <div className="text-xs text-gray-400">발견</div>
          </div>
          <div className="flex flex-col items-center gap-1">
            <img src={feedIcon} alt="feed" className="w-5 h-5" />
            <div className="text-xs text-gray-400">피드</div>
          </div>
        </div>
      </div>
    </div>
  );
}

