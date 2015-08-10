/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* This test loops through each feed in the allFeeds
         * object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('have URLs', function() {
            allFeeds.forEach(function(element) {
                expect(element.url).toBeDefined();
                expect(element.url).not.toBe('');
            });
        });


        /* This test loops through each feed in the allFeeds
         * object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('have names', function() {
            allFeeds.forEach(function(element) {
                expect(element.name).toBeDefined();
                expect(element.name).not.toBe('');
            });
        });
    });


    /* This test suite is all about the
     * functionality of the menu.
     */
    describe('The menu', function() {
        /* This test ensures that the menu element is
         * hidden by default.
         */
        it('is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        /* This test ensures that the menu changes
         * visibility when the menu icon is clicked.
         */
        it('shows and hides on click', function() {
            var menuButton = $('.menu-icon-link');

            // First test: Menu appears when menu icon is clicked.
            menuButton.click();
            expect($('body').hasClass('menu-hidden')).toBe(false);

            // Second test: Menu disappears when menu icon is clicked again.
            menuButton.click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    /* This test suite is all about
     * testing the initial feed entries.
     */
    describe('Initial entries', function() {
        /* This test ensures that when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Because loadFeed() is asynchronous this test requires
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });

        it('contain at least one entry', function(done) {
            expect($('.feed .entry:first-child')).toBeDefined();
            done();
        });

    });

    /* This test suite is all about
     * content changes in a feed.
     */
    describe('New feed selection', function() {
        /* This test ensures that when a new feed is loaded
         * by the loadFeed function the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

        // Global vars
        var initialFeed, newFeed;

        /* Call the loadFeed function twice in order to compare
         * if feed content changes after a new feed is loaded.
         * Therefore loadFeed is called a second time inside the first call.
         */
        beforeEach(function(done) {
            loadFeed(0, function() {
                // Set initial feed value.
                initialFeed = $('.feed').html();

                loadFeed(1, function() {
                    // Set new feed value.
                    newFeed = $('.feed').html();
                    done();
                });
            });
        });

        it('content actually changes', function(done) {
            // Test if new content has changed compared to initial content.
            expect(newFeed).not.toBe(initialFeed);
            done();
        });

    });
}());
