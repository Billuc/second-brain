import "reflect-metadata";

import { container } from "tsyringe";
import { Plugin } from "vue";

import Database from "@/data/database/database";
import { EventService } from "@/data/services/eventService";
import { EventTagService } from "@/data/services/eventTagService";
import { JournalService } from "@/data/services/journalService";
import { ListElementService } from "@/data/services/listElementService";
import { ListService } from "@/data/services/listService";
import { NoteService } from "@/data/services/noteService";
import { NoteTagService } from "@/data/services/noteTagService";

const containerPlugin: Plugin = (app) => {
  const myContainer = container.createChildContainer();

  myContainer.registerSingleton(Database);
  myContainer.registerSingleton(JournalService);
  myContainer.registerSingleton(ListService);
  myContainer.registerSingleton(ListElementService);
  myContainer.registerSingleton(EventService);
  myContainer.registerSingleton(EventTagService);
  myContainer.registerSingleton(NoteService);
  myContainer.registerSingleton(NoteTagService);

  app.provide("container", myContainer);
  return app;
};
export default containerPlugin;
