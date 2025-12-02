<template>
  <div class="min-h-screen bg-white">

    <!-- Banner -->
    <section class="applications-banner">
      <h1 class="applications-banner-title">განაცხადებები</h1>
    </section>

    <!-- Page intro -->
    <div class="max-w-6xl mx-auto pt-10 pb-6 px-4">
      <p class="text-gray-600 leading-relaxed">
        მომხმარებელთა უფლებების დაცვის მიზნით, „საქართველოს გაერთიანებული წყალმომარაგების კომპანია“,
        წყალმომარაგების სისტემაზე ახალ მომხმარებლად მიერთების მსურველებს აძლევს შესაძლებლობას კომპანიას მიმართონ
        ელექტრონული ან წერილობითი ფორმით.
      </p>

      <p class="text-gray-600 mt-4">
        <strong>შენიშვნა:</strong> წყალმომარაგების სისტემაზე ახალი მომხმარებლის მიერთების საბანკო რეკვიზიტები:
        სს "ლიბერთი ბანკი" IBAN: GE20LB0113123325230068; ბანკის კოდი: LBRTGE22; ს/კ 412670097
      </p>
    </div>

    <!-- Cards area -->
    <div class="max-w-6xl mx-auto px-4 pb-20 flex flex-col gap-6">

      <div
        v-for="item in applications"
        :key="item.id"
        @click="goTo(item.route)"
        class="bg-white shadow-md hover:shadow-lg transition p-6 rounded-xl cursor-pointer flex items-center"
      >
        <!-- Logo -->
        <img src="/water-logo.jpg" alt="logo" class="w-18 h-16 object-contain mr-6" />

        <!-- Text -->
        <p class="flex-1 text-gray-800 font-medium leading-relaxed">
          {{ item.title }}
        </p>

        <!-- Button -->
        <button
          class="px-7 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition whitespace-nowrap">
          შევსება
        </button>

      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      applications: [
        { id: 1, title: "წყალმომარაგების სისტემასთან ინდივიდუალურად მიერთებულ მრავალბინიან საცხოვრებელ სახლში უძრავი ქონების გაყოფა (აბონენტის გაყოფის შესახებ)", route: "/division" },
        { id: 2, title: "ირიგაციის ბირებისონული მიერთება", route: "/physical" },
        { id: 3, title: "ახალი მომხმარებლის მიერთება", route: "/new" },
        { id: 4, title: "ტექნიკური პირობის მიღება", route: "/technical" },
        { id: 5, title: "დამატებითი სამუშოების განაცხადი", route: "/extra" }
      ]
    };
  },
  methods: {
    goTo(path) {
      this.$router.push(path);
    }
  }
};
</script>
