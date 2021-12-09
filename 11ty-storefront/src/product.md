---
layout: layout.liquid
pagination:
  data: products
  size: 1
  alias: product
permalink: "/{{ product.handle }}.html"
title: { { product.title } }
---

<div
  class="
    mt-6
    max-w-2xl
    mx-auto
    sm:px-6
    lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8
  "
>
  <div class="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
    <img
      src="{{ product.thumbnail }}"
      alt="{{ product.id }}"
      class="w-full h-full object-center object-cover"
    />
  </div>
  <div class="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
    <div class="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
      <img
        src="{{ product.images.0.url }}"
        alt="{{ product.id }}"
        class="w-full h-96 object-center object-cover"
      />
    </div>
    <div class="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
      <img
        src="{{ product.images.1.url }}"
        alt="{{ product.id }}"
        class="w-full h-full object-center object-cover"
      />
    </div>
  </div>
  <div class="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
    <div
      class="
        aspect-w-4 aspect-h-2
        sm:rounded-lg sm:overflow-hidden
        lg:aspect-w-3 lg:aspect-h-4
      "
    >
      <img
        src="{{ product.images.2.url }}"
        alt="{{ product.id }}"
        class="w-full h-full object-center object-cover"
      />
    </div>
    <div
      class="
        aspect-w-4 aspect-h-2
        sm:rounded-lg sm:overflow-hidden
        lg:aspect-w-3 lg:aspect-h-4
      "
    >
      <img
        src="{{ product.images.3.url }}"
        class="w-full h-full object-center object-cover"
      />
    </div>
  </div>
</div>
<div
  class="
    max-w-2xl
    mx-auto
    pt-10
    pb-16
    px-4
    sm:px-6
    lg:max-w-7xl
    lg:pt-16
    lg:pb-24
    lg:px-8
    lg:grid
    lg:grid-cols-3
    lg:grid-rows-[auto,auto,1fr]
    lg:gap-x-8
  "
>
  <div
    class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8 mt-4 lg:mt-0"
  >
    <h1
      class="
        flex
        justify-center
        mb-5
        text-2xl
        font-extrabold
        tracking-tight
        text-gray-900
        sm:text-3xl
      "
    >
      {{ product.title }}
    </h1>
    <div class="flex justify-center space-y-6"><p class="text-gray-900">{{ product.description }}</p></div>
    <p class="text-3xl flex justify-center text-gray-900">$ {{ product.variants.0.prices.0.amount }}</p>
    <p class="text-sm font-bold flex justify-center text-gray-900">{{ product.collection.title }}</p>
    <p class="text-sm font-bold flex justify-center text-gray-900">Product ID = {{ product.id }}</p>
    <button
      type="submit"
      class="
        mt-10
        w-full
        bg-blue-900
        border border-transparent
        rounded-md
        py-3
        px-8
        flex
        items-center
        justify-center
        text-base
        font-medium
        text-white
        hover:bg-indigo-700
        focus:outline-none
        focus:ring-2
        focus:ring-offset-2
        focus:ring-indigo-500
      "
    >
      Add to cart
    </button>
  </div>
</div>
