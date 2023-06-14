<script setup>
    import { useTeamStores } from "@/stores/TeamStores";
     let team = useTeamStores();
     
</script>

<template>
    <footer class="team-footer">
    <h5>{{team.name}}- {{team.members.length}} team members.</h5>
    </footer>
</template>

<style>
    .team-footer{
        background-color: gray;
        margin-top: 48px;
        padding: 16px;
        text-align: center;
    }

    .team-footer h5{
        font-weight: 500;
        font-size: 18px;
    }
</style>