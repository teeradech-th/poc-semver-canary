module.exports = {
  dryRun: false,
  branches: [
    { name: 'main', },
    { name: 'development', channel: 'dev', prerelease: true },
  ],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'docs/CHANGELOG.md',
      },
    ],
    ['@semantic-release/npm', { npmPublish: false }],
    [
      '@semantic-release/github',
      {
        releasedLabels: ['released', 'v<%= nextRelease.version %>'],
      },
    ],
    [
      '@semantic-release/git',
      {
        assets: ['package.json', 'docs'],
        message:
          'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ],
  ],
};
