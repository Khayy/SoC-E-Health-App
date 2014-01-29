Ext.define('MedBlogs.controller.FlashCardsController', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            navigationContainer: 'flashcardsNavigation',
            selectScreen: 'flashcardsNavigation flashcardSelectScreen',
            selectGrid: '#categoryDataview'
        },

        control: {
        	selectGrid: {
           		 itemtap: 'onCategoryTap'
		    }
        }
    },

    onCategoryTap: function(list, index, node, record) {
    	if (typeof(this.selectedCategories) === 'undefined') {
	    	this.selectedCategories = [];
    	}
        // check and only show on select 
        if(list.isSelected(record) === false) {
        	this.selectedCategories.push(record);
        } else {
	        Ext.Array.remove(this.selectedCategories, record);
        }
    }
});
