Ext.define('MedBlogs.view.pinned.PostDetail', {
    extend: 'Ext.Container',
    xtype: 'postDetail',

    requires: [
    ],

    config: {
        title: 'Saved Announcement Details',
        layout: 'vbox',

       items: [
            {
                id: 'content',
                tpl: ['<div class="feed_detail"><br/>',
                            '<div class="category">{title}</div><br/>',
                            '<span class="creator"><b>Creator:</b>  {creator}</span><br/>',
                            '<span class="creator"><b>Date:</b>  {date}</span><br/>',
                            '<span class="creator">{category}</span><br/><br/>',
                            '<div class="description"><b>Description:</b> <br/>{description}</div><br/>',
                            '<div class="description"><b>Link:</b> <u>{link}</u></div>',
                            '</div>'].join(" ")
            },
            {
                    xtype: 'button',
                    id: 'unpinButton',
                    text: 'Remove from pinned posts',
                    align: 'center',
                    hidden: false
            }
        ],

        record: null
    },

    updateRecord: function(newRecord) {
        if (newRecord) {
            this.down('#content').setData(newRecord.data);
        }
    }
});
