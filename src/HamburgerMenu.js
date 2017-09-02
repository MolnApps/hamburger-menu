var HamburgerMenu = new Class({
    Implements: [Options],

    options: {
        'classes': {
            'toggle': 'Menu__toggle',
            'menu': 'Menu',
            'active': 'Menu--active',
        }
    },

    toggler: false,
    menu: false,

    initialize: function(opt) 
    {
        this.setOptions(opt)
        this.toggler = $$('.' + this.options.classes.toggle);
        this.menu = $$('.' + this.options.classes.menu);
    },

    attach: function()
    {
        this.toggler.addEvent('click', this.toggle.bind(this));
    },

    toggle: function(e)
    {
        e.preventDefault();
        this.menu.toggleClass(this.options.classes.active);
    }
});