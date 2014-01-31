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