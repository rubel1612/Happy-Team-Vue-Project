import { defineStore } from "pinia";

export let useTeamStores = defineStore('team', {
  state: () => ({
    name: '',
    spots: 0,
    members: []
  }),

  actions: {
    async fill() {
      let r = await import('@/team.json');

      this.$state = r.default;
    },
    grow(newSpots){
        this.spots = newSpots
    },

    remainingSpot(){
        return this.spots - this.members.length
    }
  }
});