<script lang="ts">
  import ebl from '$lib/assets/img/customer/ebl-logo.svg'
  import enzler from '$lib/assets/img/customer/enzler-logo.png'
  import analytica from '$lib/assets/img/customer/analytica-logo-main.svg'
  import iwb from '$lib/assets/img/customer/iwbLogo.svg'
  import helvetas from '$lib/assets/img/customer/helvetas.gif'
  import christen from '$lib/assets/img/customer/christen.svg'
</script>

<div class="bg-white">
  <div class="text-center px-16 lg:px-8 py-8 max-w-4xl lg:mr-auto md:py-16 sm:px-6" id="partners">
    <h2 class="text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl">Bereits Beratene Kunden</h2>
    <div class="mt-6 grid grid-cols-2 md:grid-cols-3 lg:mt-8 customer-grid">
      <div class="customer-grid-row">
        <a
          href="https://www.ebl.ch/de/"
          rel="noreferrer"
          target="_blank"
          class="col-span-1 flex items-center justify-center py-8 px-8 filter"
        >
          <img height="80" class="max-h-20" src={ebl} loading="lazy" alt="customer-ebl" />
        </a>
        <a
          href="https://www.enzler.com/de/"
          rel="noreferrer"
          target="_blank"
          class="col-span-1 flex items-center justify-center py-8 px-8 filter"
        >
          <!--suppress CheckImageSize -->
          <img height="80" class="max-h-20" src={enzler} loading="lazy" alt="customer-enzler" />
        </a>
        <a
          href="https://www.analytica.ch/"
          rel="noreferrer"
          target="_blank"
          class="col-span-1 flex items-center justify-center py-8 px-8 filter"
        >
          <img height="80" class="max-h-20" src={analytica} loading="lazy" alt="customer-analytica" />
        </a>
      </div>

      <div class="customer-grid-row">
        <a
          href="https://www.iwb.ch/"
          rel="noreferrer"
          target="_blank"
          class="col-span-1 flex items-center justify-center py-8 px-8 filter"
        >
          <img height="80" class="max-h-20" src={iwb} loading="lazy" alt="customer-iwb" />
        </a>
        <a
          href="https://www.helvetas.org/en/switzerland"
          rel="noreferrer"
          target="_blank"
          class="col-span-1 flex items-center justify-center py-8 px-8 filter"
        >
          <!--suppress CheckImageSize -->
          <img height="80" class="max-h-20" src={helvetas} loading="lazy" alt="customer-helvetas" />
        </a>
        <a
          href="https://www.christen-ag.ch/"
          rel="noreferrer"
          target="_blank"
          class="col-span-1 flex items-center justify-center py-8 px-8 filter"
        >
          <img height="80" class="max-h-20" src={christen} loading="lazy" alt="customer-analytica" />
        </a>
      </div>
    </div>
  </div>
</div>

<style style lang="postcss">
  .customer-grid a {
    @apply border-4 border-gray-100 last:border-r-0 first:border-l-0;
  }
  .customer-grid-row {
    @apply contents;
  }
  .customer-grid-row:last-child a {
    @apply border-b-0;
  }
  .customer-grid-row:first-child a {
    @apply border-t-0;
  }
</style>
