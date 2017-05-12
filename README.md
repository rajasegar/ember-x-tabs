# ember-x-tabs

[![Build Status](https://travis-ci.org/rajasegar/ember-x-tabs.svg?branch=master)](https://travis-ci.org/rajasegar/ember-x-tabs) 
[![npm](https://img.shields.io/npm/dm/ember-x-tabs.svg)](https://www.npmjs.com/package/ember-x-tabs)  
[![npm version](http://img.shields.io/npm/v/ember-x-tabs.svg?style=flat)](https://npmjs.org/package/ember-x-tabs "View this project on npm")
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)


An Ember component addon for Tab component with various style options and theme customization.

Heavily inspired by this [Codrops article]:(https://tympanus.net/codrops/2014/09/02/tab-styles-inspiration/)

## Demo

[Demo](http://careless-poison.surge.sh/)

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

      {{#tab.pane title="Home" icon="home"}}
        <h1>Home</h1>
        <p>This is home content</p>
      {{/tab.pane}}

      {{#tab.pane title="Archive" icon="box"}}
        <h1>Archive</h1>
        <p>This is archive content</p>
      {{/tab.pane}}

      {{#tab.pane title="Analytics" icon="display"}}
        <h1>Analytics</h1>
        <p>This is analytics content</p>
      {{/tab.pane}}

      {{#tab.pane title="Settings" icon="tools"}}
        <h1>Settings</h1>
        <p>This is settings content</p>
      {{/tab.pane}}

      {{#tab.pane title="Upload" icon="upload"}}
        <h1>Upload</h1>
        <p>This is upload content</p>
      {{/tab.pane}}

    {{/x-tab}}
```

###  Iconbox style

``` hbs

    {{#x-tab  tab-style="tabs-style-iconbox" as |tab| }}

      {{#tab.pane title="Home" icon="home"}}
        <h1>Home</h1>
        <p>This is home content</p>
      {{/tab.pane}}

      {{#tab.pane title="Archive" icon="box"}}
        <h1>Archive</h1>
        <p>This is archive content</p>
      {{/tab.pane}}

      {{#tab.pane title="Analytics" icon="display"}}
        <h1>Analytics</h1>
        <p>This is analytics content</p>
      {{/tab.pane}}

      {{#tab.pane title="Settings" icon="tools"}}
        <h1>Settings</h1>
        <p>This is settings content</p>
      {{/tab.pane}}

      {{#tab.pane title="Upload" icon="upload"}}
        <h1>Upload</h1>
        <p>This is upload content</p>
      {{/tab.pane}}

    {{/x-tab}}
```

###  Underline style
``` hbs

    {{#x-tab  tab-style="tabs-style-underline" as |tab| }}

      {{#tab.pane title="Home" icon="home"}}
        <h1>Home</h1>
        <p>This is home content</p>
      {{/tab.pane}}

      {{#tab.pane title="Archive" icon="box"}}
        <h1>Archive</h1>
        <p>This is archive content</p>
      {{/tab.pane}}

      {{#tab.pane title="Analytics" icon="display"}}
        <h1>Analytics</h1>
        <p>This is analytics content</p>
      {{/tab.pane}}

      {{#tab.pane title="Settings" icon="tools"}}
        <h1>Settings</h1>
        <p>This is settings content</p>
      {{/tab.pane}}

      {{#tab.pane title="Upload" icon="upload"}}
        <h1>Upload</h1>
        <p>This is upload content</p>
      {{/tab.pane}}

    {{/x-tab}}
```

### Line-triangle style

``` hbs

    {{#x-tab  tab-style="tabs-style-linetriangle" as |tab| }}

      {{#tab.pane title="Home" }}
        <h1>Home</h1>
        <p>This is home content</p>
      {{/tab.pane}}

      {{#tab.pane title="Archive" }}
        <h1>Archive</h1>
        <p>This is archive content</p>
      {{/tab.pane}}

      {{#tab.pane title="Analytics" }}
        <h1>Analytics</h1>
        <p>This is analytics content</p>
      {{/tab.pane}}

      {{#tab.pane title="Settings" }}
        <h1>Settings</h1>
        <p>This is settings content</p>
      {{/tab.pane}}

      {{#tab.pane title="Upload" }}
        <h1>Upload</h1>
        <p>This is upload content</p>
      {{/tab.pane}}

    {{/x-tab}}
```

### Topline style
``` hbs

    {{#x-tab  tab-style="tabs-style-topline" as |tab| }}

      {{#tab.pane title="Home" icon="home"}}
        <h1>Home</h1>
        <p>This is home content</p>
      {{/tab.pane}}

      {{#tab.pane title="Archive" icon="box"}}
        <h1>Archive</h1>
        <p>This is archive content</p>
      {{/tab.pane}}

      {{#tab.pane title="Analytics" icon="display"}}
        <h1>Analytics</h1>
        <p>This is analytics content</p>
      {{/tab.pane}}

      {{#tab.pane title="Settings" icon="tools"}}
        <h1>Settings</h1>
        <p>This is settings content</p>
      {{/tab.pane}}

      {{#tab.pane title="Upload" icon="upload"}}
        <h1>Upload</h1>
        <p>This is upload content</p>
      {{/tab.pane}}

    {{/x-tab}}
```

### Iconfall style
``` hbs
    {{#x-tab  tab-style="tabs-style-iconfall" as |tab| }}

      {{#tab.pane title="Home" icon="home"}}
        <h1>Home</h1>
        <p>This is home content</p>
      {{/tab.pane}}

      {{#tab.pane title="Archive" icon="box"}}
        <h1>Archive</h1>
        <p>This is archive content</p>
      {{/tab.pane}}

      {{#tab.pane title="Analytics" icon="display"}}
        <h1>Analytics</h1>
        <p>This is analytics content</p>
      {{/tab.pane}}

      {{#tab.pane title="Settings" icon="tools"}}
        <h1>Settings</h1>
        <p>This is settings content</p>
      {{/tab.pane}}

      {{#tab.pane title="Upload" icon="upload"}}
        <h1>Upload</h1>
        <p>This is upload content</p>
      {{/tab.pane}}

    {{/x-tab}}
```

###  Linemove style
``` hbs
    {{#x-tab  tab-style="tabs-style-linemove" as |tab| }}

      {{#tab.pane title="Home" icon="home"}}
        <h1>Home</h1>
        <p>This is home content</p>
      {{/tab.pane}}

      {{#tab.pane title="Archive" icon="box"}}
        <h1>Archive</h1>
        <p>This is archive content</p>
      {{/tab.pane}}

      {{#tab.pane title="Analytics" icon="display"}}
        <h1>Analytics</h1>
        <p>This is analytics content</p>
      {{/tab.pane}}

      {{#tab.pane title="Settings" icon="tools"}}
        <h1>Settings</h1>
        <p>This is settings content</p>
      {{/tab.pane}}

      {{#tab.pane title="Upload" icon="upload"}}
        <h1>Upload</h1>
        <p>This is upload content</p>
      {{/tab.pane}}

    {{/x-tab}}
```

###  Line style
``` hbs
    {{#x-tab  tab-style="tabs-style-line" as |tab| }}

      {{#tab.pane title="Home" icon="home"}}
        <h1>Home</h1>
        <p>This is home content</p>
      {{/tab.pane}}

      {{#tab.pane title="Archive" icon="box"}}
        <h1>Archive</h1>
        <p>This is archive content</p>
      {{/tab.pane}}

      {{#tab.pane title="Analytics" icon="display"}}
        <h1>Analytics</h1>
        <p>This is analytics content</p>
      {{/tab.pane}}

      {{#tab.pane title="Settings" icon="tools"}}
        <h1>Settings</h1>
        <p>This is settings content</p>
      {{/tab.pane}}

      {{#tab.pane title="Upload" icon="upload"}}
        <h1>Upload</h1>
        <p>This is upload content</p>
      {{/tab.pane}}

    {{/x-tab}}
```

### Circle style
``` hbs

    {{#x-tab  tab-style="tabs-style-circle" as |tab| }}

      {{#tab.pane title="Home" icon="home"}}
        <h1>Home</h1>
        <p>This is home content</p>
      {{/tab.pane}}

      {{#tab.pane title="Archive" icon="box"}}
        <h1>Archive</h1>
        <p>This is archive content</p>
      {{/tab.pane}}

      {{#tab.pane title="Analytics" icon="display"}}
        <h1>Analytics</h1>
        <p>This is analytics content</p>
      {{/tab.pane}}

      {{#tab.pane title="Settings" icon="tools"}}
        <h1>Settings</h1>
        <p>This is settings content</p>
      {{/tab.pane}}

      {{#tab.pane title="Upload" icon="upload"}}
        <h1>Upload</h1>
        <p>This is upload content</p>
      {{/tab.pane}}

    {{/x-tab}}
```

### Shape style
``` hbs
    {{#x-tab  tab-style="tabs-style-shape" as |tab| }}

      {{#tab.pane title="Home" }}
        <h1>Home</h1>
        <p>This is home content</p>
      {{/tab.pane}}

      {{#tab.pane title="Archive" }}
        <h1>Archive</h1>
        <p>This is archive content</p>
      {{/tab.pane}}

      {{#tab.pane title="Analytics" }}
        <h1>Analytics</h1>
        <p>This is analytics content</p>
      {{/tab.pane}}

      {{#tab.pane title="Settings" }}
        <h1>Settings</h1>
        <p>This is settings content</p>
      {{/tab.pane}}

      {{#tab.pane title="Upload" }}
        <h1>Upload</h1>
        <p>This is upload content</p>
      {{/tab.pane}}

    {{/x-tab}}
```

### Linebox style
``` hbs

    {{#x-tab  tab-style="tabs-style-linebox" as |tab| }}

      {{#tab.pane title="Home" icon="home"}}
        <h1>Home</h1>
        <p>This is home content</p>
      {{/tab.pane}}

      {{#tab.pane title="Archive" icon="box"}}
        <h1>Archive</h1>
        <p>This is archive content</p>
      {{/tab.pane}}

      {{#tab.pane title="Analytics" icon="display"}}
        <h1>Analytics</h1>
        <p>This is analytics content</p>
      {{/tab.pane}}

      {{#tab.pane title="Settings" icon="tools"}}
        <h1>Settings</h1>
        <p>This is settings content</p>
      {{/tab.pane}}

      {{#tab.pane title="Upload" icon="upload"}}
        <h1>Upload</h1>
        <p>This is upload content</p>
      {{/tab.pane}}

    {{/x-tab}}
```

### Flip style
``` hbs

    {{#x-tab  tab-style="tabs-style-flip" as |tab| }}

      {{#tab.pane title="Home" icon="home"}}
        <h1>Home</h1>
        <p>This is home content</p>
      {{/tab.pane}}

      {{#tab.pane title="Archive" icon="box"}}
        <h1>Archive</h1>
        <p>This is archive content</p>
      {{/tab.pane}}

      {{#tab.pane title="Analytics" icon="display"}}
        <h1>Analytics</h1>
        <p>This is analytics content</p>
      {{/tab.pane}}

      {{#tab.pane title="Settings" icon="tools"}}
        <h1>Settings</h1>
        <p>This is settings content</p>
      {{/tab.pane}}

      {{#tab.pane title="Upload"}}
        <h1>Upload</h1>
        <p>This is upload content</p>
      {{/tab.pane}}

    {{/x-tab}}
``` 


### Circle-fill style

``` hbs

    {{#x-tab  tab-style="tabs-style-circlefill" as |tab| }}

      {{#tab.pane title="Home" icon="home"}}
        <h1>Home</h1>
        <p>This is home content</p>
      {{/tab.pane}}

      {{#tab.pane title="Archive" icon="box"}}
        <h1>Archive</h1>
        <p>This is archive content</p>
      {{/tab.pane}}

      {{#tab.pane title="Analytics" icon="display"}}
        <h1>Analytics</h1>
        <p>This is analytics content</p>
      {{/tab.pane}}

      {{#tab.pane title="Settings" icon="tools"}}
        <h1>Settings</h1>
        <p>This is settings content</p>
      {{/tab.pane}}

      {{#tab.pane title="Upload" icon="upload"}}
        <h1>Upload</h1>
        <p>This is upload content</p>
      {{/tab.pane}}

    {{/x-tab}}
```

### Tzoid style
``` hbs

    {{#x-tab  tab-style="tabs-style-tzoid" as |tab| }}

      {{#tab.pane title="Home" icon="home"}}
        <h1>Home</h1>
        <p>This is home content</p>
      {{/tab.pane}}

      {{#tab.pane title="Archive" icon="box"}}
        <h1>Archive</h1>
        <p>This is archive content</p>
      {{/tab.pane}}

      {{#tab.pane title="Analytics" icon="display"}}
        <h1>Analytics</h1>
        <p>This is analytics content</p>
      {{/tab.pane}}

      {{#tab.pane title="Settings" icon="tools"}}
        <h1>Settings</h1>
        <p>This is settings content</p>
      {{/tab.pane}}

      {{#tab.pane title="Upload" icon="upload"}}
        <h1>Upload</h1>
        <p>This is upload content</p>
      {{/tab.pane}}

    {{/x-tab}}
    
```


###  Fillup style
``` hbs

    {{#x-tab  tab-style="tabs-style-fillup" as |tab| }}

      {{#tab.pane title="Home" icon="home"}}
        <h1>Home</h1>
        <p>This is home content</p>
      {{/tab.pane}}

      {{#tab.pane title="Archive" icon="box"}}
        <h1>Archive</h1>
        <p>This is archive content</p>
      {{/tab.pane}}

      {{#tab.pane title="Analytics" icon="display"}}
        <h1>Analytics</h1>
        <p>This is analytics content</p>
      {{/tab.pane}}

      {{#tab.pane title="Settings" icon="tools"}}
        <h1>Settings</h1>
        <p>This is settings content</p>
      {{/tab.pane}}

      {{#tab.pane title="Upload" icon="upload"}}
        <h1>Upload</h1>
        <p>This is upload content</p>
      {{/tab.pane}}

    {{/x-tab}}
```


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
