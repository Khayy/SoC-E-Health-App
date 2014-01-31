Ext.define('MedBlogs.controller.FeedsNavigationController', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            main: 'feedsNavigation',
            settingsButton: '#settingsButton',
            doneButton: '#doneButton',
            pinButton: '#pinButton',
            settingsScreen: 'settingsScreen',
            feedsScreen: 'feedsScreen',
            feedDetail: 'feedDetail',
            feedList: 'feedsNavigation list'
        },

        control: {
            main: {
                push: 'onMainPush',
                pop: 'onMainPop'
            },
            settingsButton: {
                tap: 'onSettingsSelect'
            },
            doneButton: {
                tap: 'onDoneSelect'
            },
            pinButton: {
                tap: 'onPinSelect'
            },
            'feedsScreen list': {
                itemtap: 'onFeedTap'
            },
            'settingsScreen list': {
                itemtap: 'onSettingTap'
            }

        }
    },

	launch: function () {
		var subscriptions = Ext.getStore('Subscriptions');
		subscriptions.load();
		var result = subscriptions.find('following', 'yes');
		if (result === -1) {
			if (!this.settingsScreen) {
           		this.settingsScreen = Ext.create('MedBlogs.view.feeds.Settings');
		   	}
			this.getMain().push(this.settingsScreen);
		}
	},

    onMainPush: function(view, item) {
        var settingsButton = this.getSettingsButton();
        if (item.xtype == "feedsScreen") {
            this.showButton(this.getSettingsButton());
            this.hideButton(this.getDoneButton());
        } else if (item.xtype == "feedDetail") {
            this.hideButton(this.getSettingsButton());
            this.hideButton(this.getDoneButton());
        } else {
            this.getMain().getNavigationBar().leftBox.query('button')[0].hide();
            this.hideButton(this.getSettingsButton());
            this.showButton(this.getDoneButton());
        }
    },

    onMainPop: function(view, item) {
    	// deselect any tapped announcements
		this.getFeedList().deselectAll();
        if (item.xtype == "settingsScreen") {
            this.showButton(this.getSettingsButton());
            this.hideButton(this.getDoneButton());
        } else if (item.xtype == "feedDetail") {
            //this.hideButton(this.getSettingsButton());
            this.showButton(this.getSettingsButton());
            this.hideButton(this.getDoneButton());
        } else {
            this.hideButton(this.getSettingsButton());
            this.showButton(this.getDoneButton());
        }
    },

    onSettingsSelect: function() {
        var settingsButton = this.getSettingsButton();

        if (!this.settingsScreen) {
            this.settingsScreen = Ext.create('MedBlogs.view.feeds.Settings');
        }
        // Push the show contact view into the navigation view
        this.getMain().push(this.settingsScreen);
    },

    onDoneSelect: function() {
        this.getMain().pop();
    },

    onPinSelect: function() {
        var localPinStore = Ext.getStore('PinnedPosts');
        var record = this.feedDetail.getRecord();
        localPinStore.add(record);
        localPinStore.sync();
    },

    onSettingTap: function(list, index, node, record) {
        // check and only show on select 
        if(list.isSelected(record) === false) {
        	record.set('following', 'yes');
	        Ext.Msg.confirm(record.get('name'), "Would you like to receive notifications for " + record.get('name') + "?", function (choice) {
		        if (choice === 'yes' || choice === 'ok') {
			        record.set('notifications', 'yes');
		        }
		        
		        record.save();
	        });
        } else {
	        record.set('following', 'no');
	        record.set('notifications', 'no');
	        record.save();
        }

        var years = list.getStore().getYears();
        var proxy = Ext.getStore('storeAnnounce').getProxy();
        proxy.setExtraParams({'years':years});
    },

    onFeedTap: function(list, index, node, record) {
        if (!this.feedDetail) {
            this.feedDetail = Ext.create('MedBlogs.view.feeds.FeedDetail');
        }
		
        this.feedDetail.setRecord(record);
        // Push the show contact view into the navigation view
        this.getMain().push(this.feedDetail);
    },

    showButton: function(genericButton) {

        if (!genericButton.isHidden()) {
            return;
        }

        genericButton.show();
    },

    hideButton: function(genericButton) {

        if (genericButton.isHidden()) {
            return;
        }

        genericButton.hide();
    }
});
