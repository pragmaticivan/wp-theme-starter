/**
 * Project info config object
 *
 * All params optional unless
 * otherwise noted
 *
 * @params {
 *  string name               (required) The built theme dirname and the theme text-domain
 *  string prettyName         (required) The theme name as shown in the theme selector admin
 *  string themeURI           The theme's URI
 *  string githubThemeURI     The theme's github URI, for use with afragen's github updater
 *  string releaseAsset       Whether to use github release assets for theme update
 *  string description        A short description of the theme
 *  string parentTheme        If this is a child theme, then put the parent
 *                            theme's directory name here
 *  string version            The theme's version
 *  string author             The theme's author
 *  string authorURI          The theme author's URI
 *  string license            The theme's license
 *  string licenseURI         The theme license's URI
 *  array  tags               Keywords that could be associated with the theme
 *  string appName            The site's name (for use in app manifests w favicons)
 *  string appDescription     The site's description (for use in app manifests w favicons)
 * }
 */
module.exports = {
	name: 'you_should_probably_change_this',
	prettyName: 'You should probably change this...',

	description: 'The 2015 theme for {Example.com}. Built by John & Jane Doe for {Example}',
	version: '0.1.0',
	author: 'John & Jane Doe <jd@example.com>',
	authorURI: 'http://example.com',
	license: 'GPLv2 or later',

	appName: 'My example site',
	appDescription: 'Serving you since 2000'
};