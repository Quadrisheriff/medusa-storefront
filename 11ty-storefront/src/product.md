---
layout: layout.njk
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
    lg:max-w-4xl
    lg:pt-16
    lg:pb-24
    lg:px-8
  "
>
  <div
    class="mt-4 space-y-3 lg:mt-0"
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
    <div class="space-y-6">
      <p class="flex justify-center text-gray-900">{{ product.description }}</p>
      <div class="flex justify-center">
        <p class="text-sm font-bold text-gray-900">Product collection -</p>
        <p class="text-sm font-bold text-indigo-700">{{ product.collection.title }}</p>
      </div>
      <div class="flex justify-center">
        <p class="text-sm font-bold text-gray-900">Price -</p>
        <p class="text-sm font-bold text-indigo-700">${{ product.variants.0.prices.0.amount }}</p>
      </div>
     </div>
    <form>
      <div class="flex justify-center space-x-3 mb-5">
        <h1 class=" flex justify-center text-lg font-bold tracking-tight text-gray-900">Quantity -</h1>
        <input type="number" name="quantity" value="1" min="0" max="10" class="flex border-2 rounded-md text-blue-900 px-1 py-1 border-indigo-700" />
      </div>
      <h1 class=" flex justify-center mb-5 text-lg font-bold tracking-tight text-gray-900">Variants</h1>
      <div class="flex mt-2 max-w-xl mx-auto">
      {%- for variant in product.variants -%}
        <label for="{{ variant.id }}">
          {{ variant.title }}
          <span></span>
        </label>
        <input id="{{ variant.id }}" name="{{ variantId }}" type="radio" value="{{ variant.id }}" class="flex border -ml-24 mt-2 text-blue-900 border-indigo-700 w-full">
      {%- endfor -%}
      </div>
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
    </form>
  </div>
</div>