<template>
  <div class="hero">
    <!-- Desktop -->
    <div class="d-none d-md-block">
      <div class="row mt-4">
        <div class="col md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h2><strong>Daftar Ikan, </strong> <br />in Your Gadget</h2>
              <p>Ayo segera pilih dan pesan Ikan yang ingin dipelihara</p>
              <router-link class="btn btn-lg btn-primary" to="/ikan">
                <b-icon-arrow-right></b-icon-arrow-right> Pesan
              </router-link>
            </div>
          </div>
        </div>
        <div class="col md-6">
          <img src="../assets/image/hero.png" width="100%" />
        </div>
      </div>
    </div>

    <!-- Mobile -->
    <div class="d-sm-block d-md-none">
      <div class="row mt-4">
        <div class="col md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h2><strong>Daftar Ikan, </strong> <br />in Your Gadget</h2>
              <p>Ayo segera pilih dan pesan Ikan yang dipelihara</p>
              <router-link class="btn btn-lg btn-primary">
                <b-icon-arrow-right></b-icon-arrow-right> Pesan
              </router-link>
            </div>
          </div>
        </div>
        <div class="col md-6 mb-3">
          <img src="../assets/image/hero.png" width="100%" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
};
</script>

<style>
</style>