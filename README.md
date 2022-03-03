# ember-x-tabs

[![Build Status](https://travis-ci.org/rajasegar/ember-x-tabs.svg?branch=master)](https://travis-ci.org/rajasegar/ember-x-tabs) 
![Build and Deploy](https://github.com/rajasegar/ember-x-tabs/workflows/Build%20and%20Deploy/badge.svg)
[![npm](https://img.shields.io/npm/dm/ember-x-tabs.svg)](https://www.npmjs.com/package/ember-x-tabs)
[![npm version](http://img.shields.io/npm/v/ember-x-tabs.svg?style=flat)](https://npmjs.org/package/ember-x-tabs "View this project on npm")
[![EmberObserver](http://emberobserver.com/badges/ember-x-tabs.svg?branch=master)](http://emberobserver.com/addons/ember-x-tabs)


An Ember addon for Tab component with various style options and theme customization.

Heavily inspired by this [Codrops article](https://tympanus.net/codrops/2014/09/02/tab-styles-inspiration/)

## Demo

[Demo](https://rajasegar.github.io/ember-x-tabs/)

## Installation

* `ember install ember-x-tabs`

## Features
* Declarative
* 14+ Styles to choose from
* Fully composable
* Customizable

## Usage

Example markup:

### Bar style (x-tab)

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
        {{#tab.pane paneId="home"}}
          <h1>Home</h1>
          <p>This is home content</p>
        {{/tab.pane}}

        {{#tab.pane paneId="archive"}}
          <h1>Archive</h1>
          <p>This is archive content</p>
        {{/tab.pane}}
        {{#tab.pane paneId="analytics"}}
          <h1>Analytics</h1>
          <p>This is analytics content</p>
        {{/tab.pane}}
        {{#tab.pane paneId="settings"}}
          <h1>Settings</h1>
          <p>This is settings content</p>
        {{/tab.pane}}
        {{#tab.pane paneId="upload"}}
          <h1>Upload</h1>
          <p>This is upload content</p>
        {{/tab.pane}}
      </div>

    {{/x-tab}}
    
```

### Bar style (x-tabs)

A fully contextual version of the tab component is provided under the name x-tabs 

```hbs
{{#x-tabs tab-style=tabStyle as | xt | }}

    {{!-- tab content --}}
      {{#xt.tabs as | tabs |}}

        {{#tabs.tab name="home"}}
          <i class="icon icon-home"></i>
          <span>Home</span>
        {{/tabs.tab}}

        {{#tabs.tab name="archive"}}
          <i class="icon icon-box"></i>
          <span>Archive</span>
        {{/tabs.tab}}

        {{#tabs.tab name="analytics"}}
          <i class="icon icon-display"></i>
          <span>Analytics</span>
        {{/tabs.tab}}

        {{#tabs.tab name="settings"}}
          <i class="icon icon-tools"></i>
          <span>Settings</span>
        {{/tabs.tab}}

        {{#tabs.tab name="upload"}}
          <i class="icon icon-upload"></i>
          <span>Upload</span>
        {{/tabs.tab}}

      {{/xt.tabs}}
    
      {{!-- tab content --}}
      {{#xt.panes as | panes |}}

        {{#panes.pane name="home"}}
          <h1>Home</h1>
          <p>This is home content</p>
        {{/panes.pane}}

        {{#panes.pane name="archive"}}
          <h1>Archive</h1>
          <p>This is archive content</p>
        {{/panes.pane}}

        {{#panes.pane name="analytics"}}
          <h1>Analytics</h1>
          <p>This is analytics content</p>
        {{/panes.pane}}

        {{#panes.pane name="settings"}}
          <h1>Settings</h1>
          <p>This is settings content</p>
        {{/panes.pane}}

        {{#panes.pane name="upload"}}
          <h1>Upload</h1>
          <p>This is upload content</p>
        {{/panes.pane}}

      {{/xt.panes}}
    
    {{/x-tabs}}
    
```

x-tabs can also be used as a page-control, that is a control that has several tabs each with an
associated data object. There is only one dataPane and as the tabs are selected, the tabs data is
yielded to the dataPane

```
    {{#x-tabs activeName="archive" tab-style="tabs-style-topline" as | xt | }}
  
      {{#xt.tabs as | tabs |}}
        {{#tabs.tab name="home" data=(hash name="Home data")}}
          <i class="icon icon-home"></i>
          <span>Home</span>
        {{/tabs.tab}}
        {{#tabs.tab name="archive" data=(hash name="Archive Data")}}
          <i class="icon icon-box"></i>
          <span>Archive</span>
        {{/tabs.tab}}
        {{#tabs.tab name="analytics" data=(hash name="Analytics Data")}}
          <i class="icon icon-display"></i>
          <span>Analytics</span>
        {{/tabs.tab}}
        {{#tabs.tab name="settings" data=(hash name="Settings Data")}}
          <i class="icon icon-tools"></i>
          <span>Settings</span>
        {{/tabs.tab}}
        {{#tabs.tab name="upload" data=(hash name="Upload Data")}}
          <i class="icon icon-upload"></i>
          <span>Upload</span>
        {{/tabs.tab}}
  
      {{/xt.tabs}}
  
      {{#xt.dataPane as | pane |}}
        <h1>Page Control</h1>
        <p>Data: {{pane.data.name}}</p>
      {{/xt.dataPane}}
  
    {{/x-tabs}}
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
  --x-tab-active: #2CC185;

  --x-tab-color1: #334455;
  --x-tab-color2: #74777b;
  --x-tab-color3: #4a4a4b;
  --x-tab-color4: #000;

  /* Background colors */
  --x-tab-bg1: #f7f7f7;
  --x-tab-bg2: #f0f0f0;
  --x-tab-bg3: #fff;
  --x-tab-bg4: #bdc2c9;
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


## Configuring

Add a configuration for ember-x-tabs to include only the themes that you will use.

```
ENV['ember-x-tabs'] = {
  includedThemes: ['bar', 'circle', 'flip'],
  excludedThemes: ['iconbox'],
  excludeBaseStyles: false, // defaults to false
  defaultTheme: 'bar',    // defaults to 'bar'
};
```

To exclude or not include a theme, means that it's css styles will not be bundled with your application, thus not polluting your app.

    Note: including a blank array e.g. includeThemes: [] will not include any themes, leaving you to define your own theme styles. See the vendor/ember-x-tabs/themes directory for reference.

    Note: you may also want to set excludeBaseStyles: true so that this addon doesn't include the styles used by all the themes.


A big Thanks to Ilya Radchenko for making this configuration possible to have a small memory footprint of css in your app when you are using the addon.

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` 
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
