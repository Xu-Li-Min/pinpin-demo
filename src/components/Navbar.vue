<template>
  <nav class="border-b-5 border-yellow">
    <div class="container mx-auto py-4 px-4 lg:px-0 flex">
      <div class="flex items-center">
        <a href="#">
          <img src="@/assets/images/logo.jpg" class="w-28 mr-10" alt="拼拼Logo" />
        </a>
        <ul class="hidden lg:flex items-center space-x-10 text-gray">
          <li>
            <a href="#" class="p-2">關於</a>
          </li>
          <li>
            <a href="#" class="p-2">挖寶</a>
          </li>
          <li>
            <a href="#" class="p-2">我有個大膽的想法</a>
          </li>
        </ul>
      </div>
      <ul class="hidden ml-auto lg:flex items-center space-x-4">
        <li>
          <a
            href="#"
            class="p-2 px-8 border-2 border-yellow rounded-full bg-yellow text-gray font-bold"
            >登入</a
          >
        </li>
        <li>
          <a
            href="#"
            class="p-2 px-8 border-2 border-gray-light rounded-full text-gray-light font-bold"
            >註冊</a
          >
        </li>
      </ul>
      <button class="relative ml-auto block lg:hidden">
        <span
          class="h-1 block w-8 bg-gray-light before:absolute
          before:top-1/4 before:left-0 before:w-8 before:h-1 before:bg-gray-light
          before:block after:absolute
          after:bottom-1/4 after:left-0 after:w-8 after:h-1 after:bg-gray-light
          after:block"
        ></span>
      </button>
    </div>
  </nav>
</template>

<script>
export default {};
</script>
