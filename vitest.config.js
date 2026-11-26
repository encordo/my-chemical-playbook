// vitest.config.ts
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    env: {
      NODE_ENV: "test",
      JWT_SECRET: "secreto-de-test",
      MONGO_HOST: "localhost",
      MONGO_PORT: "27017",
      MONGO_USER: "test",
      MONGO_PASSWORD: "test",
      MONGO_DB: "my-chemical-playbook-test",
    },
  },
})