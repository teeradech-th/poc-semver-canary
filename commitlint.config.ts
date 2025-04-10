import type { UserConfig } from '@commitlint/types';
import { RuleConfigSeverity } from '@commitlint/types';

/**
 * Types of commit
 *
 * build: changes that affect the build system or external dependencies
 * chore: updating grunt tasks etc; no production code change
 * ci: changes to CI configuration files and script
 * docs: documentation only changes
 * feat: a new feature
 * fix: a bug fix
 * perf: a code change that improves performance
 * refactor: a code change that neither fixes a bug nor adds a feature
 * static: add or update static files
 * style: changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
 * test: adding missing tests or correcting existing tests
 */
const Configuration: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-max-line-length': [RuleConfigSeverity.Warning, 'always', 0],
    'footer-max-line-length': [RuleConfigSeverity.Warning, 'always', 0],
    'scope-case': [
      RuleConfigSeverity.Warning,
      'always',
      ['lower-case', 'pascal-case', 'camel-case'],
    ],
    'type-enum': [
      RuleConfigSeverity.Error,
      'always',
      [
        'build',
        'chore',
        'ci',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'static',
        'style',
        'test',
      ],
    ],
  },
};

export default Configuration;
