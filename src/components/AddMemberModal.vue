

<script setup>
  import Modal from './Modal.vue';
  import { ref } from 'vue';
  import { useTeamStores } from "@/stores/TeamStores";

  let showModal = ref(false)
  let team = useTeamStores();
</script>

<template>
 <button class="addMemberButton" :disabled="!team.remainingSpot()"
      @click="showModal = true"
     >
     Add Member ( {{ team.remainingSpot()}} spots left)
     </button>

 <Teleport to="body">
        <Modal :show="showModal" @close="showModal = false">
      <template #default>
      <p>Need to add a new member to your team?</p>

      <form class="form-modal">
        <div class="form-modal-content">
          <input type="email" placeholder="Email Address...">
          <button>Add</button>
        </div>
      </form>
    </template>
    </Modal>
      </Teleport>

</template>

<style>

  .addMemberButton{
     background-color: rgb(150, 230, 177);
     color: white;
     padding: 6px;
  }

  .addMemberButton:disabled{
      background-color: gray;
  }

 
</style>