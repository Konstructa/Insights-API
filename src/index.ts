import { Server } from './server/server';

async function main() {
  const app = new Server();
  await app.listen();
}

main();
