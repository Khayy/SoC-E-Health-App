/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.
*/

Ext.application({
    name: 'MedBlogs',

    requires: [
        'Ext.ux.touch.SwipeTabs',
        'Ext.device.Push',
        'Ext.device.Notification'
    ],

    controllers: [
        'FeedsNavigationController',
        'PinnedPostsNavigationController',
        'FlashCardsController'
    ],

    models: [
    	'Announcements',
        'Subscriptions',
        'PinnedPosts',
        'CardCategories',
        'FlashCards'
    ],
    
    stores: [
    	'Announcements',
        'Subscriptions',
        'PinnedPosts',
        'CardCategories',
        'FlashCards'
    ],
    
    views: [
        'Main',
		'FlashCardsNavigation',
		'flashcards.Card',
		'flashcards.SelectScreen',
		'PinnedPostsNavigation',
		'pinned.PinnedPosts',
		'pinned.PostDetail',
        'Help',
        'feeds.Feeds',
        'feeds.FeedDetail',
        'feeds.Settings',
        'FeedsNavigation'
    ],
    
    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },
    
    launchView: 'Announcements',

    launch: function() {
        Ext.create('MedBlogs.store.Announcements', { id: 'Announcements' });
        MedBlogs.util.Proxy.Announcements.process('http://137.117.146.199:8080/E-Health-Server/feeds/all-years');

		// load pinned posts from local storeage
		Ext.getStore('PinnedPosts').load();
		
        this.subscriptionsInit();
       // this.pushInit();
       
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        var mainView = Ext.create('MedBlogs.view.Main')
        Ext.Viewport.add(mainView);

		// to do, figure out some way to get to the seconary view
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    },
    
    subscriptionsInit: function (subscriptions) {
   		// load and setup subscriptions from local storage
		var subscriptions = Ext.getStore('Subscriptions');
		subscriptions.load();
		
	    if (subscriptions.getCount() < 1) {
		    subscriptions.add({
				name : 'Year 1', 
				following: 'no',
				notifications: 'no'
			});
			
			subscriptions.add({
				name : 'Year 2', 
				following: 'no',
				notifications: 'no'
			});
			
			subscriptions.add({
				name : 'Year 3', 
				following: 'no',
				notifications: 'no'
			});
			
			subscriptions.add({
				name : 'Year 4', 
				following: 'no',
				notifications: 'no'
			});
			
			subscriptions.add({
				name : 'Year 5', 
				following: 'no',
				notifications: 'no'
			});
			
			subscriptions.sync();
			
			this.launchView = 'Subscriptions';
	    }
    },
    
    pushInit: function() {
    	var params = {	type: subscribe };
    	if (Ext.os.is.iOS) {
	    	params.os = 'ios';
    	} else if (Ext.os.is.Android) {
	    	params.os = 'android';
    	}
    	
	    Ext.device.Push.register({
		    type: Ext.device.Push.ALERT,
		    success: function(token) {
		    	params.token = token;
		    	
		        Ext.Msg.alert("Token", "Device token:" + token);
		        Ext.Ajax.request({
		            url: 'the push server url',
		            method: 'GET',
		            headers: {
		                'Accept': 'application/json',
		                'Content-Type': 'application/json'
		            },
		            timeout: 30000,
		            params: Ext.Object.toQueryString(params),
		
		            success: function(response, opts) {
		                if (!(response && response.responseText === 'true')) {
		                    Ext.Msg.alert("Push notifications", "Failed to register device for push notifications.", Ext.emptyFn);
		                }
		            }, 
		            failure: function(response, opts) {
		                Ext.Msg.alert("Push notifications", "Failed to register device for push notifications.", Ext.emptyFn);
		            }
		        });
		    },
		    failure: function(error) {
		    	Ext.Msg.alert("Push notifications", "Failed to register device for push notifications.", Ext.emptyFn);
		    },
		    received: function(notification) {
		    	var subscriptions = Ext.getStore('Subscriptions');
				
		    	// TODO: check the year against subscriptions
		    	// and refresh the feeds
		        Ext.device.Notification.show({
				    title: 'New announcement',
				    message: notification.alert
				});
		    }
		});
    }
});