/* Information about this package */
Package.describe({
    // Short two-sentence summary.
    summary: "Piwik tracking for Meteor.",
    // Version number.
    version: "0.2.0",
    // Optional.  Default is package directory name.
    name: "davidsichau:piwik",
    documentation: 'README.md',

    git: 'https://github.com/DavidSichau/piwik'
});

/* This defines your actual package */
Package.onUse(function (api) {
    api.versionsFrom('1.1.0.2');
    var both = ["client", "server"];

    api.addFiles(['client/piwik.js'], ['client']);
    api.addFiles(['server/piwik.js'], ['server']);
});

/* This lets you use npm packages in your package*/
Npm.depends({
    "piwik-tracker": "0.1.1"
});
