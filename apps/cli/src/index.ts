import { checkDeploymentStatus } from '@app/cli/commands/deployment/checkDeploymentStatus';
import { addNextPublicVariablesToDotEnv } from '@app/cli/commands/infrastructure/addNextPublicVariablesToDotEnv';
import { createDotEnvFromSecrets } from '@app/cli/commands/secrets/createDotEnvFromSecrets';
import { getDatabasePasswordSecret } from '@app/cli/commands/secrets/getDatabasePasswordSecret';
import { getSecretValue } from '@app/cli/commands/secrets/getSecretValue';
import { listSecrets } from '@app/cli/commands/secrets/listSecrets';
import { setupDatabaseSecret } from '@app/cli/commands/secrets/setupDatabaseSecret';
import { Command } from '@commander-js/extra-typings';

const program = new Command();

program.addCommand(listSecrets);
program.addCommand(getSecretValue);
program.addCommand(setupDatabaseSecret);
program.addCommand(getDatabasePasswordSecret);
program.addCommand(createDotEnvFromSecrets);
program.addCommand(addNextPublicVariablesToDotEnv);
program.addCommand(checkDeploymentStatus);

program.parse();
