Ext.define('MedBlogs.controller.PinnedPostsNavigationController', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
           main: '', // ref to main navigation view
           doneButton: '', // done
           unpinButton: ''
        },

        control: {
            main: {
                push: 'onMainPush',
                pop: 'onMainPop'
            },
            doneButton: {
                tap: 'onDoneSelect'
            },
            pinButton: {
                tap: 'onPinSelect'
            }
        }
    },

    onMainPush: function(view, item) {
        var settingsButton = this.getSettingsButton();
		
        this.getMain().getNavigationBar().leftBox.query('button')[0].hide();
        if (item.xtype == "feedsScreen") {

            this.showButton(this.getSettingsButton());
            this.hideButton(this.getDoneButton());
        } else {
            this.hideButton(this.getSettingsButton());
            this.showButton(this.getDoneButton());
        }
    },

    onMainPop: function(view, item) {
    	// deselect any tapped announcements
		this.getFeedList().deselectAll();
        if (item.xtype == "settingsScreen" || item.xtype == "feedDetail") {
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
    },

    onFeedTap: function(list, index, node, record) {
        if (!this.feedDetail) {
            this.feedDetail = Ext.create('MedBlogs.view.feeds.FeedDetail');
        }
		
        this.feedDetail.setRecord(record);
        // Push the show contact view into the navigation view
        this.getMain().push(this.feedDetail);
       
        //Ext.Msg.alert('Tap', 'Disclose more info for ' + record.get('title'), Ext.emptyFn);
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
