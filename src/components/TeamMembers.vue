
<script setup>
  import TeamMember from './TeamMember.vue';
  import { useTeamStores } from "@/stores/TeamStores";
   let team = useTeamStores();
</script>

<template>
   <table class="member-table">
    
    <thead>
         <th>Name</th>
         <th>Email</th>
         <th>Status</th>
    </thead>
      

    <tbody>

       <TeamMember v-for="member in team.members" :name="member.name"
        :email="member.email" :status="member.status"/>

    </tbody>

    </table>
    <p class="end-msg" v-show="team.members.length === team.spots">There is no remaining team spots. upgrade to add more</p>
</template>

<style>
.member-table{
   width: 80%;
   margin: 0 auto;
   table-layout: fixed;
   border-spacing: 6px;
   border-collapse: separate;
}

.member-table th{
   text-align: left;
   padding: 2px 6px;
   font-weight: bold;
}

.end-msg{
   width: 90%;
   text-align: right;
   color: #718096;
   font-style: italic;
}
</style>