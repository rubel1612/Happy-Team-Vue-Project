
<script setup>
    import TeamHeader from '../components/TeamHeader.vue';
    import TeamMembers from '../components/TeamMembers.vue';
    import TeamFooter from '../components/TeamFooter.vue';
   

    import { useTeamStores } from "@/stores/TeamStores";
    import { ref } from 'vue';

    let team = useTeamStores();
    team.fill();
    
    let showModal = ref(false)
   
</script>

<template>
  <div class="container">
   
     <TeamHeader/>

     <div class="main">
     <TeamMembers />
</div>
     <TeamFooter/>

     
  </div>
  

</template>

<style>
  .container{
    width: 70%;
    margin: 50px auto;
    /* background-color: white; */
  }

  
.main{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  margin-top: 50px;
}

  .form-modal{
    margin-top: 10px;
  }

  .form-modal-content{
    display: flex;
    gap: 20px;
  }

  .form-modal-content input{
    border: none;
    padding: 4px;
    flex: 1;
  }

  .form-modal-content button{
    background: #f5f4f4;
  padding: .25rem .75rem;
  border-radius: 1rem;
  }
</style>