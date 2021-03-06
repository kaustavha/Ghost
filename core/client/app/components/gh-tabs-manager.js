import Ember from 'ember';
/**
Heavily inspired by ic-tabs (https://github.com/instructure/ic-tabs)

Three components work together for smooth tabbing.
1. tabs-manager (gh-tabs)
2. tab (gh-tab)
3. tab-pane (gh-tab-pane)

## Usage:
The tabs-manager must wrap all tab and tab-pane components,
but they can be nested at any level.

A tab and its pane are tied together via their order.
So, the second tab within a tab manager will activate
the second pane within that manager.

```hbs
{{#gh-tabs-manager}}
  {{#gh-tab}}
    First tab
  {{/gh-tab}}
  {{#gh-tab}}
    Second tab
  {{/gh-tab}}

  ....
  {{#gh-tab-pane}}
    First pane
  {{/gh-tab-pane}}
  {{#gh-tab-pane}}
    Second pane
  {{/gh-tab-pane}}
{{/gh-tabs-manager}}
```
## Options:

the tabs-manager will send a "selected" action whenever one of its
tabs is clicked.
```hbs
{{#gh-tabs-manager selected="myAction"}}
    ....
{{/gh-tabs-manager}}
```

## Styling:
Both tab and tab-pane elements have an "active"
class applied when they are active.

*/
export default Ember.Component.extend({
    activeTab: null,
    tabs: [],
    tabPanes: [],

    // Called when a gh-tab is clicked.
    select: function (tab) {
        this.set('activeTab', tab);
        this.sendAction('selected');
    },

    // Used by children to find this tabsManager
    isTabsManager: true,

    // Register tabs and their panes to allow for
    // interaction between components.
    registerTab: function (tab) {
        this.get('tabs').addObject(tab);
    },

    unregisterTab: function (tab) {
        this.get('tabs').removeObject(tab);
    },

    registerTabPane: function (tabPane) {
        this.get('tabPanes').addObject(tabPane);
    },

    unregisterTabPane: function (tabPane) {
        this.get('tabPanes').removeObject(tabPane);
    }
});
