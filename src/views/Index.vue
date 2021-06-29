<template>
  <section class="py-18px lg:py-12 px-3 bg-white-dark">
    <div class="container mx-auto">
      <span
        class="inline-block text-xs lg:text-base text-white
      bg-gray-light px-4 py-0.5 rounded-md mb-0.5"
      >
        魔法科技
      </span>
      <h2
        class="text-2xl lg:text-3xl font-bold text-gray-darker
      mb-6 tracking-xl lg:tracking-2xl lg:leading-xl"
      >
        拍出會動的照片｜LivePhotos 魔法拍立得
      </h2>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <img src="@/assets/images/produt_image.jpg" class="w-full" alt="" />
        <div class="flex flex-col justify-between">
          <span class="block mb-1 text-gray text-sm lg:text-base">
            目標<span class="en-font ml-1">$600,000</span>
          </span>
          <p class="text-3xl text-gray-darker en-font font-bold mb-1">$280,047</p>
          <div class="h-4 bg-white-darkest rounded-lg overflow-hidden flex items-center mb-5">
            <span
              class="h-4 bg-yellow text-sm lg:text-xs text-center
              text-gray-light en-font font-bold !leading-5"
              style="width: 41%"
            >
              41%
            </span>
          </div>
          <div class="grid grid-cols-2 gap-6 en-font font-bold">
            <p class="text-sm text-gray">
              <span class="block text-gray mb-1">贊助人數</span>
              <span class="text-3xl text-gray-darker leading-2xl">
                1374<span class="ml-2 text-2xl">人</span>
              </span>
            </p>
            <p class="text-sm text-gray">
              <span class="block text-gray mb-1">募資倒數</span>
              <span class="text-3xl text-gray-darker leading-2xl">
                27<span class="ml-2 text-2xl">天</span>
              </span>
            </p>
          </div>
          <ul
            class="flex justify-between lg:justify-start items-center space-x-sm lg:space-x-6 mb-4"
          >
            <li class="relative group flex items-center">
              <img
                src="@/assets/images/icon_good01.svg"
                class="w-[20px] h-[20px] lg:w-[24px] lg:h-[24px] mr-2 lg:mr-0"
                alt="icon_good01"
              />
              <span class="icon">認證標章</span>
            </li>
            <li class="relative group flex items-center">
              <img
                src="@/assets/images/icon_good02.svg"
                class="w-[20px] h-[20px] lg:w-[24px] lg:h-[24px] mr-2 lg:mr-0"
                alt="icon_good02"
              />
              <span class="icon">品質保證</span>
            </li>
            <li class="relative group flex items-center">
              <img
                src="@/assets/images/icon_good03.svg"
                class="w-[20px] h-[20px] lg:w-[24px] lg:h-[24px] mr-2 lg:mr-0"
                alt="icon_good03"
              />
              <span class="icon">原創生意</span>
            </li>
            <li class="relative group flex items-center">
              <img
                src="@/assets/images/icon_good04.svg"
                class="w-[20px] h-[20px] lg:w-[24px] lg:h-[24px] mr-2 lg:mr-0"
                alt="icon_good04"
              />
              <span class="icon">人氣王</span>
            </li>
          </ul>
          <div class="flex items-center py-3.5 px-4 border-l-3 border-yellow bg-white mb-6">
            <p class="text-gray">
              專案募資中！<br />在 2021/06/14 23:59 募資結束前，您都可以贊助我們！
            </p>
          </div>
          <button
            type="button"
            class="bg-yellow rounded-24 w-full py-2 lg:py-3 text-gray mb-2 text-xl font-bold"
          >
            贊助專案
          </button>
          <div class="flex space-x-sm text-gray-light font-bold text-xl">
            <button
              type="button"
              class="flex items-center justify-center w-3/5
              py-2 lg:py-3 border-2 border-gray-light rounded-26"
            >
              <font-awesome-icon icon="heart" class="text-gray-light !w-[20px] !h-[20px] mr-2" />
              追蹤專案
            </button>
            <button
              type="button"
              class="flex items-center justify-center w-2/5
              py-2 lg:py-3 border-2 border-gray-light rounded-26"
            >
              <font-awesome-icon
                icon="share-alt"
                class="text-gray-light !w-[20px] !h-[20px] mr-2"
              />分享
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div class="lg:px-3 border-t-1 border-b-1 border-darker">
    <div class="container mx-auto">
      <ul class="flex items-center h-[52px] lg:h-17 px-2">
        <li
          class="px-4 lg:px-5 h-full flex items-center cursor-pointer border-b-2 border-transparent
          text-sm lg:text-base text-gray lg:hover:border-b-2 lg:hover:border-yellow
          lg:hover:font-bold tracking-lg active"
        >
          專案介紹
        </li>
        <li
          class="px-4 lg:px-5 h-full flex items-center cursor-pointer border-b-2 border-transparent
          text-sm lg:text-base text-gray lg:hover:border-b-2 lg:hover:border-yellow
          lg:hover:font-bold tracking-lg"
        >
          常見問答
        </li>
        <li
          class="px-4 lg:px-5 h-full flex items-center cursor-pointer border-b-2 border-transparent
          text-sm lg:text-base text-gray lg:hover:border-b-2 lg:hover:border-yellow
          lg:hover:font-bold tracking-lg"
        >
          目前進度
        </li>
        <li
          class="px-4 lg:px-5 h-full flex items-center cursor-pointer border-b-2 border-transparent
          text-sm lg:text-base text-gray lg:hover:border-b-2 lg:hover:border-yellow
          lg:hover:font-bold tracking-lg"
        >
          留言
        </li>
      </ul>
    </div>
  </div>
  <section class="px-3 pt-8 pb-12 lg:pt-12">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-3">
        <div class="col-span-2 lg:mr-12 mb-4 lg:mb-6">
          <div class="mb-4 lg:mb-6">
            <img src="@/assets/images/p1.jpg" class="mb-4 lg:mb-6 w-full" alt="" />
            <h3
              class="pl-15px border-l-4 border-yellow text-2xl
              text-gray-darker tracking-lg font-bold mb-1"
            >
              施了魔法的照片
            </h3>
            <p class="text-gray-darker leading-9 text-justify">
              受就相法大夠局來畫師我只這然以放灣得的後人心年我物我年，或人有動與次出女親構算帶年行著所間女，
              外成認心香吸工並知日成展源大超時動為生葉衣致長山對精做英密差家他微熱建取示濟定心一，品定把別銀動，
              深青輪一物加，生明果。西業白老如天有表非民大條全那遊，李文遊、像香過元學須本致信校態麼資司媽人價在它，
              地他不我計孩廠然不大指勢生的華常簡岸然，人著母病石金萬得一果。
            </p>
          </div>
          <div class="mb-4 lg:mb-6">
            <img src="@/assets/images/p2.jpg" class="mb-4 lg:mb-6 w-full" alt="" />
            <h3
              class="pl-15px border-l-4 border-yellow text-2xl
              text-gray-darker tracking-lg font-bold mb-1"
            >
              留下當下的美好
            </h3>
            <p class="text-gray-darker leading-9 text-justify">
              受就相法大夠局來畫師我只這然以放灣得的後人心年我物我年，或人有動與次出女親構算帶年行著所間女，
              外成認心香吸工並知日成展源大超時動為生葉衣致長山對精做英密差家他微熱建取示濟定心一，品定把別銀動，
              深青輪一物加，生明果。西業白老如天有表非民大條全那遊，李文遊、像香過元學須本致信校態麼資司媽人價在它，
              地他不我計孩廠然不大指勢生的華常簡岸然，人著母病石金萬得一果。
            </p>
          </div>
        </div>
        <div class="col-span-1">
          <div class="border border-gray-lighter p-4 rounded-lg mb-8">
            <div class="flex items-center mb-4">
              <img
                src="@/assets/images/store_img.jpg"
                class="rounded-full border-3 border-yellow mr-4"
                alt=""
              />
              <p class="text-gray tracking-lg">
                缺錢事務所
                <span class="block text-gray-dark tracking-xs">已發起 1 個專案</span>
              </p>
            </div>
            <p class="text-gray-dark tracking-xs text-justify mb-4">
              需要點錢錢做些酷酷的東西，拜託各位乾爹乾媽囉！
            </p>
            <div class="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="iconify iconify--entypo-socia mr-2"
                width="32"
                height="32"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 20 20"
              >
                <path
                  d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6S15.302.4 10
                  .4zm2.274 6.634h-1.443c-.171 0-.361.225-.361.524V8.6h1.805l-.273
                  1.486H10.47v4.461H8.767v-4.461H7.222V8.6h1.545v-.874c0-1.254.87-2.273
                  2.064-2.273h1.443v1.581z"
                  fill="#858377"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="iconify iconify--entypo-social"
                width="32"
                height="32"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 20 20"
              >
                <path
                  d="M11.603 9.833L9.357 8.785C9.161 8.694 9 8.796 9 9.013v1.974c0
                  .217.161.319.357.228l2.245-1.048c.197-.092.197-.242.001-.334zM10
                  .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6S15.302.4 10
                  .4zm0 13.5c-4.914 0-5-.443-5-3.9s.086-3.9 5-3.9s5 .443 5 3.9s-.086 3.9-5 3.9z"
                  fill="#858377"
                ></path>
              </svg>
              <button
                type="button"
                class="flex items-center py-1.5 px-4 border border-gray-light rounded-full ml-auto"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  class="iconify iconify--tabler mr-xs"
                  width="16"
                  height="16"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <g
                    class="icon-tabler"
                    fill="none"
                    stroke="#858377"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M3 20l1.3-3.9A9 8 0 1 1 7.7 19L3 20"></path>
                    <path d="M12 12v.01"></path>
                    <path d="M8 12v.01"></path>
                    <path d="M16 12v.01"></path>
                  </g>
                </svg>
                聯絡我們
              </button>
            </div>
          </div>
          <p
            class="bg-white-dark text-center py-1.5 mb-4 text-xl font-bold
            border-r-4 border-l-4 border-yellow rounded-lg overflow-hidden"
          >
            選擇一個方案支持
          </p>
          <div class="mb-4">
            <img src="@/assets/images/plan_img.jpg" class="w-full" alt="" />
            <div class="px-4 pt-2 pb-4 border border-white-darker rounded-b-lg">
              <div
                class="flex justify-between mb-2 text-sm text-gray
                tracking-lg pb-2 border-b border-white-darker rounded-lg"
              >
                <p>限時優惠</p>
                <p>2 days 20:05:20</p>
              </div>
              <h4 class="text-darker text-lg font-bold tracking-lg">買一送一，只有兩百組別錯過</h4>
              <p class="text-darker text-2xl leading-10 font-bold en-font">NT$ 1600</p>
              <div class="mb-2 text-xs">
                <span
                  class="inline-block py-0.5 px-4 bg-white-darker text-gray-light font-bold
                  mr-2 rounded"
                >
                  已被贊助88次
                </span>
                <span class="inline-block bg-gray-light py-0.5 px-4 text-white rounded">
                  限量<span class="text-yellow">200</span>個
                </span>
              </div>
              <p class="text-gray-light text-justify leading-6 tracking-xs mb-4">
                受就相法大夠局來畫師我只這然以放灣得的後人心年我物我年，
                或人有動與次出女親構算帶年行著所間女。
              </p>
              <button
                type="button"
                class="bg-yellow text-gray font-bold tracking-sm py-2.5 w-full rounded-full"
              >
                贊助此專案
              </button>
            </div>
          </div>
        </div>
        <div class="col-span-2">
          <img src="@/assets/images/icon_heart.svg" class="mx-auto" alt="" />
          <h3
            class="flex items-center justify-center before:h-[3px] before:w-full before:bg-yellow
              after:h-[3px] after:w-full after:bg-yellow mb-4 lg:mb-6"
          >
            <span class="whitespace-nowrap px-4 text-gray text-2xl tracking-lg font-bold">
              贊助專案
            </span>
          </h3>
          <div class="mb-4">
            <label for="plan" class="block mb-2 text-form-text">
              贊助方案
            </label>
            <select name="plan" id="plan" class="w-full bg-form-white rounded px-4 py-2">
              <option value="" disabled selected>請選擇一個方案</option>
            </select>
          </div>
          <div class="mb-4">
            <label for="name" class="block mb-2 text-form-text">收件人姓名</label>
            <input
              type="text"
              name="name"
              id="name"
              class="w-full bg-form-white rounded px-4 py-2"
            />
          </div>
          <div class="mb-4">
            <label for="phone" class="block mb-2 text-form-text">連絡電話</label>
            <input
              type="text"
              name="phone"
              id="phone"
              class="w-full bg-form-white rounded px-4 py-2"
            />
          </div>
          <div class="mb-6">
            <label for="pay" class="block mb-2 text-form-text">付款方式</label>
            <select name="pay" id="pay" class="w-full bg-form-white rounded px-4 py-2">
              <option value="信用卡付款">信用卡付款</option>
            </select>
          </div>
          <button
            type="button"
            class="block py-3 px-12 bg-yellow text-xl focus:outline-none
              mx-auto font-bold text-gray-darker rounded-full"
          >
            贊助專案
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>
