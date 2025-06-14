import * as commonCmds from './commands/common';
import * as profileCmds from './commands/profile';
import * as articlesCmds from './commands/article';
import * as commentsCmds from './commands/comments';
import * as ratingCmds from './commands/rating';

Cypress.Commands.addAll(commonCmds);
Cypress.Commands.addAll(profileCmds);
Cypress.Commands.addAll(articlesCmds);
Cypress.Commands.addAll(commentsCmds);
Cypress.Commands.addAll(ratingCmds);

export {};
