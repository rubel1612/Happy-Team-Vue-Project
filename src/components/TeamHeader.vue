
<script setup>
   import { useTeamStores } from "@/stores/TeamStores";
   import AddMemberModal from "./AddMemberModal.vue";

   let team = useTeamStores();

</script>

<template>

<header>
     <div>
    <AddMemberModal/>
     </div>

     <div class="right-header">
     <h3>
     <img src="" alt="">
     {{ team.name }} Team
     <div class="right-header-up">
     {{ team.members.length}}
     </div>
     </h3>
     </div>
    </header>
</template>

<style>
header{
     width: 100%;
     display: flex;
     justify-content: space-between;
  }

  .right-header{
        display: flex;
        align-items: center; 
        font-size: 30px;
        position: relative;
  }
  .right-header img{
   margin-right: 8px;
  }
  .right-header-up{
    background-color: rgb(34, 197, 94); 
    width: 20px; 
    height: 20px;
    border-radius: 50%;
    font-size: 14px; 
    color: white;
    display:flex ;
    justify-content: center;
    position: absolute;
    right: -16px;
    top: 0;

  }
</style>