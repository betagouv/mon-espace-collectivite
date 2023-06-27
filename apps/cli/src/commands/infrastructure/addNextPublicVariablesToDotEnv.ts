import { Argument, Command, Option } from '@commander-js/extra-typings';

import { appendEnvVariablesToDotEnvFile } from '@app/cli/dotEnvFile';

export const addNextPublicVariablesToDotEnv = new Command()
  .command('dotenv:add-next-public')
  .addArgument(new Argument('<namespace>', 'deployment namespace'))
  .addOption(new Option('--local', 'local deployment target'))
  .action(async (namespace, { local }) => {
    const targetEnv: 'local' | 'main' | 'preview' = local ? 'local' : namespace === 'main' ? 'main' : 'preview';

    await appendEnvVariablesToDotEnvFile({
      comment: 'Next public environment needed at build time',
      environmentVariables: [
        targetEnv === 'local' ? { name: 'NEXT_PUBLIC_SENTRY_DSN', value: '' } : { name: 'NEXT_PUBLIC_SENTRY_ENVIRONMENT', value: namespace },
      ],
    });
  });
