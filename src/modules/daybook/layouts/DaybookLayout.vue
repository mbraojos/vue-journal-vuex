

<template>
    <nav-bar/>
    <div class="d-flex">
        <entry-list/>
        <div class="col">
            <router-view/>
        </div>
    </div>
</template>


<script>

import { defineAsyncComponent } from 'vue';

export default {
    
    components: {
        NavBar: defineAsyncComponent(() => import('../components/NavBar.vue')),
        EntryList: defineAsyncComponent(() => import('../components/EntryList.vue'))
        
    },
}
</script>
