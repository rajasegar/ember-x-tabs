# ember-x-tabs

[![Build Status](https://travis-ci.org/rajasegar/ember-x-tabs.svg?branch=master)](https://travis-ci.org/rajasegar/ember-x-tabs) 
[![npm](https://img.shields.io/npm/dm/ember-x-tabs.svg)](https://www.npmjs.com/package/ember-x-tabs)
[![npm version](http://img.shields.io/npm/v/ember-x-tabs.svg?style=flat)](https://npmjs.org/package/ember-x-tabs "View this project on npm")
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)
[![EmberObserver](http://emberobserver.com/badges/ember-x-tabs.svg?branch=master)](http://emberobserver.com/addons/ember-x-tabs)

An Ember component addon for Tab component with various style options and theme customization.

Heavily inspired by this [Codrops article](https://tympanus.net/codrops/2014/09/02/tab-styles-inspiration/)

## Demo

[Demo](http://rajasegar.github.io/ember-x-tabs/)

## Installation

* `ember install ember-x-tabs`

## Features
* Declarative
* 14+ Styles to choose from
* Fully composable
* Customizable

## Usage

Example markup:

### Bar style

```hbs
    {{#x-tab  tab-style="tabs-style-bar" as |tab| }}

      {{!-- tab navigation --}}
      {{#x-tab/navigation}}
        {{#x-tab/nav-wrap paneId="home" tab=tab}}
          <i class="icon icon-home"></i>
          <span>Home</span>
        {{/x-tab/nav-wrap}}
        {{#x-tab/nav-wrap paneId="archive" tab=tab}}
          <i class="icon icon-box"></i>
          <span>Archive</span>
        {{/x-tab/nav-wrap}}
        {{#x-tab/nav-wrap paneId="analytics" tab=tab}}
          <i class="icon icon-display"></i>
          <span>Analytics</span>
        {{/x-tab/nav-wrap}}
        {{#x-tab/nav-wrap paneId="settings" tab=tab}}
          <i class="icon icon-tools"></i>
          <span>Settings</span>
        {{/x-tab/nav-wrap}}
        {{#x-tab/nav-wrap paneId="upload" tab=tab}}
          <i class="icon icon-upload"></i>
          <span>Upload</span>
        {{/x-tab/nav-wrap}}
      {{/x-tab/navigation}}

      {{!-- tab content --}}
      <div class="content-wrap">
        {{#tab.pane elementId="home"}}
          <h1>Home</h1>
          <p>This is home content</p>
        {{/tab.pane}}

        {{#tab.pane elementId="archive"}}
          <h1>Archive</h1>
          <p>This is archive content</p>
        {{/tab.pane}}
        {{#tab.pane elementId="analytics"}}
          <h1>Analytics</h1>
          <p>This is analytics content</p>
        {{/tab.pane}}
        {{#tab.pane elementId="settings"}}
          <h1>Settings</h1>
          <p>This is settings content</p>
        {{/tab.pane}}
        {{#tab.pane elementId="upload"}}
          <h1>Upload</h1>
          <p>This is upload content</p>
        {{/tab.pane}}
      </div>

    {{/x-tab}}
    
```

## Tab styles

You can replace the **tab-style** property of the component to any of the following styles to get 
a different style variation of your tab component.

* tabs-style-bar (Default)
* tabs-style-iconbox
* tabs-style-underline
* tabs-style-linetriangle
* tabs-style-topline
* tabs-style-iconfall
* tabs-style-linemove
* tabs-style-line
* tabs-style-circle
* tabs-style-shape
* tabs-style-linebox
* tabs-style-flip
* tabs-style-circlefill
* tabs-style-tzoid
* tabs-style-fillup

## Customization - Theming

This tab component can be themed using CSS variables to suit the color of your choice. 

Kindly override these variables in your css file.

For example:

``` css
:root {
    --x-tab-primary: #2CC185; /* Active Color */
    --x-tab-secondary: #000;  
    --x-tab-border: #e7ecea; /* Border color */
}
```

### Custom class name
Use the **customClass** option to add your own custom classnames.
```hbs
  {{#x-tab customClass="myTabClass" as |tab|}}
```

Write your own definition for the classnames
```css
.myTabClass nav  {
    background: lightblue;
}
.myTabClass nav ul a {
    color: lightblue;
}
.myTabClass nav ul a:hover {
    color: steelblue;
}
.myTabClass nav ul li.tab-current {
    background: steelblue;
}
.myTabClass nav ul li {
    background: white;
    margin: 4px 2px;
}

.myTabClass nav ul li.tab-current a {
    color: white;
}
```



## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
