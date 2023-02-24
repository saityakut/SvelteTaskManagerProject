<script>
  import Card from "./card.svelte";
  import { allTasks, completeed, inCompleteed } from "../stores/store";
  import { fade, scale } from "svelte/transition";
  import { flip } from "svelte/animate";
  export let taskType = "All Tasks";
</script>

<div class="all-tasks">
  {#if taskType === "All Tasks"}
    <h1>All Tasks</h1>
    <div class="box">
      {#each $allTasks as task (task.id)}
        <div in:fade out:scale|local animate:flip={{ duration: 500 }}>
          <Card {task} />
        </div>
      {/each}
    </div>
  {:else if taskType === "Completed Tasks"}
    <h1>Completed Tasks</h1>
    <div class="box">
      {#each $completeed as task (task.id)}
        <div in:fade out:scale|local animate:flip={{ duration: 500 }}>
          <Card {task} />
        </div>
      {/each}
    </div>
  {:else if taskType === "Incompleted Tasks"}
    <h1>Incompleted Tasks</h1>
    <div class="box">
      {#each $inCompleteed as task (task.id)}
        <div in:fade out:scale|local animate:flip={{ duration: 500 }}>
          <Card {task} />
        </div>
      {/each}
    </div>
  {/if}
</div>

<style>
  .all-tasks {
    padding: 20px;
    padding-left: 400px;
    padding-right: 400px;
    display: flex;
    flex-direction: column;
  }

  .box {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
</style>
