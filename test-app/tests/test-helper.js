import Application from "test-app/app";
import config from "test-app/config/environment";
import { setApplication } from "@ember/test-helpers";
import { start } from "ember-qunit";

import { useNativeEvents } from "ember-cli-page-object/extend";

useNativeEvents();

setApplication(Application.create(config.APP));

start();
