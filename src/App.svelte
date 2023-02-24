<script>
  import Card from "./components/card.svelte";
  import MemberDrawer from "./components/member_drawer.svelte";
  import ShowAll from "./components/show_all.svelte";
  import Sidebar from "./components/sidebar.svelte";
  import TaskDrawer from "./components/task_drawer.svelte";

  let taskDrawer = false;
  let memberDrawer = false;
  let taskType = "All Tasks";

  const handleTask = (e) => {
    taskType = e.detail;
  };
</script>

<main>
  <div class="dashboard">
    <Sidebar
      on:openTaskDrawer={() => ((taskDrawer = true), (memberDrawer = false))}
      on:openMemberDrawer={() => ((memberDrawer = true), (taskDrawer = false))}
      on:changeTask={handleTask}
    />
    <ShowAll {taskType} />
  </div>

  <TaskDrawer {taskDrawer} on:closeTaskDrawer={() => (taskDrawer = false)} />
  <MemberDrawer
    {memberDrawer}
    on:closeMemberDrawer={() => (memberDrawer = false)}
  />
</main>

<style>
  .dashboard {
    display: flex;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
