<template>
  <div class="entry-title d-flex justify-content-between p-2">
      <div>
          <span class="text-success fs-3 fw-bold">21 </span>
          <span class="mx-1 fs-3 ">septiembre </span>
          <span class="mx-2 fs-4 fw-ligth">2022, miércoles</span>
      </div>
      <div>
          <button class="btn btn-danger mx-2">
              Borrar
              <i class="fa fa-trash-alt"></i>
          </button>

          <button class="btn btn-primary">
              Subir foto
              <i class="fa fa-upload"></i>
          </button>
      </div>
  </div>



  <hr>


  <div class="d-flex flex-column px-3 h-75">
      <textarea placeholder="¿Que ha pasado hoy?"></textarea>
  </div>

  <fav icon="fa-save"/>

  <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/e48d6b9d-3b1d-46a0-a254-3a448ec3a8a5/ddjom8g-4290cdf6-ad55-4e7a-902f-ad37c9a8e8fa.png/v1/fit/w_300,h_900,strp/_346_cradily_by_tonofdirt726_ddjom8g-300w.png" alt="entry-picture">

</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
export default {


    components: {
        Fav: defineAsyncComponent(() => import('../components/Fav.vue'))
    }
}
</script>

<style lang="scss" scoped>

textarea {
    font-size: 20px;
    border: none;
    height: 100%;

    &:focus {
        outline: none;

    }
}

img {
    width: 200px;
    position: fixed;
    bottom: 150px;
    right: 20px;
    margin: 5px;
    border: grey 5px;
    box-shadow: 0px 5px 10px rgba($color: black, $alpha: 0.2);
}

</style>