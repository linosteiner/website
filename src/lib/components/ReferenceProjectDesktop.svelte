<script lang="ts">
  import Container from '$lib/components/Container.svelte'

  export let appName: string
  export let companyDescription: string
  export let situation: string
  export let challenges: string
  export let solutions: string
  export let imageSource: string
</script>

<div class="even:bg-white odd:bg-gray-100 py-24 sm:py-32 z-10">
  <Container>
    <div class="mx-auto">
      <div class="sm:text-center">
        <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{appName}</p>
        <p class="mt-6 text-lg leading-8 text-gray-600">{companyDescription}</p>
      </div>
    </div>
    <div class="relative flex items-center justify-center pt-8">
      <enhanced:img
        src={imageSource}
        loading="lazy"
        alt="{appName} App screenshot"
        class=" rounded-md lg:h-[600px] w-auto shadow-xl ring-1 ring-gray-900/10"
      />
    </div>
    <div class="mt-16 sm:mt-5 md:mt-10">
      <dl
        class="mx-auto flex flex-col gap-x-6 gap-y-16 text-base leading-8 text-gray-600 lg:mx-0 lg:max-w-7xl lg:gap-x-4 lg:gap-y-16"
      >
        <div class="relative pl-0 max-w-[75ch]">
          <dt class="inline font-semibold text-gray-900 pl-9">
            <svg
              class="absolute left-1 top-1 h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              height="1.25em"
              viewBox="0 0 576 512"
              ><!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
              <path
                d="M64 480H296.2c9.8 11.8 21 22.3 33.5 31.3c-3.2 .5-6.4 .7-9.7 .7H64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0H220.1c12.7 0 24.9 5.1 33.9 14.1L369.9 129.9c9 9 14.1 21.2 14.1 33.9v34.7c-11.2 3.2-21.9 7.4-32 12.6V192H240c-26.5 0-48-21.5-48-48V32H64C46.3 32 32 46.3 32 64V448c0 17.7 14.3 32 32 32zM351.5 160c-.7-2.8-2.1-5.4-4.2-7.4L231.4 36.7c-2.1-2.1-4.6-3.5-7.4-4.2V144c0 8.8 7.2 16 16 16H351.5zM544 368a112 112 0 1 0 -224 0 112 112 0 1 0 224 0zm-256 0a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-32a24 24 0 1 1 0-48 24 24 0 1 1 0 48zm-32 96c0-8.8 7.2-16 16-16V384c-8.8 0-16-7.2-16-16s7.2-16 16-16h16c8.8 0 16 7.2 16 16v48h0c8.8 0 16 7.2 16 16s-7.2 16-16 16H432 416c-8.8 0-16-7.2-16-16z"
              />
            </svg>
            Ausgangslage <br />
          </dt>
          <dd class="inline-block pt-3 whitespace-pre-line">{situation}</dd>
        </div>
        {#if challenges !== ''}
          <div class="relative lg:self-end max-w-[75ch] lg:w-[75ch]">
            <dt class="inline font-semibold text-gray-900 pl-9">
              <svg
                class="absolute left-1 top-1 h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                height="1.25em"
                viewBox="0 0 512 512"
                ><!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                  d="M320 0c-17.7 0-32 14.3-32 32V56c0 17.7 14.3 32 32 32h16c8.8 0 16 7.2 16 16s-7.2 16-16 16H320c-17.7 0-32 14.3-32 32v24c0 17.7 14.3 32 32 32h32c0 26.5 21.5 48 48 48s48-21.5 48-48h32c17.7 0 32-14.3 32-32V64c0-35.3-28.7-64-64-64H320zm0 32H448c17.7 0 32 14.3 32 32V176H432c-8.8 0-16 7.2-16 16v16c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8-7.2-16-16-16H320V152h16c26.5 0 48-21.5 48-48s-21.5-48-48-48H320V32zM64 64C28.7 64 0 92.7 0 128V288 448c0 35.3 28.7 64 64 64H224 384c35.3 0 64-28.7 64-64V304c0-17.7-14.3-32-32-32H368c-17.7 0-32 14.3-32 32v16c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-17.7-14.3-32-32-32H240V96c0-17.7-14.3-32-32-32H64zM208 96V272H176V256c0-26.5-21.5-48-48-48s-48 21.5-48 48v16H32V128c0-17.7 14.3-32 32-32H208zM80 304c17.7 0 32-14.3 32-32V256c0-8.8 7.2-16 16-16s16 7.2 16 16v16c0 17.7 14.3 32 32 32h32v32H192c-26.5 0-48 21.5-48 48s21.5 48 48 48h16v48H64c-17.7 0-32-14.3-32-32V304H80zM240 432c0-17.7-14.3-32-32-32H192c-8.8 0-16-7.2-16-16s7.2-16 16-16h16c17.7 0 32-14.3 32-32V304h32v16c0 26.5 21.5 48 48 48s48-21.5 48-48V304h48V448c0 17.7-14.3 32-32 32H240V432z"
                />
              </svg>
              Herausforderungen <br />
            </dt>
            <dd class="inline-block pt-3 whitespace-pre-line">{challenges}</dd>
          </div>
        {/if}
        <div class="relative pl-0 {challenges === '' ? 'lg:self-end' : ''} max-w-[75ch]">
          <dt class="inline font-semibold text-gray-900 pl-9">
            <svg
              class="absolute left-1 top-1 h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              height="1.25em"
              viewBox="0 0 576 512"
              ><!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
              <path
                d="M125.1 0H144c88.4 0 160 71.6 160 160v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V176H242.9C161.8 176 96 110.2 96 29.1C96 13 109 0 125.1 0zM144 32H128c1.5 62.1 52.4 112 114.9 112H271C263.1 80.9 209.3 32 144 32zM336 176V160c0-5.4-.2-10.7-.7-16C396.8 142.8 446.4 93.4 448 32H432c-45.7 0-85.8 23.9-108.4 59.9c-4.3-11.4-9.7-22.3-16-32.5C336.9 23.2 381.7 0 432 0h18.9C467 0 480 13 480 29.1c0 80.2-64.2 145.3-144 146.9zM151 317.4c13.1-8.8 28.6-13.4 44.4-13.4H344c30.9 0 56 25.1 56 56c0 8.6-1.9 16.7-5.4 24h5.6l94.7-56.4c8.3-4.9 17.8-7.6 27.5-7.6h1.3c28.9 0 52.3 23.4 52.3 52.3c0 17.7-9 34.2-23.8 43.8L432.6 493.9c-18.2 11.8-39.4 18.1-61 18.1H16c-8.8 0-16-7.2-16-16s7.2-16 16-16H371.5c15.5 0 30.6-4.5 43.6-12.9l119.6-77.8c5.8-3.7 9.2-10.2 9.2-17c0-11.2-9.1-20.3-20.3-20.3h-1.3c-3.9 0-7.7 1.1-11.1 3l-98.5 58.7c-2.5 1.5-5.3 2.3-8.2 2.3H344 320 256c-8.8 0-16-7.2-16-16s7.2-16 16-16h64 24c13.3 0 24-10.7 24-24s-10.7-24-24-24H195.4c-9.5 0-18.7 2.8-26.6 8.1L88.9 397.3c-2.6 1.8-5.7 2.7-8.9 2.7H16c-8.8 0-16-7.2-16-16s7.2-16 16-16H75.2L151 317.4z"
              />
            </svg>
            Lösungen und Mehrwerte <br />
          </dt>
          <dd class="inline-block pt-3 whitespace-pre-line">{solutions}</dd>
        </div>
      </dl>
    </div>
  </Container>
</div>
