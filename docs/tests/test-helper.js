import Application from "docs/app";
import config from "docs/config/environment";
import { setApplication } from "@ember/test-helpers";
import { start } from "ember-qunit";

import { useNativeEvents } from "ember-cli-page-object/extend";

useNativeEvents();

setApplication(Application.create(config.APP));

start();
