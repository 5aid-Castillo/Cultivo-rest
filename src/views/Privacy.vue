<template>
  <div class="privacy-policy">
    <h1>{{ $t("privacy.title") }}</h1>
    <p>
      {{ $t("privacy.welcomeText") }} <strong>Cultivo Cocina Estacional Mexicana</strong>. {{ $t("privacy.text1") }}
    </p>

    <h2>{{ $t("privacy.title2") }}</h2>
    <p>
      {{ $t("privacy.text2") }}
    </p>
    <ul>
      <li><strong>{{ $t("privacy.list1") }}</strong> {{ $t("privacy.textList1") }}</li>
      <li><strong>{{ $t("privacy.list2") }}</strong> {{ $t("privacy.textList2") }}</li>
      <li><strong>{{ $t("privacy.list3") }}</strong> {{ $t("privacy.textList3") }}</li>
      <li><strong>{{ $t("privacy.list4") }}</strong> {{ $t("privacy.textList4") }}</li>
      <li><strong>{{ $t("privacy.list5") }}</strong> {{ $t("privacy.textList5") }}</li>
      <li><strong>{{ $t("privacy.list6") }}</strong> {{ $t("privacy.textList6") }}</li>
      <li><strong>{{ $t("privacy.list7") }}</strong> {{ $t("privacy.textList7") }}</li>
    </ul>

    <h2>{{ $t("privacy.title3") }}</h2>
    <p>
      {{ $t("privacy.text3") }}
    </p>

    <h2>{{ $t("privacy.title4") }}</h2>
    <p>
      {{ $t("privacy.text4") }}
    </p>

    <h2>{{ $t("privacy.title5") }}</h2>
    <p>
      {{ $t("privacy.text5") }}
    </p>

    <h2>{{ $t("privacy.title6") }}</h2>
    <p>
      {{ $t("privacy.text6") }}
    </p>
  </div>
</template>

<script setup lang="ts">
// No se requiere lógica adicional para esta página estática
</script>

<style scoped>
.privacy-policy {
  max-width: 800px;
  margin: 2rem auto;
  padding: 1rem 2rem;
  font-family: Arial, sans-serif;
  line-height: 1.6;
  color: #333;
}

.privacy-policy h1 {
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 2rem;
}

.privacy-policy h2 {
  margin-top: 1.5rem;
  font-size: 1.25rem;
}

.privacy-policy ul {
  list-style-type: disc;
  margin-left: 1.5rem;
}

.privacy-policy p {
  margin: 0.8rem 0;
}
</style>