Ext.define('MedBlogs.view.Help', {
	extend: 'Ext.Panel',
	xtype: 'helpScreen',
	
	requires: [
		'Ext.TitleBar',
        'Ext.ux.AccordionList'
	],
	
	config: {
		title: 'Help',
		iconCls: 'helpIcon',
		layout: 'card',
		
		items: [
			{
				docked: 'top',
				xtype: 'titlebar',
				title: 'Help'
			},
            {
	            xtype: 'accordionlist',
	            store: Ext.create('MedBlogs.store.HelpStore'),
	            headerItemTpl: [
	                '<tpl if="this.isExpanded(values)">',
	                    '<div class="down"></div>',
	                    '<div <tpl if="values.category">',
	                    		'style="font-style:italic;"',
	                    	  '<tpl else>style="font-weight:bold;"</tpl>>',
	                    	'{text}',
	                    '</div>',
	                '<tpl else>',
	                    '<div class="right"></div>',
	                    '<div <tpl if="values.category">',
	                    		'style="font-style:italic;"',
	                    	  '<tpl else>style="font-weight:bold;"</tpl>>',
	                    	'{text}',
	                    '</div>',
	                '</tpl>'
	            ].join(''),
	            contentItemTpl: [
	                '<div style="display:-webkit-box;width:100%;text-align:left;">',
	                    '<div class="helpItem">{text}</div>',
	                '</div>'
	            ].join(''),
	            useSelectedHighlights: false,
	            showCount: true,
	            //animation: true,
	            indent: true,
	            //animationDuration: 300,
	            itemId: 'nested',
	            listeners: {
	                initialize: function() {
	                   this.load();
	                   //this.addCls('PL-view');
	                }
	            }
	        }
		]
	}
	
});