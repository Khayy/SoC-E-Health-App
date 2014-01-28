Ext.define('MedBlogs.controller.PinnedPostsNavigationController', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
           main: 'pinnedNavigation', // ref to main navigation view
           postsList: 'pinnedNavigation pinnedPostsScreen list',
           unpinButton: '#unpinButton'
        },

        control: {
            main: {
                push: 'onMainPush',
                pop: 'onMainPop'
            },
            postsList: {
	          itemtap: 'onFeedTap'  
            },
            unpinButton: {
                tap: 'onUnpinSelect'
            }
        }
    },

    onMainPush: function(view, item) {
		// nothing special 
    },

    onMainPop: function(view, item) {
    	// deselect any tapped announcements
		this.getPostsList().deselectAll();
    },

    onUnpinSelect: function() {
        var localPinStore = Ext.getStore('PinnedPosts');
        var record = this.postDetail.getRecord(record);
        localPinStore.remove(record);
        localPinStore.sync();
        this.getMain().pop();
    },

    onFeedTap: function(list, index, node, record) {
        if (!this.postDetail) {
            this.postDetail = Ext.create('MedBlogs.view.pinned.PostDetail');
        }
		
        this.postDetail.setRecord(record);
        // Push the show contact view into the navigation view
        this.getMain().push(this.postDetail);
       
        //Ext.Msg.alert('Tap', 'Disclose more info for ' + record.get('title'), Ext.emptyFn);
    }
});
