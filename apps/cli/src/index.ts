import { Command } from '@commander-js/extra-typings';

import { checkDeploymentStatus } from '@app/cli/commands/deployment/checkDeploymentStatus';
import { addNextPublicVariablesToDotEnv } from '@app/cli/commands/infrastructure/addNextPublicVariablesToDotEnv';

const program = new Command();

program.addCommand(addNextPublicVariablesToDotEnv);
program.addCommand(checkDeploymentStatus);

program.parse();
