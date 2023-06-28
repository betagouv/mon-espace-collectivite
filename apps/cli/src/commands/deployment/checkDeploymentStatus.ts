import { Command } from '@commander-js/extra-typings';
import axios from 'axios';
import axiosRetry from 'axios-retry';

import { output } from '@app/cli/output';

export const checkDeploymentStatus = new Command()
  .command('deployment:check-status')
  .argument('<url>', 'deployment url')
  .action(async (url) => {
    const client = axios.create({
      baseURL: url,
      headers: {
        Accept: 'text/html',
      },
    });
    axiosRetry(client, {
      retries: 3,
      retryDelay: (retryCount) => retryCount * 3000,
    });

    const statusResponse = await client.get<{ status: string }>('/health');
    output(`Status is ${statusResponse.data.status}`);

    const homePageResponse = await client.get<string>('/');
    if (!homePageResponse.data.startsWith('<!DOCTYPE html>')) {
      throw new Error('Home page is not valid html');
    }

    output(`Homepage looks like valid html`);
  });
