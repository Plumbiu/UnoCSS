# 1. unoCSS 配置

`unoCSS` 默认提供了三种预设

- `@unoCSS/preset-uno `工具类预设
- `@unoCSS/preset-attributify` 属性化预设
- `@unoCSS/preset-icons` 图标类icon支持

```
npm i unocss @unocss/preset-uno @unocss/preset-attributify @unocss/preset-icons
```

`vite.config.ts`

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import unocss from 'unocss/vite'
import { presetUno, presetAttributify, presetIcons } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), unocss({
    presets: [presetUno(), presetAttributify()],
    transformers: [transformerDirectives()]
  })],
})
```

`main.ts` 添加导入 `uno.css` 样式

```ts
// main.ts
import 'uno.css'
```

# 2. Layout

本章实践的组件均存放在 components/Layout 目录下

## 2.1 Aspect Ratio

宽长占比

| Class         | Properties           |
| ------------- | -------------------- |
| aspect-auto   | aspect-ratio: auto;  |
| aspect-square | aspect-ratio: 1 / 1  |
| aspect-video  | aspect-ratio: 16 / 9 |

**实践：**

```vue
<template>
  <div class="container">
    <div class="aspect-auto">
      自动宽长比
    </div>
    <div class="aspect-square">
      正方形
    </div>
    <div class="aspect-video">
      屏幕比 16 / 9
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 150px;
  height: 100px;
}
.container div {
  margin: 15px 0;
  background-color: cyan;
}
</style>
```

## 2.2 Container

语法：`Breakpoint:container`

| Breakpoint | Properties         |
| ---------- | ------------------ |
| None       | width: 100%;       |
| sm         | max-width: 640px;  |
| md         | max-width: 768px;  |
| lg         | max-width: 1024px; |
| xl         | max-width: 1280px; |
| 2xl        | max-width: 1536px; |

**实践**：

```vue
<template>
  <div class="sm:container">
    1234567891011121314151617181920212223242526272829303132333435363738394041424344454647484950
  </div>
</template>
```

## 2.3 Columns

| Class        | Properties                   |
| ------------ | ---------------------------- |
| columns-1    | columns: 1;                  |
| columns-2    | columns: 2;                  |
| columns-3    | columns: 3;                  |
| ...          | ...                          |
| columns-12   | columns: 12;                 |
| columns-auto | columns: auto;               |
| columns-3xs  | columns: 16rem; /* 256px */  |
| columns-2xs  | columns: 18rem; /* 288px */  |
| columns-xs   | columns: 20rem; /* 320px */  |
| columns-sm   | columns: 24rem; /* 384px */  |
| columns-md   | columns: 28rem; /* 448px */  |
| columns-lg   | columns: 32rem; /* 512px */  |
| columns-xl   | columns: 36rem; /* 576px */  |
| columns-2xl  | columns: 42rem; /* 672px */  |
| columns-3xl  | columns: 48rem; /* 768px */  |
| columns-4xl  | columns: 56rem; /* 896px */  |
| columns-5xl  | columns: 64rem; /* 1024px */ |
| columns-6xl  | columns: 72rem; /* 1152px */ |
| columns-7xl  | columns: 80rem; /* 1280px */ |

**实践**

```vue
<template>
  <div class="columns-3">
    <img class="w-full aspect-video" src="/1.png" alt="">
    <img class="w-full aspect-square" src="/2.png" alt="">
    <img class="w-full aspect-square" src="/3.png" alt="">
    <img class="w-full aspect-square" src="/4.png" alt="">
    <img class="w-full aspect-square" src="/5.png" alt="">
    <img class="w-full aspect-square" src="/6.png" alt="">
  </div>
</template>
```

## 2.4 Break After

| Class                  | Properties               |
| ---------------------- | ------------------------ |
| break-after-auto       | break-after: auto;       |
| break-after-avoid      | break-after: avoid;      |
| break-after-all        | break-after: all;        |
| break-after-avoid-page | break-after: avoid-page; |
| break-after-page       | break-after: page;       |
| break-after-left       | break-after: left;       |
| break-after-right      | break-after: right;      |
| break-after-column     | break-after: column;     |

**实践**

```vue
<template>
  <div class="columns-2">
    <p>Well, let me tell you something, ...</p>
    <p class="break-after-column">Sure, go ahead, laugh...</p>
    <p>Maybe we can live without...</p>
    <p>Look. If you think this is...</p>
  </div>
</template>
```

## 2.5 Break Before

| Class                   | Properties                |
| ----------------------- | ------------------------- |
| break-before-auto       | break-before: auto;       |
| break-before-avoid      | break-before: avoid;      |
| break-before-all        | break-before: all;        |
| break-before-avoid-page | break-before: avoid-page; |
| break-before-page       | break-before: page;       |
| break-before-left       | break-before: left;       |
| break-before-right      | break-before: right;      |
| break-before-column     | break-before: column;     |

**实践**

```vue
<template>
  <div class="columns-2">
    <p>Well, let me tell you something, ...</p>
    <p class="break-before-column">Sure, go ahead, laugh...</p>
    <p>Maybe we can live without...</p>
    <p>Look. If you think this is...</p>
  </div>
</template>
```

## 2.6 Break Inside

| Class                     | Properties                  |
| ------------------------- | --------------------------- |
| break-inside-auto         | break-inside: auto;         |
| break-inside-avoid        | break-inside: avoid;        |
| break-inside-avoid-page   | break-inside: avoid-page;   |
| break-inside-avoid-column | break-inside: avoid-column; |

**实践**

```vue
<template>
  <div class="columns-2">
    <p>Well, let me tell you something, ...</p>
    <p class="break-inside-avoid-column">Sure, go ahead, laugh...</p>
    <p>Maybe we can live without...</p>
    <p>Look. If you think this is...</p>
  </div>
</template>
```

## 2.7 Box Decoration Break

先留着，看不太懂

[Box Decoration Break - Tailwind CSS](https://tailwindcss.com/docs/box-decoration-break)

## 2.8 Box Sizing

| Class       | Properties               |
| ----------- | ------------------------ |
| box-border  | box-sizing: border-box;  |
| box-content | box-sizing: content-box; |

**实践**

```vue
<template>
  <div>
    <div class="box-content bg-red h-32 w-32 p-4 border-4">content-box</div>
    <div class="box-border bg-red h-32 w-32 p-4 border-4">border-box</div>
  </div>
</template>
```

## 2.9 Display

| Class              | Properties                   |
| ------------------ | ---------------------------- |
| block              | display: block;              |
| inline-block       | display: inline-block;       |
| inline             | display: inline;             |
| flex               | display: flex;               |
| inline-flex        | display: inline-flex;        |
| table              | display: table;              |
| inline-table       | display: inline-table;       |
| table-caption      | display: table-caption;      |
| table-cell         | display: table-cell;         |
| table-column       | display: table-column;       |
| table-column-group | display: table-column-group; |
| table-footer-group | display: table-footer-group; |
| table-header-group | display: table-header-group; |
| table-row-group    | display: table-row-group;    |
| table-row          | display: table-row;          |
| flow-root          | display: flow-root;          |
| grid               | display: grid;               |
| inline-grid        | display: inline-grid;        |
| contents           | display: contents;           |
| list-item          | display: list-item;          |
| hidden             | display: none;               |

**实践**

```vue
<template>
  <div class="flex">
    <div>111</div>
    <div>222</div>
    <div>333</div>
    <div>444</div>
    <div>555</div>
  </div>
</template>
```

## 2.10 Floats

| Class       | Properties    |
| ----------- | ------------- |
| float-right | float: right; |
| float-left  | float: left;  |
| float-none  | float: none;  |

**实践**

```Vue
<template>
  <div>
    <div class="float-left">left</div>
    <div class="float-right">right</div>
    <div class="float-none">none</div>
  </div>
</template>
```

## 2.11 Clear、Isolation、Object Fit、Object Position

说实话，看不懂

[Clear - Tailwind CSS](https://tailwindcss.com/docs/clear)

[Isolation - Tailwind CSS](https://tailwindcss.com/docs/isolation)

[Object Fit - Tailwind CSS](https://tailwindcss.com/docs/object-fit)

[Object Position - Tailwind CSS](https://tailwindcss.com/docs/object-position)

## 2.12 Overflow

| Class              | Properties           |
| ------------------ | -------------------- |
| overflow-auto      | overflow: auto;      |
| overflow-hidden    | overflow: hidden;    |
| overflow-clip      | overflow: clip;      |
| overflow-visible   | overflow: visible;   |
| overflow-scroll    | overflow: scroll;    |
| overflow-x-auto    | overflow-x: auto;    |
| overflow-y-auto    | overflow-y: auto;    |
| overflow-x-hidden  | overflow-x: hidden;  |
| overflow-y-hidden  | overflow-y: hidden;  |
| overflow-x-clip    | overflow-x: clip;    |
| overflow-y-clip    | overflow-y: clip;    |
| overflow-x-visible | overflow-x: visible; |
| overflow-y-visible | overflow-y: visible; |
| overflow-x-scroll  | overflow-x: scroll;  |
| overflow-y-scroll  | overflow-y: scroll;  |

**实践**

```vue
<template>
  <div class="w-50 overflow-hidden">
   1234567891011213141516171819202122232425262728293031323334353637383940
  </div>
</template>
```

## 2.13 Overscroll Behavior

| Class                | Properties                      |
| -------------------- | ------------------------------- |
| overscroll-auto      | overscroll-behavior: auto;      |
| overscroll-contain   | overscroll-behavior: contain;   |
| overscroll-none      | overscroll-behavior: none;      |
| overscroll-y-auto    | overscroll-behavior-y: auto;    |
| overscroll-y-contain | overscroll-behavior-y: contain; |
| overscroll-y-none    | overscroll-behavior-y: none;    |
| overscroll-x-auto    | overscroll-behavior-x: auto;    |
| overscroll-x-contain | overscroll-behavior-x: contain; |
| overscroll-x-none    | overscroll-behavior-x: none;z   |

## 2.14 Position

| Class    | Properties          |
| -------- | ------------------- |
| static   | position: static;   |
| fixed    | position: fixed;    |
| absolute | position: absolute; |
| relative | position: relative; |
| sticky   | position: sticky;   |

**实践**

```vue
<template>
  <div>
    <div class="absolute bottom-0 left-0">123456</div>
  </div>
</template>
```

## 2.15 Top、Right、Bottom、Left

更具体的属性可查阅[Top / Right / Bottom / Left - Tailwind CSS](https://tailwindcss.com/docs/top-right-bottom-left)

这里只介绍主要的

| Class     | Properties                                                   |
| --------- | ------------------------------------------------------------ |
| top-1     | top: 0.25rem;                                                |
| right-1   | right: 0.25rem;                                              |
| bottom-1  | bottom: 0.25rem;                                             |
| left-1    | left: 0.25rem;                                               |
| inset-y-1 | top: 0.25rem;<br />bottom: 0.25rem;                          |
| inset-y-1 | top: 0.25rem; <br />bottom: 0.25rem;                         |
| inset-1   | top: 0.25rem;<br />right: 0.25rem;<br />bottom: 0.25rem;<br />left: 0.25rem; |

**注**：默认 1rem 为 16px

```vue
<template>
  <div>
    <div class="absolute top-25 left-25">123456789</div>
  </div>
</template>
```

## 2.16 Visibility

| Class     | Properties            |
| --------- | --------------------- |
| visible   | visibility: visible;  |
| invisible | visibility: hidden;   |
| collapse  | visibility: collapse; |

**实践**

```vue
<template>
  <div>
    <div class="visible">visible</div>
    <div class="invisible">invisible</div>
    <div class="collapse">collapse</div>
  </div>
</template>
```

## 2.17 Z-Index

| Class    | Properties`     |
| -------- | --------------- |
| z-${num} | z-index: ${num} |
| z-auto   | z-index: auto   |

# 3. Flexbox & Grid

本章节实践均放在 `components` 目录下 `FlexboxGrid` 文件夹

## 3.1 Flex Basis

| Class        | Properties                  |
| ------------ | --------------------------- |
| basis-${num} | flex-basis: ${num} / 4 rem; |
| basis-auto   | flex-basis: auto;           |
| basis-1/2    | flex-basis: 50%;            |
| basis-full   | flex-basis: 100%;           |

**实践**

```vue
<template>
  <div class="flex">
      <div class="basis-1/4 bg-cyan">111</div>
      <div class="basis-1/2 bg-cyan">222</div>
      <div class="basis-1/4 bg-cyan">333</div>
  </div>
</template>
```

## 3.2 Flex Direction

| Class            | Properties                      |
| ---------------- | ------------------------------- |
| flex-row         | flex-direction: row;            |
| flex-row-reverse | flex-direction: row-reverse;    |
| flex-col         | flex-direction: column;         |
| flex-col-reverse | flex-direction: column-reverse; |

**实践**

```vue
<template>
  <div class="flex flex-col">
    <div>111</div>
    <div>222</div>
    <div>333</div>
  </div>
</template>
```

## 3.3 Flex Wrap

| Class             | Properties               |
| ----------------- | ------------------------ |
| flex-wrap         | flex-wrap: wrap;         |
| flex-wrap-reverse | flex-wrap: wrap-reverse; |
| flex-nowrap       | flex-wrap: nowrap;       |

**实践**

```vue
<template>
  <div>
    <div class="flex flex-wrap w-15">
      <div>111</div>
      <div>222</div>
      <div>333</div>
    </div>
    <div class="flex flex-nowrap w-15">
      <div>111</div>
      <div>222</div>
      <div>333</div>
    </div>
  </div>
</template>
```

## 3.4 Flex

| Class        | Properties      |
| ------------ | --------------- |
| flex-1       | flex: 1 1 0%;   |
| flex-auto    | flex: 1 1 auto; |
| flex-initial | flex: 0 1 auto; |
| flex-none    | flex: none;     |

`flex-initial` 是让受 `flex` 控制的元素按需收缩，但不会生长，会将大小算入其中

`flex-1` 是让受 `flex` 控制的元素按需生长或收缩，忽略它最开始的大小

`flex-auto` 是让受 `flex` 控制的元素按需生长或收缩，但是会将设置的大小算进

`flex-none` 是为了阻止受 `flex` 控制的元素生长或伸缩

**实践**

```vue
<template>
  <div>
    <div class="flex">
      <div class="flex-none bg-yellow w-14">111</div>
      <div class="flex-initial bg-lightblue w-64">222</div>
      <div class="flex-initial bg-red w-32">333</div>
    </div>
    <div class="flex">
      <div class="flex-none bg-yellow">111</div>
      <div class="flex-1 w-64 bg-lightblue">222</div>
      <div class="flex-1 w-64 bg-red">333</div>
    </div>
    <div class="flex">
      <div class="flex-none bg-yellow">444</div>
      <div class="flex-auto w-32 bg-lightblue">555</div>
      <div class="flex-auto w-32 bg-red">666</div>
    </div>
    <div class="flex">
      <div class="flex-none bg-yellow">777</div>
      <div class="flex-none w-64 bg-lightblue">888</div>
      <div class="flex-1 w-64 bg-red">999</div>
    </div>
  </div>
</template>
```

## 3.5 Flex Grow

| Class  | Properties    |
| ------ | ------------- |
| grow   | flex-grow: 1; |
| grow-0 | flex-grow: 0; |

**实践**

```vue
<template>
  <div>
    <div class="flex">
      <div class="grow bg-red">
        123456
      </div>
      <div class="grow-0 bg-cyan">
        123456
      </div>
      <div class="grow bg-yellow">
        123456
      </div>
    </div>
  </div>
</template>
```

## 3.6 Flex Shrink

| Class    | Properties      |
| -------- | --------------- |
| shrink   | flex-shrink: 1; |
| shrink-0 | flex-shrink: 0; |

**实践**

```vue
<template>
  <div>
    <div class="flex w-64">
      <div class="flex-1 shrink bg-red">111</div>
      <div class="shrink w-64 bg-cyan">222</div>
      <div class="flex-1 bg-yellow">333</div>
    </div>
    <div class="flex w-64">
      <div class="flex-1 shrink bg-red">111</div>
      <div class="shrink-0 w-64 bg-cyan">222</div>
      <div class="flex-1 bg-yellow">333</div>
    </div>
  </div>
</template>
```

## 3.7 order

[Order - Tailwind CSS](https://tailwindcss.com/docs/order)

## 3.8 Grid

先预留着，Grid 布局还没大看

## 3.9 Justify content

| Class           | Properties                      |
| --------------- | ------------------------------- |
| justify-start   | justify-content: flex-start;    |
| justify-end     | justify-content: flex-end;      |
| justify-center  | justify-content: center;        |
| justify-between | justify-content: space-between; |
| justify-around  | justify-content: space-around;  |
| justify-evenly  | justify-content: space-evenly;  |

**实践**

```vue
<template>
  <div>
    <div class="flex justify-start bg-cyan">
      <div class="bg-blue">01</div>
      <div class="bg-blue">02</div>
      <div class="bg-blue">03</div>
    </div>
    <div class="flex justify-center bg-cyan">
      <div class="bg-blue">01</div>
      <div class="bg-blue">02</div>
      <div class="bg-blue">03</div>
    </div>
    <div class="flex justify-end bg-cyan">
      <div class="bg-blue">01</div>
      <div class="bg-blue">02</div>
      <div class="bg-blue">03</div>
    </div>
  </div>
...
</template>
```

## 3.10 Justify Items、Justify Self

这个是 grid 布局的，不太会。。

## 3.11 Align Items

先说一下 `align-items` 和 `align-self` 的区别，`align-items` 作用于父元素，`align-self` 作用于子元素，可以覆盖 `align-items`

| Class          | Properties               |
| -------------- | ------------------------ |
| items-start    | align-items: flex-start; |
| items-end      | align-items: flex-end;   |
| items-center   | align-items: center;     |
| items-baseline | align-items: baseline;   |
| items-stretch  | align-items: stretch;    |

```vue
<template>
  <div>
    <div class="flex items-center h-16 bg-red">
      <div class="flex-1 h-12 bg-blue">01</div>
      <div class="flex-1 h-12 bg-blue">02</div>
      <div class="flex-1 h-12 bg-blue">03</div>
    </div>
    <div class="flex m-5 items-end h-16 bg-red">
      <div class="flex-1 h-12 bg-blue">01</div>
      <div class="flex-1 h-12 bg-blue">02</div>
      <div class="flex-1 h-12 bg-blue">03</div>
    </div>
  </div>
</template>
```

## 3.12 Align Self

| Class         | Properties              |
| ------------- | ----------------------- |
| self-auto     | align-self: auto;       |
| self-start    | align-self: flex-start; |
| self-end      | align-self: flex-end;   |
| self-center   | align-self: center;     |
| self-stretch  | align-self: stretch;    |
| self-baseline | align-self: baseline;   |

**实践**

```vue
<template>
  <div>
    <div class="flex items-stretch h-16 bg-red">
      <div class="bg-blue">01</div>
      <div class="self-start bg-blue">02</div>
      <div class="bg-blue">03</div>
    </div>
  </div>
</template>
```

## 3.13 Place Content、Place Items、Place Self

又是关于 grid 的，先放着

# 4. Spacing

本章节不再演示

## 4.1 Padding

| Class | Properties                                                   |
| ----- | ------------------------------------------------------------ |
| p-1   | padding: 0.25rem; /* 4px */                                  |
| px-1  | padding-left: 0.25rem; /* 4px */ padding-right: 0.25rem; /* 4px */ |
| py-1  | padding-top: 0.25rem; /* 4px */ padding-bottom: 0.25rem; /* 4px */ |
| pt-1  | padding-top: 0.25rem; /* 4px */                              |
| pr-1  | padding-right: 0.25rem; /* 4px */                            |
| pb-1  | padding-bottom: 0.25rem; /* 4px */                           |
| pl-1  | padding-left: 0.25rem; /* 4px */                             |

## 4.2 Margin

| Class | Properties                                                   |
| ----- | ------------------------------------------------------------ |
| m-1   | margin: 0.25rem; /* 4px */                                   |
| mx-1  | margin-left: 0.25rem; /* 4px */ margin-right: 0.25rem; /* 4px */ |
| my-1  | margin-top: 0.25rem; /* 4px */ margin-bottom: 0.25rem; /* 4px */ |
| mt-1  | margin-top: 0.25rem; /* 4px */                               |
| mr-1  | margin-right: 0.25rem; /* 4px */                             |
| mb-1  | margin-bottom: 0.25rem; /* 4px */                            |
| ml-1  | margin-left: 0.25rem; /* 4px */                              |

## 4.3 Space Between

| Class       | Properties                      |
| ----------- | ------------------------------- |
| space-x-1 > | margin-left: 0.25rem; /* 4px */ |
| space-y-1   | margin-top: 0.25rem; /* 4px */  |

# 5. Sizing

## 5.1 Width

| Class    | Properties                           |
| -------- | ------------------------------------ |
| w-0      | width: 0px;                          |
| w-px     | width: 1px;                          |
| w-${num} | width: ${num/4}rem; /* ${num*4}px */ |
| w-1/2    | width: 50%;                          |

**实践**

```vue
<template>
  <div>
    <div class="w-25 m-5 bg-cyan">1</div>
    <div class="w-50 m-5 bg-cyan">2</div>
    <div class="w-75 m-5 bg-cyan">3</div>
    <div class="w-100 m-5 bg-cyan">4</div>
    <div class="w-125 m-5 bg-cyan">5</div>
    <div class="w-1/2 m-5 bg-cyan">7</div>
    <div class="w-1/3 m-5 bg-cyan">8</div>
    <div class="w-1/4 m-5 bg-cyan">9</div>
  </div>
</template>
```

## 5.2 Min Width

| Class      | Properties              |
| ---------- | ----------------------- |
| min-w-0    | min-width: 0px;         |
| min-w-full | min-width: 100%;        |
| min-w-min  | min-width: min-content; |
| min-w-max  | min-width: max-content; |
| min-w-fit  | min-width: fit-content; |

`min-content` 装下单个最大内容的最小宽度

`max-content` 内容有多宽，盒子就有多宽，不会顾及父级盒子有多宽

`fit-content` 在不超过父级盒子宽度的情况下，尽量撑开盒子满足自己的需求

**实践**

```vue
<template>
  <div class="w-20 bg-red">
    <div class="min-w-max bg-cyan">这是一段测试文字，测试 max-content 属性</div>
    <div class="min-w-min bg-cyan">
      <p class="text-25 bg-yello">你好</p>
      <p>世界</p>
    </div>
    <div class="min-w-fit bg-cyan">这是一段测试文字，测试 fit-content 属性</div>
  </div>
</template>
```

## 5.3 Max-Width

当元素宽度小于 max-width 时，元素以 width 为准

当元素宽度大于 max-width 时，元素以 max-width 为准

| Class            | Properties                    |
| ---------------- | ----------------------------- |
| max-w-0          | max-width: 0rem; /* 0px */    |
| max-w-none       | max-width: none;              |
| max-w-xs         | max-width: 20rem; /* 320px */ |
| max-w-sm         | max-width: 24rem; /* 384px */ |
| max-w-md         | max-width: 28rem; /* 448px */ |
| max-w-lg         | max-width: 32rem; /* 512px */ |
| max-w-xl         | max-width: 36rem; /* 576px */ |
| max-w-2xl        | max-width: 42rem; /* 672px */ |
| max-w-nxl        | ....                          |
| max-w-full       | max-width: 100%;              |
| max-w-min        | max-width: min-content;       |
| max-w-max        | max-width: max-content;       |
| max-w-fit        | max-width: fit-content;       |
| max-w-prose      | max-width: 65ch;              |
| max-w-screen-sm  | max-width: 640px;             |
| max-w-screen-md  | max-width: 768px;             |
| max-w-screen-lg  | max-width: 1024px;            |
| max-w-screen-xl  | max-width: 1280px;            |
| max-w-screen-2xl | max-width: 1536px;            |

**实践**

由于本项目不是响应式，所以演示不是很成功

```vue
<template>
  <div style="width: 80vw">
    <img src="/1.png" class="max-w-screen-sm w-full" alt="">
  </div>
</template>
```

## 5.4 Height

| Class    | Properties                 |
| -------- | -------------------------- |
| h-0      | height: 0px;               |
| h-px     | height: 1px;               |
| h-1      | height: 0.25rem; /* 4px */ |
| h-auto   | height: auto;              |
| h-1/2    | height: 50%;               |
| h-full   | height: 100%;              |
| h-screen | height: 100vh;             |
| h-min    | height: min-content;       |
| h-max    | height: max-content;       |
| h-fit    | height: fit-content;       |

**实践**

```vue
<template>
  <div class="flex">
    <div class="h-10 bg-cyan mx-5">1</div>
    <div class="h-20 bg-cyan mx-5">2</div>
    <div class="h-30 bg-cyan mx-5">3</div>
    <div class="h-40 bg-cyan mx-5">4</div>
    <div class="h-50 bg-cyan mx-5">5</div>
    <div class="h-60 bg-cyan mx-5">6</div>
    <div class="h-70 bg-cyan mx-5">7</div>
    <div class="h-80 bg-cyan mx-5">8</div>
    <div class="h-90 bg-cyan mx-5">9</div>
  </div>
</template>
```

## 5.5 Min-Height、Max-Height

与 Width 一样，这里不多赘述，直接列表格

**Min-Height**

| Class        | Properties               |
| ------------ | ------------------------ |
| min-h-0      | min-height: 0px;         |
| min-h-full   | min-height: 100%;        |
| min-h-screen | min-height: 100vh;       |
| min-h-min    | min-height: min-content; |
| min-h-max    | min-height: max-content; |
| min-h-fit    | min-height: fit-content; |

**Max-Height**

| Class        | Properties                     |
| ------------ | ------------------------------ |
| max-h-0      | max-height: 0px;               |
| max-h-px     | max-height: 1px;               |
| max-h-1      | max-height: 0.25rem; /* 4px */ |
| max-h-full   | max-height: 100%;              |
| max-h-screen | max-height: 100vh;             |
| max-h-min    | max-height: min-content;       |
| max-h-max    | max-height: max-content;       |
| max-h-fit    | max-height: fit-content;       |

# 6. Typography

本章节内容均放在 `components/Typography` 目录下

## 6.1 Font Family

| Class      | Properties                                                   |
| ---------- | ------------------------------------------------------------ |
| font-sans  | font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; |
| font-serif | font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif; |
| font-mono  | font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; |

**实践**

```vue
<template>
  <div>
    <div class="font-sans">This is a paragraph of text</div>
    <div class="font-serif">This is paragraph of text</div>
    <div class="font-mono">This is paragraph of text</div>
  </div>
</template>
```

## 6.2 Font Size

| Class     | Properties                                        |
| --------- | ------------------------------------------------- |
| text-xs   | font-size: 0.75rem; <br />line-height: 1rem;      |
| text-sm   | font-size: 0.875rem; <br />line-height: 1.25rem;  |
| text-base | font-size: 1rem;<br /> line-height: 1.5rem;       |
| text-lg   | font-size: 1.125rem; <br /> line-height: 1.75rem; |
| text-xl   | font-size: 1.25rem; <br />line-height: 1.75rem;   |
| text-2xl  | font-size: 1.5rem; <br /> line-height: 2rem;      |

**实践**

```vue
<template>
  <div class="h-80 bg-red">
    <div class="h-8 bg-cyan my-4 text-xs">This is a paragraph of text</div>
    <div class="h-8 bg-cyan my-4 text-sm">This is a paragraph of text</div>
    <div class="h-8 bg-cyan my-4 text-base">This is a paragraph of text text</div>
    <div class="h-8 bg-cyan my-4 text-lg">This is a paragraph of text text</div>
    <div class="h-8 bg-cyan my-4 text-xl">This is a paragraph of text text</div>
    <div class="h-8 bg-cyan my-4 text-2xl">This is a paragraph of text text</div>
  </div>
</template>
```

## 6.3 Font Smoothing

| Class                | Properties                                                   |
| -------------------- | ------------------------------------------------------------ |
| antialiased          | -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; |
| subpixel-antialiased | -webkit-font-smoothing: auto; -moz-osx-font-smoothing: auto; |

## 6.2 Font Style

| Class      | Properties          |
| ---------- | ------------------- |
| italic     | font-style: italic; |
| not-italic | font-style: normal; |

**实践**

```vue
<template>
  <div>
    <div>This is a praagraph of normal text</div>
    <div class="italic">This is a praagraph of italic text</div>
    <div class="not-italic">This is a praagraph of not-italic text</div>
  </div>
</template>
```

## 6.3 Font Weight

| Class           | Properties        |
| --------------- | ----------------- |
| font-thin       | font-weight: 100; |
| font-extralight | font-weight: 200; |
| font-light      | font-weight: 300; |
| font-normal     | font-weight: 400; |
| font-medium     | font-weight: 500; |
| font-semibold   | font-weight: 600; |
| font-bold       | font-weight: 700; |
| font-extrabold  | font-weight: 800; |
| font-black      | font-weight: 900; |

**实践**

```Vue
<template>
  <div>
    <div class="font-thin">This is a paragraph of text</div>
    <div class="font-extralight">This is a paragraph of text</div>
    <div class="font-light">This is a paragraph of text</div>
    <div class="font-normal">This is a paragraph of text</div>
    <div class="font-medium">This is a paragraph of text</div>
    <div class="font-semibold">This is a paragraph of text</div>
    <div class="font-bold">This is a paragraph of text</div>
    <div class="font-extrabold">This is a paragraph of text</div>
    <div class="font-black">This is a paragraph of text</div>
  </div>
</template>
```

## 6.4  Font Variant Numeric

| Class              | Properties                                |
| ------------------ | ----------------------------------------- |
| normal-nums        | font-variant-numeric: normal;             |
| ordinal            | font-variant-numeric: ordinal;            |
| slashed-zero       | font-variant-numeric: slashed-zero;       |
| lining-nums        | font-variant-numeric: lining-nums;        |
| oldstyle-nums      | font-variant-numeric: oldstyle-nums;      |
| proportional-nums  | font-variant-numeric: proportional-nums;  |
| tabular-nums       | font-variant-numeric: tabular-nums;       |
| diagonal-fractions | font-variant-numeric: diagonal-fractions; |
| stacked-fractions  | font-variant-numeric: stacked-fractions;  |

**实践(不知道有啥效果)**

```vue
<template>
  <div>
    <div class="normal-nums">1st 2nd 3rd 4th 5th</div>
    <div class="ordinal">1st 2nd 3rd 4th 5th</div>
    <div class="slashed-zero">1st 2nd 3rd 4th 5th</div>
    <div class="lining-nums">1st 2nd 3rd 4th 5th</div>
    <div class="oldstyle-nums">1st 2nd 3rd 4th 5th</div>
    <div class="proportional-nums">1st 2nd 3rd 4th 5th</div>
    <div class="tabular-nums">1st 2nd 3rd 4th 5th</div>
    <div class="diagonal-fractions">1st 2nd 3rd 4th 5th</div>
    <div class="stacked-fractions">1st 2nd 3rd 4th 5th</div>
  </div>
</template>
```

[Font Variant Numeric - Tailwind CSS](https://tailwindcss.com/docs/font-variant-numeric)

## 6.5 letter Spacing

| Class            | Properties                |
| ---------------- | ------------------------- |
| tracking-tighter | letter-spacing: -0.05em;  |
| tracking-tight   | letter-spacing: -0.025em; |
| tracking-normal  | letter-spacing: 0em;      |
| tracking-wide    | letter-spacing: 0.025em;  |
| tracking-wider   | letter-spacing: 0.05em;   |
| tracking-widest  | letter-spacing: 0.1em;    |

**实践**

```vue
<template>
  <div>
    <div class="tracking-tighter">This is a paragraph of text</div>
    <div class="tracking-tight">This is a paragraph of text</div>
    <div class="tracking-normal">This is a paragraph of text</div>
    <div class="tracking-wide">This is a paragraph of text</div>
    <div class="tracking-wider">This is a paragraph of text</div>
    <div class="tracking-widest">This is a paragraph of text</div>
  </div>
</template>
```

## 6.6 Line Height

| Class           | Properties                      |
| --------------- | ------------------------------- |
| leading-3       | line-height: .75rem; /* 12px */ |
| leading-none    | line-height: 1;                 |
| leading-tight   | line-height: 1.25;              |
| leading-snug    | line-height: 1.375;             |
| leading-normal  | line-height: 1.5;               |
| leading-relaxed | line-height: 1.625;             |
| leading-loose   | line-height: 2;                 |

**实践**

```Vue
<template>
  <div >
    <div class="bg-cyan my-5 leading-3">line</div>
    <div class="bg-cyan my-5 leading-none">line</div>
    <div class="bg-cyan my-5 leading-tight">line</div>
    <div class="bg-cyan my-5 leading-snug">line</div>
    <div class="bg-cyan my-5 leading-normal">line</div>
    <div class="bg-cyan my-5 leading-relaxed">line</div>
    <div class="bg-cyan my-5 leading-loose">line</div>
  </div>
</template>
```

## 6.7 List Style Type

| Class        | Properties                |
| ------------ | ------------------------- |
| list-none    | list-style-type: none;    |
| list-disc    | list-style-type: disc;    |
| list-decimal | list-style-type: decimal; |

**实践**

```vue
<template>
  <ul>
    <li class="list-none">00</li>
    <li class="list-disc">11</li>
    <li class="list-decimal">22</li>
  </ul>
</template>
```

## 6.8 List Style Position

| Class        | Properties                    |
| ------------ | ----------------------------- |
| list-inside  | list-style-position: inside;  |
| list-outside | list-style-position: outside; |

官方的效果图

![](F:\Material\博客图片\QQ截图20230120141947.png)

**实践**

```vue
<template>
  <ul>
    <li class="list-inside">12345</li>
    <li class="list-inside">12345</li>
    <li class="list-inside">12345</li>
  </ul>
  <ul>
    <li class="list-outside">12345</li>
    <li class="list-outside">12345</li>
    <li class="list-outside">12345</li>
  </ul>
</template>
```

## 6.9 Text Align

| Class        | Properties           |
| ------------ | -------------------- |
| text-left    | text-align: left;    |
| text-center  | text-align: center;  |
| text-right   | text-align: right;   |
| text-justify | text-align: justify; |
| text-start   | text-align: start;   |
| text-end     | text-align: end;     |

**实践**

```vue
<template>
  <div>
    <div class="bg-cyan my-5 text-left">left text</div>
    <div class="bg-cyan my-5 text-center">center text</div>
    <div class="bg-cyan my-5 text-right">right text</div>
    <div class="bg-cyan my-5 text-justify">justify text</div>
    <div class="bg-cyan my-5 text-start">start text</div>
    <div class="bg-cyan my-5 text-end">end text</div>
  </div>
</template>
```

## 6.10 Text Color

| Class            | Properties               | Preview |
| ---------------- | ------------------------ | ------- |
| text-inherit     | color: inherit;          | Aa      |
| text-current     | color: currentColor;     | Aa      |
| text-transparent | color: transparent;      | Aa      |
| text-black       | color: rgb(0 0 0);       | Aa      |
| text-white       | color: rgb(255 255 255); | Aa      |
| text-slate-50    | color: rgb(248 250 252); | Aa      |
| text-gray-50     | color: rgb(249 250 251); | Aa      |

**实践**

```vue
<template>
  <div>
    <div class="text-sky-400/100">This is a paragraph of text</div>
    <div class="text-sky-400/75">This is a paragraph of text</div>
    <div class="text-sky-400/50">This is a paragraph of text</div>
    <div class="text-sky-400/25">This is a paragraph of text</div>
    <div class="text-sky-400/0">This is a paragraph of text</div>
  </div>
</template>
```

## 6.11 Text Decoration

| Class        | Properties                          |
| ------------ | ----------------------------------- |
| underline    | text-decoration-line: underline;    |
| overline     | text-decoration-line: overline;     |
| line-through | text-decoration-line: line-through; |
| no-underline | text-decoration-line: none;         |

**实践**

```vue
<template>
  <div>
    <div class="my-5 underline">This is a paragraph of text</div>
    <div class="my-5 overline">This is a paragraph of text</div>
    <div class="my-5 line-through">This is a paragraph of text</div>
    <div class="my-5 no-underline">This is a paragraph of text</div>
  </div>
</template>
```

## 6.12 Text Decoration Color

| Class                  | Properties                           |
| ---------------------- | ------------------------------------ |
| decoration-inherit     | text-decoration-color: inherit;      |
| decoration-current     | text-decoration-color: currentColor; |
| decoration-transparent | text-decoration-color: transparent;  |
| decoration-black       | text-decoration-color: #000;         |
| decoration-white       | text-decoration-color: #fff;         |
| decoration-slate-50    | text-decoration-color: #f8fafc;      |

**实践**

```vue
<template>
  <div>
    <div class="decoration-slate my-5 underline">This is a paragraph of text</div>
    <div class="decoration-current my-5 overline">This is a paragraph of text</div>
    <div class="decoration-transparent my-5 line-through">This is a paragraph of text</div>
    <div class="decoration-sky-100 my-5 line-through">This is a paragraph of text</div>
  </div>
</template>
```

## 6.13 Text Decoration Style

| Class             | Properties                     |
| ----------------- | ------------------------------ |
| decoration-solid  | text-decoration-style: solid;  |
| decoration-double | text-decoration-style: double; |
| decoration-dotted | text-decoration-style: dotted; |
| decoration-dashed | text-decoration-style: dashed; |
| decoration-wavy   | text-decoration-style: wavy;   |

**实践**

```vue
<template>
  <div>
    <div class="decoration-solid my-5 line-through">This is a paragraph of text</div>
    <div class="decoration-double my-5 line-through">This is a paragraph of text</div>
    <div class="decoration-dotted my-5 line-through">This is a paragraph of text</div>
    <div class="decoration-dashed my-5 line-through">This is a paragraph of text</div>
    <div class="decoration-wavy my-5 line-through">This is a paragraph of text</div>
  </div>
</template>
```

## 6.14 Text Decoration Thickness

| Class                | Properties                            |
| -------------------- | ------------------------------------- |
| decoration-auto      | text-decoration-thickness: auto;      |
| decoration-from-font | text-decoration-thickness: from-font; |
| decoration-0         | text-decoration-thickness: 0px;       |
| decoration-1         | text-decoration-thickness: 1px;       |
| decoration-2         | text-decoration-thickness: 2px;       |
| decoration-4         | text-decoration-thickness: 4px;       |
| decoration-8         | text-decoration-thickness: 8px;       |

**实践**

```vue
<template>
  <div>
    <div class="decoration-auto my-5 line-through">This is a paragraph of text</div>
    <div class="decoration-from-font my-5 line-through">This is a paragraph of text</div>
    <div class="decoration-0 my-5 line-through">This is a paragraph of text</div>
    <div class="decoration-1 my-5 line-through">This is a paragraph of text</div>
    <div class="decoration-2 my-5 line-through">This is a paragraph of text</div>
    <div class="decoration-4 my-5 line-through">This is a paragraph of text</div>
    <div class="decoration-8 my-5 line-through">This is a paragraph of text</div>
  </div>
</template>
```

## 6.15 Text Underline Offset

| Class                 | Properties                   |
| --------------------- | ---------------------------- |
| underline-offset-auto | text-underline-offset: auto; |
| underline-offset-0    | text-underline-offset: 0px;  |
| underline-offset-1    | text-underline-offset: 1px;  |
| underline-offset-2    | text-underline-offset: 2px;  |
| underline-offset-4    | text-underline-offset: 4px;  |
| underline-offset-8    | text-underline-offset: 8px;  |

**实践**

```vue
<template>
  <div>
    <div class="my-10 underline underline-offset-0">This is a paragraph of text</div>
    <div class="my-10 underline underline-offset-1">This is a paragraph of text</div>
    <div class="my-10 underline underline-offset-2">This is a paragraph of text</div>
    <div class="my-10 underline underline-offset-4">This is a paragraph of text</div>
    <div class="my-10 underline underline-offset-8">This is a paragraph of text</div>
  </div>
</template>
```

## 6.16 Text Transform

| Class       | Properties                  |
| ----------- | --------------------------- |
| uppercase   | text-transform: uppercase;  |
| lowercase   | text-transform: lowercase;  |
| capitalize  | text-transform: capitalize; |
| normal-case | text-transform: none;       |

**实践**

```vue
<template>
  <div>
    <div class="uppercase">This is a paragraph of text</div>
    <div class="lowercase">This is a paragraph of text</div>
    <div class="capitalize">This is a paragraph of text</div>
    <div class="normal-case">This is a paragraph of text</div>
  </div>
</template>
```

`uppercase`：全部大写

`lowercase`：全部小写

`capitalize`：首字母大写

`normal-case`：正常显示

## 6.17 Text Overflow

| Class         | Properties                                                   |
| ------------- | ------------------------------------------------------------ |
| truncate      | overflow: hidden;<br /> text-overflow: ellipsis;<br /> white-space: nowrap; |
| text-ellipsis | text-overflow: ellipsis;                                     |
| text-clip     | text-overflow: clip;                                         |

**实践**

```vue
<template>
  <div class="w-35">
    <div class="bg-cyan my-5 truncate">This is a paragraph of text</div>
    <div class="bg-cyan my-5 w-35 text-elipsis">This is a paragraph of text</div>
    <div class="bg-cyan my-5 text-clip">This is a paragraph of text</div>
  </div>
</template>
```

## 6.18 Text Indent

| Class      | Properties             |
| ---------- | ---------------------- |
| indent-0   | text-indent: 0px;      |
| indent-px  | text-indent: 1px;      |
| indent-0.5 | text-indent: 0.125rem; |
| indent-1   | text-indent: 0.25rem;  |

**实践**

```vue
<template>
  <div>
    <p class="indent-0">This is a paragraph of text</p>
    <p class="indent-px">This is a paragraph of text</p>
    <p class="indent-5">This is a paragraph of text</p>
    <p class="indent-15">This is a paragraph of text</p>
  </div>
</template>
```

## 6.19 Vertical Align

| Class             | Properties                   |
| ----------------- | ---------------------------- |
| align-baseline    | vertical-align: baseline;    |
| align-top         | vertical-align: top;         |
| align-middle      | vertical-align: middle;      |
| align-bottom      | vertical-align: bottom;      |
| align-text-top    | vertical-align: text-top;    |
| align-text-bottom | vertical-align: text-bottom; |
| align-sub         | vertical-align: sub;         |
| align-super       | vertical-align: super;       |

**实践**

```vue
<template>
  <div class="w-150">
    <div><img src="/1.png" class="w-1/2 align-baseline"><span>1</span></div>
    <div><img src="/2.png" class="w-1/2 align-top"><span>2</span></div>
    <div><img src="/3.png" class="w-1/2 align-middle"><span>3</span></div>
    <div><img src="/4.png" class="w-1/2 align-bottom"><span>4</span></div>
    <div><img src="/5.png" class="w-1/2 align-text-top"><span>5</span></div>
    <div><img src="/6.png" class="w-1/2 align-text-bottom"><span>6</span></div>
    <div><img src="/7.png" class="w-1/2 align-sub"><span>7</span></div>
    <div><img src="/8.png" class="w-1/2 align-supoer"><span>8</span></div>
  </div>
</template>
```

## 6.20 Whitespace

| Class               | Properties             |
| ------------------- | ---------------------- |
| whitespace-normal   | white-space: normal;   |
| whitespace-nowrap   | white-space: nowrap;   |
| whitespace-pre      | white-space: pre;      |
| whitespace-pre-line | white-space: pre-line; |
| whitespace-pre-wrap | white-space: pre-wrap; |

**white-space 属性值**

| 值       | 描述                                                         |
| :------- | :----------------------------------------------------------- |
| normal   | 默认。空白会被浏览器忽略。                                   |
| pre      | 空白会被浏览器保留。其行为方式类似 HTML 中的 <pre> 标签。    |
| nowrap   | 文本不会换行，文本会在在同一行上继续，直到遇到 <br> 标签为止。 |
| pre-wrap | 保留空白符序列，但是正常地进行换行。                         |
| pre-line | 合并空白符序列，但是保留换行符。                             |

**实践(没成功，看文档吧)**

[Whitespace - Tailwind CSS](https://tailwindcss.com/docs/whitespace)

## 6.21 Word Break

| Class        | Properties                                 |
| ------------ | ------------------------------------------ |
| break-normal | overflow-wrap: normal; word-break: normal; |
| break-words  | overflow-wrap: break-word;                 |
| break-all    | word-break: break-all;                     |
| break-keep   | word-break: keep-all;                      |

**实践**

```vue
<template>
  <div class="w-1/4 bg-cyan">
    <p class="break-normal">
      The longest word in any of the major English language dictionaries is
      pneumonoultramicroscopicsilicovolcanoconiosis, a word that refers to a lung disease contracted from the inhalation
      of very fine silica particles, specifically from a volcano; medically, it is the same as silicosis.
    </p>
    <p class="break-words">
      The longest word in any of the major English language dictionaries is
      pneumonoultramicroscopicsilicovolcanoconiosis, a word that refers to a lung disease contracted from the inhalation
      of very fine silica particles, specifically from a volcano; medically, it is the same as silicosis.
    </p>
  </div>
</template>
```

## 6.22 Content

| Class        | Properties     |
| ------------ | -------------- |
| content-none | content: none; |

**实践(又是一个不生效的)**

[Content - Tailwind CSS](https://tailwindcss.com/docs/content)

# 7. Backgrounds

## 7.1 Background Attachment

| Class     | Properties                     |
| --------- | ------------------------------ |
| bg-fixed  | background-attachment: fixed;  |
| bg-local  | background-attachment: local;  |
| bg-scroll | background-attachment: scroll; |

**实践**

```vue
<template>
  <div class="h-350 overflow-y-auto">
    <div class="bg-fixed w-full h-150" style="background-image: url('../../../public/1.png');"></div>
    <div class="text-10"></div>
  </div>
</template>
```

## 7.2 Background Clip

| Class           | Properties                    |
| --------------- | ----------------------------- |
| bg-clip-border  | background-clip: border-box;  |
| bg-clip-padding | background-clip: padding-box; |
| bg-clip-content | background-clip: content-box; |
| bg-clip-text    | background-clip: text;        |

**实践**

```vue
<template>
  <div class="flex">
    <div class="bg-clip-border p-6 bg-violet-600 border-4 border-violet-300 border-dashed"></div>
    <div class="bg-clip-padding mx-5 p-6 bg-violet-600 border-4 border-violet-300 border-dashed"></div>
    <div class="bg-clip-content p-6 bg-violet-600 border-4 border-violet-300 border-dashed"></div>
  </div>
</template>
```

## 7.3 Background Color

| Class          | Properties                          |
| -------------- | ----------------------------------- |
| bg-inherit     | background-color: inherit;          |
| bg-current     | background-color: currentColor;     |
| bg-transparent | background-color: transparent;      |
| bg-black       | background-color: rgb(0 0 0);       |
| bg-white       | background-color: rgb(255 255 255); |
| bg-slate-50    | background-color: rgb(248 250 252); |

**实践**

```vue
<template>
  <div>
    <div class="w-50 h-50 m-5 bg-black"></div>
    <div class="w-50 h-50 m-5 bg-slate-50"></div>
    <div class="w-50 h-50 m-5 bg-red"></div>
  </div>
</template>
```

## 7.4 Background Origin

| Class             | Properties                      |
| ----------------- | ------------------------------- |
| bg-origin-border  | background-origin: border-box;  |
| bg-origin-padding | background-origin: padding-box; |
| bg-origin-content | background-origin: content-box; |

**实践**

```vue
<template>
  <div class="">
    <div class="w-50 h-50 bg-origin-border m-5 p-4 border-4 border-dashed" style="background-image: url('../../../public/1.png');"></div>
    <div class="w-50 h-50 bg-origin-padding m-5 p-4 border-4 border-dashed" style="background-image: url('../../../public/2.png');"></div>
    <div class="w-50 h-50 bg-origin-content m-5 p-4 border-4 border-dashed" style="background-image: url('../../../public/3.png');"></div>
  </div>
</template>
```

## 7.5 Background Position

| Class           | Properties                         |
| --------------- | ---------------------------------- |
| bg-bottom       | background-position: bottom;       |
| bg-center       | background-position: center;       |
| bg-left         | background-position: left;         |
| bg-left-bottom  | background-position: left bottom;  |
| bg-left-top     | background-position: left top;     |
| bg-right        | background-position: right;        |
| bg-right-bottom | background-position: right bottom; |
| bg-right-top    | background-position: right top;    |
| bg-top          | background-position: top;          |

**实践**

```vue
<template>
  <div class="">
    <div class="w-50 h-50 bg-left m-5 p-4 border-4 border-dashed" style="background-image: url('../../../public/1.png');"></div>
    <div class="w-50 h-50 bg-top m-5 p-4 border-4 border-dashed" style="background-image: url('../../../public/2.png');"></div>
    <div class="w-50 h-50 bg-bottom m-5 p-4 border-4 border-dashed" style="background-image: url('../../../public/3.png');"></div>
  </div>
</template>
```

## 7.6 Background Repeat

| Class           | Properties                    |
| --------------- | ----------------------------- |
| bg-repeat       | background-repeat: repeat;    |
| bg-no-repeat    | background-repeat: no-repeat; |
| bg-repeat-x     | background-repeat: repeat-x;  |
| bg-repeat-y     | background-repeat: repeat-y;  |
| bg-repeat-round | background-repeat: round;     |
| bg-repeat-space | background-repeat: space;     |

不再演示

## 7.7 Background Size

| Class      | Properties                |
| ---------- | ------------------------- |
| bg-auto    | background-size: auto;    |
| bg-cover   | background-size: cover;   |
| bg-contain | background-size: contain; |

**实践**

```vue
<template>
  <div class="">
    <div class="bg-auto w-50 h-50 m-5 p-4" style="background-image: url('../../../public/1.png');"></div>
    <div class="bg-cover w-50 h-50 m-5 p-4" style="background-image: url('../../../public/2.png');"></div>
    <div class="bg-cantain w-50 h-50 m-5 p-4" style="background-image: url('../../../public/3.png');"></div>
  </div>
</template>
```

## 7.8 Background Image

| Class             | Properties                                                   |
| ----------------- | ------------------------------------------------------------ |
| bg-none           | background-image: none;                                      |
| bg-gradient-to-t  | background-image: linear-gradient(to top, var(--tw-gradient-stops)); |
| bg-gradient-to-tr | background-image: linear-gradient(to top right, var(--tw-gradient-stops)); |
| bg-gradient-to-r  | background-image: linear-gradient(to right, var(--tw-gradient-stops)); |
| bg-gradient-to-br | background-image: linear-gradient(to bottom right, var(--tw-gradient-stops)); |
| bg-gradient-to-b  | background-image: linear-gradient(to bottom, var(--tw-gradient-stops)); |
| bg-gradient-to-bl | background-image: linear-gradient(to bottom left, var(--tw-gradient-stops)); |
| bg-gradient-to-l  | background-image: linear-gradient(to left, var(--tw-gradient-stops)); |
| bg-gradient-to-tl | background-image: linear-gradient(to top left, var(--tw-gradient-stops)); |

**实践**

```
<template>
  <div class="all-w-50 all-h-14 all-my-5">
    <div class="bg-gradient-to-r from-cyan-500 to-blue-500"></div>
    <div class="bg-gradient-to-r from-sky-500 to-indigo-500"></div>
    <div class="bg-gradient-to-r from-violet-500 to-fuchsia-500"></div>
    <div class="bg-gradient-to-r from-purple-500 to-pink-500"></div>
  </div>
</template>

```

## 7.9 Gradient Color Stops

| Class            | Properties                                                   |
| ---------------- | ------------------------------------------------------------ |
| from-inherit     | --tw-gradient-from: inherit;<br /> --tw-gradient-to: rgb(255 255 255 / 0); <br />--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to); |
| from-current     | --tw-gradient-from: currentColor; <br />--tw-gradient-to: rgb(255 255 255 / 0); <br />--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to); |
| from-transparent | --tw-gradient-from: transparent;<br /> --tw-gradient-to: rgb(0 0 0 / 0);<br /> --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to); |
| from-black       | --tw-gradient-from: #000;<br /> --tw-gradient-to: rgb(0 0 0 / 0);<br /> --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to); |
| via-black        | --tw-gradient-to: rgb(0 0 0 / 0); <br />--tw-gradient-stops: var(--tw-gradient-from), #000, var(--tw-gradient-to); |
| to-black         | --tw-gradient-to: #000;                                      |

**实践**

```vue
<template>
  <div class="all-w-50 all-h-14 all-my-5">
    <div class="bg-gradient-to-r from-cyan-500"></div>
    <div class="bg-gradient-to-r from-sky-500 to-indigo-500"></div>
    <div class="bg-gradient-to-r from-violet-500 via-pink-500 to-fuchsia-500"></div>
  </div>
</template>
```

# 8. Border Radius

## 8.1 Border Radius

| Class         | Properties                                                   |
| ------------- | ------------------------------------------------------------ |
| rounded-none  | border-radius: 0px;                                          |
| rounded-sm    | border-radius: 0.125rem;                                     |
| rounded       | border-radius: 0.25rem;                                      |
| rounded-md    | border-radius: 0.375rem;                                     |
| rounded-lg    | border-radius: 0.5rem;                                       |
| rounded-xl    | border-radius: 0.75rem;                                      |
| rounded-full  | border-radius: 9999px;                                       |
| rounded-t-xl  | border-top-left-radius: 0.75rem; <br /> border-top-right-radius: 0.75rem; |
| rounded-bl-xl | border-bottom-left-radius: 0.75rem;                          |
| rounded-l-xl  | border-top-left-radius: 0.75rem; <br /> border-bottom-left-radius: 0.75rem; /* |
| rounded-tl-xl | border-top-left-radius: 0.75rem;                             |
| rounded-tr-xl | border-top-right-radius: 0.75rem;                            |
| rounded-br-xl | border-bottom-right-radius: 0.75rem;                         |
| rounded-bl    | border-bottom-left-radius: 0.25rem;                          |

**实践**

```vue
<template>
  <div class="flex all-w-25 all-h-25 all-m-5 all-bg-cyan">
    <div class="rounded"></div>
    <div class="rounded-xl"></div>
    <div class="rounded-t-xl"></div>
    <div class="rounded-tl-xl"></div>
    <div class="rounded-full"></div>
  </div>
</template>
```

## 8.2 Border Width/Color /Style

**Border Width**

| Class      | Properties                                       |
| ---------- | ------------------------------------------------ |
| border-2   | border-width: 2px;                               |
| border     | border-width: 1px;                               |
| border-x-2 | border-left-width: 2px; border-right-width: 2px; |
| border-y-2 | border-top-width: 2px; border-bottom-width: 2px; |
| border-t-2 | border-top-width: 2px;                           |
| border-r-2 | border-right-width: 2px;                         |
| border-b-2 | border-bottom-width: 2px;                        |
| border-l-2 | border-left-width: 2px;                          |

**Border Color**

| Class              | Properties                  |
| ------------------ | --------------------------- |
| border-inherit     | border-color: inherit;      |
| border-current     | border-color: currentColor; |
| border-transparent | border-color: transparent;  |
| border-black       | border-color: rgb(0 0 0);   |

**Border Style**

| Class         | Properties            |
| ------------- | --------------------- |
| border-solid  | border-style: solid;  |
| border-dashed | border-style: dashed; |
| border-dotted | border-style: dotted; |
| border-double | border-style: double; |
| border-hidden | border-style: hidden; |
| border-none   | border-style: none;   |

```vue
<template>
  <div class="flex all-border-solid all-w-25 all-h-25 all-m-5">
    <div class="border-2 border-black"></div>
    <div class="border-x-2 border-cyan"></div>
    <div class="border-y-2 border-red"></div>
    <div class="border-l-2 border-yellow"></div>
    <div class="border-r-2 border-orange"></div>
  </div>
</template>
```

## 8.3 Divide Width/Color/Style

**Divide Width**

| Class      | Properties                                             |
| ---------- | ------------------------------------------------------ |
| divide-x-2 | border-right-width: 0px; <br />border-left-width: 2px; |
| divide-y-2 | border-top-width: 2px; <br />border-bottom-width: 0px; |

**Divide Color**

| Class              | Properties                        |
| ------------------ | --------------------------------- |
| divide-inherit     | border-color: inherit;            |
| divide-current     | border-color: <br />currentColor; |
| divide-transparent | border-color: transparent;        |
| divide-black       | border-color: rgb(0 0 0);         |
| divide-white       | border-color: rgb(255 255 255);   |

**Divide Style**

| lass          | Properties            |
| ------------- | --------------------- |
| divide-solid  | border-style: solid;  |
| divide-dashed | border-style: dashed; |
| divide-dotted | border-style: dotted; |
| divide-double | border-style: double; |
| divide-none   | border-style: none;   |

没成功，不知道咋回事

[Divide Width - Tailwind CSS](https://tailwindcss.com/docs/divide-width)

## 8.4 Outline Width/Color.Style/Offset

**Outline Width**

| Class     | Properties          |
| --------- | ------------------- |
| outline-0 | outline-width: 0px; |
| outline-1 | outline-width: 1px; |
| outline-2 | outline-width: 2px; |
| outline-4 | outline-width: 4px; |
| outline-8 | outline-width: 8px; |

**Outline Color**

| Class               | Properties                   |
| ------------------- | ---------------------------- |
| outline-inherit     | outline-color: inherit;      |
| outline-current     | outline-color: currentColor; |
| outline-transparent | outline-color: transparent;  |
| outline-black       | outline-color: #000;         |
| outline-white       | outline-color: #fff;         |

**Outline Style**

| Class          | Properties                                                 |
| -------------- | ---------------------------------------------------------- |
| outline-none   | outline: 2px solid transparent; <br />outline-offset: 2px; |
| outline        | outline-style: solid;                                      |
| outline-dashed | outline-style: dashed;                                     |
| outline-dotted | outline-style: dotted;                                     |
| outline-double | outline-style: double;                                     |

**Outline Offset**

| Class            | Properties           |
| ---------------- | -------------------- |
| outline-offset-0 | outline-offset: 0px; |
| outline-offset-1 | outline-offset: 1px; |
| outline-offset-2 | outline-offset: 2px; |
| outline-offset-4 | outline-offset: 4px; |
| outline-offset-8 | outline-offset: 8px; |

**实践**

```vue
<template>
  <div class="all-w-50 all-h-25">
    <button class="outline-0 outline-cyan outline-dashed"></button>
    <button class="outline-1 outline-cyan outline-dashed"></button>
    <button class="outline-2 outline-cyan outline-dashed"></button>
    <button class="outline-4 outline-cyan outline-dashed"></button>
    <button class="outline-8 outline-cyan outline-dashed"></button>
  </div>
</template>
```

## 8.5 Ring Wdith/Color/Offset Width/Offset Color

**Ring Width**

| Class      | Properties                                                   |
| ---------- | ------------------------------------------------------------ |
| ring-0     | box-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color); |
| ring-1     | box-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color); |
| ring-2     | box-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color); |
| ring       | box-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color); |
| ring-4     | box-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color); |
| ring-8     | box-shadow: var(--tw-ring-inset) 0 0 0 calc(8px + var(--tw-ring-offset-width)) var(--tw-ring-color); |
| ring-inset | --tw-ring-inset: inset;                                      |

**Ring Color**

| Class            | Properties                         |
| ---------------- | ---------------------------------- |
| ring-inherit     | --tw-ring-color: inherit;          |
| ring-current     | --tw-ring-color: currentColor;     |
| ring-transparent | --tw-ring-color: transparent;      |
| ring-black       | --tw-ring-color: rgb(0 0 0);       |
| ring-white       | --tw-ring-color: rgb(255 255 255); |

**Ring Offset Width**

| Class         | Properties                                                   |
| ------------- | ------------------------------------------------------------ |
| ring-offset-0 | --tw-ring-offset-width: 0px;<br /> box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow); |
| ring-offset-1 | --tw-ring-offset-width: 1px;<br /> box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow); |
| ring-offset-2 | --tw-ring-offset-width: 2px; <br />box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow); |
| ring-offset-4 | --tw-ring-offset-width: 4px;<br /> box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow); |
| ring-offset-8 | --tw-ring-offset-width: 8px; <br />box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow); |

**Ring Offset Color**

| Class                   | Properties                                                   |
| ----------------------- | ------------------------------------------------------------ |
| ring-offset-inherit     | --tw-ring-offset-color: inherit; <br />box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow); |
| ring-offset-current     | --tw-ring-offset-color: currentColor;<br /> box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow); |
| ring-offset-transparent | --tw-ring-offset-color: transparent; <br />box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow); |
| ring-offset-black       | --tw-ring-offset-color: #000; <br />box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow); |
| ring-offset-white       | --tw-ring-offset-color: #fff; <br />box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow); |

```vue
<template>
  <div class="all-w-50 all-m-5 all-h-25">
    <button class="outline-4 outline-cyan outline-dashed ring-0 ring-red ring-offset-0"></button>
    <button class="outline-4 outline-cyan outline-dashed ring-1 ring-red ring-offset-1"></button>
    <button class="outline-4 outline-cyan outline-dashed ring-2 ring-red ring-offset-2"></button>
    <button class="outline-4 outline-cyan outline-dashed ring-4 ring-red ring-offset-4"></button>
    <button class="outline-4 outline-cyan outline-dashed ring-8 ring-red ring-offset-8"></button>
  </div>
</template>
```

# 9. Effects

## 9.1 Box Shadow

| Class        | Properties                                                   |
| ------------ | ------------------------------------------------------------ |
| shadow-sm    | box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);                   |
| shadow       | box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1); |
| shadow-md    | box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1); |
| shadow-lg    | box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1); |
| shadow-xl    | box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1); |
| shadow-2xl   | box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);             |
| shadow-inner | box-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);             |
| shadow-none  | box-shadow: 0 0 #0000;****                                   |

**实践**

```vue
<template>
  <div class="all-w-10 all-h-10 all-m-5 all-bg-cyan">
    <div class="shadow-sm"></div>
    <div class="shadow"></div>
    <div class="shadow-md"></div>
    <div class="shadow-lg"></div>
    <div class="shadow-xl"></div>
    <div class="shadow-3xl"></div>
    <div class="shadow-inner"></div>
    <div class="shadow-none"></div>
  </div>
</template>
```

## 9.2 Box Shadow Color

| Class              | Properties                       |
| ------------------ | -------------------------------- |
| shadow-inherit     | --tw-shadow-color: inherit;      |
| shadow-current     | --tw-shadow-color: currentColor; |
| shadow-transparent | --tw-shadow-color: transparent;  |
| shadow-black       | --tw-shadow-color: #000;         |
| shadow-white       | --tw-shadow-color: #fff;         |
| shadow-slate-50    | --tw-shadow-color: #f8fafc;      |

表示阴影颜色

**实践:**

```vue
<template>
  <div class="all-shadow-lg all-mx-5">
    <button class="shadow-5xl shadow-transparent">一键三连加关注</button>
    <button class="shadow-5xl shadow-yellow">一键三连加关注</button>
    <button class="shadow-5xl shadow-cyan">一键三连加关注</button>
    <button class="shadow-5xl shadow-red">一键三连加关注</button>
  </div>
</template>
```

## 9.3 Opacity

可见度，越低越看不见

| Class          | Properties           |
| -------------- | -------------------- |
| opacity-${num} | opacity: ${num/100}; |

**实践**

```vue
<template>
  <div class="all-w-20 all-h-20 all-m-10 all-bg-cyan">
    <div class="opacity-0"></div>
    <div class="opacity-10"></div>
    <div class="opacity-20"></div>
    <div class="opacity-30"></div>
    <div class="opacity-40"></div>
    <div class="opacity-50"></div>
    <div class="opacity-60"></div>
    <div class="opacity-70"></div>
    <div class="opacity-80"></div>
    <div class="opacity-90"></div>
    <div class="opacity-100"></div>
  </div>
</template>
```

## 9.4 Mix Blend Mode、Background Blend Mode

看文档：[Mix Blend Mode - Tailwind CSS](https://tailwindcss.com/docs/mix-blend-mode)、[Background Blend Mode - Tailwind CSS](https://tailwindcss.com/docs/background-blend-mode)

# 10.  Filters

## 10.1 Blur

最大为 **3xl**

| Class     | Properties          |
| --------- | ------------------- |
| blur-none | filter: blur(0);    |
| blur-sm   | filter: blur(4px);  |
| blur      | filter: blur(8px);  |
| blur-md   | filter: blur(12px); |
| blur-lg   | filter: blur(16px); |
| blur-xl   | filter: blur(24px); |
| blur-2xl  | filter: blur(40px); |
| blur-3xl  | filter: blur(64px); |

**实践**

```vue
<template>
  <div class="all-w-10 all-h-10 all-m-5 all-bg-cyan">
    <div class="blur-none">This is paragraph of text</div>
    <div class="blur-sm">This is paragraph of text</div>
    <div class="blur">This is paragraph of text</div>
    <div class="blur-md">This is paragraph of text</div>
    <div class="blur-lg">This is paragraph of text</div>
    <div class="blur-xl">This is paragraph of text</div>
    <div class="blur-2xl">This is paragraph of text</div>
  </div>
</template>
```

## 10.2 Brightness

| Class             | Properties                      |
| ----------------- | ------------------------------- |
| brightness-${num} | filter: brightness(${num/100}); |

**实践**

```vue
<template>
  <div class="all-w-20 all-h-20 all-m-10 all-bg-cyan">
    <div class="brightness-0"></div>
    <div class="brightness-50"></div>
    <div class="brightness-75"></div>
    <div class="brightness-90"></div>
    <div class="brightness-100"></div>
    <div class="brightness-125"></div>
    <div class="brightness-150"></div>
    <div class="brightness-200"></div>
    <div class="brightness-250"></div>
    <div class="brightness-500"></div>
  </div>
</template>
```

## 10.3  contrast

对比度

最大为 **200**

| Class        | Properties              |
| ------------ | ----------------------- |
| contrast-0   | filter: contrast(0);    |
| contrast-50  | filter: contrast(.5);   |
| contrast-75  | filter: contrast(.75);  |
| contrast-100 | filter: contrast(1);    |
| contrast-125 | filter: contrast(1.25); |
| contrast-150 | filter: contrast(1.5);  |
| contrast-200 | filter: contrast(2);    |

**实践**

```vue
<template>
  <div class="all-w-20 all-h-20 all-m-10 all-bg-cyan">
    <div class="contrast-0"></div>
    <div class="contrast-50"></div>
    <div class="contrast-75"></div>
    <div class="contrast-100"></div>
    <div class="contrast-125"></div>
    <div class="contrast-150"></div>
    <div class="contrast-200"></div>
  </div>
</template>
```

## 10.4 Drop Shadow

| Class            | Properties                                                   |
| ---------------- | ------------------------------------------------------------ |
| drop-shadow-sm   | filter: drop-shadow(0 1px 1px rgb(0 0 0 / 0.05));            |
| drop-shadow      | filter: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06)); |
| drop-shadow-md   | filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06)); |
| drop-shadow-lg   | filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1)); |
| drop-shadow-xl   | filter: drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08)); |
| drop-shadow-2xl  | filter: drop-shadow(0 25px 25px rgb(0 0 0 / 0.15));          |
| drop-shadow-none | filter: drop-shadow(0 0 #0000);                              |

**实践**

```vue
<template>
  <div class="all-h-25 all-w-25 all-m-5 all-bg-#F8FAFC">
    <div class="drop-shadow-sm"></div>
    <div class="drop-shadow"></div>
    <div class="drop-shadow-md"></div>
    <div class="drop-shadow-lg"></div>
    <div class="drop-shadow-xl"></div>
    <div class="drop-shadow-2xl"></div>
    <div class="drop-shadow-none"></div>
  </div>
</template>
```

## 10.5 Grayscale

| Class       | Properties               |
| ----------- | ------------------------ |
| grayscale-0 | filter: grayscale(0);    |
| grayscale   | filter: grayscale(100%); |

**实践**

```vue
<template>
  <div>
    <img src="/1.png" grayscale alt="">
    <img src="/1.png" grayscale-0 alt="">
  </div>
</template>
```

## 10.6 Hue Route

滤镜

| Class          | Properties                  |
| -------------- | --------------------------- |
| hue-rotate-0   | filter: hue-rotate(0deg);   |
| hue-rotate-15  | filter: hue-rotate(15deg);  |
| hue-rotate-30  | filter: hue-rotate(30deg);  |
| hue-rotate-60  | filter: hue-rotate(60deg);  |
| hue-rotate-90  | filter: hue-rotate(90deg);  |
| hue-rotate-180 | filter: hue-rotate(180deg); |

**实践**

```vue
<template>
  <div class="flex all-h-15">
    <img src="/1.png" class="hue-rotate-0" />
    <img src="/1.png" class="hue-rotate-15" />
    <img src="/1.png" class="hue-rotate-30" />
    <img src="/1.png" class="hue-rotate-60" />
    <img src="/1.png" class="hue-rotate-90" />
    <img src="/1.png" class="hue-rotate-180" />
  </div>
</template>
```

## 10.7 Invert

| Class    | Properties            |
| -------- | --------------------- |
| invert-0 | filter: invert(0);    |
| invert   | filter: invert(100%); |

**实践**

```vue
<template>
  <div>
    <img class="invert-0" src="/1.png" alt="">
    <img class="invert" src="/1.png" alt="">
  </div>
</template>
```

## 10.8 Saturate

| Class        | Properties             |
| ------------ | ---------------------- |
| saturate-0   | filter: saturate(0);   |
| saturate-50  | filter: saturate(.5);  |
| saturate-100 | filter: saturate(1);   |
| saturate-150 | filter: saturate(1.5); |
| saturate-200 | filter: saturate(2);   |

**实践**

```vue
<template>
  <div class="flex all-h-30">
    <img src="/1.png" class="saturate-0">
    <img src="/1.png" class="saturate-50">
    <img src="/1.png" class="saturate-100">
    <img src="/1.png" class="saturate-200">
  </div>
</template>
```

## 10.9 Sepia

深褐色滤镜

| Class   | Properties           |
| ------- | -------------------- |
| sepia-0 | filter: sepia(0);    |
| sepia   | filter: sepia(100%); |

**实践**

```vue
<template>
  <div>
    <img src="/1.png" class="sepia-0">
    <img src="/1.png" class="sepia">
  </div>
</template>
```

# 11. Tables

## 11.1 Border Collpase

| Class           | Properties                 |
| --------------- | -------------------------- |
| border-collapse | border-collapse: collapse; |
| border-separate | border-collapse: separate; |

`border-collapse` 用于将表单两条线整合为一条线，`border-collapse` 则是默认

**实践**

```vue
<template>
  <table border class="w-full border-collapse">
    <thead>
      <tr>
        <td>num</td>
        <td>chinese</td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>一</td>
      </tr>
	  ...
    </tbody>
  </table>
</template>
```

## 11.2 Border Spacing

| Class                | Properties                                           |
| -------------------- | ---------------------------------------------------- |
| border-spacing-0     | border-spacing: 0px 0px;                             |
| border-spacing-x-0   | border-spacing: 0px var(--tw-border-spacing-y);      |
| border-spacing-y-0   | border-spacing: var(--tw-border-spacing-x) 0px;      |
| border-spacing-px    | border-spacing: 1px 1px;                             |
| border-spacing-x-px  | border-spacing: 1px var(--tw-border-spacing-y);      |
| border-spacing-y-px  | border-spacing: var(--tw-border-spacing-x) 1px;      |
| border-spacing-0.5   | border-spacing: 0.125rem 0.125rem;                   |
| border-spacing-x-0.5 | border-spacing: 0.125rem var(--tw-border-spacing-y); |
| border-spacing-y-0.5 | border-spacing: var(--tw-border-spacing-x) 0.125rem; |

**实践**

```vue
<template>
  <table border class="border-spacing-2">
    <thead>
      <tr>
        <td>num</td>
        <td>chinese</td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>一</td>
      </tr>
      <tr>
        <td>2</td>
        <td>二</td>
      </tr>
    </tbody>
  </table>
</template>
```

## 11.3 Table Layout

| Class       | Properties           |
| ----------- | -------------------- |
| table-auto  | table-layout: auto;  |
| table-fixed | table-layout: fixed; |

**实践**

```vue
<template>
  <table border class="w-1/2 table-auto">
    <thead>
      <tr>
        <td>num</td>
        <td>chinese</td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>111111111111111111111111111111111111111111111111111</td>
        <td>一一一一一一一一一一一一一一</td>
      </tr>
      <tr>
        <td>222222222222222222222222222222222222222222222222222</td>
        <td>二二二二二二二二二二二二二二</td>
      </tr>
    </tbody>
  </table>
</template>
```

```vue
<template>
  <table border class="w-1/2 table-fixed">
    <thead>
      <tr>
        <td>num</td>
        <td>chinese</td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>111111111111111111111111111111111111111111111111111</td>
        <td>一一一一一一一一一一一一一一</td>
      </tr>
      <tr>
        <td>222222222222222222222222222222222222222222222222222</td>
        <td>二二二二二二二二二二二二二二</td>
      </tr>
    </tbody>
  </table>
</template>
```

# 12. Transition & Animation

## 12.1  Transition Property

| Class                | Properties                                                   |
| -------------------- | ------------------------------------------------------------ |
| transition-none      | transition-property: none;                                   |
| transition-all       | transition-property: all; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; |
| transition           | transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; |
| transition-colors    | transition-property: color, background-color, border-color, text-decoration-color, fill, stroke; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; |
| transition-opacity   | transition-property: opacity; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; |
| transition-shadow    | transition-property: box-shadow; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; |
| transition-transform | transition-property: transform; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; |

**实践**

```vue
<template>
  <div>
    <button
      class="transition bg-cyan hover:-translate-y-1 hover:scale-110">
      Save Changes
    </button>
  </div>
</template>
```

## 12.2 Transition Duration

| Class           | Properties                     |
| --------------- | ------------------------------ |
| duration-${num} | transition-duration: ${num}ms; |

**实践**

```vue
<template>
  <div>
    <button
      class="transition bg-cyan hover:-translate-y-1 hover:scale-110 duration-100">
      Save Changes
    </button>
    <button
      class="transition bg-cyan hover:-translate-y-1 hover:scale-110 duration-200">
      Save Changes
    </button>
    <button
      class="transition bg-cyan hover:-translate-y-1 hover:scale-110 duration-300">
      Save Changes
    </button>
    <button
      class="transition bg-cyan hover:-translate-y-1 hover:scale-110 duration-400">
      Save Changes
    </button>
  </div>
</template>
```

## 12.3 Transition Timing Function

| Class       | Properties                                                |
| ----------- | --------------------------------------------------------- |
| ease-linear | transition-timing-function: linear;                       |
| ease-in     | transition-timing-function: cubic-bezier(0.4, 0, 1, 1);   |
| ease-out    | transition-timing-function: cubic-bezier(0, 0, 0.2, 1);   |
| ease-in-out | transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); |

**实践**

```vue
<template>
  <div>
    <button
      class="transition bg-cyan hover:-translate-y-1 hover:scale-110 duration-100 ease-linear">
      Save Changes
    </button>
    <button
      class="transition bg-cyan hover:-translate-y-1 hover:scale-110 duration-200 ease-in">
      Save Changes
    </button>
    <button
      class="transition bg-cyan hover:-translate-y-1 hover:scale-110 duration-300 ease-out">
      Save Changes
    </button>
    <button
      class="transition bg-cyan hover:-translate-y-1 hover:scale-110 duration-400 ease-in-out">
      Save Changes
    </button>
  </div>
</template>
```

## 12.4 Delay

| Class        | Properties                  |
| ------------ | --------------------------- |
| delay-${num} | transition-delay: ${num}ms; |

实践

```vue
<template>
  <div>
    <button
      class="transition bg-cyan hover:-translate-y-1 hover:scale-110 delay-100">
      Save Changes
    </button>
    <button
      class="transition bg-cyan hover:-translate-y-1 hover:scale-110 delay-1000">
      Save Changes
    </button>
  </div>
</template>
```

## 12.5 Animation

| Class          | Properties                                                   |
| -------------- | ------------------------------------------------------------ |
| animate-none   | animation: none;                                             |
| animate-spin   | animation: spin 1s linear infinite; @keyframes spin {  from {    transform: rotate(0deg);  }  to {    transform: rotate(360deg);  } } |
| animate-ping   | animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite; @keyframes ping {  75%, 100% {    transform: scale(2);    opacity: 0;  } } |
| animate-pulse  | animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; @keyframes pulse {  0%, 100% {    opacity: 1;  }  50% {    opacity: .5;  } } |
| animate-bounce | animation: bounce 1s infinite; @keyframes bounce {  0%, 100% {    transform: translateY(-25%);    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);  }  50% {    transform: translateY(0);    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);  } } |

**实践**

```vue
<template>
  <div class="all-w-50 all-h-50 all-m-10 all-bg-cyan">
    <div class="animate-none"></div>
    <div class="animate-spin"></div>
    <div class="animate-ping"></div>
    <div class="animate-pulse"></div>
    <div class="animate-bounce"></div>
  </div>
</template>
```

# 13. Transforms

## 13.1 Scale

| Class          | Properties                     |
| -------------- | ------------------------------ |
| scale-${num}   | transform: scale(${num/100});  |
| scale-x-${num} | transform: scaleX(${num/100}); |
| scale-y-${num} | transform: scaleY(${num/100}); |

**实践**

```vue
<template>
  <div class="all-w-50 all-h-50 all-m-10 all-bg-cyan">
    <div class="scale-100"></div>
    <div class="scale-200"></div>
    <div class="scale-x-100"></div>
    <div class="scale-x-200"></div>
    <div class="scale-y-100"></div>
    <div class="scale-y-200"></div>
  </div>
</template>
```

## 13.2 Rotate

| Class         | Properties                    |
| ------------- | ----------------------------- |
| rotate-${num} | transform: rotate(${num}deg); |

**实践**

```vue
<template>
  <div class="all-w-50 all-h-50 all-bg-red all-m-10">
    <div class="rotate-0"></div>
    <div class="rotate-60"></div>
    <div class="rotate-120"></div>
    <div class="rotate-180"></div>
  </div>
</template>
```

## 13.3 Translate

| Class              | Properties                          |
| ------------------ | ----------------------------------- |
| translate-x-px     | transform: translateX(1px);         |
| translate-y-px     | transform: translateY(1px);         |
| translate-x-${num} | transform: translateX(${num/4}rem); |
| translate-y-${num} | transform: translateY(${num/4}rem); |
| translate-x-1/2    | transform: translateX(50%);         |
| translate-x-full   | transform: translateX(100%);        |

**实践**

```vue
<template>
  <div class="all-w-50 all-h-50 all-m-10 all-bg-cyan">
    <div class="translate-x-5"></div>
    <div class="translate-x-15"></div>
    <div class="translate-x-25"></div>
    <div class="translate-x-35"></div>
    <div class="translate-x-45"></div>
  </div>
</template>
```

## 13.4 Skew

| Class         | Properties                   |
| ------------- | ---------------------------- |
| skew-x-${num} | transform: skewX(${num}deg); |
| skew-y-${num} | transform: skewY(${num}deg); |

**实践**

```vue
<template>
  <div class="all-w-25 all-h-25 all-m-5 all-bg-cyan">
    <div class="skew-x-5"></div>
    <div class="skew-x-15"></div>
    <div class="skew-x-25"></div>
    <div class="skew-y-5"></div>
    <div class="skew-y-15"></div>
    <div class="skew-y-25"></div>
  </div>
</template>
```

## 13.5 Transform Origin

| Class               | Properties                      |
| ------------------- | ------------------------------- |
| origin-center       | transform-origin: center;       |
| origin-top          | transform-origin: top;          |
| origin-top-right    | transform-origin: top right;    |
| origin-right        | transform-origin: right;        |
| origin-bottom-right | transform-origin: bottom right; |
| origin-bottom       | transform-origin: bottom;       |
| origin-bottom-left  | transform-origin: bottom left;  |
| origin-left         | transform-origin: left;         |
| origin-top-left     | transform-origin: top left;     |

**实践**

```vue
<template>
  <div class="all-w-25 all-h-25 all-m-5 all-bg-cyan all-rotate-15">
    <div class="origin-center"></div>
    <div class="origin-top"></div>
    <div class="origin-top-right"></div>
    <div class="origin-bottom-right"></div>
    <div class="origin-bottom"></div>
    <div class="origin-bottom-left"></div>
  </div>
</template>
```

# 14 Interactivity

## 14.1 Accent Color



