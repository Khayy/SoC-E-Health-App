Ext.define('MedBlogs.util.Proxy', {
    singleton: true,
    requires: ['Ext.data.JsonP'],

    process: function(url) {
        var speakerStore = Ext.getStore('CardCategories'),
            speakerIds = [],
            speakerModel;

        Ext.data.JsonP.request({
            url: url,
            callbackName: 'feedCb',

            success: function(data) {
                Ext.Array.each(data.proposals, function(proposal) {
                    Ext.Array.each(proposal.speakers, function(speaker) {
                        // don't add duplicates or items with no photos.
                        if (speakerIds.indexOf(speaker.id) == -1 && speaker.photo && speakerIds.length < 25) {
                            speakerIds.push(speaker.id);

                            speakerModel = Ext.create('MedBlogs.model.CardCategories', speaker);
                            speakerStore.add(speakerModel);
                        }
                    });
                });
            }
        });
    }
});

Ext.define('MedBlogs.store.CardCategories', {
    extend: 'Ext.data.Store',

    config: {
        model: 'MedBlogs.model.CardCategories'
    }
});
