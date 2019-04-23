<template>
  <div>
    <div class="container-fluid">
      <navbar/>
      <nuxt/>
    </div>
  </div>
</template>

<script>
import navbar from "../components/navbar";

export default {
  components: { navbar }
};
</script>

