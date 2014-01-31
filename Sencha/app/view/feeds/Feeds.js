Ext.define('MedBlogs.view.feeds.Feeds', {
	extend: 'Ext.Panel',
	xtype: 'feedsScreen',
	
	requires: [
		'Ext.MessageBox',
		'Ext.dataview.List',
		'MedBlogs.store.Announcements',
		'MedBlogs.model.Announcements'
	],
	
	config: {
		title: 'Announcements',
		iconCls: 'alertIcon',
		layout: 'fit',
		
		items: [
			{
				xtype: 'list',
				variableHeights: true,
				disclosure: false,
				store: 'storeAnnounce',
				plugins: [
                    {
                        xclass: 'Ext.plugin.PullRefresh',
                        pullText: 'Pull down for more data!',
                        autoSnapBack : true
                    },
                    {
                        xclass: 'Ext.plugin.ListPaging',
                        autoPaging: true
                    }
                    /*
                        	var items = Ext.getStore('Settings').getData().items;
                        	Ext.each(items ,function(record, recordIndex){
                        		if(record.get('following') === yes) {
                        			var yearToCall = record.get('name').toLowerCase().replace(" ","");
                        			MedBlogs.util.Proxy.Announcements.process('http://137.117.146.199:8080/E-Health-Server/feeds/' + yearToCall);
                        		}
                        	});
                        	*/
                        //callback.call(plugin);
                        	//plugin.setState("loaded");
                        	//var store = plugin.list.getStore();
                        	//store.load();
		                    /*var store = plugin.list.getStore();
		                            store.load(function(records, operation, success) {
		                                callback.call(plugin);
		                                console.log( 'me3' );
		                            });
		                    */
		            /*
					{
                        xclass: 'MedBlogs.CustomPullRefresh',           
                        pullText: 'Pull to refresh announcements!',
                        onRefresh: function(callback, plugin) {
                        	MedBlogs.util.Proxy.Announcements.process('http://137.117.146.199:8080/E-Health-Server/feeds/all-years');
		                },
		                loadNextPage: function(callback, plugin) {
                        	MedBlogs.util.Proxy.Announcements.process('http://137.117.146.199:8080/E-Health-Server/feeds/all-years' + '?page=' + plugin.getPageNumber());
		                }
                    } */                
				],
				emptyText: '<div style="text_align:center">No announcements yet</div>',
				itemTpl: ['<div class="feed_list">',
							'<div class="category">{category}</div>',
							'<span class="title">{title}</span><br/>',
							'<span class="creator">{creator}</span>',
							'<span class="date">{date}</span>',
							'<br/><span class="description">{description}</span></div>'].join(" ")
			}
		]
	}
	/*,

	show: function(component, options){
	    Ext.getStore('storeAnnounce').load();
	} */
	
});