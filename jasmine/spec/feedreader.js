/* feedreader.js */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
	/* This is our first test suite - a test suite just contains
	 * a related set of tests. This suite is all about the RSS
	 * feeds definitions, the allFeeds variable in our application.
	 */
	describe('RSS Feeds', function () {
		/* This is our first test - it tests to make sure that the
		 * allFeeds variable has been defined and that it is not
		 * empty.
		 */
		it('are defined', function () {
			expect(allFeeds).toBeDefined();
			expect(allFeeds.length).not.toBe(0);
		});


		/* This is our second test - it loops through each feed
		 * in the allFeeds object and it tests to ensure it has a URL defined
		 * and that the URL is not empty.
		 */
		it('feed has URL', function () {
			allFeeds.forEach(function (feedURL) {
				expect(feedURL.url).toBeDefined();
				expect(feedURL.url).not.toBe('');
			});
		});


		/* This is our third test - it loops through each feed
		 * in the allFeeds object and it tests to ensure it has a name defined
		 * and that the name is not empty.
		 */
		it('feed has name', function () {
			allFeeds.forEach(function (feedName) {
				expect(feedName.name).toBeDefined();
				expect(feedName.name).not.toBe('');
			});
		});
	});

	/* This is our second test suite - This suite is all about the menu
	 * and it's visibility.
	 */
	describe('the menu', function () {
		/* This is our fourth test - it ensures the menu element is
		 * hidden by default.
		 */
		it('menu hidden by default', function () {
			expect(document.body.className).toContain('menu-hidden');
		});

		/* This is our fifth test - it test if the menu changes
		 * visibility from hidden to display when the menu icon is clicked.
		 * https://api.jquery.com/click/
		 * https://api.jquery.com/trigger/
		 */
		it('icon clicked', function () {
			$('.menu-icon-link').trigger('click');
			expect($(document.body).hasClass('menu-hidden')).toBe(false);
		});

		/* This is our sixth test - it test if the menu changes
		 * visibility from display to hidden when the menu icon is clicked again.
		 */
		it('icon clicked again', function () {
			$('.menu-icon-link').trigger('click');
			expect($(document.body).hasClass('menu-hidden')).toBe(true);
		});
	});

	/* This is our third test suite - This suite is all about the RSS
	 * initial entries.
	 */
	describe('Initial Entries', function () {
		/* This is our seventh test - it test that there is at least
		 * a single .entry element within the .feed container
		 * when the loadFeed function is called and completes its work.
		 */
		beforeEach(function (done) {
			loadFeed(0, done); //id = 0, callback
		});

		/* The $() function is to ensure it doesn't 
		 * execute until the DOM is ready.
		 */
		it('feed has at least a single entry', function () {
			expect($('.feed .entry').length).toBeGreaterThan(0);
		});
	});

	/* This is our fourth test suite - This suite is all about the RSS
	 * new feed selection.
	 */
	describe('New Feed Selection', function () {
		/* This is our eighth test  - this test ensures when a new feed is loaded
		 * by the loadFeed function that the content actually changes.
		 */
		var oldFeed;
		var newFeed;

		beforeEach(function (done) {
			loadFeed(0, function () {
				oldFeed = $('.feed').html();

				loadFeed(1, function () {
					newFeed = $('.feed').html();

					done();
				});
			});
		});

		it('load new content', function (done) {
			expect('newFeed').not.toBe('oldFeed');
			done();
		});
	});
}());
