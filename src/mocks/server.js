import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import { contacts } from "./data.js";

const baseApiUrl =
  "https://688247fb66a7eb81224e18ff.mockapi.io/fihrist/api/contact";

const handlers = [
  http.get(`${baseApiUrl}/:id`, ({ params }) => {
    const { id } = params;
    const user = contacts.find((item) => item.id == id);
    return HttpResponse.json(user);
  }),

  http.get(baseApiUrl, () => {
    return HttpResponse.json(contacts);
  }),

  http.delete(`${baseApiUrl}/:id`, ({ params }) => {
    const { id } = params;
    const index = contacts.findIndex((item) => item.id == id);
    if (index > -1) {
      contacts.splice(index, 1); // Global diziden sil
    }
    return HttpResponse.json({ success: true });
  }),

  http.post(baseApiUrl, async ({ request }) => {
    const info = await request.json();
    const newContact = {
      ...info,
      id: "11000",
    };
    contacts.push(newContact);
    return HttpResponse.json(newContact);
  }),
];

export const server = setupServer(...handlers);
