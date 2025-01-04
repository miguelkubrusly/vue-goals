Vue.createApp({
data() {
return {
enteredGoal: "",
goals: [],
};
},
methods: {
addGoal() {
if (enteredGoal !== "") {
this.goals.push(this.enteredGoal);
this.enteredGoal = "";
}
},
},
}).mount("#app");
