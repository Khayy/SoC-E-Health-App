Ext.define('MedBlogs.controller.FeedsNavigationController', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            main: 'feedsNavigation',
            settingsButton: '#settingsButton',
            settingsScreen: 'settingsScreen',
            feedsScreen: 'feedsScreen',
            feedDetail: 'feedDetail'
        },

        control: {
            main: {
                push: 'onMainPush',
                pop: 'onMainPop'
            },
            settingsButton: {
                tap: 'onSettingsSelect'
            },
            'feedsScreen list': {
                itemtap: 'onFeedTap'
            },
            'settingsScreen list': {
                itemtap: 'onSettingTap'
            }

        }
    },

    onMainPush: function(view, item) {
        var settingsButton = this.getSettingsButton();

        if (item.xtype == "feedsScreen") {

            this.showSettingsButton();
        } else {
            this.hideSettingsButton();
        }
    },

    onMainPop: function(view, item) {
        if (item.xtype == "settingsScreen" || item.xtype == "feedDetail") {
            this.showSettingsButton();
        } else {
            this.hideSettingsButton();
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

    onSettingTap: function(list, index, node, record) {
        // check and only show on select 
        //CHECK NEEDED
        Ext.Msg.confirm(record.get('name'), "Would you like to receive notifications for " + record.get('name') + "?", Ext.emptyFn);
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

    showSettingsButton: function() {
        var settingsButton = this.getSettingsButton();

        if (!settingsButton.isHidden()) {
            return;
        }

        settingsButton.show();
    },

    hideSettingsButton: function() {
        var settingsButton = this.getSettingsButton();

        if (settingsButton.isHidden()) {
            return;
        }

        settingsButton.hide();
    }
});
