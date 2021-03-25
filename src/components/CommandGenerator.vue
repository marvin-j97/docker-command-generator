<template>
  <div>
    <command-result
      :command="command"
      :hasError="hasError"
      :copyCommand="copyCommand"
      :copyShareLink="copyShareLink"
    />
    <checkbox v-model="useLongFlags" label="Use long flags" />

    <hr />

    <text-field
      v-model="state.imageId"
      placeholder="Image"
      style="width: 100%; margin-bottom: 20px"
      :error="!isValidImage ? 'Invalid image' : ''"
    />

    <hr />

    <div>
      <checkbox v-model="state.detach" label="Detach" />
      <checkbox
        v-model="state.disableHealthcheck"
        label="Disable health check"
      />
      <checkbox v-model="state.disableOOMKiller" label="Disable OOM Killer" />
      <checkbox v-model="state.interactive" label="Interactive" />
      <checkbox v-model="state.privileged" label="Privileged" />
      <checkbox v-model="state.readOnly" label="Read-only" />
      <checkbox
        v-model="state.autoRemoveContainer"
        label="Remove the container when it exits"
      />
      <checkbox v-model="state.tty" label="TTY" />
    </div>

    <hr />

    <div>
      <text-field
        v-model="state.containerCommand"
        placeholder="Command (optional)"
        style="width: 100%"
      />
      <text-field
        v-model="state.containerName"
        placeholder="Container name"
        label="Container name (optional)"
        style="width: 100%; margin-bottom: 20px"
      />
      <text-field
        v-model="state.mount"
        placeholder="Mount"
        label="Mount (optional)"
        style="width: 100%; margin-bottom: 20px"
      />
      <text-field
        v-model="state.pullPolicy"
        placeholder="Pull policy"
        label="Pull policy (optional)"
        style="width: 100%; margin-bottom: 20px"
        hint="Values: always, missing, never"
        :error="!isValidPullPolicy ? 'Invalid pull policy' : ''"
      />
      <text-field
        v-model="state.restartPolicy"
        placeholder="Restart policy"
        label="Restart policy (optional)"
        style="width: 100%; margin-bottom: 20px"
        hint="Values: no, unless-stopped, always, on-failure[:max-retries]"
        :error="!isValidRestartPolicy ? 'Invalid restart policy' : ''"
      />
      <text-field
        v-model="state.workDir"
        placeholder="Working directory (optional)"
        label="Working directory (optional)"
        style="width: 100%; margin-bottom: 20px"
      />
    </div>

    <hr />

    <div>
      <div class="label" style="margin-bottom: 20px">Volumes</div>
      <div v-for="(volume, i) in state.volumes" :key="volume.id">
        <div
          style="
            display: flex;
            align-items: center;
            width: 100%;
            margin-bottom: 20px;
          "
        >
          <text-field
            hide-label
            v-model="state.volumes[i].value"
            placeholder="Value"
            style="margin-right: 10px"
          />
          <div style="flex-grow: 1"></div>
          <button style="height: 30px" @click="state.volumes.splice(i, 1)">
            - Remove
          </button>
        </div>
      </div>
      <button
        @click="
          state.volumes.push({
            value: 'host:container',
            id: Math.random().toString(36),
          })
        "
      >
        + Add
      </button>
    </div>

    <hr />

    <div>
      <div class="label" style="margin-bottom: 20px">Ports</div>
      <div v-for="(port, i) in state.ports" :key="port.id">
        <div
          style="
            display: flex;
            align-items: center;
            width: 100%;
            margin-bottom: 20px;
          "
        >
          <text-field
            hide-label
            v-model="state.ports[i].value"
            placeholder="Value"
            style="margin-right: 10px"
          />
          <div style="flex-grow: 1"></div>
          <button style="height: 30px" @click="state.ports.splice(i, 1)">
            - Remove
          </button>
        </div>
      </div>
      <button
        @click="
          state.ports.push({
            value: 'host:container',
            id: Math.random().toString(36),
          })
        "
      >
        + Add
      </button>
    </div>

    <hr />

    <div>
      <div class="label" style="margin-bottom: 20px">Environment variables</div>
      <div v-for="(envVar, i) in state.envVars" :key="envVar.id">
        <div
          style="
            display: flex;
            align-items: center;
            width: 100%;
            margin-bottom: 20px;
          "
        >
          <text-field
            hide-label
            v-model="envVar.key"
            placeholder="Key"
            style="margin-right: 10px"
          />
          <text-field
            hide-label
            v-model="envVar.value"
            placeholder="Value"
            style="margin-right: 10px"
          />
          <div style="flex-grow: 1"></div>
          <button style="height: 30px" @click="state.envVars.splice(i, 1)">
            - Remove
          </button>
        </div>
      </div>
      <button
        @click="
          state.envVars.push({
            key: '',
            value: '',
            id: Math.random().toString(36),
          })
        "
      >
        + Add
      </button>
    </div>

    <hr />

    <command-result
      :command="command"
      :hasError="hasError"
      :copyCommand="copyCommand"
      :copyShareLink="copyShareLink"
    />
    <checkbox v-model="useLongFlags" label="Use long flags" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Checkbox from "./Checkbox.vue";
import TextField from "./TextField.vue";
import { useGenerator } from "../generator";
import CommandResult from "./CommandResult.vue";

export default defineComponent({
  name: "CommandGenerator",
  components: {
    Checkbox,
    TextField,
    CommandResult,
  },
  setup() {
    return useGenerator();
  },
});
</script>

<style>
hr {
  margin-top: 25px;
  margin-bottom: 25px;
  border: 1px solid #1a1a1a;
}

label,
.label {
  font-size: 1.1rem;
  font-family: monospace;
  opacity: 0.66;
}

.code-block {
  background: #222224;
  padding: 12px;
  border-radius: 5px;
  font-family: monospace;
  font-size: 1.15rem;
  color: #fafafa;
  overflow: hidden;
}

.icon {
  width: 24px;
  height: 24px;
  cursor: pointer;
  fill: #fafafa;
}
</style>
